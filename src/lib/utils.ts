import type { ClassValue } from "clsx"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import { SITE_INFO } from "@/config/site"

export const cn = (...inputs: ClassValue[]) => {
 return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
 return new URL(path, SITE_INFO.url).toString()
}
