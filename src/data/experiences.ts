export type Experience = {
  company: string
  role: string
  period: string
  location?: string
  employment?: string
  website?: string
  highlights: string[]
}

export const EXPERIENCES: Experience[] = [
  {
    company: "Dreampire",
    role: "Creative Producer / Multimedia Project Manager",
    period: "2021 – 2024 · 3 years",
    location: "Serock, Poland",
    employment: "Part time",
    website: "https://dreampire.pl",
    highlights: [
      "Three years with Mr. Mikolay's agency — branding, multimedia, print, photo, and video for corporate clients, foundations, and public institutions.",
      "Created logos, posters, banners, packaging, and marketing collateral in Adobe Illustrator, Photoshop, and After Effects.",
      "Directed promotional video and commercial photography — pre-production through editing, color grading, and retouching.",
      "Managed client workflows from briefing and concept to final asset delivery on deadline.",
    ],
  },
  {
    company: "Flowtly",
    role: "Frontend Engineer",
    period: "June 2025 – Present",
    highlights: [
      "Build accessible, responsive UI for a production React + TypeScript platform.",
      "Programming and web development skills that support digital design and client web projects.",
    ],
  },
]
