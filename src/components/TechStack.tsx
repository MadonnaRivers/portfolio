"use client";

import { useMemo, useState } from "react";
import { techCategories, techStack } from "@/content/tech";
import type { TechCategory } from "@/lib/types";
import { TechIcon } from "./TechIcon";
import { Reveal } from "./ui/Reveal";

type Filter = "All" | TechCategory;

/**
 * Filterable icon grid. Tiles stagger in on reveal and again whenever the
 * filter changes — the `key` on the list forces a remount so the
 * animation replays rather than snapping.
 */
export function TechStack() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(
    () =>
      filter === "All"
        ? techStack
        : techStack.filter((t) => t.category === filter),
    [filter],
  );

  return (
    <div>
      <Reveal>
        <div
          role="tablist"
          aria-label="Filter technologies by category"
          className="no-scrollbar -mx-1 mb-8 flex gap-1.5 overflow-x-auto px-1 pb-1"
        >
          {techCategories.map((category) => {
            const active = category === filter;
            const count =
              category === "All"
                ? techStack.length
                : techStack.filter((t) => t.category === category).length;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(category)}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-[0.8125rem] transition-colors ${
                  active
                    ? "border-[color:var(--accent)]/40 bg-[color:var(--accent-soft)] text-accent"
                    : "border-hairline text-muted hover:border-hairline-strong hover:text-ink"
                }`}
              >
                {category}
                <span className="font-mono text-[0.6875rem] opacity-60">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <ul
        key={filter}
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        {visible.map((tech, i) => (
          <li
            key={tech.name}
            className="tech-tile"
            style={{ "--tile-delay": `${i * 32}ms` } as React.CSSProperties}
          >
            <div className="group flex h-full flex-col gap-3 rounded-[var(--radius-card)] border border-hairline bg-[color:var(--bg-raised)] p-4 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-hairline-strong">
              <span className="tech-glyph text-muted transition-colors duration-300">
                <TechIcon name={tech.name} />
              </span>
              <div>
                <h3 className="text-[0.875rem] leading-tight font-medium text-ink">
                  {tech.name}
                </h3>
                <p className="mt-1.5 text-[0.75rem] leading-snug text-faint">
                  {tech.detail}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
