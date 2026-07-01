export type BrandIdentity = {
  id: string
  name: string
  tagline: string
  industry: string
  logo: string
  colors: string[]
  typeface: string
  description: string
}

export const BRAND_IDENTITIES: BrandIdentity[] = [
  {
    id: "verde",
    name: "Verde Coffee",
    tagline: "Roasted with intention",
    industry: "Food & beverage",
    logo: "/portfolio/brands/verde.svg",
    colors: ["#1B4332", "#40916C", "#D8F3DC", "#F4F1DE"],
    typeface: "DM Serif Display + Inter",
    description: "Organic café brand — logo, packaging labels, and menu design.",
  },
  {
    id: "axiom",
    name: "Axiom Tech",
    tagline: "Build what matters",
    industry: "Technology",
    logo: "/portfolio/brands/axiom.svg",
    colors: ["#0F172A", "#2563EB", "#60A5FA", "#F8FAFC"],
    typeface: "Geist + IBM Plex Mono",
    description: "SaaS consultancy identity — geometric mark and pitch deck system.",
  },
  {
    id: "lumiere",
    name: "Lumière Studio",
    tagline: "Light. Frame. Story.",
    industry: "Photography",
    logo: "/portfolio/brands/lumiere.svg",
    colors: ["#1A1A1A", "#C9A227", "#F5F0E8", "#FFFFFF"],
    typeface: "Playfair Display + Lato",
    description: "Portrait studio — elegant wordmark, gold foil business cards.",
  },
  {
    id: "kinetic",
    name: "Kinetic Sport",
    tagline: "Move forward",
    industry: "Sports & fitness",
    logo: "/portfolio/brands/kinetic.svg",
    colors: ["#DC2626", "#1E1E1E", "#FAFAFA", "#FCA5A5"],
    typeface: "Bebas Neue + Roboto",
    description: "Athletic wear brand — dynamic logo and event banner series.",
  },
  {
    id: "forma",
    name: "Forma Architecture",
    tagline: "Space redefined",
    industry: "Architecture",
    logo: "/portfolio/brands/forma.svg",
    colors: ["#374151", "#9CA3AF", "#F3F4F6", "#111827"],
    typeface: "Helvetica Neue + Georgia",
    description: "Minimal monogram and project portfolio layout system.",
  },
  {
    id: "nova",
    name: "Nova Events",
    tagline: "Moments that shine",
    industry: "Events",
    logo: "/portfolio/brands/nova.svg",
    colors: ["#5B21B6", "#8B5CF6", "#EDE9FE", "#FDF4FF"],
    typeface: "Outfit + Source Sans 3",
    description: "Event agency — poster series, roll-up banners, and social templates.",
  },
  {
    id: "paper-ink",
    name: "Paper & Ink",
    tagline: "Crafted in print",
    industry: "Print studio",
    logo: "/portfolio/brands/paper-ink.svg",
    colors: ["#292524", "#78716C", "#E7E5E4", "#FAFAF9"],
    typeface: "Libre Baskerville + Karla",
    description: "Letterpress shop — vintage-inspired logo and stationery set.",
  },
  {
    id: "harvest",
    name: "Harvest Market",
    tagline: "From local soil",
    industry: "Retail",
    logo: "/portfolio/brands/harvest.svg",
    colors: ["#854D0E", "#CA8A04", "#FEF9C3", "#365314"],
    typeface: "Fraunces + Nunito",
    description: "Farmers market identity — tote bags, signage, and flyer design.",
  },
]

export type PosterDesign = {
  id: string
  title: string
  subtitle: string
  accent: string
  bg: string
  text: string
  style: "bold" | "minimal" | "editorial" | "event"
}

export const POSTER_DESIGNS: PosterDesign[] = [
  {
    id: "jazz-night",
    title: "JAZZ NIGHT",
    subtitle: "Live at Studio 7 · 21 March · Doors 19:00",
    accent: "#EAB308",
    bg: "#0C0A09",
    text: "#FAFAF9",
    style: "bold",
  },
  {
    id: "art-exhibition",
    title: "Contemporary\nForms",
    subtitle: "Gallery opening · 5–28 April",
    accent: "#6366F1",
    bg: "#FAFAFA",
    text: "#18181B",
    style: "editorial",
  },
  {
    id: "workshop",
    title: "Creative Workshop",
    subtitle: "Typography · Layout · Print prep",
    accent: "#C2410C",
    bg: "#FFF7ED",
    text: "#431407",
    style: "minimal",
  },
  {
    id: "festival",
    title: "SUMMER FEST",
    subtitle: "3 days · 12 bands · Food trucks · Free entry",
    accent: "#EC4899",
    bg: "#4C1D95",
    text: "#FFFFFF",
    style: "event",
  },
]
