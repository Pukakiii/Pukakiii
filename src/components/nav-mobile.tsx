"use client"

import { useState } from "react"
import type { Route } from "next"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3Icon,
  BriefcaseBusinessIcon,
  ChevronRightIcon,
  FolderGit2Icon,
  GraduationCapIcon,
  HouseIcon,
  MailIcon,
  NewspaperIcon,
  SparklesIcon,
  UserRoundIcon,
} from "lucide-react"

import type { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import { NavSwapTrack } from "@/components/nav-swap-track"
import { haptic } from "@/lib/haptic"

const QUICK_LINK_ICONS: Record<string, React.ReactNode> = {
  "/": <HouseIcon />,
  "/about": <UserRoundIcon />,
  "/experience": <BriefcaseBusinessIcon />,
  "/projects": <FolderGit2Icon />,
}

const MORE_LINK_ICONS: Record<string, React.ReactNode> = {
  "/skills": <SparklesIcon />,
  "/education": <GraduationCapIcon />,
  "/blog": <NewspaperIcon />,
  "/analytics": <BarChart3Icon />,
  "/contact": <MailIcon />,
}

function NavIconLink({
  href,
  title,
  icon,
  isActive,
}: {
  href: Route
  title: string
  icon: React.ReactNode
  isActive: boolean
}) {
  return (
    <Link
      href={href}
      aria-label={title}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "flex size-8 touch-manipulation items-center justify-center rounded-lg text-muted-foreground",
        "transition-[color,background-color] hover:text-foreground aria-[current=page]:bg-accent aria-[current=page]:text-foreground",
        "[&_svg]:size-4.5"
      )}
      onClick={() => haptic()}
    >
      {icon}
    </Link>
  )
}

export function NavMobile({ items }: { items: NavItem<Route>[] }) {
  const pathname = usePathname()

  const quickLinks = items.filter(({ href }) => href in QUICK_LINK_ICONS)
  const moreLinks = items.filter(({ href }) => href in MORE_LINK_ICONS)

  const isAnyMoreActive = moreLinks.some(({ href }) =>
    pathname?.startsWith(href)
  )

  // Settle the visible row to whichever section the current page belongs to,
  // so tapping a link from the secondary row keeps that row on screen.
  // State is adjusted during render (React's recommended pattern) to re-settle
  // whenever navigation crosses between the primary and secondary sections.
  const [open, setOpen] = useState(isAnyMoreActive)
  const [prevMoreActive, setPrevMoreActive] = useState(isAnyMoreActive)
  if (prevMoreActive !== isAnyMoreActive) {
    setPrevMoreActive(isAnyMoreActive)
    setOpen(isAnyMoreActive)
  }

  const renderLinks = (links: NavItem<Route>[], icons: Record<string, React.ReactNode>) =>
    links.map(({ title, href }) => {
      const isActive =
        pathname === href ||
        (href === "/"
          ? ["/", "/index"].includes(pathname || "")
          : pathname?.startsWith(href))

      return (
        <NavIconLink
          key={href}
          href={href}
          title={title}
          icon={icons[href]}
          isActive={Boolean(isActive)}
        />
      )
    })

  if (moreLinks.length === 0) {
    return (
      <nav className="flex items-center gap-1" aria-label="Main">
        {renderLinks(quickLinks, QUICK_LINK_ICONS)}
      </nav>
    )
  }

  return (
    <div className="flex shrink-0 items-center gap-1">
      <nav aria-label="Main">
        <NavSwapTrack
          open={open}
          gapClassName="gap-1"
          primary={renderLinks(quickLinks, QUICK_LINK_ICONS)}
          secondary={renderLinks(moreLinks, MORE_LINK_ICONS)}
        />
      </nav>

      <span className="mx-0.5 h-5 w-px shrink-0 bg-border" aria-hidden />

      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Show main pages" : "Show more pages"}
        data-state={open ? "open" : "closed"}
        className="group shrink-0 touch-manipulation outline-none focus-visible:rounded-lg focus-visible:ring-2 focus-visible:ring-ring/50"
        onClick={() => {
          haptic()
          setOpen((prev) => !prev)
        }}
      >
        <span
          className={cn(
            "flex size-8 items-center justify-center rounded-lg text-muted-foreground",
            // Rotation is synced to the row-slide easing/duration so the arrow
            // turns in lockstep with the sliding icons.
            "transition-[color,background-color,transform] duration-[380ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:text-foreground",
            "group-data-[state=open]:bg-accent group-data-[state=open]:text-foreground group-data-[state=open]:rotate-180",
            "motion-reduce:transition-none motion-reduce:group-data-[state=open]:rotate-0",
            "[&_svg]:size-4.5"
          )}
        >
          <ChevronRightIcon aria-hidden />
        </span>
      </button>
    </div>
  )
}

export default NavMobile
