import { SITE_INFO } from "@/config/site"
import { getBlogPosts } from "@/features/doc/data/documents"
import { USER } from "@/features/portfolio/data/user"

export const dynamic = "force-static"

function escapeXml(value: string) {
 return value
 .replaceAll("&", "&amp;")
 .replaceAll("<", "&lt;")
 .replaceAll(">", "&gt;")
 .replaceAll('"', "&quot;")
 .replaceAll("'", "&apos;")
}

export async function GET() {
 const posts = getBlogPosts()

 const items = posts
 .map(
 (post) => ` <item>
 <title>${escapeXml(post.metadata.title)}</title>
 <link>${SITE_INFO.url}/blog/${post.slug}</link>
 <guid>${SITE_INFO.url}/blog/${post.slug}</guid>
 <description>${escapeXml(post.metadata.description ?? "")}</description>
 <pubDate>${new Date(post.metadata.createdAt).toUTCString()}</pubDate>
 </item>`
 )
 .join("\n")

 const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
 <channel>
 <title>${escapeXml(`${USER.displayName} — Blog`)}</title>
 <link>${SITE_INFO.url}/blog</link>
 <description>${escapeXml(SITE_INFO.description)}</description>
 <language>en</language>
${items}
 </channel>
</rss>`

 return new Response(xml, {
 headers: {
 "Content-Type": "application/rss+xml; charset=utf-8",
 },
 })
}
