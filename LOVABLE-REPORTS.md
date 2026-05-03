## Propria — NRI Report Builder

### Context
Propria is a CLT (Community Land Trust) operating system with a fully-built frontend and a CROS intelligence layer that tracks every signal, contact, payment, maintenance request, and community event. This feature uses that data to **generate written narrative reports** — the kind funders, board members, and HUD reviewers actually want to read — from live Supabase data.

This is the anchor AI feature of Propria. CLT staff currently spend 80-120 hours/year on manual reporting. This reduces it to 8-12 hours (review and approve).

Read `/CLAUDE.md` and `/LOVABLE.md` first. Follow all brand and architecture rules.

### What To Build

**1. Report Builder Screen (new CLT App screen)**

Add a new screen called "Reports" accessible from the CLT App desktop sidebar under the "Community" section (after Governance, before Finances). Also accessible from the hamburger menu on mobile.

The screen has two areas:
- **Generate Report** — cards for each report type with "Generate" button
- **Report History** — list of previously generated reports with status, date, and download

Report type cards (each is a clickable card):
```
┌─────────────────────────────────────────┐
│ 📊 Quarterly Portfolio Report           │
│ Board-ready summary of all CLT activity │
│ Last generated: Q1 2026 · Mar 31        │
│                          [Generate Q2 →]│
└─────────────────────────────────────────┘
```

**Report Types:**

| Type | Audience | Frequency | What It Covers |
|------|----------|-----------|----------------|
| Quarterly Portfolio Report | Board | Quarterly | Families served, collection rate, pipeline, resales, maintenance, community events, NRI signals summary |
| Annual Stewardship Summary | Per homeowner file | Annual | Contact history, lease compliance, home condition, life events, equity growth, maintenance, pastoral notes |
| Funder Narrative (CCHD) | CCHD/USCCB | Quarterly | Aligned to CCHD grant requirements: families impacted, poverty reduction outcomes, community development metrics |
| Funder Narrative (HUD) | HUD | Quarterly | Aligned to HUD-9902 categories but as written narrative, not form fields |
| Funder Narrative (Custom) | Any funder | As needed | Staff specifies funder name and requirements, NRI generates to match |
| Board Packet | Board | Per meeting | Agenda, financial summary, portfolio health, action items, resale status, maintenance updates |
| Resale Summary | Closing file | Per resale | Full transaction narrative: formula calc, buyer match, inspection, closing timeline, fees |
| Compliance Certification | Per property | Annual | Lease compliance, inspection results, insurance verification, payment history, maintenance record |
| Community Impact Report | Public/marketing | Annual | Human-interest narrative for website, fundraising, public meetings |

**2. Report Generation Flow**

When staff clicks "Generate," show a modal:

```
┌────────────────────────────────────────────┐
│ Generate Quarterly Portfolio Report        │
│                                            │
│ PERIOD                                     │
│ [Q2 2026 (Apr–Jun)          ▼]             │
│                                            │
│ INCLUDE                                    │
│ ☑ Stewardship activity                     │
│ ☑ Financial summary                        │
│ ☑ Pipeline & applicants                    │
│ ☑ Maintenance & assets                     │
│ ☑ Community events                         │
│ ☑ NRI signals summary                      │
│ ☐ Individual homeowner details             │
│ ☐ Resale transaction detail                │
│                                            │
│ VOICE                                      │
│ ○ Formal (board/funder)                    │
│ ● Warm professional (default)              │
│ ○ Community-facing (public)                │
│                                            │
│ SPECIAL INSTRUCTIONS (optional)            │
│ [                                        ] │
│ e.g. "Emphasize the Walker payment plan    │
│ success story" or "Include YoY comparison" │
│                                            │
│ ┌─────────┐ ┌──────────────────────────┐   │
│ │ Cancel  │ │ ✦ Generate with NRI →    │   │
│ └─────────┘ └──────────────────────────┘   │
└────────────────────────────────────────────┘
```

After clicking "Generate with NRI":
1. Show a generation screen with the gold NRI pulse animation and status messages:
   - "Reading 47 homeowner records..."
   - "Analyzing 141 payment records..."
   - "Reviewing 18 NRI signals..."
   - "Summarizing 3 community events..."
   - "Writing narrative..."
2. After 3-5 seconds (simulated), show the generated report in an editable view

**3. Report Editor View**

After generation, show the report in a rich preview:

