import type { ReactNode } from "react";

type Segment = { text: string; accent?: boolean };

/**
 * Splits a headline into words, each masked and rising on its own delay.
 * Rendered on the server — the animation is pure CSS, so the text is in
 * the HTML for crawlers and appears even if JS never runs.
 */
export function WordReveal({
  segments,
  baseDelay = 0,
  stepMs = 55,
}: {
  segments: Segment[];
  baseDelay?: number;
  stepMs?: number;
}): ReactNode {
  let index = 0;

  return (
    <>
      {segments.map((segment, si) => {
        const words = segment.text.split(" ");
        return (
          <span key={si} className={segment.accent ? "text-accent" : undefined}>
            {words.map((word) => {
              const delay = baseDelay + index * stepMs;
              index += 1;
              return (
                <span key={`${word}-${index}`}>
                  <span
                    className="word-mask"
                    style={{ "--word-delay": `${delay}ms` } as React.CSSProperties}
                  >
                    <span>{word}</span>
                  </span>{" "}
                </span>
              );
            })}
          </span>
        );
      })}
    </>
  );
}
