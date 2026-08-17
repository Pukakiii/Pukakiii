import { describe, expect, it } from "vitest"

import { SITE_INFO } from "@/config/site"
import { absoluteUrl } from "@/lib/utils"

describe("absoluteUrl", () => {
 it("uses the canonical site URL", () => {
  expect(absoluteUrl("/about")).toBe(
   new URL("/about", SITE_INFO.url).toString()
  )
 })
})