```
┌────────────────────────────────────────────┐
│ Quarterly Portfolio Report — Q2 2026       │
│ Rondo Community Land Trust                 │
│ Generated Apr 2, 2026 · NRI Draft          │
│                                            │
│ ┌──────────────────────────────────┐       │
│ │ ✦ NRI generated this report from │       │
│ │ 226 data points across 47        │       │
│ │ homeowner records. Review and     │       │
│ │ edit before exporting.            │       │
│ └──────────────────────────────────┘       │
│                                            │
│ [Editable narrative text area with the     │
│  full generated report, rendered in        │
│  Source Serif 4 at reading size]           │
│                                            │
│ ┌─────────┐ ┌──────────┐ ┌────────────┐   │
│ │ ✦ Regen │ │ Edit     │ │ Export PDF →│   │
│ └─────────┘ └──────────┘ └────────────┘   │
└────────────────────────────────────────────┘
```

The report text is editable — staff can modify any section before exporting. The "Regenerate" button re-runs the AI with original parameters. "Export PDF" generates a branded PDF with the Propria header, CLT name, and date.

**4. Annual Stewardship Summary (Per Homeowner)**

This is the highest-value single report. Add a "Generate stewardship report" button to the Stewardship screen in the CLT App (inside the existing profile view for each homeowner).

When clicked, NRI reads that homeowner's:
- All contact log entries for the year
- Ground lease payment history (on-time rate, any late payments)
- Maintenance requests and resolutions
- Life events logged
- Pastoral notes
- NRI signals (attention score history)
- Equity growth
- Inspection results

And generates a 1-2 page narrative like:

> **Annual Stewardship Summary — Maria Torres, 14 Oak Street**
> *Reporting period: April 2025 – March 2026*
>
> Maria Torres is in her sixth year of homeownership at 14 Oak Street, having purchased through Rondo CLT in March 2020 at $187,000. Her accumulated equity is approximately $14,200 based on the 30% fixed-rate appreciation formula plus $2,800 in approved kitchen improvements.
>
> **Lease Compliance:** All 12 monthly ground lease payments ($48/mo) were collected on time via autopay. Lease status: current. No compliance issues.
>
> **Contact History:** 4 contact attempts were made during this period — 2 with no response (March 2026), 1 successful phone call (January), and 1 home visit (November 2025). Maria became temporarily unresponsive in March, triggering a Cura signal. A door knock on April 8 re-established contact and revealed a temporary health concern, now resolved.
>
> **Home Condition:** Last inspection (February 2026) rated the property in good condition. One maintenance request was filed (bathroom faucet drip, reported December 2025, resolved December 22 by Ace Contracting).
>
> **Life Events:** Maria celebrated her 5-year homeownership milestone in March 2025. She mentioned possible interest in resale within 2-3 years to be closer to her daughter's school district. No urgency — flagged for future monitoring.
>
> **Pastoral Note:** Maria is a strong, independent homeowner who takes great pride in her home. The 5-year recognition letter was well received.
>
> **Stewardship Assessment:** Stable. The March disengagement was situational, not relational. Recommend maintaining quarterly contact cadence and monitoring resale interest.

**5. Edge Function: `propria-generate-report`**

```typescript
// Edge function structure
Deno.serve(async (req) => {
  const { report_type, clt_id, period, sections, voice, instructions, homeowner_id } = await req.json()

  // 1. Query all relevant data from Supabase based on report_type and period
  //    - homeowners, payments, signals, contacts, maintenance, events, applicants
  //    - For stewardship summary: filter to single homeowner_id

  // 2. Build structured data summary (never send raw PII to AI — summarize first)
  const dataSummary = buildDataSummary(report_type, queryResults)

  // 3. Build system prompt with:
  //    - Report type and structure expectations
  //    - CLT voice guidelines (warm professional, human-centric, stewardship language)
  //    - Section checklist from user selections
  //    - Special instructions
  //    - Data summary

  // 4. Call Lovable AI Gateway
  const narrative = await generateWithAI(systemPrompt, dataSummary)

  // 5. Store report in reports table
  await supabase.from('reports').insert({
    clt_id, report_type, period, generated_by: userId,
    content: narrative, status: 'draft', data_points_used: dataSummary.count
  })

  return new Response(JSON.stringify({ narrative, data_points: dataSummary.count }))
})
```

