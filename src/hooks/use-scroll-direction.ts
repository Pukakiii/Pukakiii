"use client"

import { useEffect, useState } from "react"
import { useMotionValueEvent, useScroll } from "motion/react"

/**
 * Hides chrome on scroll-down, reveals on scroll-up. Uses the same scroll
 * source as ScrollToTop (motion's useScroll) so behaviour stays in sync
 * with the document scroll container.
 */
export function useScrollDirection({
  threshold = 4,
  topOffset = 64,
}: {
  threshold?: number
  topOffset?: number
} = {}) {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0
    const delta = y - prev

    if (y <= topOffset) {
      setHidden(false)
      return
    }

    if (delta > threshold) {
      setHidden(true)
    } else if (delta < -threshold) {
      setHidden(false)
    }
  })

  // Keep header visible when returning to top via programmatic scroll.
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY <= topOffset) setHidden(false)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [topOffset])

  return hidden
}
