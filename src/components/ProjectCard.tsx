import Link from "next/link";
import type { Project } from "@/lib/types";
import { Tokenized } from "./ui/Tokenized";
import { Chip } from "./ui/Chip";

export function ProjectCard({ project }: { project: Project }) {
  const hasCaseStudy = Boolean(project.caseStudy?.length);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-hairline bg-[color:var(--bg-raised)] transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-hairline-strong">
      {/* accent hairline that wakes up on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px scale-x-0 bg-accent transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-x-100"
      />

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex flex-wrap items-center gap-1.5">
          {project.categories.map((c) => (
            <Chip key={c} tone="accent">
              {c}
            </Chip>
          ))}
          {project.featured ? <Chip>Featured</Chip> : null}
        </div>

        <h3 className="mt-5 text-xl leading-snug font-semibold tracking-tight text-ink">
          <Tokenized text={project.name} />
        </h3>

        <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
          <span className="tag mr-2 text-faint">Problem</span>
          {project.problem}
        </p>

        <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">
          {project.built}
        </p>

        {/* architecture path */}
        <div className="mt-6">
          <h4 className="tag mb-2.5 text-faint">Architecture</h4>
          <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-2">
            {project.architecture.map((step, i) => (
              <li key={step} className="flex items-center gap-1.5">
                <span className="rounded border border-hairline px-2 py-1 font-mono text-[0.6875rem] text-ink-soft">
                  {step}
                </span>
                {i < project.architecture.length - 1 ? (
                  <span aria-hidden="true" className="text-faint">
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-6">
          <h4 className="tag mb-2.5 text-faint">My contribution</h4>
          <p className="text-[0.875rem] leading-relaxed text-ink-soft">
            <Tokenized text={project.contribution} />
          </p>
        </div>

        <div className="mt-6">
          <h4 className="tag mb-2.5 text-faint">Impact</h4>
          <ul className="space-y-1.5">
            {project.impact.map((line, i) => (
              <li key={i} className="text-[0.8125rem] leading-snug text-muted">
                <Tokenized text={line} />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7 flex flex-wrap gap-1.5 border-t border-hairline pt-5">
          {project.stack.map((s) => (
            <Chip key={s}>
              <Tokenized text={s} />
            </Chip>
          ))}
        </div>
      </div>

      <footer className="flex flex-wrap items-center gap-4 border-t border-hairline px-6 py-4 md:px-7">
        {hasCaseStudy ? (
          <Link
            href={`/work/${project.slug}`}
            className="group/cta inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
          >
            View Case Study
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
              className="transition-transform group-hover/cta:translate-x-0.5"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        ) : null}

        <span aria-hidden="true" className="flex-1" />

        {project.links.github ? (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38v-1.37c-2.23.48-2.7-1.07-2.7-1.07-.36-.93-.89-1.18-.89-1.18-.73-.5.05-.49.05-.49.8.06 1.23.83 1.23.83.71 1.23 1.87.88 2.33.67.07-.52.28-.88.5-1.08-1.78-.2-3.65-.89-3.65-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.66 3.95.29.25.54.73.54 1.48v2.19c0 .21.14.46.55.38A8 8 0 0 0 8 0Z" />
            </svg>
            GitHub
          </a>
        ) : null}

        {project.links.demo ? (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M14 4h6v6M20 4 10 14M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
            </svg>
            Live Demo
          </a>
        ) : null}
      </footer>
    </article>
  );
}
