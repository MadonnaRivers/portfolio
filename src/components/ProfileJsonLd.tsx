import { site, socials } from "@/content/site";
import { skillGroups } from "@/content/skills";
import { hasRealDomain } from "@/lib/seo";

/**
 * Structured data for the person. Only emitted once a real domain is set —
 * schema.org markup pointing at a placeholder URL is worse than none.
 */
export function ProfileJsonLd() {
  if (!hasRealDomain()) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    description: site.positioning,
    url: site.url,
    email: site.email.includes("[") ? undefined : `mailto:${site.email}`,
    address: { "@type": "PostalAddress", addressCountry: "IN" },
    knowsAbout: skillGroups.flatMap((g) => g.items.map((i) => i.name)),
    sameAs: socials
      .filter((s) => !s.href.includes("[") && !s.href.startsWith("mailto:"))
      .map((s) => s.href),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
