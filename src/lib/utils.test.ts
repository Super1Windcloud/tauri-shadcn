import { describe, expect, it } from "vitest"

import { cn } from "./utils"

describe("cn", () => {
  it("concatenates arbitrary class names", () => {
    expect(cn("flex", "items-center", "gap-2")).toBe("flex items-center gap-2")
  })

  it("filters out falsy values", () => {
    const optionalClass = undefined as string | undefined

    expect(cn("flex", optionalClass, null, "", "mt-4")).toBe("flex mt-4")
  })

  it("merges tailwind variants predictably", () => {
    expect(cn("px-2", "px-4")).toBe("px-4")
    expect(cn("text-sm", "text-base", "text-sm")).toBe("text-sm")
  })
})
