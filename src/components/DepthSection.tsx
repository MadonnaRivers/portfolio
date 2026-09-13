import { depthTopics } from "@/content/skills";
import { Reveal } from "./ui/Reveal";

/**
 * "Beyond the buzzwords" — the opinions that come from having debugged
 * these systems. Written to be argued with in an interview.
 */
export function DepthSection() {
  return (
    /* One Reveal around the whole grid, not one per card: the grid uses a
       hairline background with gap-px to draw its dividers, so fading
       cards in individually exposes the container as a grey slab. */
    <Reveal>
      <div className="grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-hairline bg-[color:var(--hairline)] md:grid-cols-2 xl:grid-cols-3">
        {depthTopics.map((topic, i) => (
          <article
            key={topic.id}
            className="flex h-full flex-col bg-[color:var(--bg)] p-6 transition-colors hover:bg-[color:var(--bg-raised)] md:p-7"
          >
            <span className="tag text-faint">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-[1.0625rem] leading-snug font-semibold tracking-tight text-ink">
              {topic.title}
            </h3>
            <p className="mt-3 flex-1 text-[0.9375rem] leading-[1.7] text-muted">
              {topic.body}
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 border-t border-hairline pt-4">
              {topic.tags.map((t) => (
                <li key={t} className="tag text-faint">
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
