import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { siteBaseUrl } from "@/lib/seo";

/* Required by `output: "export"` — these are generated at build time. */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteBaseUrl().origin;
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...projects
      .filter((p) => p.caseStudy?.length)
      .map((p) => ({
        url: `${base}/work/${p.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      })),
  ];
}
