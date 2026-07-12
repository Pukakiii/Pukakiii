"use client"

import {
  createContext,
  useCallback,
  useContext,
  useState,
  useSyncExternalStore,
} from "react"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/base/ui/button"
import { Collapsible } from "@/components/base/collapsible-animated"
import type { ExperiencePositionCategory } from "@/features/portfolio/types/experiences"

export type ExperienceTab = ExperiencePositionCategory | "all"

const TAB_LABELS: Record<ExperienceTab, string> = {
  all: "All",
  developer: "Developer",
  marketing: "Marketing",
  creative: "Creative",
  operations: "Operations",
}

const LIST_ID = "experience-list"

const ExperienceFilterContext = createContext<{
  activeTab: ExperienceTab
  showAll: boolean
}>({ activeTab: "all", showAll: false })

// The active tab is derived from the URL (?tab=). `pushState` doesn't emit a
// popstate event, so `selectTab` dispatches this one to notify the store.
const TAB_CHANGE_EVENT = "experience-tab-change"

function subscribeToTab(callback: () => void) {
  window.addEventListener("popstate", callback)
  window.addEventListener(TAB_CHANGE_EVENT, callback)
  return () => {
    window.removeEventListener("popstate", callback)
    window.removeEventListener(TAB_CHANGE_EVENT, callback)
  }
}

function readTabFromLocation(
  categories: ExperiencePositionCategory[]
): ExperienceTab {
  const param = new URLSearchParams(window.location.search).get("tab")
  return (categories as string[]).includes(param || "")
    ? (param as ExperienceTab)
    : "all"
}

function scrollToFirstMatch(tab: ExperienceTab) {
  if (tab === "all") return

  const target = document.querySelector<HTMLElement>(
    `[data-experience-track~="${tab}"]`
  )
  target?.scrollIntoView({ behavior: "smooth", block: "start" })
}

/**
 * Simple horizontal-scroll track filter for /experience. Matching roles stay
 * expanded and sort first; the full timeline remains visible underneath.
 */
export function ExperienceFilter({
  categories,
  hasOverflow,
  children,
}: {
  categories: ExperiencePositionCategory[]
  hasOverflow: boolean
  children: React.ReactNode
}) {
  // Subscribe to the URL as the source of truth; renders "all" on the server
  // and during hydration, then settles to the real tab on the client.
  const activeTab = useSyncExternalStore(
    subscribeToTab,
    () => readTabFromLocation(categories),
    () => "all" as ExperienceTab
  )
  const [showAll, setShowAll] = useState(false)

  const selectTab = useCallback(
    (tab: ExperienceTab) => {
      if (tab === activeTab) {
        scrollToFirstMatch(tab)
        return
      }

      window.history.pushState(
        null,
        "",
        tab === "all"
          ? window.location.pathname
          : `${window.location.pathname}?tab=${tab}`
      )
      window.dispatchEvent(new Event(TAB_CHANGE_EVENT))
      requestAnimationFrame(() => scrollToFirstMatch(tab))
    },
    [activeTab]
  )

  const tabs: ExperienceTab[] = ["all", ...categories]

  return (
    <ExperienceFilterContext.Provider value={{ activeTab, showAll }}>
      <nav
        aria-label="Experience tracks"
        className="border-b border-line bg-background"
      >
        <div className="flex gap-1.5 overflow-x-auto px-4 py-2.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {tabs.map((tab) => {
            const isActive = tab === activeTab

            return (
              <button
                key={tab}
                type="button"
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "shrink-0 rounded-full px-3 py-1 text-sm font-medium tracking-wide whitespace-nowrap transition-[color,background-color]",
                  "outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
                  isActive
                    ? "bg-accent text-foreground"
                    : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                )}
                onClick={() => selectTab(tab)}
              >
                {TAB_LABELS[tab]}
              </button>
            )
          })}
        </div>
      </nav>

      <div id={LIST_ID} className="flex flex-col">
        {children}
      </div>

      {activeTab === "all" && hasOverflow && (
        <div className="flex items-center justify-center py-2">
          <Button
            className="gap-2 pr-2.5 pl-3"
            variant="secondary"
            size="sm"
            aria-expanded={showAll}
            aria-controls={LIST_ID}
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Show less" : "Show more"}
            <ChevronDownIcon
              className={cn(
                "transition-transform motion-reduce:transition-none",
                showAll && "rotate-180"
              )}
            />
          </Button>
        </div>
      )}
    </ExperienceFilterContext.Provider>
  )
}

export function ExperienceCompanyShell({
  categories,
  overflow = false,
  children,
}: {
  categories: ExperiencePositionCategory[]
  overflow?: boolean
  children: React.ReactNode
}) {
  const { activeTab, showAll } = useContext(ExperienceFilterContext)

  const filtering = activeTab !== "all"
  const demoted =
    filtering && !categories.includes(activeTab as ExperiencePositionCategory)
  const hidden = !filtering && overflow && !showAll
  const isMatch =
    filtering &&
    categories.includes(activeTab as ExperiencePositionCategory)

  return (
    <div
      data-experience-track={categories.join(" ")}
      className={cn(
        "order-1 scroll-mt-28",
        isMatch && "order-0",
        demoted && "order-2 opacity-70",
        hidden && "hidden"
      )}
    >
      {children}
    </div>
  )
}

export function ExperiencePositionCollapsible({
  category,
  defaultOpen = false,
  disabled = false,
  className,
  children,
}: {
  category?: ExperiencePositionCategory
  defaultOpen?: boolean
  disabled?: boolean
  className?: string
  children: React.ReactNode
}) {
  const { activeTab } = useContext(ExperienceFilterContext)

  // Reset the manual open/closed override whenever the active tab changes
  // (adjusting state during render, React's recommended pattern).
  const [userOpen, setUserOpen] = useState<boolean | null>(null)
  const [prevTab, setPrevTab] = useState(activeTab)
  if (prevTab !== activeTab) {
    setPrevTab(activeTab)
    setUserOpen(null)
  }

  const filtering = activeTab !== "all"
  const emphasized = filtering && category === activeTab
  const demoted = filtering && !emphasized

  const open = disabled
    ? false
    : (userOpen ?? (filtering ? emphasized : defaultOpen))

  return (
    <Collapsible
      className={cn(
        className,
        "order-1",
        demoted &&
          "order-2 opacity-60 [&_h4]:text-sm [&_[data-slot=experience-skills]]:hidden"
      )}
      open={open}
      onOpenChange={setUserOpen}
      disabled={disabled}
    >
      {children}
    </Collapsible>
  )
}
