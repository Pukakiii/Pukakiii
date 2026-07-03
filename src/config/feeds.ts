/**
 * External RSS/Atom feeds aggregated in the Feed section on /blog.
 *
 * Configure via `RSS_FEED_URLS` — a comma-separated list of feed URLs.
 * The section is hidden when no URLs are configured.
 */
export const EXTERNAL_RSS_FEEDS: string[] = (process.env.RSS_FEED_URLS ?? "")
  .split(",")
  .map((url) => url.trim())
  .filter(Boolean)
