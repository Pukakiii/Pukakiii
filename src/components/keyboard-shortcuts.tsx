"use client"

import type { Route } from "next"
import { useRouter } from "next/navigation"
import { useHotkeys } from "react-hotkeys-hook"

import { trackEvent } from "@/lib/events"

export function KeyboardShortcuts() {
 const router = useRouter()

 const navigate = (path: Route, keys: string) => {
 trackEvent({
 name: "keyboard_shortcut_navigate",
 properties: { path, keys },
 })
 router.push(path)
 }

 useHotkeys("g>h", () => navigate("/", "g>h"))
 useHotkeys("g>c", () => navigate("/components", "g>c"))
 useHotkeys("g>b", () => navigate("/blocks", "g>b"))
 useHotkeys("g>l", () => navigate("/blog", "g>l"))

 return null
}
