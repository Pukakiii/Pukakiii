import type { Route } from "next"

import type { NavItem } from "@/types/nav"
import { USER } from "@/features/portfolio/data/user"

export const SITE_INFO = {
 name: USER.displayName,
 url: process.env.NEXT_PUBLIC_APP_URL || "https://placeholder.local",
 ogImage: USER.ogImage,
 description: USER.bio,
 keywords: USER.keywords,
}

export const LICENSE = {
 name: "MIT License",
 url: "#",
}

export const META_THEME_COLORS = {
 light: "#ffffff",
 dark: "#09090b",
}

export const MAIN_NAV: NavItem<Route>[] = [
 { title: "Components", href: "/components" },
 { title: "Blocks", href: "/blocks" },
 { title: "Blog", href: "/blog" },
]

export const MOBILE_NAV: NavItem<Route>[] = [
 { title: "Home", href: "/" },
 ...MAIN_NAV,
]

export const X_HANDLE = "[handle — to be updated]"
export const GITHUB_USERNAME = "[handle — to be updated]"
export const SOURCE_CODE_GITHUB_REPO = "Pukakiii/Pukakiii"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/Pukakiii/Pukakiii"

export const SPONSORSHIP_URL = "#"

export const UTM_PARAMS = {
 utm_source: "pukakiii-portfolio",
}
