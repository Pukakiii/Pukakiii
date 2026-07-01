import type { SkillGroup } from "@/data/skills"

export function SkillGroup({ group }: { group: SkillGroup }) {
  return (
    <div>
      <h3 className="mb-2 text-sm font-medium text-foreground">{group.label}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{group.items.join(" · ")}</p>
    </div>
  )
}
