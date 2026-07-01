import Image from "next/image"

import type { BrandIdentity } from "@/data/brands"

export function LogoWall({ brands }: { brands: BrandIdentity[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
      {brands.map((brand) => (
        <div
          key={brand.id}
          className="flex aspect-square flex-col items-center justify-center gap-2 rounded-xl border border-border p-3 transition-transform hover:scale-[1.03]"
          style={{ backgroundColor: brand.colors[0] }}
        >
          <div className="relative h-12 w-12 sm:h-14 sm:w-14">
            <Image src={brand.logo} alt={brand.name} fill className="object-contain" sizes="56px" />
          </div>
          <span
            className="text-center text-[9px] font-medium uppercase tracking-wider sm:text-[10px]"
            style={{ color: brand.colors[3] ?? brand.colors[2] }}
          >
            {brand.name.split(" ")[0]}
          </span>
        </div>
      ))}
    </div>
  )
}
