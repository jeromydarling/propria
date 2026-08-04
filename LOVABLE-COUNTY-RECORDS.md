## Propria — Public Records Integration for CLT Property Data

### Context
CLTs need property assessment values, deed recordings, mortgage data, and tax records for every property they steward. Today this means manual lookups on county websites. This integration brings that data directly into Propria — auto-populated property cards, assessment alerts, lien detection, and resale formula inputs from authoritative public sources.

Read `/CLAUDE.md` and `/LOVABLE.md` first. Follow all architecture rules.

### Integration Priority

**Phase 1 — Free public data (implement first):**

| Source | Data | API | Cost |
|--------|------|-----|------|
| FHFA House Price Index | Census-tract price indexes for resale formulas | CSV download, quarterly | Free |
| HUD User Datasets API | Income limits, fair market rents for applicant qualification | REST API (register at huduser.gov) | Free |
| HUD Housing Counselor API | HUD-approved counseling agencies | REST API | Free |
| HMDA (CFPB) | Loan origination data by census tract | REST API | Free |
| Freddie Mac CLT Database | National CLT directory | Web database | Free |
| Minnesota Geospatial Commons | Parcel boundaries (ArcGIS Hub REST) | ArcGIS Feature Layer | Free |
| Census TIGER/Line | Census tract boundaries for HUD reporting | REST API + Shapefiles | Free |
| HUD eGIS | Qualified census tracts, opportunity zones | ArcGIS REST API | Free |
| NHPD | Subsidized housing inventory in CLT neighborhoods | Excel download | Free |

**Phase 2 — Paid APIs (single vendor for comprehensive data):**

| Source | Data | Cost | Why |
|--------|------|------|-----|
| ATTOM Data | Assessor records, deed recordings, sales history, AVM, mortgage data for 158M+ properties across 3,000+ counties | ~$95/mo starter | Single integration covers assessor + recorder + valuation. 500M+ deed transactions. |
| Regrid | Parcel boundaries with zoning data | ~$300/mo developer | Best parcel API. 100% U.S. coverage. Zoning data supports Land Pipeline. |
| RentCast | Property records, valuations, rent estimates | Free tier (50 calls/mo) | Free for prototyping. 140M+ properties. |

**Phase 3 — Specialty (as needed):**

| Source | Data | Use Case |
|--------|------|----------|
| PropertyTitles.com | Lien search, recorded documents | Detect unauthorized liens on CLT properties |
| Simplifile | Electronic deed recording | Submit ground lease amendments electronically |
| HouseCanary | Best-in-class AVM | Most accurate valuation for resale formulas |

### What To Build

**1. Property Data Service (Edge Function)**

Create `propria-property-sync` edge function that enriches property records:

```typescript
// Called when: property is added, Magic Import runs, or manually triggered
// Input: address + parcel_id (optional)
// Output: enriched property record

async function enrichProperty(address: string, parcelId?: string) {
  const results = {}

  // Phase 1: Free sources
  results.hpi = await fetchFHFAIndex(censusTract)      // house price index
  results.hudLimits = await fetchHUDIncomeLimits(fips)  // income limits
  results.qct = await fetchQualifiedCensusTract(lat, lng) // QCT status

  // Phase 2: ATTOM (when configured)
  if (tenant.attom_api_key) {
    results.assessment = await attom.getAssessment(address)
    results.deed = await attom.getDeedHistory(address)
    results.avm = await attom.getAVM(address)
    results.mortgage = await attom.getMortgageHistory(address)
  }

  // Phase 2: Regrid (when configured)
  if (tenant.regrid_api_key) {
    results.parcel = await regrid.getParcel(address)
    results.zoning = await regrid.getZoning(parcelId)
  }

  return results
}
```

**2. Enriched Property Card (CLT App — Assets screen)**

Update each property card in the Assets screen to show public records data alongside CLT data:

```
┌─────────────────────────────────────────────┐
│ 14 Oak Street                               │
│ Maria Torres · Homeowner since 2020         │
│─────────────────────────────────────────────│
│ CLT DATA              │ PUBLIC RECORDS      │
│ Purchase: $187,000    │ Assessed: $195,400  │
│ Lease fee: $48/mo     │ Tax: $2,840/yr      │
│ Equity: $14,200       │ AVM: $227,000       │
│ Formula: 30% fixed    │ Last sale: $187,000  │
│                       │ Zoning: R-1          │
│─────────────────────────────────────────────│
│ ⚠ Assessment increased 8% — may affect     │
│   property tax. Review with homeowner.      │
│─────────────────────────────────────────────│
│ Last synced: Apr 2, 2026    [Refresh →]     │
└─────────────────────────────────────────────┘
```

The left column is CLT data (from Propria). The right column is public records (from APIs). When there's a notable discrepancy or change, show an NRI alert banner.

**3. Assessment Monitoring (CROS Signal)**

