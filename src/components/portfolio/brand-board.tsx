import { LogoImg } from "@/components/media"
import type { BrandIdentity } from "@/data/brands"

export function BrandBoard({ brand, large = false }: { brand: BrandIdentity; large?: boolean }) {
  return (
    <article className="bento-card group">
      <div
        className={`relative overflow-hidden ${large ? "aspect-[16/11]" : "aspect-[4/3]"}`}
        style={{ backgroundColor: brand.colors[0] }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at 20% 20%, ${brand.colors[2]}, transparent 55%)`,
          }}
        />
        <div className="relative flex h-full flex-col items-center justify-center gap-4 p-6">
          <div
            className={`transition-transform duration-500 group-hover:scale-110 ${
              large ? "h-32 w-32 sm:h-40 sm:w-40" : "h-20 w-20 sm:h-24 sm:w-24"
            }`}
          >
            <LogoImg
              src={brand.logo}
              alt={`${brand.name} logo`}
              className="h-full w-full object-contain drop-shadow-lg"
            />
          </div>
          <div className="text-center">
            <p
              className={`font-display font-bold tracking-tight ${large ? "text-2xl" : "text-lg"}`}
              style={{ color: brand.colors[3] ?? "#fff" }}
            >
              {brand.name}
            </p>
            <p className="mt-1 text-xs opacity-85" style={{ color: brand.colors[2] ?? "#fff" }}>
              {brand.tagline}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex gap-1.5">
          {brand.colors.map((color) => (
            <div
              key={color}
              className="h-7 flex-1 rounded-lg border border-border/40 shadow-sm transition-transform group-hover:-translate-y-0.5"
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>
        <div className="flex items-center justify-between gap-2 border-t border-border/60 pt-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {brand.industry}
          </span>
          <span className="text-[10px] text-muted-foreground">{brand.typeface}</span>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{brand.description}</p>
      </div>
    </article>
  )
}
