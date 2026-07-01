import type { PosterDesign } from "@/data/brands"

export function PosterMockup({ poster }: { poster: PosterDesign }) {
  const titleLines = poster.title.split("\n")

  return (
    <div
      className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border shadow-sm"
      style={{ backgroundColor: poster.bg, color: poster.text }}
    >
      {poster.style === "bold" ? (
        <>
          <div className="absolute inset-x-0 top-0 h-2" style={{ backgroundColor: poster.accent }} />
          <div className="flex h-full flex-col justify-between p-5">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em]" style={{ color: poster.accent }}>
              Live music
            </p>
            <div>
              <h3 className="text-2xl font-black leading-none tracking-tight sm:text-3xl">{poster.title}</h3>
              <p className="mt-3 text-[11px] leading-relaxed opacity-80">{poster.subtitle}</p>
            </div>
            <div className="flex items-end justify-between">
              <div className="h-10 w-10 rounded-full border-2" style={{ borderColor: poster.accent }} />
              <p className="text-[9px] uppercase tracking-widest opacity-60">Designed in Illustrator</p>
            </div>
          </div>
        </>
      ) : null}

      {poster.style === "editorial" ? (
        <div className="flex h-full flex-col justify-between p-5">
          <p className="text-[10px] uppercase tracking-[0.25em] opacity-50">Exhibition</p>
          <div>
            {titleLines.map((line) => (
              <h3 key={line} className="font-serif text-2xl font-light italic leading-tight sm:text-3xl">
                {line}
              </h3>
            ))}
            <div className="mt-4 h-px w-12" style={{ backgroundColor: poster.accent }} />
            <p className="mt-3 text-[11px] opacity-70">{poster.subtitle}</p>
          </div>
          <div className="grid grid-cols-3 gap-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-square rounded-sm opacity-20" style={{ backgroundColor: poster.accent }} />
            ))}
          </div>
        </div>
      ) : null}

      {poster.style === "minimal" ? (
        <div className="flex h-full flex-col justify-center p-5">
          <div className="mb-4 h-1 w-8 rounded" style={{ backgroundColor: poster.accent }} />
          <h3 className="text-xl font-semibold leading-snug sm:text-2xl">{poster.title}</h3>
          <p className="mt-2 text-xs leading-relaxed opacity-75">{poster.subtitle}</p>
          <div className="mt-6 space-y-1">
            {["Sat 10:00", "Sun 14:00"].map((t) => (
              <p key={t} className="text-[10px] font-medium uppercase tracking-wider opacity-60">
                {t}
              </p>
            ))}
          </div>
        </div>
      ) : null}

      {poster.style === "event" ? (
        <>
          <div
            className="absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-30"
            style={{ backgroundColor: poster.accent }}
          />
          <div className="relative flex h-full flex-col justify-between p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em]" style={{ color: poster.accent }}>
              2026
            </p>
            <div>
              <h3 className="text-3xl font-black uppercase leading-none tracking-tighter sm:text-4xl">
                {poster.title}
              </h3>
              <p className="mt-3 text-[11px] leading-relaxed opacity-90">{poster.subtitle}</p>
            </div>
            <div
              className="rounded-lg px-3 py-2 text-center text-[10px] font-bold uppercase tracking-wider"
              style={{ backgroundColor: poster.accent, color: poster.bg }}
            >
              Get tickets
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}
