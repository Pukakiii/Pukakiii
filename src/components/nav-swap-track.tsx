"use client"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)"
const DURATION_MS = 380

/**
 * Swaps two link rows in the same slot. Both panels stack in one grid cell so
 * the slot width stays max(primary, secondary) — no width animation or layout shift.
 */
export function NavSwapTrack({
  open,
  primary,
  secondary,
  className,
  gapClassName = "gap-4",
  hintIncoming = false,
}: {
  open: boolean
  primary: React.ReactNode
  secondary: React.ReactNode
  className?: string
  gapClassName?: string
  /**
   * Shows the site-wide blurry fade on the edge the next row will slide in
   * from (right while the primary row is visible, left while the secondary
   * row is visible). Used as a hover hint on the "More" toggle.
   */
  hintIncoming?: boolean
}) {
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)")
  const duration = reducedMotion ? 100 : DURATION_MS
  const transition = reducedMotion
    ? `opacity ${duration}ms ease-out`
    : `transform ${duration}ms ${EASE}, opacity ${duration}ms ${EASE}`

  return (
    <div className={cn("relative inline-grid overflow-hidden", className)}>
      <div
        className={cn(
          "col-start-1 row-start-1 flex items-center",
          gapClassName,
          open ? "pointer-events-none" : "relative z-1"
        )}
        style={{
          transition,
          transform: reducedMotion || !open ? "none" : "translateX(-100%)",
          opacity: open ? 0 : 1,
        }}
        aria-hidden={open}
      >
        {primary}
      </div>

      <div
        className={cn(
          "col-start-1 row-start-1 flex items-center",
          gapClassName,
          !open ? "pointer-events-none" : "relative z-1"
        )}
        style={{
          transition,
          transform: reducedMotion
            ? "none"
            : open
              ? "translateX(0)"
              : "translateX(100%)",
          opacity: open ? 1 : 0,
        }}
        aria-hidden={!open}
      >
        {secondary}
      </div>

      {/* Incoming-edge fade hint: same fade treatment as the header/page edges. */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-y-0 right-0 z-2 w-12 bg-linear-to-l from-background to-transparent mask-linear-[to_left,var(--background)_25%,transparent] backdrop-blur-[1px] transition-opacity duration-200 motion-reduce:transition-none",
          hintIncoming && !open ? "opacity-100" : "opacity-0"
        )}
      />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 z-2 w-12 bg-linear-to-r from-background to-transparent mask-linear-[to_right,var(--background)_25%,transparent] backdrop-blur-[1px] transition-opacity duration-200 motion-reduce:transition-none",
          hintIncoming && open ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  )
}
