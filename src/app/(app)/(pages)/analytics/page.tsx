import { Suspense } from "react"
import type { Metadata } from "next"

import { jsonLdBreadcrumbList, JsonLdScript } from "@/lib/json-ld"
import {
 PageHeading,
 PageHeadingTagline,
 PageHeadingTitle,
} from "@/components/page-heading"
import { GitHubContributions } from "@/features/portfolio/components/github-contributions"
import {
 Insights,
 InsightsSkeleton,
} from "@/features/portfolio/components/insights"

const title = "Analytics"
const description = "Site insights and GitHub activity."

export const metadata: Metadata = {
 title,
 description,
 alternates: {
 canonical: "/analytics",
 },
}

export default function Page() {
 return (
 <>
 <JsonLdScript
 data={jsonLdBreadcrumbList([
 { name: "Home", href: "/" },
 { name: "Analytics", href: "/analytics" },
 ])}
 />

 <div className="min-h-svh">
 <PageHeading>
 <PageHeadingTagline>Analytics</PageHeadingTagline>
 <PageHeadingTitle>{description}</PageHeadingTitle>
 </PageHeading>

 <div className="h-4" />

 <Suspense fallback={<InsightsSkeleton />}>
 <Insights />
 </Suspense>

 <div className="h-4" />

 <GitHubContributions />
 </div>
 </>
 )
}
