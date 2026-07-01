import type { Metadata } from "next"
import { Geist, Geist_Mono, Syne } from "next/font/google"

import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import { PROFILE } from "@/data/profile"

import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: `${PROFILE.name} — ${PROFILE.title}`,
  description: PROFILE.about.join(" "),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${syne.variable}`}>
        <ThemeProvider>
          <SiteHeader />
          <main className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
