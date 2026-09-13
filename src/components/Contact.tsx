import { site, socials } from "@/content/site";
import { Reveal } from "./ui/Reveal";
import { Tokenized } from "./ui/Tokenized";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="blueprint relative scroll-mt-24 overflow-hidden border-t border-hairline py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full opacity-[0.13] blur-[120px]"
        style={{ background: "var(--accent)" }}
      />
      <div className="container-page relative">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="tag text-accent">07</span>
            <span className="tag text-faint">Contact</span>
          </div>
          <h2
            id="contact-title"
            className="mt-6 max-w-2xl text-balance text-4xl leading-[1.08] font-semibold tracking-[-0.03em] text-ink md:text-6xl"
          >
            Let&apos;s build something intelligent.
          </h2>
          <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-muted">
            {site.availability}. If you&apos;re working on retrieval, agents or
            LLM systems that need to run in production — or you want to talk
            through an architecture — I&apos;m easy to reach.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-hairline bg-[color:var(--hairline)] sm:grid-cols-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex flex-col justify-between gap-6 bg-[color:var(--bg)] p-6 transition-colors hover:bg-[color:var(--bg-raised)]"
              >
                <span className="tag text-faint transition-colors group-hover:text-accent">
                  {s.label}
                </span>
                <span className="flex items-end justify-between gap-3">
                  <span className="min-w-0 break-all font-mono text-[0.8125rem] text-ink-soft">
                    <Tokenized text={s.handle} />
                  </span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    aria-hidden="true"
                    className="shrink-0 text-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  >
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-[color:var(--bg)] transition-opacity hover:opacity-88"
            >
              Email me
            </a>
            <a
              href={site.resume.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-hairline-strong px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-[color:var(--bg-raised)]"
            >
              Download Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
