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
 url: "https://github.com/Pukakiii/Pukakiii/blob/main/LICENSE",
}

export const META_THEME_COLORS = {
 light: "#ffffff",
 dark: "#09090b",
}

export const MAIN_NAV: NavItem<Route>[] = [
 { title: "About", href: "/about" },
 { title: "Experience", href: "/experience" },
 { title: "Projects", href: "/projects" },
 { title: "Blog", href: "/blog" },
]

/** Overflow links rendered in the desktop "More" dropdown. */
export const MORE_NAV: NavItem<Route>[] = [
 { title: "Skills", href: "/skills" },
 { title: "Education", href: "/education" },
 { title: "Analytics", href: "/analytics" },
 { title: "Contact", href: "/contact" },
]

export const MOBILE_NAV: NavItem<Route>[] = [
 { title: "Home", href: "/" },
 { title: "About", href: "/about" },
 { title: "Experience", href: "/experience" },
 { title: "Projects", href: "/projects" },
 { title: "Skills", href: "/skills" },
 { title: "Education", href: "/education" },
 { title: "Blog", href: "/blog" },
 { title: "Analytics", href: "/analytics" },
 { title: "Contact", href: "/contact" },
]

export const X_HANDLE = ""
export const GITHUB_USERNAME = "Pukakiii"
export const SOURCE_CODE_GITHUB_REPO = "Pukakiii/Pukakiii"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/Pukakiii/Pukakiii"

export const UTM_PARAMS = {
 utm_source: "pukakiii-portfolio",
}
