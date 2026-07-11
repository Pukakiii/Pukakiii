import type { Education } from "@/features/portfolio/types/education"

export const EDUCATION: Education[] = [
  {
    id: "bsc-cs",
    school: "University of Warsaw",
    logo: "/images/logos/education/uw.png",
    degree: "BSc",
    fieldOfStudy: "Computer Science",
    period: {
      start: "2026",
    },
    description:
      "Undergraduate Computer Science studies at a top Polish university in Warsaw, building on a strong foundation in mathematics and programming.",
    skills: ["Computer Science", "Mathematics", "Algorithms"],
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
