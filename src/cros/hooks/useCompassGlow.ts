// ══════════════════════════════════════════════════════════════
// useCompassGlow — FAB visual presence indicator
// Pulses when new signals arrive. 3-minute cooldown.
// Clears when drawer opens. Adapted from The Schola.
// ══════════════════════════════════════════════════════════════

import { useState, useEffect, useRef, useCallback } from 'react'
import { onGlowTrigger } from '../eventStream'
import type { GlowState } from '../types'

const GLOW_DURATION_MS: Record<string, number> = {
  lease_payment_overdue: 120000,
  contact_overdue_30d: 120000,
  docs_expired: 120000,
  risk_flag_raised: 120000,
  maintenance_overdue: 90000,
  new_homeowner_joined: 90000,
  application_submitted: 90000,
  education_stalled: 90000,
}

const COOLDOWN_MS = 180000 // 3 minutes

export function useCompassGlow(drawerOpen: boolean, hasNudges: boolean): GlowState {
  const [glowing, setGlowing] = useState(false)
  const glowTimer = useRef<ReturnType<typeof setTimeout>>(undefined)
  const cooldownUntil = useRef(0)

  const triggerGlow = useCallback((signalType: string) => {
    // Respect cooldown
    if (Date.now() < cooldownUntil.current) return

    const duration = GLOW_DURATION_MS[signalType]
    if (!duration) return

    // Don't glow if drawer is open
    if (drawerOpen) return

    setGlowing(true)
    if (glowTimer.current) clearTimeout(glowTimer.current)
    glowTimer.current = setTimeout(() => {
      setGlowing(false)
      cooldownUntil.current = Date.now() + COOLDOWN_MS
    }, duration)
  }, [drawerOpen])

  // Listen for glow triggers from event stream
  useEffect(() => {
    const unsub = onGlowTrigger(triggerGlow)
    return unsub
  }, [triggerGlow])

  // Clear glow when drawer opens
  useEffect(() => {
    if (drawerOpen) {
      setGlowing(false)
      if (glowTimer.current) clearTimeout(glowTimer.current)
    }
  }, [drawerOpen])

  // Start with a glow to show there are signals (demo)
  useEffect(() => {
    if (hasNudges && !drawerOpen) {
      const t = setTimeout(() => setGlowing(true), 2000)
      const t2 = setTimeout(() => {
        setGlowing(false)
        cooldownUntil.current = Date.now() + COOLDOWN_MS
      }, 6000)
      return () => { clearTimeout(t); clearTimeout(t2) }
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return {
    glowing,
    staticRing: !glowing && hasNudges,
    quiet: !glowing && !hasNudges,
  }
}
