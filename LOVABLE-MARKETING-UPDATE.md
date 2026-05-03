## Propria — Marketing Site Update: NRI Report Builder & Land Pipeline

### Context
Propria's marketing site is fully built at `/src/views/Marketing.tsx` with CSS at `/src/views/Marketing.css`. The site currently has: hero, credibility strip, Chesterton quote, CCHD section, platform modules, NRI intelligence section, "What Sets Propria Apart" feature grid, product showcase slider, demo gate, Grounded Solutions band, counselor network, pricing, and footer.

Two major new features need to be woven into the marketing narrative: the **NRI Report Builder** (the anchor AI feature) and the **Land Acquisition Pipeline** (YIMBY integration). These aren't add-ons — the Report Builder especially should be positioned as a primary reason to buy.

Read `/CLAUDE.md` for brand rules. Follow all existing design patterns exactly.

### What To Change

**1. Update the Hero Subtitle**

Current:
> "Propria is the operating system for community land trusts — built around the insight that your core product is a multi-decade stewardship relationship with each family you serve."

Change to:
> "The operating system for community land trusts. Stewardship intelligence that writes your quarterly reports, tracks every family relationship, and helps you grow — so you can spend your time with people, not paperwork."

The hero headline ("Property for the many, not the few.") stays exactly the same.

**2. Add "The Paperwork Problem" Section — BEFORE the Platform section**

Insert a new section between the CCHD band and the "The Platform" section. This is the emotional hook — it names the pain before showing the solution.

Design: cream background, standard section layout (eyebrow + title + body), with a two-column layout below. Left column is the problem statement, right column is 4 stat cards.

```
Eyebrow: The Problem
Title: CLTs run on love. And spreadsheets.
Body: Your stewardship coordinator spends 30-40% of their time on 
      reporting — assembling quarterly board packets from scattered 
      notes, writing funder narratives from memory, documenting 47 
      annual stewardship reviews by hand. The same person who should 
      be knocking on Maria Torres's door is instead formatting a 
      HUD-9902 in Excel.

Stat cards (2x2 grid, right side):
┌──────────────────┐ ┌──────────────────┐
│ 80–120           │ │ 47               │
│ hours/year       │ │ individual       │
│ on manual        │ │ stewardship      │
│ reporting alone  │ │ reports — by hand│
└──────────────────┘ └──────────────────┘
┌──────────────────┐ ┌──────────────────┐
│ 4–6              │ │ 8+               │
│ different funders│ │ hours per board  │
│ each wanting     │ │ packet assembly  │
│ different reports│ │ every quarter    │
└──────────────────┘ └──────────────────┘
```

Use the existing stat card pattern from the credibility strip — serif-display numbers, sans-serif labels, parchment background.

**3. Add "NRI Report Builder" Section — AFTER the NRI Intelligence section**

This is the product demo moment. Design: forest green background (like the Grounded Solutions band), with a rendered mini-preview of a generated report on the right side.

```
Eyebrow: NRI Report Builder (in gold)
Title: One click. Quarterly report. Done.
Body: NRI reads every signal, contact log, payment record, maintenance 
      request, and community event — and writes the narrative your board, 
      funders, and HUD reviewers actually want to read. What used to take 
      80 hours per year now takes 8.

Right side: A rendered mini-preview (like the product showcase cards) 
showing a report being generated — the gold NRI pulse animation, then 
a preview of the generated text in Source Serif 4.
```

Below the two-column layout, show the report types as a horizontal scrollable row of small cards:

```
[Quarterly Portfolio] [Stewardship Summary] [CCHD Narrative] [HUD Report]
[Board Packet] [Resale Summary] [Compliance Cert] [Community Impact]
```

Each card: parchment background, serif-display name, 1-line description in sans. Same card style as the platform modules grid.

**4. Update the "What Sets Propria Apart" Feature Grid**

The grid currently has 8 features. Update and reorder to put the new features prominently:

1. **NRI Report Builder** (NEW — first position, make it a `heart` card like Stewardship in the modules grid — forest green background, spans 2 columns)
   - Latin: *Relatio*
   - Description: "One click generates board-ready quarterly reports, annual stewardship summaries for every homeowner, funder narratives for CCHD and HUD, and compliance certifications — all from your live data, written in your CLT's voice. 80 hours of reporting becomes 8."

