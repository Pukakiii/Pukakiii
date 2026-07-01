import type { Experience } from "@/data/experiences"

export function ExperienceItem({ experience }: { experience: Experience }) {
  const meta = [experience.period, experience.location, experience.employment]
    .filter(Boolean)
    .join(" · ")

  return (
    <article className="space-y-3">
      <div>
        <h3 className="text-lg font-semibold text-foreground">{experience.role}</h3>
        <p className="text-base text-foreground/90">
          {experience.company}
          {experience.website ? (
            <>
              {" "}
              —{" "}
              <a
                href={experience.website}
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent"
              >
                {experience.website.replace(/^https?:\/\//, "")}
              </a>
            </>
          ) : null}
        </p>
        {meta ? <p className="mt-1 text-sm text-muted-foreground">{meta}</p> : null}
      </div>
      <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
        {experience.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  )
}
