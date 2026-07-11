"use client"

import { cn } from "@/lib/utils"
import { useScrollDirection } from "@/hooks/use-scroll-direction"

/**
 * Fixed site header: slides away on scroll-down, returns on scroll-up, with
 * a blur/fade edge along its bottom (mirrors the page-bottom overlay).
 */
export function SiteHeaderContainer({
  children,
}: {
  children: React.ReactNode
}) {
  const hidden = useScrollDirection()

  return (
    <>
      {/* Reserve space so fixed header never overlaps page content */}
      <div
        className="pointer-events-none h-[calc(var(--header-height)+var(--header-pt))] [--header-pt:--spacing(2)]"
        aria-hidden
      />

      <header
        data-hidden={hidden || undefined}
        className={cn(
          "fixed inset-x-0 top-0 z-50 max-w-screen overflow-x-clip bg-background px-2 pt-(--header-pt) transition-transform duration-300 ease-out motion-reduce:transition-none",
          "translate-y-0 data-hidden:not-focus-within:-translate-y-full",
          "[--header-h:calc(var(--header-height)-var(--header-pt))] [--header-pt:--spacing(2)]"
        )}
      >
        {children}

        <div
          className="pointer-events-none absolute inset-x-0 top-full"
          aria-hidden
        >
          <div className="h-(--fade-top-height) bg-linear-to-t from-transparent to-background mask-linear-[to_bottom,var(--background)_25%,transparent] backdrop-blur-[1px]" />
        </div>
      </header>
    </>
  )
}
