import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "job-agent",
    title: "Job-Agent",
    period: { start: "2025" },
    link: "https://github.com/Pukakiii/Job-Agent",
    skills: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "Docker",
      "LLM",
      "RAG",
    ],
    description: `AI-first job search platform — MVP on \`main\` with a live backend, Docker Compose stack, and end-to-end workflow:

- Ingest jobs from official APIs and scraping sources; deduplicate and cache in PostgreSQL
- Semantic CV matching with embeddings + pgvector; LLM re-ranking and fit scoring
- Generate tailored resumes and cover letters; compose outreach emails and track applications
- Configurable AI providers (Ollama / OpenAI) for chat and embeddings independently`,
    logo: "/images/logos/projects/job-agent.svg",
    isExpanded: true,
  },
  {
    id: "httpcrawler",
    title: "httpcrawler",
    period: { start: "2024" },
    link: "https://github.com/Pukakiii/httpcrawler",
    skills: ["Node.js", "JavaScript", "JSDOM"],
    description: `Domain-scoped recursive web crawler in Node.js. Starts from a seed URL, fetches HTML, extracts \`<a>\` links, normalizes relative URLs, and walks same-domain pages without revisiting duplicates — then prints a numbered crawl report.`,
    logo: "/images/logos/httpcrawler.svg",
  },
  {
    id: "miniRED",
    title: "miniRED",
    period: { start: "2024" },
    link: "https://github.com/Pukakiii/miniRED",
    skills: [
      "TypeScript",
      "React",
      "Redux Toolkit",
      "React Router",
      "Vite",
    ],
    description: `Mini Reddit-style client built with React 19 and Vite. Browse subreddits and popular feeds (hot, new, best), view post cards with media, and manage state through Redux Toolkit slices for subreddit and popular post APIs.`,
    logo: "/images/logos/projects/minired.png",
  },
  {
    id: "spotify-playlist",
    title: "spotify-playlist",
    period: { start: "2023" },
    link: "https://github.com/Pukakiii/spotify-playlist",
    skills: ["React", "JavaScript", "Spotify API", "OAuth PKCE"],
    description: `Spotify playlist builder using the Web API with OAuth 2.0 PKCE authorization. Search for tracks by artist, song, or album and assemble a custom playlist — inspired by the classic Jammming project pattern.`,
    logo: "/images/logos/spotify.svg",
  },
  {
    id: "react-appointment-manager",
    title: "react-appointment-manager",
    period: { start: "2023" },
    link: "https://github.com/Pukakiii/react-appointment-manager",
    skills: ["React", "React Router", "JavaScript"],
    description: `Multi-page appointment manager with React Router — maintain a contact book, pick contacts when scheduling, and view upcoming appointments. State lifted in the root app with dedicated contacts and appointments pages.`,
    logo: "/images/logos/react.svg",
  },
  {
    id: "assemblygame",
    title: "assemblygame",
    period: { start: "2023" },
    link: "https://github.com/Pukakiii/assemblygame",
    skills: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    description: `Hangman-style word game built with React and Tailwind CSS — guess letters to reveal programming-language and assembly-themed words before the language icons run out. Keyboard input, win/lose states, and color-coded letter feedback.`,
    logo: "/images/logos/assemblygame.svg",
  },
]
