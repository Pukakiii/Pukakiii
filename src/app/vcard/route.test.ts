import { describe, expect, it } from "vitest"

import { GET } from "@/app/vcard/route"

describe("vCard route", () => {
 it("embeds the local profile image", async () => {
  const response = await GET()
  const card = await response.text()

  expect(response.status).toBe(200)
  expect(card).toContain("PHOTO")
  expect(card).toContain("TYPE=JPEG")
 })
})
