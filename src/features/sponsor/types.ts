export type SponsorTier = "osp" | "platinum" | "gold" | "silver"

export type Sponsor = {
 name: string
 tier: SponsorTier
 href: string
 logo?: string
}
