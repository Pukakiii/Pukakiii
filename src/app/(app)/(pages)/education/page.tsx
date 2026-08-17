import type { Metadata } from "next"

import { jsonLdBreadcrumbList, JsonLdScript } from "@/lib/json-ld"
import {
 PageHeading,
 PageHeadingTagline,
 PageHeadingTitle,
} from "@/components/page-heading"
import { Education } from "@/features/portfolio/components/education"

const title = "Education"
const description =
 "Artificial Intelligence and Cognitive Science studies at the University of Warsaw, on a foundation of mathematics, programming, and creative production."

export const metadata: Metadata = {
 title,
 description,
 alternates: {
 canonical: "/education",
 },
}

export default function Page() {
 return (
 <>
 <JsonLdScript
 data={jsonLdBreadcrumbList([
 { name: "Home", href: "/" },
 { name: "Education", href: "/education" },
 ])}
 />

 <div className="min-h-svh">
 <PageHeading>
 <PageHeadingTagline>Education</PageHeadingTagline>
 <PageHeadingTitle>{description}</PageHeadingTitle>
 </PageHeading>

 <div className="h-4" />

 <Education />
 </div>
 </>
 )
}
