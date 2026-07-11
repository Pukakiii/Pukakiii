import {
  Panel,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { EXPERIENCES } from "@/features/portfolio/data/experiences"
import type { ExperiencePositionCategory } from "@/features/portfolio/types/experiences"

import { ExperienceCompanyShell, ExperienceFilter } from "./experience-filter"
import { ExperienceItem } from "./experience-item"

const ID = "experience"
const MAX = 3

const CATEGORY_ORDER: ExperiencePositionCategory[] = [
  "developer",
  "marketing",
  "creative",
  "operations",
]

export function Experiences() {
  const categories = CATEGORY_ORDER.filter((category) =>
    EXPERIENCES.some((experience) =>
      experience.positions.some((position) => position.category === category)
    )
  )

  return (
    <ExperienceFilter
      categories={categories}
      hasOverflow={EXPERIENCES.length > MAX}
    >
      <Panel id={ID}>
        <PanelHeader>
          <PanelTitle>
            <a href={`#${ID}`}>Experience</a>
            <PanelTitleCopy id={ID} />
          </PanelTitle>
        </PanelHeader>

        {EXPERIENCES.map((experience, index) => (
          <ExperienceCompanyShell
            key={experience.id}
            categories={Array.from(
              new Set(
                experience.positions.flatMap((position) =>
                  position.category ? [position.category] : []
                )
              )
            )}
            overflow={index >= MAX}
          >
            <ExperienceItem experience={experience} />
          </ExperienceCompanyShell>
        ))}
      </Panel>
    </ExperienceFilter>
  )
}
