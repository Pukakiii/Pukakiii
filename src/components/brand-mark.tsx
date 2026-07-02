import Image from "next/image"

import { cn } from "@/lib/utils"

export const BRAND_MARK_SRC = "/images/brand/pkki-mark.png"
export const BRAND_LOGO_SRC = "/images/brand/pkki-logo.png"

type BrandMarkProps = Omit<
 React.ComponentProps<typeof Image>,
 "src" | "alt" | "width" | "height"
> & {
 variant?: "mark" | "logo"
}

export function BrandMark({
 className,
 variant = "mark",
 ...props
}: BrandMarkProps) {
 const src = variant === "logo" ? BRAND_LOGO_SRC : BRAND_MARK_SRC

 return (
 <Image
 src={src}
 alt=""
 width={1024}
 height={1024}
 aria-hidden
 className={cn("aspect-square object-contain", className)}
 {...props}
 />
 )
}

// Pixel PKKI monogram (P K / K I on a 5x7 pixel grid), self-contained vector.
const MONOGRAM_PATH =
 "M0 0h32v32h-32zM32 0h32v32h-32zM64 0h32v32h-32zM96 0h32v32h-32zM0 32h32v32h-32zM128 32h32v32h-32zM0 64h32v32h-32zM128 64h32v32h-32zM0 96h32v32h-32zM32 96h32v32h-32zM64 96h32v32h-32zM96 96h32v32h-32zM0 128h32v32h-32zM0 160h32v32h-32zM0 192h32v32h-32zM192 0h32v32h-32zM320 0h32v32h-32zM192 32h32v32h-32zM288 32h32v32h-32zM192 64h32v32h-32zM256 64h32v32h-32zM192 96h32v32h-32zM224 96h32v32h-32zM192 128h32v32h-32zM256 128h32v32h-32zM192 160h32v32h-32zM288 160h32v32h-32zM192 192h32v32h-32zM320 192h32v32h-32zM0 256h32v32h-32zM128 256h32v32h-32zM0 288h32v32h-32zM96 288h32v32h-32zM0 320h32v32h-32zM64 320h32v32h-32zM0 352h32v32h-32zM32 352h32v32h-32zM0 384h32v32h-32zM64 384h32v32h-32zM0 416h32v32h-32zM96 416h32v32h-32zM0 448h32v32h-32zM128 448h32v32h-32zM192 256h32v32h-32zM224 256h32v32h-32zM256 256h32v32h-32zM288 256h32v32h-32zM320 256h32v32h-32zM256 288h32v32h-32zM256 320h32v32h-32zM256 352h32v32h-32zM256 384h32v32h-32zM256 416h32v32h-32zM192 448h32v32h-32zM224 448h32v32h-32zM256 448h32v32h-32zM288 448h32v32h-32zM320 448h32v32h-32z"

export function getMarkSVG() {
 return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 352 480"><path fill="currentColor" d="${MONOGRAM_PATH}"/></svg>`
}
