import Image from "next/image"
import Link from "next/link"

import type { PortfolioItem } from "@/data/portfolio"

export function PortfolioCard({ item, featured = false }: { item: PortfolioItem; featured?: boolean }) {
  return (
    <article className={`bento-card group ${featured ? "lg:col-span-2" : ""}`}>
      {item.image ? (
        <div className={`relative overflow-hidden ${featured ? "aspect-[21/9]" : "aspect-[16/10]"}`}>
          <Image
            src={item.image}
            alt={item.imageAlt ?? item.title}
            fill
            className="image-zoom object-cover"
            sizes={featured ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{item.title}</h3>
          </div>
        </div>
      ) : null}

      {item.logos ? (
        <div className="grid grid-cols-3 gap-2 border-b border-border/60 bg-muted/20 p-4 sm:grid-cols-4 lg:grid-cols-6">
          {item.logos.map((logo) => (
            <div
              key={logo.name}
              className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-background/80 p-3 transition-transform hover:-translate-y-1"
            >
              <div className="relative h-8 w-8 sm:h-9 sm:w-9">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                  sizes="36px"
                  unoptimized={logo.src.startsWith("https://")}
                />
              </div>
              <span className="text-center text-[9px] leading-tight text-muted-foreground">{logo.name}</span>
            </div>
          ))}
        </div>
      ) : null}

      <div className="space-y-3 p-5">
        {!item.image ? (
          <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
        ) : null}
        <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
        {item.link ? (
          <Link
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium link-accent"
          >
            {item.linkLabel ?? item.link} →
          </Link>
        ) : null}
      </div>
    </article>
  )
}
