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
 "Computer Science studies in Warsaw, on a foundation of mathematics and marketing & advertising."

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
