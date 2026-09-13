import { headlineStats } from "@/content/site";
import { CountUp } from "./ui/CountUp";
import { Reveal } from "./ui/Reveal";

/**
 * The numbers a recruiter should leave with, directly under the hero.
 * Every figure here is from shipped work.
 */
export function ImpactStats() {
  return (
    <section
      aria-label="Headline results"
      className="border-y border-hairline bg-[color:var(--bg-raised)]"
    >
      <div className="container-page">
        <Reveal>
          <dl className="grid grid-cols-2 divide-x divide-y divide-[color:var(--hairline)] md:grid-cols-4 md:divide-y-0">
            {headlineStats.map((stat) => (
              <div key={stat.label} className="px-2 py-8 text-center md:py-10">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-3xl font-semibold tracking-[-0.03em] text-ink md:text-[2.75rem]">
                    <CountUp value={stat.value} display={stat.display} />
                  </span>
                  <span className="mx-auto mt-2 block max-w-[18ch] text-[0.8125rem] leading-snug text-muted">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
