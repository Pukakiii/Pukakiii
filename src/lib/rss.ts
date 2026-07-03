import "server-only"

import { unstable_cache } from "next/cache"

import { EXTERNAL_RSS_FEEDS } from "@/config/feeds"

export type FeedItem = {
  title: string
  link: string
  source: string
  publishedAt: string | null
}

function decodeEntities(value: string): string {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&apos;", "'")
}

function textOf(block: string, tag: string): string | null {
  const match = block.match(
    new RegExp(`<${tag}[^>]*>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${tag}>`, "i")
  )
  return match ? decodeEntities(match[1].trim()) : null
}

/**
 * Minimal RSS 2.0 / Atom parser — extracts title, link, and date per entry.
 * Intentionally dependency-free; tolerant of missing fields.
 */
function parseFeed(xml: string, sourceUrl: string): FeedItem[] {
  const sourceTitle =
    textOf(xml.slice(0, xml.search(/<(item|entry)[\s>]/i)), "title") ??
    new URL(sourceUrl).hostname

  const blocks = [
    ...xml.matchAll(/<(?:item|entry)[\s>][\s\S]*?<\/(?:item|entry)>/gi),
  ].map((m) => m[0])

  return blocks.flatMap((block) => {
    const title = textOf(block, "title")

    // RSS: <link>url</link>; Atom: <link href="url"/>
    const link =
      textOf(block, "link") ||
      block.match(/<link[^>]*href="([^"]+)"[^>]*\/?>/i)?.[1] ||
      null

    const publishedAt =
      textOf(block, "pubDate") ??
      textOf(block, "published") ??
      textOf(block, "updated")

    if (!title || !link) return []

    return [
      {
        title,
        link: decodeEntities(link),
        source: sourceTitle,
        publishedAt,
      },
    ]
  })
}

export const getExternalFeedItems = unstable_cache(
  async (): Promise<FeedItem[]> => {
    if (EXTERNAL_RSS_FEEDS.length === 0) return []

    const results = await Promise.allSettled(
      EXTERNAL_RSS_FEEDS.map(async (url) => {
        const res = await fetch(url, {
          headers: { Accept: "application/rss+xml, application/atom+xml, application/xml, text/xml" },
        })
        if (!res.ok) return []
        return parseFeed(await res.text(), url)
      })
    )

    const items = results.flatMap((result) =>
      result.status === "fulfilled" ? result.value : []
    )

    return items
      .sort((a, b) => {
        const ta = a.publishedAt ? Date.parse(a.publishedAt) : 0
        const tb = b.publishedAt ? Date.parse(b.publishedAt) : 0
        return tb - ta
      })
      .slice(0, 20)
  },
  ["external-rss-feeds"],
  { revalidate: 3600 } // Cache for 1 hour
)
