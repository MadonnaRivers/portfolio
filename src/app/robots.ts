import type { MetadataRoute } from "next";
import { siteBaseUrl } from "@/lib/seo";

/* Required by `output: "export"` — these are generated at build time. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = siteBaseUrl().origin;
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
  };
}
