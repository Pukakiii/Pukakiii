import type { Experience } from "@/features/portfolio/types/experiences"
import {
  BriefcaseBusinessIcon,
  CameraIcon,
  CodeXmlIcon,
  MegaphoneIcon,
  ShieldCheckIcon,
  UsersIcon,
  VolleyballIcon,
} from "lucide-react"

export const EXPERIENCES: Experience[] = [
  {
    id: "flowtly",
    companyName: "Flowtly",
    companyLogo: "/images/logos/companies/flowtly.png",
    companyWebsite: "https://flowtly.com",
    location: "Warsaw, Poland",
    locationType: "Remote",
    positions: [
      {
        id: "flowtly-frontend",
        title: "Frontend Engineer",
        category: "developer",
        employmentPeriod: { start: "06.2025", end: "07.2026" },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        isExpanded: true,
        description: `Building and maintaining a production React 18 + TypeScript application (PSA / scheduling platform) with a large, typed Redux state layer and a component-driven UI.

- Develop feature-complete, accessible UI in **React 18 + TypeScript** with **MUI v5** and **Emotion**, delivering responsive, reusable components across the product.
- Own client-side data flow with **Redux Toolkit + RTK Query**, **Redux Saga**, and **react-redux** — typed API integration, caching, and side-effect handling.
- Build complex forms with **react-hook-form + Zod** validation, and data-dense views with **ECharts** dashboards and the **DevExpress Scheduler**.
- Ship multilingual UI via **react-i18next** (translations synced through Langley) and date handling with **date-fns** / react-calendar / react-date-range.
- Maintain quality with **Jest + Testing Library**, **Cypress**, and **Playwright**, under **ESLint (Airbnb) + Prettier** and a \`tsc --noEmit\` pre-push type gate.`,
        skills: [
          "React 18",
          "TypeScript",
          "Redux Toolkit",
          "RTK Query",
          "Redux Saga",
          "react-router v6",
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
    companyLogo: "/images/logos/projects/job-agent.svg",
    companyWebsite: "https://github.com/Pukakiii",
    locationType: "Remote",
    positions: [
      {
        id: "jobagent-lead",
        title: "Team Lead / Fullstack Developer",
        category: "developer",
        employmentPeriod: { start: "04.2026" },
        employmentType: "Freelance",
        icon: <UsersIcon />,
        isExpanded: true,
        description: `Lead a **4-developer team** delivering JobAgent, owning technical direction and shipping across the full stack.

- **Team Lead** — set technical direction and architecture, lead the team and manage people, drive cross-functional communication.
- **Frontend** — UI development, React components, responsive design, and accessibility.
- **Backend** — API integration, authentication, state management, and backend logic.
- **UI/UX Designer** — layout structure, design-system consistency, and UX improvements.
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
    id: "private-football-coach",
    companyName: "Private Clients",
    companyIcon: <VolleyballIcon />,
    location: "Warsaw, Poland",
    locationType: "On-site",
    positions: [
      {
        id: "private-football-coach",
        title: "Private Football Coach",
        category: "coaching",
        employmentPeriod: { start: "2024" },
        employmentType: "Paid freelance",
        icon: <VolleyballIcon />,
        isExpanded: true,
        description: `Provide occasional paid, one-to-one football coaching for players across age groups and ability levels. I have worked with **20+ individual players**, primarily through referrals and personal recommendations.

- Deliver personalized technical work covering ball mastery, first touch, close control, dribbling, changes of direction, passing, directional control, finishing, and weaker-foot development.
- Develop coordination, speed, agility, balance, decision-making, positional awareness, and preparation for match situations.
- Demonstrate techniques, break movements into understandable steps, provide immediate feedback, and progressively increase exercise difficulty.
- Help players improve their weaker foot, ball control, dribbling, and shooting accuracy through focused individual practice.`,
        skills: [
          "Individual player development",
          "Session planning",
          "Technical coaching",
          "Player assessment",
          "Youth development",
        ],
      },
    ],
  },
  {
    id: "shakhtar-academy-warsaw",
    companyName: "Shakhtar Academy Warsaw",
    companyIcon: <ShieldCheckIcon />,
    location: "Bemowo, Warsaw, Poland",
    locationType: "On-site",
    positions: [
      {
        id: "shakhtar-youth-coach-intern",
        title: "Youth Football Coach Intern",
        category: "coaching",
        employmentPeriod: { start: "07.2026", end: "08.2026" },
        employmentType: "Internship",
        icon: <UsersIcon />,
        isExpanded: true,
        description: `Independently planned and led football training for groups of **8–12 children born in 2020–2021** (approximately ages 5–6).

- Designed complete, age-appropriate sessions combining warm-ups, movement activities, technical exercises, and small-sided games.
- Coached ball familiarity, close control, dribbling, changes of direction, first touch, passing, shooting, coordination, balance, speed, and agility.
- Demonstrated exercises in child-friendly language, adjusted difficulty to individual ability, and kept every child active and engaged.
- Prepared training plans, the playing area, balls, cones, and other equipment independently while maintaining discipline and player safety.`,
        skills: [
          "Youth coaching",
          "Session planning",
          "Group leadership",
          "Player safety",
          "Technical development",
        ],
      },
    ],
  },
  {
    id: "dreampire",
    companyName: "Dreampire",
    companyLogo: "/images/logos/companies/dreampire.png",
    location: "Serock, Poland",
    locationType: "Hybrid",
    positions: [
      {
        id: "dreampire-producer",
        title: "Creative Producer / Multimedia Project Manager",
        category: "creative",
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
    id: "technikum",
    companyName: "Technikum im. Bolesława Prusa w Pułtusku",
    companyLogo: "/images/logos/education/technikum-prus.png",
    location: "Pułtusk, Poland",
    locationType: "On-site",
    positions: [
      {
        id: "technikum-advertising",
        title: "Technik Reklamy — Vocational Trainee",
        category: "marketing",
        employmentPeriod: { start: "2021", end: "2024" },
        employmentType: "Vocational trainee",
        icon: <MegaphoneIcon />,
        isExpanded: true,
        description: `Hands-on vocational training in **Technik Reklamy** (advertising technician), completed alongside part-time client work at Dreampire. Built practical advertising, graphic design, print, and campaign skills through school workshops, live event assignments, and program-based projects.

- Took part in school events, festivals, and internal promotions — designing and delivering graphic materials across posters, flyers, banners, social formats, and on-site signage.
- Designed advertising messages and visual layouts in **Adobe Photoshop, Illustrator, and InDesign** — typography, composition, brand-consistent color, and clear call-to-action structure.
- Prepared print-ready files with correct resolution, bleeds, cut marks, and export settings; printed finished materials on school **large-format and professional printers**.
- Practiced **advertising photography** fundamentals and image processing for promotional use.
- Took part in planning and organizing small-scale school advertising campaigns — defining audience, message, channels, and rollout timing.`,
        skills: [
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Adobe InDesign",
          "Print production",
          "Prepress",
          "Campaign planning",
          "Visual communication",
        ],
      },
    ],
  },
  {
    id: "dizhka",
    companyName: "Dizhka (Діжка)",
    companyLogo: "/images/logos/dizhka.svg",
    location: "Stryi, Ukraine",
    locationType: "On-site",
    positions: [
      {
        id: "dizhka-assistant",
        title: "Owner's Assistant",
        category: "operations",
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