2. **Land Pipeline** (NEW)
   - Latin: *Acquisitio*
   - Description: "Track parcels from identification through acquisition. When your city upzones a corridor, Propria alerts you before market-rate developers move. Integrated with zoning policy tracking and CCHD/HUD funding sources."

3. **Homeowner Advocacy** (NEW)
   - Latin: *Vox*
   - Description: "Equip your homeowners to show up at city council with their own story — auto-generated from their real data. 'I bought my home for $187,000 and built $14,200 in equity.' That testimony is more powerful than any policy brief."

Then keep the existing features: Magic Import, HUD-9902 Generator, Resale Calculator, Ground Lease Generator, Site Builder, Homebuyer Education, Counselor Network, Homeowner Portal. Total: 11 features. The grid with the `heart` card spanning 2 columns will look right at this count.

**5. Update the Product Showcase Slider**

Add two new preview cards to the horizontal scrollable slider:

**Report Builder preview** (insert as card 3, after Stewardship):
- Browser chrome frame
- Content area shows:
  - Gold NRI header: "NRI Report Builder"
  - Report title: "Q2 2026 Portfolio Report"
  - A few lines of miniature serif text (simulating the narrative)
  - "226 data points · Generated in 4 seconds"
  - Green "Export PDF" button

**Land Pipeline preview** (insert as card 6, after Site Builder):
- Browser chrome frame
- Content area shows:
  - Forest header: "Land Pipeline"
  - 3 mini kanban columns: "Identified (3)" / "Funding (1)" / "Acquired (2)"
  - Small parcel cards in each column
  - Policy alert banner: "R-4 upzoning approved"

**6. Update the Pricing Description**

Current:
> "A 30-home CLT and a 500-home CLT get the exact same product. We don't gate NRI, don't charge extra for counselors, and don't have an enterprise tier that requires a call."

Change to:
> "A 30-home CLT and a 500-home CLT get the exact same product. NRI Report Builder, Land Pipeline, stewardship intelligence, homebuyer education — everything. We don't gate features, don't charge extra for AI, and don't have an enterprise tier that requires a call."

**7. Update the Hero Card (NRI Compass preview)**

The hero card on the right side of the hero section currently shows NRI Compass signals. Add one more row at the top:

```
New row:
[gold dot] Q2 report ready — 226 data points     [Generate →]
```

This shows the Report Builder integrated into the NRI Compass flow — the system knows when a report is due and surfaces it.

**8. Add a Testimonial/Quote**

After the NRI Report Builder section, add a quote band (same style as the Chesterton quote):

```
"I used to spend the last two weeks of every quarter assembling reports 
for three different funders. Now I click a button and review what NRI 
wrote. It knows our families better than my filing cabinet ever did."

— CLT Stewardship Coordinator
```

(This is aspirational — no real user yet. Style it exactly like the Chesterton quote band: parchment-dk background, terra border-top, centered serif-display italic text, sans attribution.)

**9. Update the Footer**

Add "Reports" to the Platform column (after Governance):
```
Platform:
  Stewardship
  Applicant Pipeline
  Resale Engine
  Asset Management
  Governance
  Reports        ← new
```

Add "Land Pipeline" and "Advocacy" to the Network column:
```
Network:
  Counselor signup
  Agency onboarding
  Homebuyer Education
  HUD compliance
  Land Pipeline    ← new
  Advocacy Tools   ← new
```

### Design Rules
- All new sections use existing CSS patterns — no new stylesheets needed
- The "Paperwork Problem" section uses the same layout as the "Platform" section (eyebrow + title + body + grid)
- The "NRI Report Builder" section uses the same layout as the "Grounded Solutions" band (forest green, two columns)
- New feature cards in the grid use the same card pattern as existing ones
- New showcase slides use the same browser-chrome frame pattern as existing ones
- The testimonial uses the exact same quote-band pattern as the Chesterton quote
- Mobile: all new sections collapse to single-column following existing responsive patterns

### What NOT To Do
- Do NOT change the hero headline, hero card layout, or overall page structure
- Do NOT remove any existing sections or features
- Do NOT change fonts, colors, or spacing patterns
- Do NOT add a separate "Reports" page — the marketing site is a single scrolling page
- Do NOT add video embeds, carousels with JS libraries, or third-party widgets
- Do NOT change the pricing cards structure — only update the description text
