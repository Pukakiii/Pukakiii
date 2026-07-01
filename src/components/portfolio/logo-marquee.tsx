import Image from "next/image"

import type { BrandIdentity } from "@/data/brands"

export function LogoMarquee({ brands }: { brands: BrandIdentity[] }) {
  const items = [...brands, ...brands]

  return (
    <div className="glass-card mb-14 overflow-hidden py-5">
      <div className="marquee-track gap-4 px-2">
        {items.map((brand, i) => (
          <div
            key={`${brand.id}-${i}`}
            className="flex w-36 shrink-0 flex-col items-center gap-3 rounded-xl border border-border/60 p-4"
            style={{ backgroundColor: brand.colors[0] }}
          >
            <div className="relative h-12 w-12">
              <Image src={brand.logo} alt={brand.name} fill className="object-contain" sizes="48px" />
            </div>
            <span
              className="text-center text-[10px] font-semibold uppercase tracking-wider"
              style={{ color: brand.colors[3] ?? brand.colors[2] }}
            >
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
