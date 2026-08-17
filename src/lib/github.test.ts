import { describe, expect, it } from "vitest"

import { getGitHubApiHeaders } from "@/lib/github"

describe("getGitHubApiHeaders", () => {
 it("omits authorization when no token is configured", () => {
  expect(getGitHubApiHeaders()).not.toHaveProperty("Authorization")
 })

 it("adds bearer authorization when a token is configured", () => {
  expect(getGitHubApiHeaders("secret")).toHaveProperty(
   "Authorization",
   "Bearer secret"
  )
 })
})
