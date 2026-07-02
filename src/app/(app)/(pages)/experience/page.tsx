import type { Metadata } from "next"

import { jsonLdBreadcrumbList, JsonLdScript } from "@/lib/json-ld"
import {
 PageHeading,
 PageHeadingTagline,
 PageHeadingTitle,
} from "@/components/page-heading"
import { Experiences } from "@/features/portfolio/components/experiences"

const title = "Experience"
const description =
 "Work history — from production frontend engineering and team leadership to creative production."

export const metadata: Metadata = {
 title,
 description,
 alternates: {
 canonical: "/experience",
 },
}

export default function Page() {
 return (
 <>
 <JsonLdScript
 data={jsonLdBreadcrumbList([
 { name: "Home", href: "/" },
 { name: "Experience", href: "/experience" },
 ])}
 />

 <div className="min-h-svh">
 <PageHeading>
 <PageHeadingTagline>Experience</PageHeadingTagline>
 <PageHeadingTitle>{description}</PageHeadingTitle>
 </PageHeading>

 <div className="h-4" />

 <Experiences />
 </div>
 </>
 )
}
