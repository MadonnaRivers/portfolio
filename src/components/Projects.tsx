"use client";

import { useMemo, useState } from "react";
import { projects, projectCategories } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";
import { Spotlight } from "./ui/Spotlight";
import { Reveal } from "./ui/Reveal";

type Filter = (typeof projectCategories)[number];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) =>
            (p.categories as readonly string[]).includes(filter),
          ),
    [filter],
  );

  return (
    <>
      <Reveal>
        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="no-scrollbar -mx-1 mb-10 flex gap-1.5 overflow-x-auto px-1 pb-1"
        >
          {projectCategories.map((c) => {
            const active = c === filter;
            const count =
              c === "All"
                ? projects.length
                : projects.filter((p) =>
                    (p.categories as readonly string[]).includes(c),
                  ).length;
            return (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(c)}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-[0.8125rem] transition-colors ${
                  active
                    ? "border-[color:var(--accent)]/40 bg-[color:var(--accent-soft)] text-accent"
                    : "border-hairline text-muted hover:border-hairline-strong hover:text-ink"
                }`}
              >
                {c}
                <span className="font-mono text-[0.6875rem] opacity-60">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-2">
        {visible.map((project, i) => (
          <Reveal key={project.slug} delay={i * 80} className="h-full">
            <Spotlight>
              <ProjectCard project={project} />
            </Spotlight>
          </Reveal>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="py-16 text-center text-sm text-muted">
          No projects in this category yet.
        </p>
      ) : null}
    </>
  );
}
