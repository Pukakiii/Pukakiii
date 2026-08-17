import { unstable_cache } from "next/cache"

import { SOURCE_CODE_GITHUB_REPO } from "@/config/site"
import { getGitHubApiHeaders } from "@/lib/github"
import { GitHubStars } from "@/components/github-stars"

const getStargazerCount = unstable_cache(
 async () => {
 try {
 const response = await fetch(
 `https://api.github.com/repos/${SOURCE_CODE_GITHUB_REPO}`,
 {
 headers: getGitHubApiHeaders(process.env.GITHUB_API_TOKEN),
 }
 )

 if (!response.ok) {
 return 0
 }

 const json = (await response.json()) as { stargazers_count?: number }
 return Number(json?.stargazers_count) || 0
 } catch {
 return 0
 }
 },
 ["github-stargazer-count"],
 { revalidate: 86400 } // Cache for 1 day (86400 seconds)
)

export async function NavItemGitHub() {
 const stargazersCount = await getStargazerCount()

 return (
 <GitHubStars
 repo={SOURCE_CODE_GITHUB_REPO}
 stargazersCount={stargazersCount}
 />
 )
}
