// ══════════════════════════════════════════════════════════════
// useCompassPosture — Direction inference engine
// Priority: restoration signals → weighted scoring → route fallback → default
// Adapted from The Schola's posture engine
// ══════════════════════════════════════════════════════════════

import { useState, useEffect, useCallback } from 'react'
import type { CompassDirection, CompassPosture } from '../types'
import { SIGNAL_KIND_MAP, ROUTE_MAP, ORIENTATION_MULTIPLIERS } from '../signalMap'
import { getRecentSignals, getLastSignals } from '../eventStream'

const MIN_THRESHOLD = 2

export function useCompassPosture(
  currentScreen: string,
  orientationType: string = 'default',
  isEarlyMode: boolean = false
): CompassPosture {
  const [posture, setPosture] = useState<CompassPosture>({
    direction: 'custodia',
    confidence: 0,
    source: 'default',
  })

  const resolve = useCallback(() => {
    // Priority 1: Check last 2 minutes for reconciliatio signals (urgent)
    const recentSignals = getRecentSignals(2)
    const hasReconciliatio = recentSignals.some(s => s.direction === 'reconciliatio')
    if (hasReconciliatio) {
      setPosture({ direction: 'reconciliatio', confidence: 1, source: 'signal' })
      return
    }

    // Priority 2: Score last 20 signals by direction
    const lastSignals = getLastSignals(20)
    if (lastSignals.length > 0) {
      const scores: Record<CompassDirection, number> = {
        itiner: 0,
        custodia: 0,
        cura: 0,
        reconciliatio: 0,
      }

      const multipliers = ORIENTATION_MULTIPLIERS[orientationType] || ORIENTATION_MULTIPLIERS.default

      lastSignals.forEach(signal => {
        const direction = SIGNAL_KIND_MAP[signal.signal_type]
        if (direction) {
          scores[direction] += multipliers[direction]
        }
      })

      // Apply early boost (25% more sensitive in first 30 days)
      if (isEarlyMode) {
        Object.keys(scores).forEach(d => {
          scores[d as CompassDirection] *= 1.25
        })
      }

      // Find highest scoring direction
      const sorted = (Object.entries(scores) as [CompassDirection, number][])
        .sort(([, a], [, b]) => b - a)

      if (sorted[0][1] >= MIN_THRESHOLD) {
        const maxScore = sorted[0][1]
        const totalScore = Object.values(scores).reduce((a, b) => a + b, 0)
        setPosture({
          direction: sorted[0][0],
          confidence: totalScore > 0 ? maxScore / totalScore : 0.5,
          source: 'signal',
        })
        return
      }
    }

    // Priority 3: Route-based fallback
    const routeDirection = ROUTE_MAP[currentScreen]
    if (routeDirection) {
      setPosture({ direction: routeDirection, confidence: 0.3, source: 'route' })
      return
    }

    // Default: custodia (stewardship is the heart of Propria)
    setPosture({ direction: 'custodia', confidence: 0, source: 'default' })
  }, [currentScreen, orientationType, isEarlyMode])

  useEffect(() => {
    resolve()
    // Re-resolve every 30 seconds
    const interval = setInterval(resolve, 30000)
    return () => clearInterval(interval)
  }, [resolve])

  return posture
}
