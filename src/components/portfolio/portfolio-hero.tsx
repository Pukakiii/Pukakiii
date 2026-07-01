import Image from "next/image"
import Link from "next/link"

import { BRAND_IDENTITIES } from "@/data/brands"
import { PROFILE } from "@/data/profile"

export function PortfolioHero() {
  const heroBrand = BRAND_IDENTITIES[0]
  const sideBrand = BRAND_IDENTITIES[5]

  return (
    <section className="page-glow fade-up mb-16">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="section-label mb-3">Selected work</p>
          <h1 className="portfolio-title max-w-4xl">
            Brand, print &{" "}
            <span className="bg-gradient-to-r from-accent to-orange-300 bg-clip-text text-transparent">
              visual craft
            </span>
          </h1>
        </div>
        <Link href="/" className="text-sm link-accent">
          ← Resume
        </Link>
      </div>

      <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-[220px_220px]">
        <article className="bento-card group relative lg:col-span-7 lg:row-span-2">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1626785774573-4b799314346d?w=1400&q=80"
              alt="Creative studio workspace"
              fill
              className="image-zoom object-cover"
              sizes="(max-width: 1024px) 100vw, 58vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
          <div className="relative flex h-full min-h-[320px] flex-col justify-end p-6 sm:min-h-[460px] sm:p-8">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-white/70">
              Dreampire · 3 years
            </p>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Agency production
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/80">
              Logos, brand systems, print, photo, and video for clients at{" "}
              <a href="https://dreampire.pl" className="underline decoration-white/40">
                dreampire.pl
              </a>
              .
            </p>
          </div>
        </article>

        <article
          className="bento-card group relative overflow-hidden lg:col-span-5"
          style={{ backgroundColor: heroBrand.colors[0] }}
        >
          <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full opacity-20 blur-2xl" style={{ backgroundColor: heroBrand.colors[2] }} />
          <div className="relative flex h-full min-h-[220px] flex-col items-center justify-center gap-4 p-6">
            <div className="float-slow relative h-24 w-24">
              <Image src={heroBrand.logo} alt={heroBrand.name} fill className="object-contain" sizes="96px" />
            </div>
            <div className="text-center">
              <p className="font-display text-xl font-bold" style={{ color: heroBrand.colors[3] }}>
                {heroBrand.name}
              </p>
              <p className="text-sm opacity-80" style={{ color: heroBrand.colors[2] }}>
                {heroBrand.tagline}
              </p>
            </div>
          </div>
        </article>

        <article
          className="bento-card group relative overflow-hidden lg:col-span-5"
          style={{ backgroundColor: sideBrand.colors[0] }}
        >
          <div className="relative flex h-full min-h-[220px] items-center justify-between gap-4 p-6">
            <div>
              <p className="section-label mb-2 !text-white/70">Brand system</p>
              <p className="font-display text-2xl font-bold text-white">{sideBrand.name}</p>
              <p className="mt-1 text-sm text-white/75">{sideBrand.industry}</p>
            </div>
            <div className="relative h-20 w-20 shrink-0">
              <Image src={sideBrand.logo} alt={sideBrand.name} fill className="object-contain" sizes="80px" />
            </div>
          </div>
        </article>
      </div>

      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        {PROFILE.name} — {PROFILE.title}. Warsaw-based creative work across identity, polygraphy,
        photography, and digital design.
      </p>
    </section>
  )
}
