// ══════════════════════════════════════════════════════════════
// Event Stream — fire-and-forget action breadcrumbs
// Privacy-safe: NEVER stores names, content, or PII
// Only stores entity_type + entity_id (foreign keys)
// Silent failure — never blocks user operations
// ══════════════════════════════════════════════════════════════

import type { CompassDirection } from './types'
import { SIGNAL_KIND_MAP } from './signalMap'

// In-memory signal store (replaced by Supabase in production)
let _signals: Array<{
  id: string
  signal_type: string
  direction: CompassDirection
  entity_type?: string
  entity_id?: string
  detected_at: string
}> = []

let _events: Array<{
  id: string
  event_type: string
  entity_type?: string
  entity_id?: string
  route?: string
  created_at: string
}> = []

// Listeners for glow triggers
type GlowListener = (signalType: string) => void
const _glowListeners: GlowListener[] = []

export function onGlowTrigger(fn: GlowListener) {
  _glowListeners.push(fn)
  return () => {
    const idx = _glowListeners.indexOf(fn)
    if (idx >= 0) _glowListeners.splice(idx, 1)
  }
}

/**
 * Log an action event (breadcrumb). Fire-and-forget.
 * In production, this writes to supabase.from('app_event_stream')
 */
export function logActionEvent(
  eventType: string,
  entityType?: string,
  entityId?: string,
  route?: string
) {
  try {
    _events.push({
      id: crypto.randomUUID(),
      event_type: eventType,
      entity_type: entityType,
      entity_id: entityId,
      route,
      created_at: new Date().toISOString(),
    })

    // If this event type maps to a signal, emit it
    const direction = SIGNAL_KIND_MAP[eventType]
    if (direction) {
      emitSignal(eventType, direction, entityType, entityId)
    }
  } catch {
    // Silent failure — never surface to user
  }
}

/**
 * Emit a CROS signal. Triggers glow listeners.
 */
export function emitSignal(
  signalType: string,
  direction: CompassDirection,
  entityType?: string,
  entityId?: string
) {
  try {
    const signal = {
      id: crypto.randomUUID(),
      signal_type: signalType,
      direction,
      entity_type: entityType,
      entity_id: entityId,
      detected_at: new Date().toISOString(),
    }
    _signals.push(signal)

    // Notify glow listeners
    _glowListeners.forEach(fn => {
      try { fn(signalType) } catch { /* silent */ }
    })
  } catch {
    // Silent failure
  }
}

/**
 * Get recent signals (last N minutes)
 */
export function getRecentSignals(minutes: number = 2) {
  const cutoff = new Date(Date.now() - minutes * 60 * 1000).toISOString()
  return _signals.filter(s => s.detected_at > cutoff)
}

/**
 * Get last N signals for posture calculation
 */
export function getLastSignals(count: number = 20) {
  return _signals.slice(-count)
}

/**
 * Get all signals (for demo purposes)
 */
export function getAllSignals() {
  return [..._signals]
}

/**
 * Seed demo signals — call once on app load for demo data
 */
export function seedDemoSignals() {
  const now = Date.now()
  const demoSignals: Array<[string, string?, string?]> = [
    ['contact_overdue_30d', 'homeowner', 'hw-001'],
    ['lease_payment_overdue', 'homeowner', 'hw-002'],
    ['lease_payment_overdue', 'homeowner', 'hw-003'],
    ['lease_payment_overdue', 'homeowner', 'hw-005'],
    ['docs_expired', 'applicant', 'app-001'],
    ['education_stalled', 'applicant', 'app-001'],
    ['maintenance_overdue', 'property', 'prop-003'],
    ['check_in_completed', 'homeowner', 'hw-004'],
    ['ground_lease_paid', 'homeowner', 'hw-001'],
    ['ground_lease_paid', 'homeowner', 'hw-004'],
    ['event_rsvp', 'event', 'evt-001'],
    ['new_homeowner_joined', 'homeowner', 'hw-047'],
    ['birthday_upcoming', 'homeowner', 'hw-003'],
    ['milestone_reached', 'homeowner', 'hw-001'],
    ['resale_stage_advanced', 'property', 'prop-001'],
    ['buyer_matched', 'applicant', 'app-002'],
    ['contact_logged', 'homeowner', 'hw-002'],
    ['home_visit_logged', 'homeowner', 'hw-004'],
  ]

  demoSignals.forEach(([type, eType, eId], i) => {
    const direction = SIGNAL_KIND_MAP[type]
    if (direction) {
      _signals.push({
        id: crypto.randomUUID(),
        signal_type: type,
        direction,
        entity_type: eType,
        entity_id: eId,
        detected_at: new Date(now - (demoSignals.length - i) * 3600000).toISOString(),
      })
    }
  })
}
