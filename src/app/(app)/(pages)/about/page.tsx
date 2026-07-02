import type { Metadata } from "next"

import { jsonLdBreadcrumbList, JsonLdScript } from "@/lib/json-ld"
import {
 PageHeading,
 PageHeadingTagline,
 PageHeadingTitle,
} from "@/components/page-heading"
import { BrandMarkIsometric } from "@/features/portfolio/components/brand-mark-isometric"
import { Hello } from "@/features/portfolio/components/hello"
import { Overview } from "@/features/portfolio/components/overview"
import { ProfileCover } from "@/features/portfolio/components/profile-cover"
import { SocialLinks } from "@/features/portfolio/components/social-links"

const title = "About"
const description =
 "Fullstack developer in Warsaw — production React + TypeScript, team leadership, and a creative-production background."

export const metadata: Metadata = {
 title,
 description,
 alternates: {
 canonical: "/about",
 },
}

export default function Page() {
 return (
 <>
 <JsonLdScript
 data={jsonLdBreadcrumbList([
 { name: "Home", href: "/" },
 { name: "About", href: "/about" },
 ])}
 />

 <div className="min-h-svh">
 <PageHeading>
 <PageHeadingTagline>About</PageHeadingTagline>
 <PageHeadingTitle>{description}</PageHeadingTitle>
 </PageHeading>

 <div className="h-4" />

 <ProfileCover />

 <div className="screen-line-bottom flex items-center justify-center py-8">
 <BrandMarkIsometric />
 </div>

 <Hello />

 <div className="h-4" />

 <Overview />
 <SocialLinks />
 </div>
 </>
 )
}
