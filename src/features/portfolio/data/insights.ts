import "server-only"

import { unstable_cache } from "next/cache"

import { USER } from "@/features/portfolio/data/user"

type ISODateString = string

type InsightsSummary = {
 unique_visitors: number
 total_sessions: number
 total_screen_views: number
 /** seconds */
 avg_session_duration: number
}

type InsightsSeriesItem = {
 date: ISODateString
 total_sessions: number
 total_screen_views: number
}

type InsightsResponse = {
 summary: InsightsSummary
 series: InsightsSeriesItem[]
 startDate: ISODateString
 endDate: ISODateString
}

// Self-hosted Umami — https://docs.umami.is/docs/api
// Full history lives in the Umami dashboard; the panel charts the last N days.
const RANGE_DAYS = 30

type UmamiConfig = {
 baseUrl: string
 websiteId: string
 apiKey?: string
 username?: string
 password?: string
}

type UmamiStats = {
 pageviews: number
 visitors: number
 visits: number
 bounces: number
 totaltime: number
}

type UmamiPoint = { x: string; y: number }

type UmamiPageviews = {
 pageviews: UmamiPoint[]
 sessions: UmamiPoint[]
}

function getConfig(): UmamiConfig | null {
 const baseUrl = (process.env.NEXT_PUBLIC_UMAMI_URL ?? "").replace(/\/+$/, "")
 const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID
 const apiKey = process.env.UMAMI_API_KEY
 const username = process.env.UMAMI_USERNAME
 const password = process.env.UMAMI_PASSWORD

 if (!baseUrl || !websiteId) return null
 if (!apiKey && !(username && password)) return null

 return { baseUrl, websiteId, apiKey, username, password }
}

async function getAuthToken(config: UmamiConfig): Promise<string | null> {
 if (config.apiKey) return config.apiKey

 const res = await fetch(`${config.baseUrl}/api/auth/login`, {
 method: "POST",
 headers: { "Content-Type": "application/json" },
 body: JSON.stringify({
 username: config.username,
 password: config.password,
 }),
 })
 if (!res.ok) return null

 const json = (await res.json()) as { token?: string }
 return json.token ?? null
}

async function umamiGet<T>(
 config: UmamiConfig,
 token: string,
 path: string,
 params: Record<string, string>
): Promise<T | null> {
 const url = new URL(`${config.baseUrl}/api/websites/${config.websiteId}/${path}`)
 for (const [key, value] of Object.entries(params)) {
 url.searchParams.set(key, value)
 }

 const res = await fetch(url, {
 headers: { Authorization: `Bearer ${token}` },
 })
 if (!res.ok) return null

 return (await res.json()) as T
}

function toISODate(input: string | Date): ISODateString {
 if (typeof input === "string" && /^\d{4}-\d{2}-\d{2}/.test(input)) {
 return input.slice(0, 10)
 }
 return new Date(input).toISOString().slice(0, 10)
}

export const getInsights = unstable_cache(
 async (): Promise<InsightsResponse | null> => {
 const config = getConfig()
 if (!config) return null

 try {
 const token = await getAuthToken(config)
 if (!token) return null

 const end = new Date()
 const start = new Date(end)
 start.setDate(start.getDate() - (RANGE_DAYS - 1))
 start.setHours(0, 0, 0, 0)

 const range = {
 startAt: String(start.getTime()),
 endAt: String(end.getTime()),
 }

 const [stats, pageviews] = await Promise.all([
 umamiGet<UmamiStats>(config, token, "stats", range),
 umamiGet<UmamiPageviews>(config, token, "pageviews", {
 ...range,
 unit: "day",
 timezone: USER.timeZone,
 }),
 ])

 if (!stats || !pageviews) return null

 // Merge the two daily series and zero-fill so the chart spans the range.
 const byDate = new Map<string, InsightsSeriesItem>()
 const ensure = (date: string) => {
 let item = byDate.get(date)
 if (!item) {
 item = { date, total_sessions: 0, total_screen_views: 0 }
 byDate.set(date, item)
 }
 return item
 }
 for (const point of pageviews.pageviews ?? []) {
 ensure(toISODate(point.x)).total_screen_views = Number(point.y) || 0
 }
 for (const point of pageviews.sessions ?? []) {
 ensure(toISODate(point.x)).total_sessions = Number(point.y) || 0
 }

 const series: InsightsSeriesItem[] = []
 for (let i = 0; i < RANGE_DAYS; i++) {
 const day = new Date(start)
 day.setDate(start.getDate() + i)
 const date = toISODate(day)
 series.push(
 byDate.get(date) ?? { date, total_sessions: 0, total_screen_views: 0 }
 )
 }

 const visits = Number(stats.visits) || 0
 const totaltime = Number(stats.totaltime) || 0

 return {
 summary: {
 unique_visitors: Number(stats.visitors) || 0,
 total_sessions: visits,
 total_screen_views: Number(stats.pageviews) || 0,
 avg_session_duration: visits > 0 ? totaltime / visits : 0,
 },
 series,
 startDate: toISODate(start),
 endDate: toISODate(end),
 }
 } catch {
 return null
 }
 },
 ["umami-insights"],
 { revalidate: 3600 } // Cache for 1 hour
)
