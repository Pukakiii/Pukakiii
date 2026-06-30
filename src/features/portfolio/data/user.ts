import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Igor",
  lastName: "",
  displayName: "Pukakiii",
  username: "pukakiii",
  gender: "non-binary",
  pronouns: "[Pronouns — to be updated]",
  bio: "Software developer building web apps, portfolio sites, and practical tools with TypeScript, React, Next.js, and Python.",
  flipSentences: [
    "Building with TypeScript & React.",
    "Shipping portfolio sites & dev tools.",
    "Exploring AI-assisted workflows.",
  ],
  address: "Europe",
  phoneNumberB64: "",
  emailB64: "",
  website: "https://github.com/Pukakiii",
  jobTitle: "Software Developer",
  jobs: [
    {
      title: "Software Developer",
      company: "[Company — to be updated]",
      website: "#",
      experienceId: "placeholder-1",
    },
  ],
  about: `I'm Igor (Pukakiii)—a software developer focused on modern web stacks and useful side projects. I build portfolio sites, job-search tooling, and learning projects across TypeScript, React, Next.js, and Python. Always iterating on clean UX and maintainable code.`,
  avatar: "/placeholder-avatar.svg",
  avatarVariants: {
    lightOff: "/placeholder-avatar.svg",
    lightOn: "/placeholder-avatar.svg",
    darkOff: "/placeholder-avatar.svg",
    darkOn: "/placeholder-avatar.svg",
  },
  ogImage: "/placeholder-og.svg",
  namePronunciationUrl: "",
  timeZone: "Europe/London",
  keywords: ["pukakiii", "igor", "software developer", "typescript", "react", "nextjs"],
  dateCreated: "2026-01-01",
}
