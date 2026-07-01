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
    image: "https://images.unsplash.com/photo-1626785774573-4b799314346d?w=1200&q=80",
    imageAlt: "Brand identity and logo design workspace",
  },
  {
    id: "posters-banners",
    title: "Posters & event banners",
    category: "print",
    description:
      "Event posters, roll-up banners, and promotional layouts — bold typography, color systems, and print-ready files.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    imageAlt: "Poster and print design layout",
  },
  {
    id: "packaging-print",
    title: "Print collateral & packaging",
    category: "print",
    description:
      "Flyers, business cards, packaging labels, and polygraphy — from concept to production prep in Adobe Illustrator.",
    image: "https://images.unsplash.com/photo-1586075010923-2dd457fb7170?w=800&q=80",
    imageAlt: "Print and packaging design materials",
  },
  {
    id: "signage-banners",
    title: "Signage & large-format print",
    category: "print",
    description:
      "Shop signage, window graphics, and large-format banners — layout, bleed, and color profiles for print shops.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    imageAlt: "Large format banner and signage design",
  },
  {
    id: "commercial-photo",
    title: "Commercial & product photography",
    category: "photo-video",
    description:
      "Product, corporate portrait, and event shoots — studio lighting, composition, and Photoshop retouching.",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80",
    imageAlt: "Commercial photography setup",
  },
  {
    id: "promo-video",
    title: "Promotional video & motion",
    category: "photo-video",
    description:
      "Short-form promo and social content — editing, color grading, and motion graphics in After Effects.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    imageAlt: "Video production and editing",
  },
  {
    id: "social-content",
    title: "Social media visuals",
    category: "photo-video",
    description:
      "Campaign visuals, story templates, and branded content grids for Instagram and Facebook.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80",
    imageAlt: "Web design and development",
  },
  {
    id: "ui-layouts",
    title: "UI layouts & digital mockups",
    category: "web",
    description:
      "App screens, dashboard layouts, and digital product UI — Figma prototypes and design-system thinking.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
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
