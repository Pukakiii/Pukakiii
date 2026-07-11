"use client"

import { useEffect, useState } from "react"
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
  const [open, setOpen] = useState(false)

  const hasMore = Boolean(moreItems && moreItems.length > 0)

  const isAnyMoreActive = moreItems?.some((item) =>
    pathname?.startsWith(item.href)
  )

  useEffect(() => {
    setOpen(false)
  }, [pathname])

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
        aria-label="More"
        data-state={open ? "open" : "closed"}
        className="group shrink-0 touch-manipulation outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring/50"
        onClick={() => {
          haptic()
          setOpen((prev) => !prev)
        }}
      >
        <span
          className={cn(
            "flex items-center gap-1 text-sm font-medium tracking-wide text-muted-foreground transition-[color] hover:text-foreground group-data-[state=open]:text-foreground",
            isAnyMoreActive && !open && "text-foreground"
          )}
        >
          More
          <ChevronDownIcon
            className={cn(
              "size-3.5 transition-transform duration-300 motion-reduce:transition-none",
              open && "rotate-180"
            )}
            aria-hidden
          />
        </span>
      </button>
    </div>
  )
}
