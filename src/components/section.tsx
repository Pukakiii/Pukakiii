import type { ReactNode } from "react"

type SectionProps = {
  id: string
  title: string
  children: ReactNode
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border py-10 first:border-t-0 first:pt-0">
      <h2 className="mb-5 text-xs font-semibold uppercase tracking-widest text-accent">{title}</h2>
      {children}
    </section>
  )
}
