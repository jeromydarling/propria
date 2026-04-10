## Propria — YIMBY & Land Advocacy Integration for CLT Staff App

### Context
Propria is a CLT (Community Land Trust) operating system. The frontend is fully built. You're adding a new feature module that helps CLT administrators capitalize on YIMBY (Yes In My Backyard) zoning wins, track land acquisition opportunities, equip homeowners to advocate, and feed YIMBY/housing policy content into the existing SEO content engine.

Read `/CLAUDE.md` and `/LOVABLE.md` first. Follow all brand and architecture rules described there.

### What To Build

**1. Land Acquisition Pipeline (new CLT App screen)**

Add a new screen called "Land" accessible from the CLT App desktop sidebar under a new section called "Growth" (between Community and Account). This is a kanban-style pipeline for tracking parcels, similar to how the existing Pipeline screen tracks applicants.

Stages: `Identified → Zoning Review → Feasibility → Funding → Acquisition → Development → Complete`

Each parcel card shows:
- Address + parcel ID
- Current zoning + proposed/approved zoning (if changed)
- Acreage / estimated units
- Source (how it was found — manual, YIMBY alert, city records, CCHD referral)
- Estimated acquisition cost
- Funding sources (tags: CCHD, HUD, State, Municipal, Private)
- NRI direction tag (always `itiner` — this is growth/journey)
- Status pill (Available, Under Review, LOI Submitted, Under Contract, Acquired)

Include an "Add parcel" modal with fields for all the above. When a parcel advances to "Acquisition," emit a signal (`parcel_acquired` → `itiner` direction) so the CROS nudge engine can surface it.

Database table:
```sql
land_pipeline (
  id uuid primary key default gen_random_uuid(),
  clt_id uuid references clts(id),
  address text not null,
  parcel_id text,
  current_zoning text,
  new_zoning text,
  acreage numeric,
  estimated_units int,
  source text, -- manual, yimby_alert, city_records, cchd_referral
  estimated_cost numeric,
  funding_sources text[],
  stage text default 'identified', -- identified, zoning_review, feasibility, funding, acquisition, development, complete
  status text default 'available',
  notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
)
```

**2. Zoning & Policy Tracker (tab inside the Land screen)**

Add a second tab on the Land screen: "Parcels" (default) and "Policy Tracker."

The Policy Tracker shows:
- Local zoning changes relevant to the CLT's city/state (demo data for Saint Paul, MN)
- Federal policy status (YIMBY Act progress)
- State-level housing legislation

Each policy item has: title, jurisdiction (City/State/Federal), status pill (Introduced/Passed/In Effect/Stalled), date, and a one-line impact summary for the CLT.

Demo data:
```json
[
  {"title": "R-4 Upzoning — University Ave Corridor", "jurisdiction": "City of Saint Paul", "status": "Passed", "date": "Mar 2026", "impact": "12 new parcels eligible for multi-family CLT development along University Ave."},
  {"title": "YIMBY Act (HR 3507)", "jurisdiction": "Federal", "status": "In Committee", "date": "Feb 2026", "impact": "Would require HUD grantees to report on zoning barriers. CLTs could use data to advocate for land access."},
  {"title": "MN Affordable Housing Tax Credit Expansion", "jurisdiction": "State of Minnesota", "status": "Passed", "date": "Jan 2026", "impact": "Expanded LIHTC allocation benefits CLTs partnering with developers. $12M additional funding."},
  {"title": "ADU Legalization — Saint Paul", "jurisdiction": "City of Saint Paul", "status": "In Effect", "date": "2025", "impact": "CLTs can now build accessory dwelling units on existing properties. Potential for 15+ new affordable units."},
  {"title": "Community First Land Policy", "jurisdiction": "State of Minnesota", "status": "Introduced", "date": "Apr 2026", "impact": "Would give CLTs right of first refusal on tax-forfeited properties in their service area."}
]
```

**3. Homeowner Advocacy Toolkit (inside Homeowner Portal)**

Add a new screen to the Homeowner Portal called "Advocate" — accessible from the bottom nav (replace the Account icon position, move Account into a top-right avatar tap). This gives homeowners tools to support their CLT at city council and public meetings.

The screen shows:
- **Upcoming meetings** — city council, planning commission, zoning board meetings where housing is on the agenda. Each with date, time, location, agenda item, and a "I'll attend" RSVP button.
- **Your story** — a pre-filled advocacy card: "I'm [Maria Torres]. I bought my home at [14 Oak Street] through [Rondo CLT] for [$187,000]. I've built [$14,200] in equity over [6.2 years]. My family has stability because of the CLT model." With an "Edit my story" button and a "Copy to clipboard" button.
- **Talking points** — 3-4 reusable talking points about why CLTs work, pulled from the CLT's data: number of families served, zero foreclosure rate, average equity built, lease collection rate.
- **Recent policy wins** — a feed from the Policy Tracker showing what's happened locally.

