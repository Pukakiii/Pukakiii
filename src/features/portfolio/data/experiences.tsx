import type { Experience } from "@/features/portfolio/types/experiences"
import {
 BriefcaseBusinessIcon,
 CameraIcon,
 CodeXmlIcon,
 UsersIcon,
} from "lucide-react"

export const EXPERIENCES: Experience[] = [
 {
 id: "flowtly",
 companyName: "Flowtly",
 companyLogo: "/placeholder-logo.svg",
 companyWebsite: "https://flowtly.com",
 location: "Warsaw, Poland",
 locationType: "Remote",
 isCurrentEmployer: true,
 positions: [
 {
 id: "flowtly-frontend",
 title: "Frontend Engineer",
 employmentPeriod: { start: "06.2025" },
 employmentType: "Full-time",
 icon: <CodeXmlIcon />,
 isExpanded: true,
 description: `Building and maintaining a production React 18 + TypeScript application (PSA / scheduling platform) with a large, typed Redux state layer and a component-driven UI.

- Develop feature-complete, accessible UI in **React 18 + TypeScript** with **MUI v5** and **Emotion**, delivering responsive, reusable components across the product.
- Own client-side data flow with **Redux Toolkit + RTK Query**, **Redux Saga**, and **react-redux** — typed API integration, caching, and side-effect handling.
- Build complex forms with **react-hook-form + Zod** validation, and data-dense views with **ECharts** dashboards and the **DevExpress Scheduler**.
- Ship multilingual UI via **react-i18next** and date handling with **date-fns**.
- Maintain quality with **Jest + Testing Library**, **Cypress**, and **Playwright**, under **ESLint + Prettier** and a \`tsc --noEmit\` pre-push type gate.`,
 skills: [
 "React 18",
 "TypeScript",
 "Redux Toolkit",
 "RTK Query",
 "Redux Saga",
 "MUI v5",
 "Emotion",
 "react-hook-form",
 "Zod",
 "react-i18next",
 "ECharts",
 "Jest",
 "Cypress",
 "Playwright",
 ],
 },
 ],
 },
 {
 id: "jobagent",
 companyName: "JobAgent",
 companyLogo: "/placeholder-logo.svg",
 companyWebsite: "https://github.com/Pukakiii",
 locationType: "Remote",
 positions: [
 {
 id: "jobagent-lead",
 title: "Team Lead / Fullstack Developer",
 employmentPeriod: { start: "04.2026" },
 employmentType: "Freelance",
 icon: <UsersIcon />,
 isExpanded: true,
 description: `Lead a **4-developer team** delivering JobAgent, owning technical direction and shipping across the full stack.

- **Team Lead** — set technical direction and architecture, lead the team and manage people, drive cross-functional communication.
- **Frontend** — UI development, React components, responsive design, and accessibility.
- **Backend** — API integration, authentication, state management, and backend logic.
- **UI/UX** — layout structure, design-system consistency, and UX improvements.
- **QA & Documentation** — testing, bug reporting, documentation, and code-review support.`,
 skills: [
 "Team leadership",
 "Architecture",
 "React",
 "Python",
 "FastAPI",
 "UI/UX",
 "QA",
 "Documentation",
 ],
 },
 ],
 },
 {
 id: "dreampire",
 companyName: "Dreampire",
 companyLogo: "/placeholder-logo.svg",
 location: "Serock, Poland",
 locationType: "Hybrid",
 positions: [
 {
 id: "dreampire-producer",
 title: "Creative Producer / Multimedia Project Manager",
 employmentPeriod: { start: "2021", end: "2024" },
 employmentType: "Part-time",
 icon: <CameraIcon />,
 description: `Led branding, multimedia, and digital production projects for corporate clients, foundations, and public institutions — from client briefing and concept through final asset delivery.

- Directed and produced promotional video content across pre-production, production, and post-production; coordinated camera crews, scripting, lighting, and editing workflows.
- Executed corporate portrait, product, and event photography with advanced editing, color grading, and retouching.
- Managed end-to-end design and deployment of user-centric websites for sports organizations, automotive brands, and public services.
- Developed packaging, web assets, marketing collateral, and corporate print materials.`,
 skills: [
 "Project management",
 "Creative direction",
 "Video production",
 "Commercial photography",
 "UX/UI",
 "Adobe Photoshop",
 "Adobe Illustrator",
 "Adobe After Effects",
 "Figma",
 ],
 },
 ],
 },
 {
 id: "dizhka",
 companyName: "Dizhka (Діжка)",
 companyLogo: "/placeholder-logo.svg",
 location: "Stryi, Ukraine",
 locationType: "On-site",
 positions: [
 {
 id: "dizhka-assistant",
 title: "Owner's Assistant",
 employmentPeriod: { start: "2019", end: "2021" },
 employmentType: "Part-time",
 icon: <BriefcaseBusinessIcon />,
 description: `Family-run 24/7 neighbourhood grocery. Worked alongside the owner through my teenage years, learning small-business operations hands-on.

- Served customers and handled cash, card, and contactless (NFC) payments, including night shifts.
- Restocked shelves, tracked low inventory, and helped with orders, pricing, and closing out the day.
- Early exposure to small-business ownership — responsibility, consistency, and customer-facing work.`,
 skills: ["Customer service", "Retail operations", "Inventory basics"],
 },
 ],
 },
]
