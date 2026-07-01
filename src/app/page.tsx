import { ContactBar } from "@/components/contact-bar"
import { ExperienceItem } from "@/components/experience-item"
import { Section } from "@/components/section"
import { SkillGroup } from "@/components/skill-group"
import { CERTIFICATIONS } from "@/data/certifications"
import { EDUCATION } from "@/data/education"
import { EXPERIENCES } from "@/data/experiences"
import { LANGUAGES } from "@/data/languages"
import { PROFILE } from "@/data/profile"
import { SKILL_GROUPS } from "@/data/skills"
import Link from "next/link"

export default function HomePage() {
  return (
    <>
      <header className="mb-10 space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {PROFILE.name}
          </h1>
          <p className="text-lg text-foreground/90">{PROFILE.title}</p>
          <p className="text-sm text-muted-foreground">{PROFILE.location}</p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm">
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
            Portfolio
          </a>
          <Link href="/portfolio" className="link-accent font-medium">
            View work →
          </Link>
          <a href={PROFILE.cvPath} download className="link-accent font-medium">
            Download CV
          </a>
        </div>
      </header>

      <Section id="about" title="About">
        <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          {PROFILE.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="space-y-10">
          {EXPERIENCES.map((experience) => (
            <ExperienceItem key={experience.company} experience={experience} />
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="space-y-6">
          {SKILL_GROUPS.map((group) => (
            <SkillGroup key={group.label} group={group} />
          ))}
        </div>
      </Section>

      <Section id="education" title="Education">
        <ul className="space-y-4">
          {EDUCATION.map((entry) => (
            <li key={entry.degree}>
              <p className="text-sm font-medium text-foreground">{entry.degree}</p>
              <p className="mt-1 text-sm text-muted-foreground">{entry.detail}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="certifications" title="Certifications">
        <ul className="space-y-3">
          {CERTIFICATIONS.map((cert) => (
            <li key={cert.label} className="text-sm text-muted-foreground">
              <span className="text-foreground">{cert.label}</span>
              {cert.note ? (
                <span className="text-muted-foreground"> — {cert.note}</span>
              ) : null}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="languages" title="Languages">
        <ul className="space-y-2 text-sm text-muted-foreground">
          {LANGUAGES.map(({ language, level }) => (
            <li key={language}>
              <span className="font-medium text-foreground">{language}</span>
              {" — "}
              {level}
            </li>
          ))}
        </ul>
      </Section>

      <ContactBar />
    </>
  )
}
