"use client"

import type { Route } from "next"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDownIcon } from "lucide-react"

import type { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Nav } from "@/components/nav"

export function NavDesktop({
  items,
  moreItems,
}: {
  items: NavItem<Route>[]
  moreItems?: NavItem<Route>[]
}) {
  const pathname = usePathname()

  return (
    <div className="flex items-center gap-4 max-sm:hidden">
      <Nav items={items} activeId={pathname} />

      {moreItems && moreItems.length > 0 && (
        <NavMoreDropdown items={moreItems} activeId={pathname} />
      )}
    </div>
  )
}

function NavMoreDropdown({
  items,
  activeId,
}: {
  items: NavItem<Route>[]
  activeId?: string
}) {
  const isAnyActive = items.some((item) => activeId?.startsWith(item.href))

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "flex items-center gap-1 text-sm font-medium tracking-wide text-muted-foreground transition-[color] outline-none hover:text-foreground data-[state=open]:text-foreground",
          isAnyActive && "text-foreground"
        )}
      >
        More
        <ChevronDownIcon className="size-3.5" aria-hidden />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {items.map(({ title, href }) => {
          const isActive = activeId?.startsWith(href)

          return (
            <DropdownMenuItem key={href} asChild>
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                className="aria-[current=page]:text-foreground aria-[current=page]:font-medium"
              >
                {title}
              </Link>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
