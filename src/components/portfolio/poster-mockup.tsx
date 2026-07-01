import type { PosterDesign } from "@/data/brands"

export function PosterMockup({ poster, tall = false }: { poster: PosterDesign; tall?: boolean }) {
  const titleLines = poster.title.split("\n")

  return (
    <div
      className={`bento-card relative overflow-hidden shadow-lg ${tall ? "min-h-[420px]" : "min-h-[320px]"}`}
      style={{ backgroundColor: poster.bg, color: poster.text }}
    >
      {poster.style === "bold" ? (
        <>
          <div className="absolute inset-x-0 top-0 h-1.5" style={{ backgroundColor: poster.accent }} />
          <div className="flex h-full flex-col justify-between p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em]" style={{ color: poster.accent }}>
              Live music
            </p>
            <div>
              <h3 className="font-display text-4xl font-black leading-none tracking-tight">{poster.title}</h3>
              <p className="mt-4 text-xs leading-relaxed opacity-80">{poster.subtitle}</p>
            </div>
            <div className="flex items-end justify-between">
              <div className="h-12 w-12 rounded-full border-2" style={{ borderColor: poster.accent }} />
              <p className="text-[9px] uppercase tracking-widest opacity-50">Illustrator</p>
            </div>
          </div>
        </>
      ) : null}

      {poster.style === "editorial" ? (
        <div className="flex h-full flex-col justify-between p-6">
          <p className="text-[10px] uppercase tracking-[0.25em] opacity-45">Exhibition</p>
          <div>
            {titleLines.map((line) => (
              <h3 key={line} className="font-display text-4xl font-semibold italic leading-[0.95]">
                {line}
              </h3>
            ))}
            <div className="mt-5 h-0.5 w-16" style={{ backgroundColor: poster.accent }} />
            <p className="mt-4 text-xs opacity-70">{poster.subtitle}</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-[4/5] rounded-sm opacity-25" style={{ backgroundColor: poster.accent }} />
            ))}
          </div>
        </div>
      ) : null}

      {poster.style === "minimal" ? (
        <div className="flex h-full flex-col justify-center p-6">
          <div className="mb-5 h-1 w-10 rounded-full" style={{ backgroundColor: poster.accent }} />
          <h3 className="font-display text-3xl font-semibold leading-tight">{poster.title}</h3>
          <p className="mt-3 text-sm leading-relaxed opacity-75">{poster.subtitle}</p>
          <div className="mt-8 space-y-2">
            {["Sat 10:00", "Sun 14:00"].map((t) => (
              <p key={t} className="text-[10px] font-bold uppercase tracking-[0.25em] opacity-55">
                {t}
              </p>
            ))}
          </div>
        </div>
      ) : null}

      {poster.style === "event" ? (
        <>
          <div
            className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-35 blur-2xl"
            style={{ backgroundColor: poster.accent }}
          />
          <div className="relative flex h-full flex-col justify-between p-6">
            <p className="text-[10px] font-black uppercase tracking-[0.45em]" style={{ color: poster.accent }}>
              2026
            </p>
            <div>
              <h3 className="font-display text-5xl font-black uppercase leading-[0.85] tracking-tighter">
                {poster.title}
              </h3>
              <p className="mt-4 text-xs leading-relaxed opacity-90">{poster.subtitle}</p>
            </div>
            <div
              className="rounded-xl px-4 py-3 text-center text-[10px] font-black uppercase tracking-[0.2em]"
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
