// ══════════════════════════════════════════════════════════════
// Compass Guide — Route-matched onboarding entries
// Shown during the user's first 3 days on the platform
// ══════════════════════════════════════════════════════════════

import type { GuideEntry } from '../types'

export const GUIDE_ENTRIES: GuideEntry[] = [
  {
    key: 'dashboard',
    route_pattern: 'dashboard',
    title: 'Welcome to your Dashboard',
    what: 'This is your daily command center — the first thing you see each morning. It shows who needs attention, what\'s due, and the pulse of your CLT.',
    why: 'A CLT coordinator\'s job is relational, not transactional. The dashboard surfaces the human signals that matter most.',
    expect: 'You\'ll see attention cards sorted by NRI priority, your daily tasks, and key metrics. Everything updates in real time.',
    terms: [
      { term: 'NRI', definition: 'Natural Relational Intelligence — the ambient layer that detects who needs your attention without you having to hunt for it.' },
      { term: 'Cura / Custodia / Itiner / Reconciliatio', definition: 'The four compass directions that classify every signal by type of need.' },
    ],
  },
  {
    key: 'stewardship',
    route_pattern: 'stewardship',
    title: 'Stewardship — The Heart of Propria',
    what: 'Every homeowner has a full relational profile here — contact history, lease details, life events, and a pastoral note only your team sees.',
    why: 'The CLT\'s product is a multi-decade relationship with each family. This screen is where that relationship lives.',
    expect: 'Tabs let you switch between contact history, financials, life events, and private pastoral notes. NRI surfaces alerts when something needs attention.',
  },
  {
    key: 'pipeline',
    route_pattern: 'pipeline',
    title: 'Applicant Pipeline',
    what: 'Track every applicant from intake through closing — 8 stages, document checklists, education progress, and counselor assignments.',
    why: 'The path to CLT homeownership is long and document-heavy. This keeps nothing from falling through the cracks.',
    expect: 'You\'ll see the applicant\'s current stage, what\'s blocking them, and NRI flags when docs expire or education stalls.',
  },
  {
    key: 'praeco',
    route_pattern: 'praeco',
    title: 'Praeco — Your Communications Hub',
    what: 'Email campaigns from your Gmail, event management with RSVP tracking, and an NRI-powered website builder for your CLT.',
    why: 'CLTs communicate through scattered tools. Praeco brings email, events, and your website into one place — with NRI helping you write in your CLT\'s voice.',
    expect: 'Three tabs: Email (sent from your Gmail), Events (with RSVP tracking), and Website (live preview + NRI content assistant).',
  },
  {
    key: 'finances',
    route_pattern: 'finances',
    title: 'Finances & Compliance',
    what: 'Ground lease collection, overdue tracking, grant disbursements, and auto-generated HUD-9902 reports.',
    why: 'CLTs handle public money and HUD compliance. This keeps your financial house in order without manual report building.',
    expect: 'Overview tab shows collection rates and overdue payments. HUD-9902 tab auto-generates your quarterly report from live data.',
  },
  {
    key: 'import',
    route_pattern: 'import',
    title: 'Magic Import',
    what: 'Upload your existing spreadsheets, CSVs, PDFs — even photos of paper records. NRI parses, maps fields, deduplicates, and validates everything.',
    why: 'Every CLT has data scattered across 5-10 systems. This is how you bring it all home in one shot.',
    expect: 'An 8-step wizard: Upload → Scan → Map Fields → Deduplicate → Validate → Review → Import → Done. NRI handles the hard parts.',
  },
]

export function matchGuideEntry(screen: string): GuideEntry | undefined {
  return GUIDE_ENTRIES.find(e => e.route_pattern === screen)
}
