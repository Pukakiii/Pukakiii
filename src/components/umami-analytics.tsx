import Script from "next/script"

import { isUmamiEnabled, UMAMI_URL, UMAMI_WEBSITE_ID } from "@/lib/umami"

/**
 * Umami tracker. Renders nothing unless NEXT_PUBLIC_UMAMI_URL and
 * NEXT_PUBLIC_UMAMI_WEBSITE_ID are set, so local/dev stays silent.
 */
export function UmamiAnalytics() {
 if (!isUmamiEnabled) return null

 return (
 <Script
 src={`${UMAMI_URL}/script.js`}
 data-website-id={UMAMI_WEBSITE_ID}
 strategy="afterInteractive"
 />
 )
}
