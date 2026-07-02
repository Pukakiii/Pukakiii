import { Suspense } from "react"
import type { Metadata } from "next"
import type { ProfilePage, WithContext } from "schema-dts"

import dynamic from "next/dynamic"

import { JSON_LD_ID } from "@/config/json-ld"
import { JsonLdScript } from "@/lib/json-ld"
import { absoluteUrl, cn } from "@/lib/utils"
import { Blog } from "@/features/portfolio/components/blog"
import { Explore } from "@/features/portfolio/components/explore"
import { Hello } from "@/features/portfolio/components/hello"
import {
 Insights,
 InsightsSkeleton,
} from "@/features/portfolio/components/insights"
import { Overview } from "@/features/portfolio/components/overview"
import { ProfileHeader } from "@/features/portfolio/components/profile-header"
import { SocialLinks } from "@/features/portfolio/components/social-links"
import { TechStack } from "@/features/portfolio/components/tech-stack"
import { USER } from "@/features/portfolio/data/user"

const TOC = dynamic(() => import("@/features/portfolio/components/toc"))

const DuckFollower = dynamic(() =>
 import("@/features/portfolio/components/duck-follower/duck-follower").then(
 (mod) => mod.DuckFollower
 )
)

export const metadata: Metadata = {
 alternates: {
 canonical: "/",
 },
}

export default function HomePage() {
 return (
 <>
 <JsonLdScript data={getProfilePageJsonLd()} />

 <TOC />
 <DuckFollower />

 <div className="[--separator-height:--spacing(8)] **:data-[slot=panel]:scroll-mt-[calc(var(--header-height)+var(--separator-height))]">
 <div className="mx-auto md:max-w-3xl">
 <ProfileHeader />
 <Separator />

 <Overview />
 <SocialLinks />
 <Separator />

 <Hello />
 <Separator />

 <Explore />
 <Separator />

 <TechStack />
 <Separator />

 <Blog />
 <Separator />

 <Suspense fallback={<InsightsSkeleton />}>
 <Insights />
 </Suspense>
 </div>
 </div>
 </>
 )
}

function getProfilePageJsonLd(): WithContext<ProfilePage> {
 return {
 "@context": "https://schema.org",
 "@id": absoluteUrl("/"),
 "@type": "ProfilePage",
 dateCreated: new Date(USER.dateCreated).toISOString(),
 dateModified: new Date().toISOString(),
 mainEntity: { "@id": JSON_LD_ID.person },
 }
}

function Separator({ className }: { className?: string }) {
 return (
 <div
 className={cn(
 "stripe-divider h-(--separator-height) w-full border-x border-line",
 className
 )}
 />
 )
}
