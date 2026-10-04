import Script from "next/script"

import { isUmamiEnabled, UMAMI_URL, UMAMI_WEBSITE_ID } from "@/lib/umami"

// Only production builds report, so dev and Vercel previews don't skew stats.
const shouldTrack =
 process.env.NODE_ENV === "production" && process.env.VERCEL_ENV !== "preview"

/** Umami tracker. Renders nothing outside production deployments. */
export function UmamiAnalytics() {
 if (!isUmamiEnabled || !shouldTrack) return null

 return (
 <Script
 src={`${UMAMI_URL}/script.js`}
 data-website-id={UMAMI_WEBSITE_ID}
 strategy="afterInteractive"
 />
 )
}
