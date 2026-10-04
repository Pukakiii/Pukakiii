// Self-hosted Umami (https://umami.is).
// Both are public anyway (they ship in the page HTML), so they live here as
// defaults; env vars still override them.
export const UMAMI_URL = (
 process.env.NEXT_PUBLIC_UMAMI_URL || "https://umami-gold-iota.vercel.app"
).replace(/\/+$/, "")
export const UMAMI_WEBSITE_ID =
 process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID ||
 "e6a682a4-2907-405e-b2b9-6308bc737196"

export const isUmamiEnabled = Boolean(UMAMI_URL && UMAMI_WEBSITE_ID)

export type UmamiEventData = Record<string, string | number | boolean | null>

type UmamiTracker = {
 track: (name: string, data?: UmamiEventData) => void
}

declare global {
 interface Window {
 umami?: UmamiTracker
 }
}

/** Sends a custom event via the Umami tracker script, if it is loaded. */
export function umamiTrack(name: string, data?: UmamiEventData) {
 if (typeof window === "undefined") return
 window.umami?.track(name, data)
}
