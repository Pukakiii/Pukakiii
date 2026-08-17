import { formatPhoneNumber } from "@/utils/string"
import { describe, expect, it } from "vitest"

describe("formatPhoneNumber", () => {
 it("formats the configured Polish phone number", () => {
  expect(formatPhoneNumber("+48789191644")).toBe("+48 789 191 644")
 })
})
