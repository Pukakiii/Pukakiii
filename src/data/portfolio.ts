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
  logos?: { name: string; src: string; color?: string }[]
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
    description:
      "Three years of client work at dreampire.pl — logos, brand systems, print, photo, and video for businesses and institutions.",
    link: "https://dreampire.pl",
    linkLabel: "dreampire.pl",
    image: "https://images.unsplash.com/photo-1626785774573-4b799314346d?w=800&q=80",
    imageAlt: "Brand identity and logo design workspace",
  },
  {
    id: "brand-marks",
    title: "Logo & mark design",
    category: "brand-identity",
    description:
      "Vector logo concepts, wordmarks, and icon systems — from sketch to print-ready files in Illustrator.",
    logos: [
      { name: "Atelier mark", src: "/portfolio/logos/atelier.svg" },
      { name: "Bloom studio", src: "/portfolio/logos/bloom.svg" },
      { name: "North workshop", src: "/portfolio/logos/north.svg" },
      { name: "Craft co.", src: "/portfolio/logos/craft.svg" },
    ],
  },
  {
    id: "posters-banners",
    title: "Posters & banners",
    category: "print",
    description:
      "Event posters, promotional banners, and print-ready layouts — typography, color, and production prep.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    imageAlt: "Poster and print design layout",
  },
  {
    id: "packaging-print",
    title: "Print collateral & packaging",
    category: "print",
    description:
      "Flyers, business cards, packaging mockups, and polygraphy projects from technikum and client work.",
    image: "https://images.unsplash.com/photo-1586075010923-2dd457fb7170?w=800&q=80",
    imageAlt: "Print and packaging design materials",
  },
  {
    id: "commercial-photo",
    title: "Commercial & event photography",
    category: "photo-video",
    description:
      "Product, corporate portrait, and event shoots with editing, retouching, and color grading in Photoshop.",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80",
    imageAlt: "Commercial photography setup",
  },
  {
    id: "promo-video",
    title: "Promotional video",
    category: "photo-video",
    description:
      "Short-form promo and campaign video — scripting, shooting, and post-production in After Effects.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    imageAlt: "Video production and editing",
  },
  {
    id: "web-portfolio",
    title: "Web & digital design",
    category: "web",
    description:
      "Responsive websites and digital layouts — design direction plus hands-on development when needed.",
    link: "https://pukakiii.vercel.app",
    linkLabel: "pukakiii.vercel.app",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    imageAlt: "Web design and development",
  },
  {
    id: "design-systems",
    title: "Design systems & creative tools",
    category: "design-systems",
    description:
      "Daily workflow across Adobe Creative Suite, Figma, and modern design-system patterns for consistent brand output.",
    logos: [
      { name: "Adobe Illustrator", src: "https://cdn.simpleicons.org/adobeillustrator/FF9A00", color: "#FF9A00" },
      { name: "Adobe Photoshop", src: "https://cdn.simpleicons.org/adobephotoshop/31A8FF", color: "#31A8FF" },
      { name: "Adobe After Effects", src: "https://cdn.simpleicons.org/adobeaftereffects/9999FF", color: "#9999FF" },
      { name: "Figma", src: "https://cdn.simpleicons.org/figma/F24E1E", color: "#F24E1E" },
      { name: "Material Design", src: "https://cdn.simpleicons.org/materialdesign/6750A4", color: "#6750A4" },
      { name: "Tailwind CSS", src: "https://cdn.simpleicons.org/tailwindcss/06B6D4", color: "#06B6D4" },
    ],
  },
]
