import Link from "next/link"
import {
 ArrowUpRightIcon,
 BoxIcon,
 BriefcaseBusinessIcon,
 GraduationCapIcon,
 LayersIcon,
 LineChartIcon,
 MailIcon,
 UserRoundIcon,
} from "lucide-react"

import {
 Panel,
 PanelHeader,
 PanelTitle,
} from "@/features/portfolio/components/panel"

const ID = "explore"

const EXPLORE_LINKS = [
 {
 href: "/about",
 title: "About",
 description: "Who I am and how I work",
 icon: <UserRoundIcon />,
 },
 {
 href: "/experience",
 title: "Experience",
 description: "Work history and roles",
 icon: <BriefcaseBusinessIcon />,
 },
 {
 href: "/projects",
 title: "Projects",
 description: "Things I've built and shipped",
 icon: <BoxIcon />,
 },
 {
 href: "/skills",
 title: "Skills",
 description: "Stack and certifications",
 icon: <LayersIcon />,
 },
 {
 href: "/education",
 title: "Education",
 description: "Studies and background",
 icon: <GraduationCapIcon />,
 },
 {
 href: "/analytics",
 title: "Analytics",
 description: "Site insights and GitHub activity",
 icon: <LineChartIcon />,
 },
 {
 href: "/contact",
 title: "Contact",
 description: "Get in touch",
 icon: <MailIcon />,
 },
] as const

export function Explore() {
 return (
 <Panel id={ID}>
 <PanelHeader>
 <PanelTitle>Explore</PanelTitle>
 </PanelHeader>

 <div className="grid sm:grid-cols-2">
 {EXPLORE_LINKS.map((link) => (
 <Link
 key={link.href}
 href={link.href}
 className="group/explore relative flex items-center gap-4 border-b border-dashed border-line p-4 select-none last:border-b-0 hover:bg-accent-muted sm:nth-last-2:border-b-0 sm:odd:border-r"
 >
 <span className="flex size-6 shrink-0 items-center justify-center text-muted-foreground [&_svg]:size-5">
 {link.icon}
 </span>

 <span className="flex-1">
 <span className="block leading-snug font-medium text-balance">
 {link.title}
 </span>
 <span className="block text-sm text-muted-foreground">
 {link.description}
 </span>
 </span>

 <ArrowUpRightIcon className="size-4 text-muted-foreground transition-transform group-hover/explore:translate-x-0.5 group-hover/explore:-translate-y-0.5" />
 </Link>
 ))}
 </div>
 </Panel>
 )
}
