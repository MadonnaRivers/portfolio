import { Fragment, type ReactNode } from "react";

/**
 * Renders copy that may contain:
 *   - placeholder tokens in square brackets, e.g. `[ADD VERIFIED METRIC]`
 *   - `**bold**` emphasis
 *
 * Placeholders get a visibly "pending" treatment so an unfilled slot can
 * never be mistaken for a claim — and so they are trivial to spot and
 * replace. Once the bracket text is gone, the styling goes with it.
 */

const PATTERN = /(\[[^\]]+\]|\*\*[^*]+\*\*)/g;

export function Tokenized({ text }: { text: string }): ReactNode {
  const parts = text.split(PATTERN).filter(Boolean);

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("[") && part.endsWith("]")) {
          return (
            <mark
              key={i}
              data-placeholder="true"
              title="Placeholder — replace with verified information"
              className="mx-[0.1em] rounded-[4px] border border-dashed border-[color:var(--pending)]/45 bg-[color:var(--pending-bg)] px-[0.4em] py-[0.08em] font-mono text-[0.82em] font-medium text-[color:var(--pending)] [text-decoration:none]"
            >
              {part.slice(1, -1)}
            </mark>
          );
        }
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-ink">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}

/** True when a string still contains an unfilled placeholder. */
export function hasPlaceholder(text: string): boolean {
  return /\[[^\]]+\]/.test(text);
}
