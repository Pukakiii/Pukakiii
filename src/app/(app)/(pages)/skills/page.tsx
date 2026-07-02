import type { Metadata } from "next"

import { jsonLdBreadcrumbList, JsonLdScript } from "@/lib/json-ld"
import {
 PageHeading,
 PageHeadingTagline,
 PageHeadingTitle,
} from "@/components/page-heading"
import { Certifications } from "@/features/portfolio/components/certifications"
import { TechStack } from "@/features/portfolio/components/tech-stack"

const title = "Skills"
const description =
 "The stack I work with — frontend, backend, design, DevOps, and AI tooling — plus certifications."

export const metadata: Metadata = {
 title,
 description,
 alternates: {
 canonical: "/skills",
 },
}

export default function Page() {
 return (
 <>
 <JsonLdScript
 data={jsonLdBreadcrumbList([
 { name: "Home", href: "/" },
 { name: "Skills", href: "/skills" },
 ])}
 />

 <div className="min-h-svh">
 <PageHeading>
 <PageHeadingTagline>Skills</PageHeadingTagline>
 <PageHeadingTitle>{description}</PageHeadingTitle>
 </PageHeading>

 <div className="h-4" />

 <TechStack />

 <div className="h-4" />

 <Certifications />
 </div>
 </>
 )
}
