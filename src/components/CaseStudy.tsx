import Link from "next/link";
import type { Project } from "@/lib/types";
import { Tokenized } from "./ui/Tokenized";
import { Chip } from "./ui/Chip";
import { Reveal } from "./ui/Reveal";

/**
 * Engineering deep dive. Long-form, sectioned, with a sticky contents rail
 * so an interviewer can jump straight to retrieval or deployment.
 */
export function CaseStudy({ project }: { project: Project }) {
  const sections = project.caseStudy ?? [];

  return (
    <article className="pb-24">
      {/* Header */}
      <header className="blueprint relative overflow-hidden border-b border-hairline pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-page relative">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
              className="transition-transform group-hover:-translate-x-0.5"
            >
              <path d="M19 12H5m6-6-6 6 6 6" />
            </svg>
            All projects
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-1.5">
            {project.categories.map((c) => (
              <Chip key={c} tone="accent">
                {c}
              </Chip>
            ))}
            <Chip>Case study</Chip>
          </div>

          <h1 className="mt-6 max-w-4xl text-balance text-3xl leading-[1.12] font-semibold tracking-[-0.03em] text-ink md:text-[3.25rem]">
            <Tokenized text={project.name} />
          </h1>

          <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-muted md:text-lg">
            {project.problem}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-hairline-strong px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-[color:var(--bg-raised)]"
              >
                GitHub
              </a>
            ) : null}
            {project.links.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-hairline-strong px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-[color:var(--bg-raised)]"
              >
                Live demo
              </a>
            ) : null}
          </div>

        </div>
      </header>

      <div className="container-page">
        <div className="grid gap-12 pt-14 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
          {/* Contents rail */}
          <nav aria-label="Case study contents" className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="tag mb-4 text-faint">Contents</h2>
            <ol className="space-y-1 border-l border-hairline">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="-ml-px flex items-baseline gap-3 border-l border-transparent py-1.5 pl-4 text-[0.8125rem] text-muted transition-colors hover:border-accent hover:text-ink"
                  >
                    <span className="font-mono text-[0.6875rem] text-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ol>

            <h2 className="tag mt-8 mb-3 text-faint">Stack</h2>
            <ul className="flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <li key={s}>
                  <Chip>
                    <Tokenized text={s} />
                  </Chip>
                </li>
              ))}
            </ul>
          </nav>

          {/* Body */}
          <div className="min-w-0 max-w-[72ch]">
            <section className="mb-14">
              <h2 className="tag mb-4 text-accent">What I built</h2>
              <p className="text-lg leading-[1.7] text-ink-soft">
                {project.built}
              </p>
            </section>

            {sections.map((section, i) => (
              <Reveal key={section.id} as="section" className="scroll-mt-28">
                <div id={section.id} className="scroll-mt-28 border-t border-hairline pt-10 pb-12">
                  <div className="flex items-baseline gap-4">
                    <span className="tag text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-2xl font-semibold tracking-tight text-ink">
                      {section.label}
                    </h2>
                  </div>

                  <div className="mt-6 space-y-5">
                    {section.body.map((p, j) => (
                      <p
                        key={j}
                        className="text-[1.0625rem] leading-[1.8] text-ink-soft"
                      >
                        <Tokenized text={p} />
                      </p>
                    ))}
                  </div>

                  {section.spec ? (
                    <dl className="mt-7 divide-y divide-[color:var(--hairline)] overflow-hidden rounded-[var(--radius-card)] border border-hairline bg-[color:var(--bg-raised)]">
                      {section.spec.map((row) => (
                        <div
                          key={row.key}
                          className="flex flex-col gap-1 px-5 py-3.5 sm:flex-row sm:items-baseline sm:gap-6"
                        >
                          <dt className="tag shrink-0 text-faint sm:w-40">
                            {row.key}
                          </dt>
                          <dd className="text-[0.875rem] leading-snug text-ink-soft">
                            <Tokenized text={row.value} />
                          </dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}
                </div>
              </Reveal>
            ))}

            {/* Contribution + impact recap */}
            <section className="border-t border-hairline pt-10">
              <h2 className="tag mb-4 text-accent">My contribution</h2>
              <p className="text-[1.0625rem] leading-[1.8] text-ink-soft">
                <Tokenized text={project.contribution} />
              </p>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}
