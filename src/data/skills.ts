export type SkillGroup = {
  label: string
  items: string[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: "Design",
    items: [
      "UX/UI",
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe After Effects",
      "Typography",
      "Vector illustration",
      "Packaging design",
      "Brand identity systems",
    ],
  },
  {
    label: "Multimedia & Production",
    items: [
      "Video production and editing",
      "Commercial and event photography",
      "Photo editing, color grading, retouching",
      "Studio lighting",
      "Visual storytelling",
      "Post-production workflows",
    ],
  },
  {
    label: "Creative Management",
    items: [
      "Project management",
      "Creative direction",
      "Branding strategy",
      "Client relations",
      "Timeline and resource planning",
    ],
  },
  {
    label: "Digital tools",
    items: [
      "JavaScript / TypeScript",
      "React",
      "HTML & CSS",
      "Tailwind CSS",
      "Git & GitHub",
    ],
  },
]
