/**
 * Shared content types.
 *
 * Anything the site displays comes from `src/content/*`, typed here.
 * Strings may contain placeholder tokens in square brackets — e.g.
 * `[ADD VERIFIED METRIC]`. These are rendered with a distinct visual
 * treatment by <Tokenized/> so unverified content is never mistaken
 * for a claim. Replace the token text and the styling disappears.
 */

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export type Role = {
  id: string;
  title: string;
  company: string;
  /** e.g. "Jun 2025" */
  start: string;
  /** e.g. "Present" */
  end: string;
  location: string;
  /** Short framing of the mandate — one sentence, no metrics. */
  summary: string;
  /** What was built. Verbs first. Placeholders for anything unverified. */
  highlights: string[];
  /** Verified-only outcome slots. Render as pending until filled. */
  outcomes: string[];
  stack: string[];
  current?: boolean;
};

export type ProjectCategory =
  | "Agentic AI"
  | "RAG"
  | "LLM Application"
  | "Computer Vision"
  | "Deep Learning";

export type CaseStudySection = {
  id: string;
  label: string;
  body: string[];
  /** Optional ordered mechanics list rendered as a spec table. */
  spec?: { key: string; value: string }[];
};

export type Project = {
  slug: string;
  name: string;
  /** One line: the problem, not the solution. */
  problem: string;
  /** Two–three lines: what was built. */
  built: string;
  categories: ProjectCategory[];
  stack: string[];
  /** Compact architecture path shown on the card. */
  architecture: string[];
  contribution: string;
  impact: string[];
  links: {
    github?: string;
    demo?: string;
  };
  featured?: boolean;
  caseStudy?: CaseStudySection[];
};

export type TechCategory =
  | "GenAI & Agents"
  | "Models"
  | "Backend"
  | "Deep Learning"
  | "Cloud & DevOps"
  | "Data & Vector";

export type TechItem = {
  /** Must match a key in `glyphs` (src/lib/icons.ts) to get a brand mark. */
  name: string;
  category: TechCategory;
  /** How it is used, in a few words. Never "expert in". */
  detail: string;
};

export type Capability = {
  title: string;
  detail: string;
};

export type SkillGroup = {
  id: string;
  title: string;
  /** Explains how the group is used, not that it is known. */
  note: string;
  items: { name: string; detail: string }[];
};

export type DepthTopic = {
  id: string;
  title: string;
  body: string;
  tags: string[];
};

export type Achievement = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  detail: string;
  href?: string;
};
