import type { Experience } from "@/features/portfolio/types/experiences"
import { BriefcaseBusinessIcon } from "lucide-react"

export const EXPERIENCES: Experience[] = [
  {
    id: "placeholder-1",
    companyName: "[Employer — to be updated]",
    companyLogo: "/placeholder-logo.svg",
    companyWebsite: "#",
    location: "[Location — to be updated]",
    locationType: "Remote",
    positions: [
      {
        id: "1",
        title: "[Role title — to be updated]",
        employmentPeriod: { start: "[Start — to be updated]" },
        employmentType: "Full-time",
        icon: <BriefcaseBusinessIcon />,
        description: "[Experience description — to be updated]",
        skills: ["[Skill — to be updated]"],
      },
    ],
  },
]
