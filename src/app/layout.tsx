import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { site, seoKeywords } from "@/content/site";
import { siteBaseUrl } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono-face",
});

const description =
  "AI Engineer building production Generative AI systems — RAG pipelines, agentic workflows with LangChain and LangGraph, LLM applications on FastAPI, deployed with Docker on AWS.";

export const metadata: Metadata = {
  metadataBase: siteBaseUrl(),
  title: {
    default: `${site.name} — AI Engineer | Generative AI, RAG & Agentic AI`,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: seoKeywords,
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    title: `${site.name} — AI Engineer | Generative AI, RAG & Agentic AI`,
    description,
    url: "/",
    siteName: `${site.name} — AI Engineer`,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — AI Engineer`,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0b0d" },
    { media: "(prefers-color-scheme: light)", color: "#fbfaf8" },
  ],
};

/**
 * Applied before first paint so a stored theme choice never flashes.
 * Kept deliberately tiny.
 */
const themeScript = `
try {
  var t = localStorage.getItem('theme');
  if (t === 'light' || t === 'dark') document.documentElement.dataset.theme = t;
} catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    /* Font variables go on <html>: --font-sans is declared at :root, so
       --font-inter must be defined there too or the var() substitution
       resolves to nothing and falls through to the system stack. */
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-[color:var(--bg)]"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
