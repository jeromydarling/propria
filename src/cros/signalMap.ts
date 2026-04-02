// ══════════════════════════════════════════════════════════════
// Signal → Direction mapping for Propria
// Every action in the system maps to one of the four directions
// ══════════════════════════════════════════════════════════════

import type { CompassDirection } from './types'

export const SIGNAL_KIND_MAP: Record<string, CompassDirection> = {
  // Itiner — Journey: Pipeline advancement, applicant progress
  application_submitted: 'itiner',
  stage_advanced: 'itiner',
  education_module_done: 'itiner',
  education_started: 'itiner',
  session_completed: 'itiner',
  counselor_assigned: 'itiner',
  docs_uploaded: 'itiner',
  resale_stage_advanced: 'itiner',
  buyer_matched: 'itiner',
  closing_completed: 'itiner',

  // Custodia — Stewardship: Active homeowner care, lease compliance
  contact_logged: 'custodia',
  check_in_completed: 'custodia',
  ground_lease_paid: 'custodia',
  maintenance_resolved: 'custodia',
  inspection_completed: 'custodia',
  home_visit_logged: 'custodia',
  pastoral_note_updated: 'custodia',
  annual_review_done: 'custodia',

  // Cura — Care: Relational warmth, community health
  event_rsvp: 'cura',
  community_message: 'cura',
  new_homeowner_joined: 'cura',
  birthday_upcoming: 'cura',
  milestone_reached: 'cura',
  volunteer_signup: 'cura',
  welcome_sent: 'cura',
  life_event_logged: 'cura',

  // Reconciliatio — Reconciliation: Re-engagement, overdue resolution
  lease_payment_overdue: 'reconciliatio',
  contact_overdue_30d: 'reconciliatio',
  risk_flag_raised: 'reconciliatio',
  maintenance_overdue: 'reconciliatio',
  docs_expired: 'reconciliatio',
  education_stalled: 'reconciliatio',
  no_staff_login_7d: 'reconciliatio',
  collection_rate_low: 'reconciliatio',
}

// Route → Direction fallback (when no recent signals)
export const ROUTE_MAP: Record<string, CompassDirection> = {
  dashboard: 'custodia',
  stewardship: 'custodia',
  pipeline: 'itiner',
  praeco: 'cura',
  resale: 'itiner',
  assets: 'custodia',
  maintenance: 'reconciliatio',
  governance: 'cura',
  finances: 'reconciliatio',
  settings: 'custodia',
  import: 'itiner',
  groundlease: 'itiner',
}

// Direction display metadata
export const DIRECTION_META: Record<CompassDirection, {
  label: string
  latin: string
  color: string
  bgColor: string
  textColor: string
  description: string
}> = {
  itiner: {
    label: 'Itiner',
    latin: 'Journey',
    color: '#0C447C',
    bgColor: '#E6F1FB',
    textColor: '#0C447C',
    description: 'Applicant advancement, pipeline progression',
  },
  custodia: {
    label: 'Custodia',
    latin: 'Stewardship',
    color: '#085041',
    bgColor: '#E1F5EE',
    textColor: '#085041',
    description: 'Active homeowner care, lease compliance',
  },
  cura: {
    label: 'Cura',
    latin: 'Care',
    color: '#854F0B',
    bgColor: '#FDF6E3',
    textColor: '#854F0B',
    description: 'Relational warmth, community health',
  },
  reconciliatio: {
    label: 'Reconciliatio',
    latin: 'Reconciliation',
    color: '#712B13',
    bgColor: '#FAECE7',
    textColor: '#712B13',
    description: 'Re-engagement, overdue resolution',
  },
}

// Orientation multipliers — CLTs with different focuses weight directions differently
export const ORIENTATION_MULTIPLIERS: Record<string, Record<CompassDirection, number>> = {
  default:        { itiner: 1, custodia: 1, cura: 1, reconciliatio: 1 },
  stewardship_focused: { itiner: 1, custodia: 2, cura: 1, reconciliatio: 1 },
  growth_focused:      { itiner: 2, custodia: 1, cura: 1, reconciliatio: 1 },
  community_focused:   { itiner: 1, custodia: 1, cura: 2, reconciliatio: 1 },
}