This data comes from the homeowner's own record in Supabase — it's automatically personalized.

**4. YIMBY/Housing Policy Content in Praeco SEO Engine**

The CLT App's Praeco screen has a "Website" tab with an NRI site assistant. Extend this to include a **content generation category** for YIMBY and housing policy topics.

In the existing NRI Site Assistant modal (`nriSite` sheet), add a new section of quick prompts:
```
"Write a post about [recent zoning win] and what it means for our CLT"
"Explain the YIMBY Act in plain language for our homeowners"
"Draft a community land trust explainer for people who've never heard of CLTs"
"Write about why affordable housing and new development aren't opposites"
"Create a post celebrating [number] families in permanently affordable homes"
```

Also, in the Gardener Console Zone III (Praeco), add a new content category alongside "Catholic Land Movement" and "Community Land Trust News":

**"YIMBY & Housing Policy"** — with these seed items:
```json
[
  {"source": "Shelterforce", "date": "Mar 2026", "headline": "Why YIMBY and CLTs Need Each Other", "excerpt": "The supply-side housing movement and the community land trust movement are natural allies, not rivals..."},
  {"source": "Next City", "date": "Mar 2026", "headline": "Cities That Upzoned Are Seeing CLTs Grow Faster", "excerpt": "In Minneapolis, Portland, and Austin, zoning reforms have created new opportunities for community land trusts..."},
  {"source": "YIMBY Action", "date": "Feb 2026", "headline": "The YIMBY Act: What It Means for Affordable Housing Organizations", "excerpt": "The bipartisan legislation would require HUD grantees to identify and report on exclusionary zoning..."},
  {"source": "Urban Institute", "date": "Feb 2026", "headline": "Shared Equity + Supply: A Framework for Permanent Affordability at Scale", "excerpt": "New research suggests that combining YIMBY-style supply increases with CLT stewardship produces the best outcomes..."}
]
```

**5. CROS Signal Integration**

Add these new signal types to the signal map (`/src/cros/signalMap.ts`):

```typescript
// Land/Growth signals → Itiner direction
parcel_identified: 'itiner',
zoning_change_detected: 'itiner',
parcel_acquired: 'itiner',
funding_secured: 'itiner',
development_started: 'itiner',

// Advocacy signals → Cura direction
homeowner_rsvp_meeting: 'cura',
advocacy_story_shared: 'cura',
policy_win_local: 'cura',
```

Add a nudge evaluation to `useCompassSessionEngine.ts`:
```typescript
// Evaluation: Zoning opportunity
// When a local zoning change creates new CLT-eligible parcels
buildNudge(
  'zoning_opportunity', 'itiner', 'action', 0.7,
  'Saint Paul approved R-4 upzoning on University Ave — 12 parcels now eligible for multi-family CLT development. Review before market-rate developers move.',
  { label: 'View land pipeline', screen: 'land' },
  'policy', 'policy-001'
)
```

### Database Tables

```sql
-- Land acquisition pipeline
land_pipeline (id, clt_id, address, parcel_id, current_zoning, new_zoning,
  acreage, estimated_units, source, estimated_cost, funding_sources,
  stage, status, notes, created_at, updated_at)

-- Policy tracker
policy_items (id, clt_id, title, jurisdiction, status, effective_date,
  impact_summary, source_url, created_at)

-- Advocacy RSVPs
advocacy_rsvps (id, user_id, meeting_title, meeting_date, location,
  agenda_item, status, created_at)
```

### Architecture Rules
- Follow all rules in `/CLAUDE.md` — especially: signals not polling, role-scoped queries, silent failure, human-centric language
- The Land Pipeline is staff-only (CLT App). The Advocacy Toolkit is homeowner-facing (Homeowner Portal).
- Policy Tracker items can be manually added by staff OR auto-populated by a future edge function that scrapes city council agendas
- The YIMBY content seeds in Gardener Praeco follow the same pattern as the existing "Catholic Land Movement" category — use the exact same card layout and "Synthesize essay" button pattern
- NRI should treat land acquisition as an `itiner` (journey) activity and advocacy as a `cura` (care/community) activity

### What NOT To Do
- Do NOT modify any existing screens — only ADD new ones
- Do NOT change the existing CROS hooks — only ADD evaluations and signal types
- Do NOT create a separate "YIMBY" app or persona — this lives inside the existing CLT App and Homeowner Portal
- Do NOT build any scraping/crawling — just the UI and data model. Scraping comes later as an edge function.
