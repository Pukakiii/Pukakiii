import type { Metadata } from "next"
import Link from "next/link"

import { PortfolioCard } from "@/components/portfolio-card"
import { ContactBar } from "@/components/contact-bar"
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS } from "@/data/portfolio"
import { PROFILE } from "@/data/profile"

export const metadata: Metadata = {
  title: `Portfolio — ${PROFILE.name}`,
  description: "Brand identity, print, photo, video, and digital design work.",
}

export default function PortfolioPage() {
  return (
    <>
      <header className="mb-10 space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Portfolio
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Selected creative work — brand identity, print & polygraphy, photo & video, and digital
          projects. Three years of production experience at{" "}
          <a href="https://dreampire.pl" target="_blank" rel="noopener noreferrer" className="link-accent">
            Dreampire
          </a>
          .
        </p>
        <Link href="/" className="inline-block text-sm link-accent">
          ← Back to resume
        </Link>
      </header>

      {PORTFOLIO_CATEGORIES.map((category) => {
        const items = PORTFOLIO_ITEMS.filter((item) => item.category === category.id)
        if (items.length === 0) return null

        return (
          <section key={category.id} className="mb-12 scroll-mt-20">
            <h2 className="mb-5 text-xs font-semibold uppercase tracking-widest text-accent">
              {category.label}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {items.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        )
      })}

      <ContactBar />
    </>
  )
}
