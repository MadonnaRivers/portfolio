import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  id: string;
  /** Mono index, e.g. "03". */
  index: string;
  /** Short kicker above the heading. */
  kicker: string;
  title: string;
  lead?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Every section shares one header rhythm: index → kicker → title → lead.
 * The repetition is the point; it reads as a spec document.
 */
export function Section({
  id,
  index,
  kicker,
  title,
  lead,
  children,
  className,
}: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`relative scroll-mt-24 py-20 md:py-28 ${className ?? ""}`}
    >
      <div className="container-page">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="tag text-accent">{index}</span>
            <span className="tag text-faint">{kicker}</span>
          </div>
          <div className="rule-h mt-4 mb-8" />
          <h2
            id={`${id}-title`}
            className="max-w-3xl text-balance text-3xl font-semibold tracking-[-0.02em] text-ink md:text-[2.6rem] md:leading-[1.1]"
          >
            {title}
          </h2>
          {lead ? (
            <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted">
              {lead}
            </p>
          ) : null}
        </Reveal>
        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}
