import type { Metadata } from "next"
import { DownloadIcon, FileTextIcon } from "lucide-react"

import { jsonLdBreadcrumbList, JsonLdScript } from "@/lib/json-ld"
import {
 PageHeading,
 PageHeadingTagline,
 PageHeadingTitle,
} from "@/components/page-heading"
import { Overview } from "@/features/portfolio/components/overview"
import {
 Panel,
 PanelHeader,
 PanelTitle,
} from "@/features/portfolio/components/panel"
import { SocialLinks } from "@/features/portfolio/components/social-links"

const title = "Contact"
const description =
 "Get in touch — email, phone, socials, or grab my vCard and CV."

export const metadata: Metadata = {
 title,
 description,
 alternates: {
 canonical: "/contact",
 },
}

const DOWNLOAD_LINKS = [
 {
 href: "/vcard",
 title: "Download vCard",
 description: "Add me to your contacts",
 icon: <DownloadIcon />,
 },
 {
 href: "/Igor_Pukalski_CV.pdf",
 title: "Download CV",
 description: "PDF résumé",
 icon: <FileTextIcon />,
 },
] as const

export default function Page() {
 return (
 <>
 <JsonLdScript
 data={jsonLdBreadcrumbList([
 { name: "Home", href: "/" },
 { name: "Contact", href: "/contact" },
 ])}
 />

 <div className="min-h-svh">
 <PageHeading>
 <PageHeadingTagline>Contact</PageHeadingTagline>
 <PageHeadingTitle>{description}</PageHeadingTitle>
 </PageHeading>

 <div className="h-4" />

 <Overview />
 <SocialLinks />

 <div className="h-4" />

 <Panel id="downloads">
 <PanelHeader>
 <PanelTitle>Downloads</PanelTitle>
 </PanelHeader>

 <div className="grid sm:grid-cols-2">
 {DOWNLOAD_LINKS.map((link) => (
 <a
 key={link.href}
 href={link.href}
 download
 className="group/download relative flex items-center gap-4 border-b border-dashed border-line p-4 select-none last:border-b-0 hover:bg-accent-muted sm:border-b-0 sm:odd:border-r"
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
 </a>
 ))}
 </div>
 </Panel>
 </div>
 </>
 )
}
