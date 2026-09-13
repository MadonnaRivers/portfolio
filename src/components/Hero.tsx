import { site, socials } from "@/content/site";
import { HeroSchematic } from "./HeroSchematic";
import { Tokenized } from "./ui/Tokenized";
import { WordReveal } from "./ui/WordReveal";

const stats = [
  { label: "Focus", value: "Production GenAI" },
  { label: "Core", value: "Agentic RAG · LLM systems" },
  { label: "Runs on", value: "FastAPI · Docker · AWS" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="blueprint relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28"
    >
      {/* A single soft light source behind the headline. No gradient soup. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full opacity-[0.16] blur-[120px]"
        style={{ background: "var(--accent)" }}
      />

      <div className="container-page relative">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-20">
          <div>
            <p
              className="rise tag flex items-center gap-2.5 text-muted"
              style={{ animationDelay: "40ms" }}
            >
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-70" />
              </span>
              {site.availability}
            </p>

            <h1 className="mt-7 max-w-[19ch] text-balance text-[2.5rem] leading-[1.06] font-semibold tracking-[-0.035em] text-ink sm:text-6xl md:text-[4.25rem]">
              <WordReveal
                baseDelay={120}
                segments={[
                  { text: "AI Engineer building" },
                  { text: "production-grade", accent: true },
                  { text: "Generative AI systems." },
                ]}
              />
            </h1>

            <p
              className="rise mt-7 max-w-[52ch] text-[1.0625rem] leading-relaxed text-muted md:text-lg"
              style={{ animationDelay: "190ms" }}
            >
              {site.subline}
            </p>

            <div
              className="rise mt-9 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "260ms" }}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-[color:var(--bg)] transition-opacity hover:opacity-88"
              >
                View Projects
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a
                href={site.resume.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-hairline-strong px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-[color:var(--bg-raised)]"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16" />
                </svg>
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-3 py-3 text-sm font-medium text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
              >
                Contact Me
              </a>
            </div>

            <div
              className="rise mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
              style={{ animationDelay: "330ms" }}
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
                >
                  <span className="tag text-faint transition-colors group-hover:text-accent">
                    {s.label}
                  </span>
                  <span className="font-mono text-xs">
                    <Tokenized text={s.handle} />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Technical panel */}
          <div
            className="rise w-full lg:w-[24rem]"
            style={{ animationDelay: "380ms" }}
          >
            <div className="rounded-[var(--radius-card)] border border-hairline bg-[color:var(--panel)]/70 p-6 backdrop-blur-sm">
              <div className="mb-6 flex items-center justify-between border-b border-hairline pb-4">
                <span className="tag text-faint">system · request path</span>
                <span className="flex gap-1" aria-hidden="true">
                  <i className="block h-1.5 w-1.5 rounded-full bg-[color:var(--hairline-strong)]" />
                  <i className="block h-1.5 w-1.5 rounded-full bg-[color:var(--hairline-strong)]" />
                  <i className="block h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
              </div>
              <HeroSchematic />
            </div>

            <dl className="mt-5 grid grid-cols-3 gap-px overflow-hidden rounded-[var(--radius-card)] border border-hairline bg-[color:var(--hairline)]">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-[color:var(--bg)] px-3 py-4 text-center"
                >
                  <dt className="tag text-faint">{s.label}</dt>
                  <dd className="mt-1.5 text-[0.6875rem] leading-snug font-medium text-ink-soft">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
