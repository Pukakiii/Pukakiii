"use client"

import { useState } from "react"
import type { Route } from "next"
import { usePathname } from "next/navigation"
import { ChevronDownIcon } from "lucide-react"

import type { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import { NavItem as NavLink } from "@/components/nav"
import { NavSwapTrack } from "@/components/nav-swap-track"
import { haptic } from "@/lib/haptic"

function NavLinks({
  items,
  pathname,
}: {
  items: NavItem<Route>[]
  pathname: string
}) {
  return (
    <>
      {items.map(({ title, href }) => {
        const isActive =
          pathname === href ||
          (href === "/"
            ? ["/", "/index"].includes(pathname || "")
            : pathname?.startsWith(href))

        return (
          <NavLink
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
          >
            {title}
          </NavLink>
        )
      })}
    </>
  )
}

export function NavDesktop({
  items,
  moreItems,
}: {
  items: NavItem<Route>[]
  moreItems?: NavItem<Route>[]
}) {
  const pathname = usePathname()

  const hasMore = Boolean(moreItems && moreItems.length > 0)

  const isAnyMoreActive = Boolean(
    moreItems?.some((item) => pathname?.startsWith(item.href))
  )

  // The visible row settles to the section the current page belongs to, so
  // opening a link from the secondary row keeps that row on screen instead
  // of snapping back to the primary one. The toggle still flips between them.
  // Adjusting state during render (React's recommended pattern) re-settles the
  // row whenever navigation moves between the primary and secondary sections.
  const [open, setOpen] = useState(isAnyMoreActive)
  const [prevMoreActive, setPrevMoreActive] = useState(isAnyMoreActive)
  if (prevMoreActive !== isAnyMoreActive) {
    setPrevMoreActive(isAnyMoreActive)
    setOpen(isAnyMoreActive)
  }

  if (!hasMore) {
    return (
      <div className="flex items-center gap-4 max-sm:hidden">
        <nav className="flex items-center gap-4" aria-label="Main">
          <NavLinks items={items} pathname={pathname ?? ""} />
        </nav>
      </div>
    )
  }

  return (
    <div className="flex shrink-0 items-center gap-4 max-sm:hidden">
      <nav aria-label="Main">
        <NavSwapTrack
          open={open}
          primary={<NavLinks items={items} pathname={pathname ?? ""} />}
          secondary={
            <NavLinks items={moreItems!} pathname={pathname ?? ""} />
          }
        />
      </nav>

      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Show main menu" : "Show more pages"}
        data-state={open ? "open" : "closed"}
        className={cn(
          "group flex shrink-0 touch-manipulation items-center gap-1 text-sm font-medium tracking-wide outline-none transition-colors",
          "text-muted-foreground hover:text-foreground data-[state=open]:text-foreground focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring/50",
          isAnyMoreActive && "text-foreground"
        )}
        onClick={() => {
          haptic()
          setOpen((prev) => !prev)
        }}
      >
        More
        <ChevronDownIcon
          className={cn(
            "size-4 text-muted-foreground transition-transform duration-300 ease-out group-hover:text-foreground group-data-[state=open]:text-foreground motion-reduce:transition-none",
            open && "-rotate-180"
          )}
          aria-hidden
        />
      </button>
    </div>
  )
}
