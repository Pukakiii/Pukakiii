"use client"

import Link from "next/link"
import { copyText } from "@/utils/copy"
import { useTiks } from "@rexa-developer/tiks/react"
import { SquareDashed, Type } from "lucide-react"
import { toast } from "sonner"

import {
 ContextMenu,
 ContextMenuContent,
 ContextMenuItem,
 ContextMenuSeparator,
 ContextMenuTrigger,
} from "@/components/ui/context-menu"

import { BrandMark, getMarkSVG } from "./brand-mark"
import { getWordmarkSVG } from "./portfolio-wordmark"

export function BrandContextMenu({ children }: { children: React.ReactNode }) {
 const { success } = useTiks()

 return (
 <ContextMenu>
 <ContextMenuTrigger>{children}</ContextMenuTrigger>

 <ContextMenuContent className="w-fit">
 <ContextMenuItem
 onClick={() => {
 copyText(getMarkSVG())
 toast.success("Mark as SVG copied")
 success()
 }}
 >
 <BrandMark />
 Copy Mark as SVG
 </ContextMenuItem>

 <ContextMenuItem
 onClick={() => {
 copyText(getWordmarkSVG())
 toast.success("Logotype as SVG copied")
 success()
 }}
 >
 <Type />
 Copy Logotype as SVG
 </ContextMenuItem>

 <ContextMenuSeparator />

 <ContextMenuItem asChild>
          <Link href="/blog/portfolio-brand">
            <SquareDashed />
            Brand Guidelines
          </Link>
        </ContextMenuItem>
 </ContextMenuContent>
 </ContextMenu>
 )
}

export default BrandContextMenu
