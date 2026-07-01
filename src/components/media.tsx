/* eslint-disable @next/next/no-img-element */

type LogoImgProps = {
  src: string
  alt: string
  className?: string
}

/** Native img — Next.js Image optimizer breaks on SVG and many external icon URLs. */
export function LogoImg({ src, alt, className = "h-full w-full object-contain" }: LogoImgProps) {
  return <img src={src} alt={alt} className={className} loading="lazy" decoding="async" />
}

type CoverImgProps = {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

/** Native img for photos — reliable on Vercel without remote optimizer dependency. */
export function CoverImg({
  src,
  alt,
  className = "h-full w-full object-cover",
  priority = false,
}: CoverImgProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
    />
  )
}
