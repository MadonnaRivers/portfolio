# Portfolio — AI Engineer

Production portfolio site. Next.js 15 (App Router) · TypeScript (strict) · Tailwind CSS v4.
No UI or animation libraries — the only runtime dependencies are React and Next.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export of every route
npm run typecheck
```

## Where the content lives

Every word on the site comes from typed data files. You should rarely need to
touch a component to update content.

| File | Holds |
| --- | --- |
| `src/content/site.ts` | Name, links, email, resume URL, SEO keywords, nav |
| `src/content/experience.ts` | Roles, bullets, outcome slots, education |
| `src/content/projects.ts` | Projects **and** their full case studies |
| `src/content/architecture.ts` | The 12-stage interactive pipeline |
| `src/content/skills.ts` | Tech stack groups + "Beyond the buzzwords" |
| `src/content/achievements.ts` | Certifications and credentials |

## Placeholders — what's left

The site is populated from the real resume. Nothing invents a number, a
company, a metric or a credential. The few remaining unverified items are
written as bracketed tokens:

```
[ADD VERIFIED METRIC]
[ADD COMPANY]
[LINKEDIN_URL]
```

These render with a dashed gold highlight so an empty slot can never be
mistaken for a claim, and so they are easy to spot. Replace the text inside
the brackets (including the brackets) and the highlight disappears
automatically — there is no second place to update.

Find every remaining one:

```bash
grep -rno "\[[A-Z][^]]*\]" src/content
```

### Still to fill in

Only four things remain:

1. **GitHub URL** — `src/content/site.ts`, the `socials` entry.
2. **`site.url`** — your final domain. Canonical URLs, the sitemap and the
   JSON-LD structured data stay switched off until this is a real domain.
3. **Repository links** — `src/content/projects.ts`, the `links` field on
   EasyGPT, Versify and Diabetic Retinopathy. Delete the line for anything
   that has no public repo; the button disappears on its own.
4. **Credential URLs** — `src/content/achievements.ts`: the IEEE Xplore link
   for the Retroflex paper, and the IBM SkillsBuild credential.

Optional: an `opengraph-image.png` (1200x630) in `public/` for social preview
cards. `public/resume.pdf` is already in place and wired to every Resume CTA.

## Structure

```
src/app/
  layout.tsx            metadata, fonts, theme bootstrap, skip link
  page.tsx              section composition
  work/[slug]/page.tsx  statically generated case studies
  sitemap.ts robots.ts
src/components/         one component per section + ui/ primitives
src/lib/                shared types, SEO helpers
```

Notable implementation details:

- **Theme** — dark by default, light fully supported, honours the OS setting
  and a stored choice. Applied by a tiny inline script before first paint, so
  there is no flash.
- **Motion** — `Reveal` is an IntersectionObserver plus two CSS properties.
  It reveals on any overlap (never a percentage threshold, which can strand a
  tall section that was scrolled past) and disables itself under
  `prefers-reduced-motion`.
- **Fonts** — Inter and JetBrains Mono, self-hosted via `next/font`. The CSS
  variables are declared on `<html>` because `--font-sans` is consumed at
  `:root`.
- **Accessibility** — semantic landmarks, labelled sections, `aria-expanded`
  on every disclosure, visible focus rings, a skip link, and an SVG
  description on the hero schematic.

## Deploying

Every route is static. Push to a Git host and import the repo into Vercel —
no configuration needed. Set `site.url` to the final domain before shipping so
canonical URLs, `sitemap.xml`, `robots.txt` and the structured data all point
at the right place.
