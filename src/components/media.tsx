"use client"

import { useState } from "react"

/* eslint-disable @next/next/no-img-element */

type LogoImgProps = {
  src: string
  alt: string
  className?: string
}

function ImageFallback({ alt, className }: { alt: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-accent/20 to-accent/5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground ${className ?? ""}`}
      aria-label={alt}
    >
      {alt.slice(0, 2)}
    </div>
  )
}

/** Native img — Next.js Image optimizer breaks on SVG and many external icon URLs. */
export function LogoImg({ src, alt, className = "h-full w-full object-contain" }: LogoImgProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return <ImageFallback alt={alt} className={className} />
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}

type CoverImgProps = {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

/** Native img for photos — served locally from /public for reliability. */
export function CoverImg({
  src,
  alt,
  className = "h-full w-full object-cover",
  priority = false,
}: CoverImgProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return <ImageFallback alt={alt} className={className} />
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      onError={() => setFailed(true)}
    />
  )
}
