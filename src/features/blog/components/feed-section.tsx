import { format } from "date-fns"
import { ArrowUpRightIcon, RssIcon } from "lucide-react"

import { getExternalFeedItems } from "@/lib/rss"
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/features/portfolio/components/panel"

/**
 * Aggregated external RSS/Atom feed items, rendered below the post list on
 * /blog. Hidden entirely when no feeds are configured (RSS_FEED_URLS).
 */
export async function FeedSection() {
  const items = await getExternalFeedItems()

  if (items.length === 0) {
    return null
  }

  return (
    <Panel id="feed">
      <PanelHeader>
        <PanelTitle>
          Feed
          <PanelTitleSup>({items.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <div className="flex flex-col">
        {items.map((item) => (
          <a
            key={item.link}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/feed-item flex items-center gap-4 border-b border-dashed border-line p-4 last:border-b-0 hover:bg-accent-muted"
          >
            <span className="flex-1">
              <span className="block leading-snug font-medium text-balance">
                {item.title}
              </span>
              <span className="mt-1 block text-sm text-muted-foreground">
                {item.source}
                {item.publishedAt && (
                  <> · {format(new Date(item.publishedAt), "dd.MM.yyyy")}</>
                )}
              </span>
            </span>

            <ArrowUpRightIcon className="size-4 shrink-0 text-muted-foreground transition-transform group-hover/feed-item:translate-x-0.5 group-hover/feed-item:-translate-y-0.5" />
          </a>
        ))}
      </div>

      <div className="screen-line-top flex items-center gap-1.5 px-4 py-2 text-sm text-muted-foreground">
        <RssIcon className="size-3.5" aria-hidden />
        <a className="hover:text-foreground" href="/rss.xml">
          Subscribe to my blog
        </a>
      </div>
    </Panel>
  )
}
