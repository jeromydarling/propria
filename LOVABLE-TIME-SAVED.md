## Propria — "Time Recovered" Section for Marketing Site

### Context
Propria's marketing site is at `/src/views/Marketing.tsx`. This prompt adds a single high-impact section that visualizes the time a CLT coordinator saves with Propria. This is the most persuasive element on the page — CLT directors think in staff hours and budget, not features.

Read `/CLAUDE.md` for brand rules. Match all existing design patterns exactly.

### Where To Place It
Insert this section **immediately after** the "NRI Report Builder" section and **before** the Grounded Solutions band. If the NRI Report Builder section doesn't exist yet (from `LOVABLE-MARKETING-UPDATE.md`), place it after the "What Sets Propria Apart" feature grid.

### What To Build

**Section: "Where Your Coordinator's Week Goes"**

Design: cream background (`var(--cream)`), standard section inner (max-width 1100px). This section has three parts stacked vertically: headline, comparison chart, and closing line.

**Part 1: Headline**
```
Eyebrow: THE MATH
Title: 21 hours a week. Recovered.
Body: Your stewardship coordinator works 40 hours a week. Right now, 
      more than half of that goes to paperwork, data entry, and report 
      assembly. Propria gives those hours back — so they go where they 
      belong.
```

Use the standard section-eyebrow (terra, uppercase, letterspaced) + section-title (Playfair Display, forest) + section-body (Source Serif 4, ink-mid) pattern.

**Part 2: Comparison Chart**

Two side-by-side bar chart columns with a divider between them. Left = "Without Propria" (current pain). Right = "With Propria" (the future). Each row is a task with a horizontal bar showing hours.

```
WITHOUT PROPRIA                          WITH PROPRIA
─────────────────────────────────        ─────────────────────────────────

Reports & funder narratives              Reports & funder narratives
████████████████░░░░░░░░ 8 hrs           █░ 45 min
                                         
Stewardship documentation                Stewardship documentation
████████████░░░░░░░░░░░░ 6 hrs           ██░ 1 hr

Payment tracking & follow-up             Payment tracking & follow-up
████████░░░░░░░░░░░░░░░░ 4 hrs           █░ 30 min

Pipeline & applicant mgmt                Pipeline & applicant mgmt
██████░░░░░░░░░░░░░░░░░░ 3 hrs           █░ 45 min

Board packet assembly                    Board packet assembly
████░░░░░░░░░░░░░░░░░░░░ 2 hrs           ░ 15 min

Email & outreach                         Email & outreach
██████░░░░░░░░░░░░░░░░░░ 3 hrs           ██░ 1 hr

─────────────────────────────────        ─────────────────────────────────
TOTAL: 26 hrs on admin                   TOTAL: 4.25 hrs on admin
```

Implementation details:
- Each row: task label (sans, 13px, ink), horizontal bar, time label
- "Without" bars use `var(--terra)` (the pain color)
- "With" bars use `var(--forest-light)` (the solution color)
- Bar widths are proportional to hours (8 hrs = full width, 15 min = tiny sliver)
- Both columns share the same max width so the visual contrast is immediate
- Below each column total, show a colored summary pill:
  - Left: terra background, "26 hrs/week on admin" 
  - Right: forest background, "4.25 hrs/week on admin"

**Part 3: The Recovered Hours Card**

Below the comparison chart, a full-width card with forest green background showing where the recovered time goes:

```
┌──────────────────────────────────────────────────────────┐
│  21.75 HOURS RECOVERED EVERY WEEK                        │
│                                                          │
│  ████████████████████████████████████████████             │
│  ▲ Door knocks  ▲ Check-ins  ▲ Relationships  ▲ Growth  │
│                                                          │
│  That's a second coordinator you don't have to hire.     │
│                                                          │
│  At $50K/year fully loaded, Propria pays for itself      │
│  27× over on staff time alone.                           │
└──────────────────────────────────────────────────────────┘
```

Design:
- Forest green background, parchment text
- The "21.75 HOURS" in Playfair Display, large (clamp 28px-40px), gold color
- The bar is a gradient: terra → gold → forest-light → forest (representing the shift from admin to relationships)
- The labels below the bar in sans, small, rgba parchment
- "That's a second coordinator..." in Source Serif 4, italic, 18px
- "At $50K/year..." in sans, smaller, 60% opacity parchment
- Border-radius 12px

**Part 4: Closing Line**

After the card, centered, with breathing room:

```
"21 hours a week. Back where they belong — with your families."
```

Playfair Display, italic, 22-28px (clamp), forest color. Same visual weight as the Chesterton quote but without the quote-band background — just floating text with generous padding above and below (48px+).

### Mobile Behavior

On mobile (< 768px):
- The two-column chart stacks vertically: "Without Propria" block on top, "With Propria" block below
- The bars still show proportionally
- The recovered hours card goes full-width with slightly reduced padding
- The closing line stays centered, font size clamps down

### Data for the Bars

Use these exact values (hours per week, averaged):

```typescript
const tasks = [
  { label: 'Reports & funder narratives', without: 8, with: 0.75 },
  { label: 'Stewardship documentation', without: 6, with: 1 },
  { label: 'Payment tracking & follow-up', without: 4, with: 0.5 },
  { label: 'Pipeline & applicant management', without: 3, with: 0.75 },
  { label: 'Board packet assembly', without: 2, with: 0.25 },
  { label: 'Email & outreach', without: 3, with: 1 },
]
// Total without: 26 hrs | Total with: 4.25 hrs | Recovered: 21.75 hrs
```

Render the bars dynamically from this data. Max bar width = the "without" value of the largest task (8 hrs = 100% width). "With" bars use the same scale so the visual contrast is stark.

### CSS Patterns
- Use existing CSS variables from `/src/views/Marketing.css` and `/src/index.css`
- Section padding: `100px 2.5rem` (desktop), `60px 20px` (mobile) — matches existing sections
- Card border-radius: 12px
- No new CSS file needed — use inline styles matching the existing Marketing.tsx patterns
- Animations: bars could animate width on scroll-into-view using CSS `@keyframes` or `IntersectionObserver`, but this is optional — static bars are fine for MVP

### What NOT To Do
- Do NOT use a table element — use styled divs for the bar chart
- Do NOT add any JavaScript animation libraries
- Do NOT change any existing sections
- Do NOT use stock photos or illustrations
- Do NOT make the numbers editable or interactive — they're static marketing claims
- Do NOT add this to any view other than the marketing site
