import { site } from "@/content/site";
import { Reveal } from "./ui/Reveal";
import { Tokenized } from "./ui/Tokenized";

export function ResumeCTA() {
  return (
    <section
      aria-labelledby="resume-title"
      className="scroll-mt-24 py-6"
      id="resume"
    >
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-[var(--radius-card)] border border-hairline bg-[color:var(--bg-raised)] p-7 md:flex-row md:items-center md:p-9">
            <div>
              <span className="tag text-accent">Resume</span>
              <h2
                id="resume-title"
                className="mt-3 text-xl font-semibold tracking-tight text-ink md:text-2xl"
              >
                The one-page version.
              </h2>
              <p className="mt-2 max-w-xl text-[0.9375rem] leading-relaxed text-muted">
                Roles, systems, stack and dates — in the format hiring teams
                actually forward internally.
              </p>
              <p className="tag mt-3 text-faint">
                Last updated: <Tokenized text={site.resume.updated} />
              </p>
            </div>
            <a
              href={site.resume.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-[color:var(--bg)] transition-opacity hover:opacity-88"
            >
              <svg
                width="15"
                height="15"
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
