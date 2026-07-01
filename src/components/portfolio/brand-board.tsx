import Image from "next/image"

import type { BrandIdentity } from "@/data/brands"

export function BrandBoard({ brand }: { brand: BrandIdentity }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-shadow hover:shadow-md">
      <div
        className="relative flex aspect-[4/3] flex-col items-center justify-center gap-3 p-6"
        style={{ backgroundColor: brand.colors[0] }}
      >
        <div className="relative h-24 w-24 transition-transform group-hover:scale-105 sm:h-28 sm:w-28">
          <Image src={brand.logo} alt={`${brand.name} logo`} fill className="object-contain" sizes="112px" />
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold tracking-wide text-white" style={{ color: brand.colors[3] ?? "#fff" }}>
            {brand.name}
          </p>
          <p className="mt-0.5 text-xs opacity-80" style={{ color: brand.colors[2] ?? "#fff" }}>
            {brand.tagline}
          </p>
        </div>
      </div>

      <div className="space-y-3 p-4">
        <div className="flex gap-1">
          {brand.colors.map((color) => (
            <div
              key={color}
              className="h-6 flex-1 rounded-md border border-border/50 first:rounded-l-lg last:rounded-r-lg"
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{brand.industry}</span>
          <span className="text-[10px] text-muted-foreground">{brand.typeface}</span>
        </div>
        <p className="text-xs leading-relaxed text-muted-foreground">{brand.description}</p>
      </div>
    </article>
  )
}
