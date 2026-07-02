import type { Metadata } from "next"

import { jsonLdBreadcrumbList, JsonLdScript } from "@/lib/json-ld"
import {
 PageHeading,
 PageHeadingTagline,
 PageHeadingTitle,
} from "@/components/page-heading"
import { Projects } from "@/features/portfolio/components/projects"

const title = "Projects"
const description = "Things I've built and shipped — mostly open source."

export const metadata: Metadata = {
 title,
 description,
 alternates: {
 canonical: "/projects",
 },
}

export default function Page() {
 return (
 <>
 <JsonLdScript
 data={jsonLdBreadcrumbList([
 { name: "Home", href: "/" },
 { name: "Projects", href: "/projects" },
 ])}
 />

 <div className="min-h-svh">
 <PageHeading>
 <PageHeadingTagline>Projects</PageHeadingTagline>
 <PageHeadingTitle>{description}</PageHeadingTitle>
 </PageHeading>

 <div className="h-4" />

 <Projects />
 </div>
 </>
 )
}