**Voice guidelines for the AI prompt** (from The Schola's NRI writing rules, adapted for CLTs):
- Use "families" not "accounts" or "units"
- Use "stewardship" not "management"
- Use "homeowner" not "client" or "tenant"
- Concrete details over abstract metrics: "Maria Torres, 14 Oak Street, 6 years" not "Homeowner #47"
- Include human context from pastoral notes when generating stewardship summaries
- Never use: "aggressive," "leverage," "optimize," "stakeholder," "touch base"
- Always use: "serve," "steward," "accompany," "support," "families"
- Reports should read like they were written by a thoughtful coordinator, not generated by software
- When something went wrong (missed payment, disengagement), frame it as resolved or in-progress, never as failure

**6. Database**

```sql
reports (
  id uuid primary key default gen_random_uuid(),
  clt_id uuid references clts(id),
  report_type text not null, -- quarterly_portfolio, stewardship_annual, funder_cchd, funder_hud, funder_custom, board_packet, resale_summary, compliance_cert, community_impact
  period text, -- 'Q2 2026', '2025-2026', etc.
  homeowner_id uuid references homeowners(id), -- null for CLT-wide reports
  funder_name text, -- for custom funder reports
  voice text default 'warm_professional', -- formal, warm_professional, community
  sections text[], -- which sections were included
  special_instructions text,
  content text not null, -- the generated narrative (editable)
  data_points_used int,
  status text default 'draft', -- draft, reviewed, exported, archived
  generated_by uuid references users(id),
  reviewed_by uuid references users(id),
  reviewed_at timestamptz,
  exported_at timestamptz,
  created_at timestamptz default now()
)
```

**7. CROS Signal Integration**

Add to `/src/cros/signalMap.ts`:
```typescript
report_generated: 'custodia',
report_exported: 'custodia',
stewardship_summary_generated: 'custodia',
compliance_cert_generated: 'custodia',
```

Add nudge evaluation to `useCompassSessionEngine.ts`:
```typescript
// Evaluation: Quarterly report due
buildNudge(
  'quarterly_report_due', 'custodia', 'action', 0.65,
  'Q2 ends this month. Generate your quarterly portfolio report while the data is fresh — 226 data points are ready.',
  { label: 'Generate report', screen: 'reports' },
  'report', 'q2-2026'
)

// Evaluation: Annual stewardship summaries due
buildNudge(
  'stewardship_summaries_due', 'custodia', 'awareness', 0.5,
  '47 annual stewardship summaries are due by June 30. NRI can generate all 47 from your existing data — review and approve each one.',
  { label: 'Start generating', screen: 'reports' },
  'report', 'annual-2026'
)
```

**8. Batch Generation**

For annual stewardship summaries, add a "Generate All" button that queues all 47 homeowner reports for generation. Show progress:

```
Generating stewardship summaries...
████████████░░░░░░░░ 23 of 47

✓ Maria Torres — 14 Oak Street
✓ James & Denise Walker — 88 Iglehart Ave
✓ Patricia & Leon Moore — 56 Thomas Ave
⏳ Roberto & Ana Diaz — 221 Minnehaha Ave
○ Samuel Okafor — 33 Charles Ave
...
```

Each generates individually (separate AI call per homeowner) so the narratives are specific, not templated. Staff reviews each one in a queue: "Approve / Edit / Regenerate / Skip."

### Marketing Value

Add this to the marketing site's "What Sets Propria Apart" feature grid:

```
NRI Report Builder
Relatio

One click generates board-ready quarterly reports, annual stewardship
summaries for every homeowner, funder narratives for CCHD and HUD,
and compliance certifications — all from your live data, written in
your CLT's voice. What used to take 80 hours per year now takes 8.
```

### Architecture Rules
- Reports are generated from **summarized data**, never raw PII sent to the AI
- The AI generates a **draft** — staff always reviews before exporting
- Pastoral notes are included in stewardship summaries but marked confidential in the prompt
- Reports are stored in Supabase and linked to the CLT/homeowner they cover
- Voice guidelines match The Schola's NRI writing rules adapted for CLT context
- Batch generation uses a queue, not parallel calls (rate limiting)
- PDF export uses the Propria brand header (forest green bar, "Propria." with terra dot, CLT name)

### What NOT To Do
- Do NOT generate reports from templates with blanks filled in — the AI writes the narrative from structured data
- Do NOT send raw contact logs or pastoral notes to the AI — summarize them first
- Do NOT auto-export or auto-send reports — staff must review and explicitly approve
- Do NOT change any existing screens — the report builder is a new screen
- Do NOT add report generation to the Homeowner Portal — this is staff-only
