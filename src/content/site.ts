import type { NavItem, SocialLink } from "@/lib/types";

export const site = {
  name: "Kartik Joshi",
  shortName: "Kartik Joshi",
  title: "AI Engineer",
  /** Positioning line — the one sentence everything else supports. */
  positioning: "AI Engineer building production-grade Generative AI systems.",
  subline:
    "I build RAG, Agentic AI and LLM-powered applications, and take them from experimentation to production with LangGraph, FastAPI, Docker and AWS.",
  discipline: "Generative AI · Agentic AI · RAG · LLM Systems · AWS",
  /** Domain context — relevant to financial services and consulting hiring. */
  domain: "Financial services · lending & document intelligence",
  location: "Mumbai, Maharashtra, India",
  /** Set this to the final domain before shipping — it drives canonical
      URLs, the sitemap, robots.txt and the JSON-LD structured data. */
  url: "https://[ADD DOMAIN]",
  email: "joshikartik902@gmail.com",
  resume: {
    href: "/resume.pdf",
    updated: "Sep 2026",
  },
  availability: "Open to AI Engineer / GenAI Engineer roles",
} as const;

export const socials: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/kartik-joshi-045326250",
    handle: "linkedin.com/in/kartik-joshi-045326250",
  },
  {
    label: "GitHub",
    href: "https://github.com/MadonnaRivers",
    handle: "github.com/MadonnaRivers",
  },
  {
    label: "Email",
    href: "mailto:joshikartik902@gmail.com",
    handle: "joshikartik902@gmail.com",
  },
];

export const nav: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const seoKeywords = [
  "Kartik Joshi",
  "AI Engineer",
  "Generative AI Engineer",
  "GenAI Engineer",
  "LLM Engineer",
  "RAG Engineer",
  "Agentic AI Engineer",
  "Machine Learning Engineer",
  "LangGraph",
  "LangChain",
  "FastAPI",
  "AWS",
  "AI Engineer Mumbai",
  "AI Engineer India",
];

/**
 * Headline numbers, all from shipped work. `value` is what animates;
 * `display` is what is actually rendered, so ranges stay honest.
 */
export const headlineStats = [
  { value: 3, display: "3+", label: "Years building AI systems" },
  { value: 1000, display: "1,000+", label: "Queries/day served by EasyGPT" },
  { value: 40, display: "40+", label: "Users across 3 teams" },
  { value: 90, display: "~85–90%", label: "Agent task success rate" },
] as const;
