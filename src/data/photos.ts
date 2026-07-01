/** All portfolio photos are bundled locally — several Unsplash IDs return 404. */
export const PHOTOS = {
  studio: "/portfolio/photos/studio.jpg",
  poster: "/portfolio/photos/poster.jpg",
  packaging: "/portfolio/photos/packaging.jpg",
  signage: "/portfolio/photos/signage.jpg",
  commercial: "/portfolio/photos/commercial.jpg",
  video: "/portfolio/photos/video.jpg",
  social: "/portfolio/photos/social.jpg",
  web: "/portfolio/photos/web.jpg",
  ui: "/portfolio/photos/ui.jpg",
  lens1: "/portfolio/photos/lens-1.jpg",
  lens2: "/portfolio/photos/lens-2.jpg",
  lens3: "/portfolio/photos/lens-3.jpg",
} as const

export const PHOTO_GALLERY = [
  PHOTOS.commercial,
  PHOTOS.lens1,
  PHOTOS.video,
  PHOTOS.lens2,
  PHOTOS.signage,
  PHOTOS.social,
] as const
