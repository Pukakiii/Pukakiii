import type { TechStack } from "@/features/portfolio/types/tech-stack"
import { CodeXmlIcon } from "lucide-react"

export const TECH_STACK: TechStack[] = [
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    icon: <CodeXmlIcon />,
    categories: ["Languages", "Frontend", "Backend"],
  },
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    icon: <CodeXmlIcon />,
    categories: ["Frontend"],
  },
  {
    key: "nextjs",
    title: "Next.js",
    href: "https://nextjs.org/",
    icon: <CodeXmlIcon />,
    categories: ["Frontend", "Full-stack"],
  },
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org/",
    icon: <CodeXmlIcon />,
    categories: ["Languages", "Backend", "AI"],
  },
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    icon: <CodeXmlIcon />,
    categories: ["Backend"],
  },
]
