// ══════════════════════════════════════════════════════════════
// CROS™ Types — Propria's Compass + Relational Operating System
// Adapted from The Schola's NRI architecture
// ══════════════════════════════════════════════════════════════

export type CompassDirection = 'itiner' | 'custodia' | 'cura' | 'reconciliatio'

export interface CompassPosture {
  direction: CompassDirection
  confidence: number
  source: 'signal' | 'route' | 'default'
}

export type NudgeType = 'reflection' | 'action' | 'awareness'

export interface CompassNudge {
  id: string
  direction: CompassDirection
  type: NudgeType
  confidence: number
  message: string
  action?: { label: string; screen: string }
  entity_type?: string
  entity_id?: string
  dismissed?: boolean
}

export interface Signal {
  id: string
  signal_type: string
  direction: CompassDirection
  entity_type?: string
  entity_id?: string
  detected_at: string
}

export interface CompassUserState {
  dismissed_nudge_ids: string[]
  dismissed_date: string
  last_auto_open_date: string | null
  guide_sections_seen: string[]
  guide_permanently_dismissed: boolean
}

export interface GlowState {
  glowing: boolean
  staticRing: boolean
  quiet: boolean
}

export type FrictionTrigger = 'first_time_page' | 'friction_idle' | 'friction_rage_click'

export interface FrictionEntry {
  key: string
  route_pattern: string
  trigger: FrictionTrigger
  role?: string[]
  title: string
  message: string
}

export interface GuideEntry {
  key: string
  route_pattern: string
  title: string
  what: string
  why: string
  expect: string
  terms?: { term: string; definition: string }[]
}
