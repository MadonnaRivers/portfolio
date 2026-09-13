"use client";

import { useState } from "react";
import { roles } from "@/content/experience";
import type { Role } from "@/lib/types";
import { Reveal } from "./ui/Reveal";
import { Tokenized } from "./ui/Tokenized";
import { Chip } from "./ui/Chip";

/**
 * Vertical timeline. The current role is expanded on load so a recruiter
 * reads the most relevant thing without clicking; earlier roles collapse
 * to keep the section scannable.
 */
export function ExperienceTimeline() {
  const [open, setOpen] = useState<string[]>(
    roles.filter((r) => r.current).map((r) => r.id),
  );

  const toggle = (id: string) =>
    setOpen((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );

  return (
    <ol className="relative">
      {/* spine */}
      <span
        aria-hidden="true"
        className="absolute top-3 bottom-3 left-[7px] w-px bg-[color:var(--hairline)] md:left-[calc(9rem+7px)]"
      />
      {roles.map((role, i) => (
        <TimelineRow
          key={role.id}
          role={role}
          index={i}
          expanded={open.includes(role.id)}
          onToggle={() => toggle(role.id)}
        />
      ))}
    </ol>
  );
}

function TimelineRow({
  role,
  index,
  expanded,
  onToggle,
}: {
  role: Role;
  index: number;
  expanded: boolean;
  onToggle: () => void;
}) {
  const panelId = `role-${role.id}`;

  return (
    <li className="relative pb-4 last:pb-0">
      <Reveal delay={index * 90}>
        <div className="grid gap-4 md:grid-cols-[9rem_minmax(0,1fr)] md:gap-0">
          {/* date rail */}
          <div className="hidden pt-5 pr-8 text-right md:block">
            <span className="tag text-faint">
              {role.start}
              <br />
              <span className="text-[color:var(--hairline-strong)]">↓</span>
              <br />
              {role.end}
            </span>
          </div>

          <div className="relative pl-8 md:pl-8">
            {/* node */}
            <span
              aria-hidden="true"
              className={`absolute top-[1.9rem] left-0 grid h-[15px] w-[15px] place-items-center rounded-full border ${
                role.current
                  ? "border-accent bg-[color:var(--accent-soft)]"
                  : "border-hairline-strong bg-[color:var(--bg)]"
              }`}
            >
              <i
                className={`block h-[5px] w-[5px] rounded-full ${
                  role.current ? "bg-accent" : "bg-[color:var(--faint)]"
                }`}
              />
            </span>

            <article
              className={`rounded-[var(--radius-card)] border bg-[color:var(--bg-raised)] transition-colors ${
                role.current
                  ? "border-[color:var(--accent)]/30"
                  : "border-hairline hover:border-hairline-strong"
              }`}
            >
              <header className="flex flex-wrap items-start justify-between gap-4 p-6 pb-4">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-lg font-semibold tracking-tight text-ink">
                      {role.title}
                    </h3>
                    {role.current ? (
                      <span className="tag rounded-full bg-[color:var(--accent-soft)] px-2 py-0.5 text-accent">
                        Current
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm text-muted">
                    <span className="font-medium text-ink-soft">
                      <Tokenized text={role.company} />
                    </span>
                    <span className="mx-2 text-faint">·</span>
                    <Tokenized text={role.location} />
                  </p>
                  <p className="tag mt-2 text-faint md:hidden">
                    {role.start} — {role.end}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onToggle}
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-hairline px-3 py-1.5 text-xs text-muted transition-colors hover:border-hairline-strong hover:text-ink"
                >
                  {expanded ? "Collapse" : "Details"}
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    aria-hidden="true"
                    className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </header>

              <p className="px-6 pb-5 text-[0.9375rem] leading-relaxed text-ink-soft">
                {role.summary}
              </p>

              <div
                id={panelId}
                hidden={!expanded}
                className="border-t border-hairline"
              >
                <div className="space-y-6 p-6">
                  <div>
                    <h4 className="tag mb-3 text-faint">What I built</h4>
                    <ul className="space-y-3">
                      {role.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="relative pl-5 text-[0.9375rem] leading-relaxed text-ink-soft"
                        >
                          <span
                            aria-hidden="true"
                            className="absolute top-[0.6em] left-0 h-[5px] w-[5px] rounded-[1px] bg-[color:var(--accent)]/60"
                          />
                          <Tokenized text={h} />
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="tag mb-3 text-faint">
                      Outcomes · verified only
                    </h4>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {role.outcomes.map((o, j) => (
                        <li
                          key={j}
                          className="rounded-lg border border-dashed border-hairline px-3.5 py-2.5 text-[0.8125rem] leading-snug text-muted"
                        >
                          <Tokenized text={o} />
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {role.stack.map((s) => (
                      <Chip key={s}>{s}</Chip>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </Reveal>
    </li>
  );
}