Add a cron job (`propria-assessment-monitor`) that runs monthly:
- For each property, compare current assessed value to last known
- If assessment changed >5%, emit a signal:
  - `assessment_increased` → `custodia` (stewardship — may affect homeowner taxes)
  - `assessment_decreased` → `custodia` (could indicate property condition issues)
- If a new lien is detected, emit `lien_detected` → `reconciliatio`
- If a deed is recorded that the CLT didn't initiate, emit `unauthorized_deed` → `reconciliatio`

Add to `/src/cros/signalMap.ts`:
```typescript
assessment_increased: 'custodia',
assessment_decreased: 'custodia',
lien_detected: 'reconciliatio',
unauthorized_deed: 'reconciliatio',
tax_delinquent: 'reconciliatio',
```

Nudge example:
```
Custodia: 14 Oak Street assessment increased 8% ($195,400 → $211,000).
Maria Torres's property taxes may increase by ~$180/year. Consider
discussing at her next check-in.
→ Open property record
```

**4. Homeowner Portal — "My Property" enrichment**

In the Homeowner Portal's "My Home" screen, show public records alongside CLT data:

```
YOUR HOME — PUBLIC RECORDS
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ Assessed     │ │ Property Tax │ │ Market Value │
│ $195,400     │ │ $2,840/yr    │ │ ≈$227,000   │
│ County 2026  │ │ Current      │ │ Estimate     │
└──────────────┘ └──────────────┘ └──────────────┘

Your CLT resale price is based on the formula in your ground lease,
not the market value. Your maximum resale price today: $201,800.
```

Important: frame this carefully. Homeowners seeing a $227,000 market value next to a $201,800 formula price need context about why the numbers differ.

**5. Resale Formula Enhancement**

Use FHFA House Price Index data to support appraisal-based and CPI-indexed resale formulas:

```typescript
// For appraisal-based formulas:
const hpi = await getFHFAIndex(censusTract, purchaseDate, today)
const appreciationPercent = hpi.percentChange
const formulaAppreciation = appreciationPercent * ownerSharePercent

// For CPI-indexed formulas:
const cpi = await getCPIIndex(region, purchaseDate, today)
```

This replaces manual appraisal lookups with data-driven calculations.

**6. Land Pipeline Enhancement**

For the Land Pipeline (from `LOVABLE-YIMBY.md`), enrich each parcel with:
- Current zoning (from Regrid)
- Assessed value (from ATTOM or county)
- Parcel boundaries (from Regrid/ArcGIS)
- Qualified Census Tract status (from HUD eGIS)
- Income limits for the area (from HUD User API)

This helps CLTs evaluate acquisition targets with real data instead of manual research.

### Database

```sql
-- Public records cache per property
property_public_records (
  id uuid primary key default gen_random_uuid(),
  property_id uuid references properties(id),
  source text not null, -- attom, regrid, fhfa, hud, county
  data_type text not null, -- assessment, deed, mortgage, avm, parcel, zoning, tax
  data jsonb not null,
  fetched_at timestamptz default now(),
  expires_at timestamptz, -- cache expiry
  created_at timestamptz default now()
)

-- API credentials per tenant
tenant_api_keys (
  id uuid primary key default gen_random_uuid(),
  clt_id uuid references clts(id),
  provider text not null, -- attom, regrid, rentcast
  api_key_encrypted text not null,
  enabled boolean default true,
  created_at timestamptz default now()
)

-- Assessment change history
assessment_history (
  id uuid primary key default gen_random_uuid(),
  property_id uuid references properties(id),
  assessed_value numeric not null,
  tax_amount numeric,
  assessment_year int,
  source text,
  detected_at timestamptz default now()
)
```

### For the Rondo CLT Demo

Seed demo data for the 5 demo properties using real Ramsey County data:

```json
{
  "14_oak_street": {
    "assessed_value": 195400,
    "tax_amount": 2840,
    "avm_estimate": 227000,
    "zoning": "R-1",
    "parcel_id": "demo-parcel-001",
    "last_sale_price": 187000,
    "last_sale_date": "2020-03-15",
    "census_tract": "27123034200",
    "qct_status": true
  }
}
```

### Architecture Rules
- Cache all API responses — never hit a paid API twice for the same data within the cache window (default: 30 days for assessments, 7 days for AVM, 90 days for deed history)
- Store API keys per tenant in encrypted column — CLTs bring their own ATTOM/Regrid keys if they want paid data
- Free public data (FHFA, HUD, Census) is fetched platform-wide, not per-tenant
- Assessment monitoring runs monthly, not daily — property records don't change that often
- Always show "Last synced" timestamp so staff knows how fresh the data is
- In the Homeowner Portal, always explain why market value differs from formula price

### What NOT To Do
- Do NOT scrape county websites — use APIs or accept manual entry for counties without APIs
- Do NOT show raw AVM/market values to homeowners without CLT context explaining the formula
- Do NOT store full Social Security numbers or credit data from any source
- Do NOT auto-update CLT property records from public data — always show discrepancies for staff review
- Do NOT make ATTOM/Regrid mandatory — the platform works with free data sources; paid APIs are optional per-tenant upgrades
