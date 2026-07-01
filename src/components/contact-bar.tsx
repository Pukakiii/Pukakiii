import { PROFILE } from "@/data/profile"
import Link from "next/link"

export function ContactBar() {
  return (
    <footer className="border-t border-border py-10">
      <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
        <a href={`mailto:${PROFILE.email}`} className="link-accent">
          {PROFILE.email}
        </a>
        <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`} className="link-accent">
          {PROFILE.phone}
        </a>
        <a
          href={PROFILE.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent"
        >
          LinkedIn
        </a>
        <a
          href={PROFILE.portfolioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent"
        >
          pukakiii.vercel.app
        </a>
        <Link href="/portfolio" className="link-accent">
          Portfolio gallery
        </Link>
        <a href={PROFILE.cvPath} download className="link-accent">
          Download CV (PDF)
        </a>
      </div>
      <p className="mt-6 text-xs text-muted-foreground/70">{PROFILE.location}</p>
    </footer>
  )
}
