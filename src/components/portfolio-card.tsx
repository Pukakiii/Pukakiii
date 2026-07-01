import Image from "next/image"
import Link from "next/link"

import type { PortfolioItem } from "@/data/portfolio"

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <article className="overflow-hidden rounded-xl border border-border bg-background">
      {item.image ? (
        <div className="relative aspect-[16/10] bg-muted">
          <Image
            src={item.image}
            alt={item.imageAlt ?? item.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ) : null}

      {item.logos ? (
        <div className="grid grid-cols-2 gap-3 border-b border-border bg-muted/30 p-4 sm:grid-cols-4">
          {item.logos.map((logo) => (
            <div
              key={logo.name}
              className="flex flex-col items-center gap-2 rounded-lg border border-border bg-background p-3"
            >
              <div className="relative h-10 w-10">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                  sizes="40px"
                  unoptimized={logo.src.startsWith("https://cdn.simpleicons.org")}
                />
              </div>
              <span className="text-center text-[10px] leading-tight text-muted-foreground">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      ) : null}

      <div className="space-y-2 p-5">
        <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
        {item.link ? (
          <Link
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm link-accent"
          >
            {item.linkLabel ?? item.link} →
          </Link>
        ) : null}
      </div>
    </article>
  )
}
