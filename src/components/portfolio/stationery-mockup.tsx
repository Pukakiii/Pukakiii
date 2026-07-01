import Image from "next/image"

import type { BrandIdentity } from "@/data/brands"

export function StationeryMockup({ brand }: { brand: BrandIdentity }) {
  return (
    <div className="bento-card overflow-hidden">
      <div className="grid grid-cols-5">
        <div
          className="col-span-3 flex min-h-[180px] flex-col justify-between p-5 sm:min-h-[200px] sm:p-6"
          style={{ backgroundColor: brand.colors[3] ?? "#fff" }}
        >
          <div className="relative h-10 w-10">
            <Image src={brand.logo} alt={brand.name} fill className="object-contain" sizes="40px" />
          </div>
          <div>
            <p className="font-display text-lg font-bold" style={{ color: brand.colors[0] }}>
              {brand.name}
            </p>
            <p className="text-xs opacity-60" style={{ color: brand.colors[0] }}>
              {brand.tagline}
            </p>
          </div>
        </div>
        <div
          className="col-span-2 flex min-h-[180px] items-center justify-center p-4 sm:min-h-[200px]"
          style={{ backgroundColor: brand.colors[0] }}
        >
          <div className="relative h-16 w-16 sm:h-20 sm:w-20">
            <Image src={brand.logo} alt={brand.name} fill className="object-contain drop-shadow-md" sizes="80px" />
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 bg-muted/30 px-5 py-3">
        <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
          Business card · Letterhead · {brand.industry}
        </p>
      </div>
    </div>
  )
}
