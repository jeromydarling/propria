// ══════════════════════════════════════════════════════════════
// useCompassAutoOpen — Once-per-session auto-open
// Opens the compass drawer at most once per session when
// there are undismissed nudges. 2.5s delay after mount.
// Adapted from The Schola (8hr cooldown → session-based for demo).
// ══════════════════════════════════════════════════════════════

import { useEffect, useRef } from 'react'

export function useCompassAutoOpen(
  hasNudges: boolean,
  drawerOpen: boolean,
  openDrawer: () => void
) {
  const hasAutoOpened = useRef(false)

  useEffect(() => {
    // Only auto-open once per session
    if (hasAutoOpened.current) return
    if (!hasNudges) return
    if (drawerOpen) return

    const timer = setTimeout(() => {
      if (!hasAutoOpened.current && hasNudges) {
        hasAutoOpened.current = true
        openDrawer()
      }
    }, 2500) // Let the page settle first

    return () => clearTimeout(timer)
  }, [hasNudges, drawerOpen, openDrawer])
}
