import Image from "next/image"

import { ContactBar } from "@/components/contact-bar"
import { PortfolioCard } from "@/components/portfolio-card"
import { BrandBoard } from "@/components/portfolio/brand-board"
import { LogoMarquee } from "@/components/portfolio/logo-marquee"
import { PortfolioHero } from "@/components/portfolio/portfolio-hero"
import { PosterMockup } from "@/components/portfolio/poster-mockup"
import { StationeryMockup } from "@/components/portfolio/stationery-mockup"
import { BRAND_IDENTITIES, POSTER_DESIGNS } from "@/data/brands"
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS } from "@/data/portfolio"
import { PROFILE } from "@/data/profile"

export const metadata = {
  title: `Portfolio — ${PROFILE.name}`,
  description: "Brand identity, logo design, print, photo, video, and digital creative work.",
}

const PHOTO_SAMPLES = [
  "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&q=80",
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80",
  "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80",
  "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80",
]

export default function PortfolioPage() {
  const featuredBrands = BRAND_IDENTITIES.slice(0, 2)
  const gridBrands = BRAND_IDENTITIES.slice(2)
  const stationeryBrands = [BRAND_IDENTITIES[2], BRAND_IDENTITIES[6], BRAND_IDENTITIES[4]]

  return (
    <div className="page-glow">
      <PortfolioHero />
      <LogoMarquee brands={BRAND_IDENTITIES} />

      <section className="mb-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="section-label mb-2">01 — Identity</p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Brand systems
            </h2>
          </div>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {featuredBrands.map((brand) => (
            <BrandBoard key={brand.id} brand={brand} large />
          ))}
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {gridBrands.map((brand) => (
            <BrandBoard key={brand.id} brand={brand} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <p className="section-label mb-2">02 — Print</p>
        <h2 className="mb-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Posters & layouts
        </h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div className="md:col-span-2 xl:row-span-2">
            <PosterMockup poster={POSTER_DESIGNS[3]!} tall />
          </div>
          <PosterMockup poster={POSTER_DESIGNS[0]!} />
          <PosterMockup poster={POSTER_DESIGNS[1]!} />
          <PosterMockup poster={POSTER_DESIGNS[2]!} />
        </div>
      </section>

      <section className="mb-16">
        <p className="section-label mb-2">03 — Collateral</p>
        <h2 className="mb-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Stationery & print
        </h2>
        <div className="grid gap-5 lg:grid-cols-3">
          {stationeryBrands.map((brand) => (
            <StationeryMockup key={brand.id} brand={brand} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <p className="section-label mb-2">04 — Lens</p>
        <h2 className="mb-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Photo & motion
        </h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {PHOTO_SAMPLES.map((src, i) => (
            <div
              key={src}
              className={`bento-card group relative overflow-hidden ${
                i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto md:min-h-[320px]" : "aspect-square"
              }`}
            >
              <Image
                src={src}
                alt={`Photo sample ${i + 1}`}
                fill
                className="image-zoom object-cover"
                sizes="(max-width: 768px) 50vw, 16vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </section>

      {PORTFOLIO_CATEGORIES.map((category, index) => {
        const items = PORTFOLIO_ITEMS.filter((item) => item.category === category.id)
        if (items.length === 0) return null

        return (
          <section key={category.id} className="mb-14 scroll-mt-24">
            <p className="section-label mb-2">{String(index + 5).padStart(2, "0")} — {category.label}</p>
            <div className="grid gap-6 lg:grid-cols-2">
              {items.map((item) => (
                <PortfolioCard key={item.id} item={item} featured={item.featured} />
              ))}
            </div>
          </section>
        )
      })}

      <ContactBar />
    </div>
  )
}
