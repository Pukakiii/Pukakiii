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

export function getMarkSVG() {
 return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><image href="${BRAND_MARK_SRC}" width="1024" height="1024"/></svg>`
}
