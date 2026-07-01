/** All portfolio photos are bundled locally — several Unsplash IDs return 404. */
const v = "?v=2"

export const PHOTOS = {
  studio: `/portfolio/photos/studio.jpg${v}`,
  poster: `/portfolio/photos/poster.jpg${v}`,
  packaging: `/portfolio/photos/packaging.jpg${v}`,
  signage: `/portfolio/photos/signage.jpg${v}`,
  commercial: `/portfolio/photos/commercial.jpg${v}`,
  video: `/portfolio/photos/video.jpg${v}`,
  social: `/portfolio/photos/social.jpg${v}`,
  web: `/portfolio/photos/web.jpg${v}`,
  ui: `/portfolio/photos/ui.jpg${v}`,
  lens1: `/portfolio/photos/lens-1.jpg${v}`,
  lens2: `/portfolio/photos/lens-2.jpg${v}`,
  lens3: `/portfolio/photos/lens-3.jpg${v}`,
} as const

export const PHOTO_GALLERY = [
  PHOTOS.commercial,
  PHOTOS.lens1,
  PHOTOS.video,
  PHOTOS.lens2,
  PHOTOS.signage,
  PHOTOS.social,
] as const
