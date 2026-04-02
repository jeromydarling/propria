// ══════════════════════════════════════════════════════════════
// useCompassSessionEngine — Nudge orchestration
// Runs parallel evaluations against demo data, produces max 3 nudges
// sorted by direction_weight × confidence
// Adapted from The Schola's session engine
// ══════════════════════════════════════════════════════════════

import { useState, useEffect, useCallback } from 'react'
import type { CompassNudge, CompassDirection } from '../types'
import { DIRECTION_META } from '../signalMap'

const DIRECTION_WEIGHT: Record<CompassDirection, number> = {
  reconciliatio: 4,
  cura: 3,
  custodia: 2,
  itiner: 1,
}

function hashId(type: string, entityId: string): string {
  return `${type}-${entityId}-${new Date().toISOString().slice(0, 10)}`
}

function buildNudge(
  type: string,
  direction: CompassDirection,
  nudgeType: 'reflection' | 'action' | 'awareness',
  confidence: number,
  message: string,
  action?: { label: string; screen: string },
  entityType?: string,
  entityId?: string
): CompassNudge {
  return {
    id: hashId(type, entityId || type),
    direction,
    type: nudgeType,
    confidence,
    message,
    action,
    entity_type: entityType,
    entity_id: entityId,
  }
}

export function useCompassSessionEngine(dismissedIds: string[] = []) {
  const [nudges, setNudges] = useState<CompassNudge[]>([])
  const [loading, setLoading] = useState(true)

  const evaluate = useCallback(() => {
    setLoading(true)
    const all: CompassNudge[] = []

    // Evaluation 1: Contact overdue (Cura)
    // Maria Torres — 23 days no response
    all.push(buildNudge(
      'contact_overdue', 'cura', 'action', 0.92,
      "Maria Torres hasn't responded to 2 check-in attempts. Last contact was 23 days ago. Consider a door knock or reaching her emergency contact.",
      { label: 'Open stewardship record', screen: 'stewardship' },
      'homeowner', 'hw-001'
    ))

    // Evaluation 2: Payment overdue (Reconciliatio)
    // 3 homeowners with overdue payments
    all.push(buildNudge(
      'payment_overdue', 'reconciliatio', 'action', 0.88,
      '3 homeowners have ground lease payments 7+ days overdue, totaling $156. Walker ($52, 9d), Moore ($48, 14d), and Okafor ($56, 3d).',
      { label: 'Send payment reminders', screen: 'finances' },
      'payment', 'batch-overdue'
    ))

    // Evaluation 3: Check-ins due (Custodia)
    // 7 families due this quarter
    all.push(buildNudge(
      'checkin_due', 'custodia', 'action', 0.78,
      '7 families are due for their annual check-in this quarter. The Diaz family has no appointment scheduled — their check-in is due by April 30.',
      { label: 'View check-in queue', screen: 'stewardship' },
      'checkin', 'q2-2026'
    ))

    // Evaluation 4: Docs expired (Reconciliatio)
    // Keisha Johnson's income verification
    all.push(buildNudge(
      'docs_expired', 'reconciliatio', 'action', 0.85,
      "Keisha Johnson's income verification expired March 14. Education stalled at Module 7 for 14 days. Application at risk — reach out before April 7.",
      { label: 'Send document request', screen: 'pipeline' },
      'applicant', 'app-001'
    ))

    // Evaluation 5: Maintenance aging (Reconciliatio)
    // 56 Thomas Ave — 31 days open
    all.push(buildNudge(
      'maintenance_aging', 'reconciliatio', 'awareness', 0.72,
      'Maintenance request at 56 Thomas Avenue has been open 31 days. Ace Contracting was assigned but no update has been logged.',
      { label: 'Follow up with contractor', screen: 'maintenance' },
      'maintenance', 'maint-001'
    ))

    // Evaluation 6: Community event low RSVP (Cura)
    all.push(buildNudge(
      'event_low_rsvp', 'cura', 'awareness', 0.6,
      'Annual Homeowner Assembly (April 22) has only 30% RSVP rate — 14 of 47. Consider sending a reminder or personal outreach to key families.',
      { label: 'Send RSVP reminder', screen: 'praeco' },
      'event', 'evt-002'
    ))

    // Evaluation 7: Resale milestone (Itiner)
    all.push(buildNudge(
      'resale_milestone', 'itiner', 'awareness', 0.55,
      '14 Oak Street resale is at Stage 5 (Buyer Matching). Hernandez pre-approval is the only open item — due April 7.',
      { label: 'View resale', screen: 'resale' },
      'property', 'prop-001'
    ))

    // Evaluation 8: Birthday upcoming (Cura)
    all.push(buildNudge(
      'birthday_upcoming', 'cura', 'reflection', 0.45,
      "Patricia Moore's birthday is in 5 days. A brief note or card from the CLT goes a long way in the stewardship relationship.",
      undefined,
      'homeowner', 'hw-003'
    ))

    // Filter dismissed
    const filtered = all.filter(n => !dismissedIds.includes(n.id))

    // Sort by direction_weight × confidence, take top 3
    const sorted = filtered
      .sort((a, b) => {
        const scoreA = DIRECTION_WEIGHT[a.direction] * a.confidence
        const scoreB = DIRECTION_WEIGHT[b.direction] * b.confidence
        if (scoreB !== scoreA) return scoreB - scoreA
        return a.id.localeCompare(b.id) // stable tiebreak
      })
      .slice(0, 3)

    setNudges(sorted)
    setLoading(false)
  }, [dismissedIds])

  useEffect(() => {
    // Simulate async evaluation
    const timer = setTimeout(evaluate, 100)
    return () => clearTimeout(timer)
  }, [evaluate])

  return { nudges, loading, directionMeta: DIRECTION_META }
}
