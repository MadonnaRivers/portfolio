import { site } from "@/content/site";

/**
 * `site.url` starts life as a placeholder, which is not a parseable URL.
 * Metadata generation must not crash before the domain is filled in, so
 * fall back to a local base and let canonical tags start working the
 * moment a real domain is set.
 */
export function siteBaseUrl(): URL {
  try {
    return new URL(site.url);
  } catch {
    return new URL("http://localhost:3000");
  }
}

export function hasRealDomain(): boolean {
  return !site.url.includes("[");
}
