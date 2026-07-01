import Image from "next/image"

import type { BrandIdentity } from "@/data/brands"

export function StationeryMockup({ brand }: { brand: BrandIdentity }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-muted/20">
      <div className="grid grid-cols-5 gap-0">
        <div
          className="col-span-3 flex aspect-[1.6/1] flex-col justify-between p-4 sm:p-5"
          style={{ backgroundColor: brand.colors[3] ?? "#fff" }}
        >
          <div className="relative h-8 w-8 sm:h-10 sm:w-10">
            <Image src={brand.logo} alt={brand.name} fill className="object-contain" sizes="40px" />
          </div>
          <div>
            <p className="text-xs font-semibold sm:text-sm" style={{ color: brand.colors[0] }}>
              {brand.name}
            </p>
            <p className="text-[10px] opacity-60" style={{ color: brand.colors[0] }}>
              {brand.tagline}
            </p>
          </div>
        </div>
        <div
          className="col-span-2 flex aspect-[1.6/1] items-center justify-center p-3"
          style={{ backgroundColor: brand.colors[0] }}
        >
          <div className="relative h-14 w-14 sm:h-16 sm:w-16">
            <Image src={brand.logo} alt={brand.name} fill className="object-contain" sizes="64px" />
          </div>
        </div>
      </div>
      <div className="border-t border-border px-4 py-2">
        <p className="text-[10px] text-muted-foreground">
          Business card · Letterhead · {brand.industry}
        </p>
      </div>
    </div>
  )
}
