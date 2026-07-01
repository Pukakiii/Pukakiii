import type { Metadata } from "next"
import Link from "next/link"

import { ContactBar } from "@/components/contact-bar"
import { PortfolioCard } from "@/components/portfolio-card"
import { BrandBoard } from "@/components/portfolio/brand-board"
import { LogoWall } from "@/components/portfolio/logo-wall"
import { PosterMockup } from "@/components/portfolio/poster-mockup"
import { StationeryMockup } from "@/components/portfolio/stationery-mockup"
import { BRAND_IDENTITIES, POSTER_DESIGNS } from "@/data/brands"
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS } from "@/data/portfolio"
import { PROFILE } from "@/data/profile"

export const metadata: Metadata = {
  title: `Portfolio — ${PROFILE.name}`,
  description: "Brand identity, logo design, print, photo, video, and digital creative work.",
}

export default function PortfolioPage() {
  const featuredBrands = BRAND_IDENTITIES.slice(0, 4)
  const moreBrands = BRAND_IDENTITIES.slice(4)
  const stationeryBrands = [BRAND_IDENTITIES[2], BRAND_IDENTITIES[6], BRAND_IDENTITIES[0]]

  return (
    <>
      <header className="mb-12 space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Portfolio
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Brand identities, logo systems, print design, and multimedia work — including three years
          at{" "}
          <a
            href="https://dreampire.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent"
          >
            Dreampire
          </a>
          .
        </p>
        <Link href="/" className="inline-block text-sm link-accent">
          ← Back to resume
        </Link>
      </header>

      {/* Logo wall */}
      <section className="mb-14">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
          Logo collection
        </h2>
        <LogoWall brands={BRAND_IDENTITIES} />
      </section>

      {/* Brand identity boards */}
      <section className="mb-14">
        <h2 className="mb-5 text-xs font-semibold uppercase tracking-widest text-accent">
          Brand identity systems
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {featuredBrands.map((brand) => (
            <BrandBoard key={brand.id} brand={brand} />
          ))}
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {moreBrands.map((brand) => (
            <BrandBoard key={brand.id} brand={brand} />
          ))}
        </div>
      </section>

      {/* Poster designs */}
      <section className="mb-14">
        <h2 className="mb-5 text-xs font-semibold uppercase tracking-widest text-accent">
          Posters & print layouts
        </h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {POSTER_DESIGNS.map((poster) => (
            <PosterMockup key={poster.id} poster={poster} />
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Event posters, flyers, and promotional layouts — typography, hierarchy, and print-ready
          export from Adobe Illustrator & InDesign.
        </p>
      </section>

      {/* Stationery */}
      <section className="mb-14">
        <h2 className="mb-5 text-xs font-semibold uppercase tracking-widest text-accent">
          Stationery & collateral
        </h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {stationeryBrands.map((brand) => (
            <StationeryMockup key={brand.id} brand={brand} />
          ))}
        </div>
      </section>

      {/* Photo strip */}
      <section className="mb-14">
        <h2 className="mb-5 text-xs font-semibold uppercase tracking-widest text-accent">
          Photo & video
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&q=80",
            "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&q=80",
            "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&q=80",
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80",
          ].map((src, i) => (
            <div key={src} className="relative aspect-square overflow-hidden rounded-xl border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={`Photo & video sample ${i + 1}`} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Category sections */}
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
                <PortfolioCard key={item.id} item={item} featured={item.featured} />
              ))}
            </div>
          </section>
        )
      })}

      <ContactBar />
    </>
  )
}
