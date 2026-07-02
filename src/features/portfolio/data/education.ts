import type { Education } from "@/features/portfolio/types/education"

export const EDUCATION: Education[] = [
 {
 id: "bsc-cs",
 school: "Top Polish university, Warsaw",
 degree: "BSc",
 fieldOfStudy: "Computer Science",
 period: {
 start: "2026",
 },
 description:
 "Undergraduate Computer Science studies in Warsaw, building on a strong foundation in mathematics and programming.",
 skills: ["Computer Science", "Mathematics", "Algorithms"],
 isExpanded: true,
 },
 {
 id: "liceum",
 school: "Liceum (High School)",
 period: {
 start: "2023",
 end: "2025",
 },
 description:
 "Graduated 2025 with high grades in mathematics, computer science, and English.",
 skills: ["Mathematics", "Computer Science", "English"],
 },
 {
 id: "technikum",
 school: "Technikum",
 fieldOfStudy: "Marketing & Advertising",
 period: {
 start: "2020",
 end: "2023",
 },
 description:
 "Three-year technical secondary programme in marketing and advertising, completed alongside hands-on creative production work.",
 skills: ["Marketing", "Advertising", "Branding"],
 },
]
