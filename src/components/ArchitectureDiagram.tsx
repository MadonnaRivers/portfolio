"use client";

import { useState } from "react";
import { pipeline } from "@/content/architecture";
import type { ArchitectureNode } from "@/lib/types";
import { Reveal } from "./ui/Reveal";
import { Chip } from "./ui/Chip";

/**
 * Interactive reference architecture. Click a stage to read what it does
 * and why it exists. On large screens the explanation sits in a sticky
 * panel; on small screens it expands inline under the stage.
 */
export function ArchitectureDiagram() {
  const [selected, setSelected] = useState<string>(pipeline[3].id);
  const active = pipeline.find((n) => n.id === selected) ?? pipeline[0];

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
      <Reveal>
        <ol className="relative" aria-label="Request pipeline stages">
          <span
            aria-hidden="true"
            className="absolute top-4 bottom-4 left-[1.0625rem] w-px bg-[color:var(--hairline)]"
          />
          {pipeline.map((node) => {
            const isActive = node.id === selected;
            return (
              <li key={node.id} className="relative">
                <button
                  type="button"
                  onClick={() => setSelected(node.id)}
                  aria-pressed={isActive}
                  className="group flex w-full items-center gap-4 py-1.5 text-left"
                >
                  <span
                    aria-hidden="true"
                    className={`relative z-1 grid h-[2.125rem] w-[2.125rem] shrink-0 place-items-center rounded-[10px] border font-mono text-[0.6875rem] transition-colors ${
                      isActive
                        ? "border-[color:var(--accent)] bg-[color:var(--accent)] text-[color:var(--accent-ink)]"
                        : "border-hairline bg-[color:var(--bg)] text-faint group-hover:border-hairline-strong group-hover:text-ink-soft"
                    }`}
                  >
                    {node.index}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={`flex flex-wrap items-center gap-2 text-[0.9375rem] font-medium transition-colors ${
                        isActive
                          ? "text-ink"
                          : "text-ink-soft group-hover:text-ink"
                      }`}
                    >
                      {node.label}
                      {node.optional ? (
                        <span className="tag rounded border border-hairline px-1.5 py-px text-[0.5625rem] text-faint">
                          conditional
                        </span>
                      ) : null}
                    </span>
                    <span className="mt-0.5 block truncate text-[0.8125rem] text-muted">
                      {node.role}
                    </span>
                  </span>
                </button>

                {/* inline detail, small screens only */}
                <div hidden={!isActive} className="lg:hidden">
                  <div className="mt-2 mb-4 ml-[3.25rem]">
                    <NodeDetail node={node} compact />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        <p className="mt-8 max-w-lg border-t border-hairline pt-5 text-[0.8125rem] leading-relaxed text-faint">
          Stages marked <span className="text-muted">conditional</span> are
          added when the problem calls for them. A lookup question does not
          need an agent loop, and adding one costs latency for nothing.
        </p>
      </Reveal>

      <div className="hidden lg:block">
        <div className="sticky top-28">
          <NodeDetail node={active} />
        </div>
      </div>
    </div>
  );
}

function NodeDetail({
  node,
  compact = false,
}: {
  node: ArchitectureNode;
  compact?: boolean;
}) {
  return (
    <div
      key={node.id}
      className="rise rounded-[var(--radius-card)] border border-hairline bg-[color:var(--bg-raised)] p-6 md:p-7"
    >
      <div className="flex items-center justify-between gap-4 border-b border-hairline pb-4">
        <span className="tag text-accent">stage {node.index}</span>
        {node.optional ? (
          <span className="tag text-faint">conditional</span>
        ) : (
          <span className="tag text-faint">always present</span>
        )}
      </div>

      <h3
        className={`mt-5 font-semibold tracking-tight text-ink ${compact ? "text-lg" : "text-2xl"}`}
      >
        {node.label}
      </h3>
      <p className="mt-2 text-[0.9375rem] font-medium text-accent">
        {node.role}
      </p>
      <p className="mt-4 text-[0.9375rem] leading-[1.75] text-ink-soft">
        {node.detail}
      </p>

      <div className="mt-6 flex flex-wrap gap-1.5 border-t border-hairline pt-5">
        {node.techniques.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
    </div>
  );
}
