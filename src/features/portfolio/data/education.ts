import type { Education } from "@/features/portfolio/types/education"

export const EDUCATION: Education[] = [
  {
    id: "bsc-ai-cognitive-science",
    school: "University of Warsaw",
    logo: "/images/logos/education/uw.png",
    degree: "BSc",
    fieldOfStudy: "Artificial Intelligence and Cognitive Science",
    period: {
      start: "2026",
    },
    description:
      "Undergraduate studies in Artificial Intelligence and Cognitive Science (AI and Cognitivistics) at the University of Warsaw, combining computer science, mathematics, AI, and the study of cognition.",
    skills: [
      "Artificial Intelligence",
      "Cognitive Science",
      "Computer Science",
      "Mathematics",
    ],
    isExpanded: true,
  },
  {
    id: "liceum",
    school: "Liceum (High School)",
    logo: "/images/logos/education/liceum.png",
    period: {
      start: "2023",
      end: "2025",
    },
    description:
      "Graduated 2025. Polish Matura (advanced level): Mathematics 88% (grade 5), English 97% speaking / 93% written (grade 5), Informatics 66% (grade 4).",
    skills: ["Mathematics", "Computer Science", "English"],
  },
  {
    id: "technikum",
    school: "Technikum im. Bolesława Prusa w Pułtusk",
    logo: "/images/logos/education/technikum-prus.png",
    fieldOfStudy: "Technik Reklamy (Advertising Technician)",
    period: {
      start: "2020",
      end: "2024",
    },
    description:
      "Three-year vocational programme in advertising, marketing, graphic design, print production, and multimedia — completed alongside hands-on creative production work at Dreampire.",
    skills: [
      "Advertising",
      "Marketing",
      "Graphic design",
      "Print production",
      "Multimedia",
    ],
  },
]
