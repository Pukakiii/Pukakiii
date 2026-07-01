import { PHOTOS } from "@/data/photos"

export type PortfolioCategory =
  | "brand-identity"
  | "print"
  | "photo-video"
  | "web"
  | "design-systems"

export type PortfolioItem = {
  id: string
  title: string
  category: PortfolioCategory
  description: string
  image?: string
  imageAlt?: string
  link?: string
  linkLabel?: string
  featured?: boolean
  logos?: { name: string; src: string }[]
}

export const PORTFOLIO_CATEGORIES: { id: PortfolioCategory; label: string }[] = [
  { id: "brand-identity", label: "Brand identity" },
  { id: "print", label: "Print & polygraphy" },
  { id: "photo-video", label: "Photo & video" },
  { id: "web", label: "Web & digital" },
  { id: "design-systems", label: "Design systems & tools" },
]

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "dreampire",
    title: "Dreampire — Agency production",
    category: "brand-identity",
    featured: true,
    description:
      "Three years of client work at dreampire.pl — logos, brand systems, print, photo, and video for businesses and institutions.",
    link: "https://dreampire.pl",
    linkLabel: "dreampire.pl",
    image: PHOTOS.studio,
    imageAlt: "Brand identity and logo design workspace",
  },
  {
    id: "posters-banners",
    title: "Posters & event banners",
    category: "print",
    description:
      "Event posters, roll-up banners, and promotional layouts — bold typography, color systems, and print-ready files.",
    image: PHOTOS.poster,
    imageAlt: "Poster and print design layout",
  },
  {
    id: "packaging-print",
    title: "Print collateral & packaging",
    category: "print",
    description:
      "Flyers, business cards, packaging labels, and polygraphy — from concept to production prep in Adobe Illustrator.",
    image: PHOTOS.packaging,
    imageAlt: "Print and packaging design materials",
  },
  {
    id: "signage-banners",
    title: "Signage & large-format print",
    category: "print",
    description:
      "Shop signage, window graphics, and large-format banners — layout, bleed, and color profiles for print shops.",
    image: PHOTOS.signage,
    imageAlt: "Large format banner and signage design",
  },
  {
    id: "commercial-photo",
    title: "Commercial & product photography",
    category: "photo-video",
    description:
      "Product, corporate portrait, and event shoots — studio lighting, composition, and Photoshop retouching.",
    image: PHOTOS.commercial,
    imageAlt: "Commercial photography setup",
  },
  {
    id: "promo-video",
    title: "Promotional video & motion",
    category: "photo-video",
    description:
      "Short-form promo and social content — editing, color grading, and motion graphics in After Effects.",
    image: PHOTOS.video,
    imageAlt: "Video production and editing",
  },
  {
    id: "social-content",
    title: "Social media visuals",
    category: "photo-video",
    description:
      "Campaign visuals, story templates, and branded content grids for Instagram and Facebook.",
    image: PHOTOS.social,
    imageAlt: "Social media content design",
  },
  {
    id: "web-portfolio",
    title: "Web & digital design",
    category: "web",
    featured: true,
    description:
      "Responsive websites and landing pages — layout design plus hands-on development when needed.",
    link: "https://pukakiii.vercel.app",
    linkLabel: "pukakiii.vercel.app",
    image: PHOTOS.web,
    imageAlt: "Web design and development",
  },
  {
    id: "ui-layouts",
    title: "UI layouts & digital mockups",
    category: "web",
    description:
      "App screens, dashboard layouts, and digital product UI — Figma prototypes and design-system thinking.",
    image: PHOTOS.ui,
    imageAlt: "UI and digital layout design",
  },
  {
    id: "design-systems",
    title: "Creative tools & design systems",
    category: "design-systems",
    description:
      "Daily workflow across Adobe Creative Suite, Figma, and modern design-system patterns for consistent brand output.",
    logos: [
      { name: "Illustrator", src: "/portfolio/tools/illustrator.svg" },
      { name: "Photoshop", src: "/portfolio/tools/photoshop.svg" },
      { name: "After Effects", src: "/portfolio/tools/after-effects.svg" },
      { name: "Premiere Pro", src: "/portfolio/tools/premiere.svg" },
      { name: "InDesign", src: "/portfolio/tools/indesign.svg" },
      { name: "Figma", src: "/portfolio/tools/figma.svg" },
      { name: "Lightroom", src: "/portfolio/tools/lightroom.svg" },
      { name: "Canva", src: "/portfolio/tools/canva.svg" },
      { name: "Material", src: "/portfolio/tools/material.svg" },
      { name: "Tailwind", src: "/portfolio/tools/tailwind.svg" },
      { name: "Sketch", src: "/portfolio/tools/sketch.svg" },
      { name: "Blender", src: "/portfolio/tools/blender.svg" },
    ],
  },
]
