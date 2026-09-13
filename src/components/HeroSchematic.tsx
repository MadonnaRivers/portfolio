/**
 * Hero visual: a compact schematic of the request path through a
 * retrieval + agent system. Static SVG with one slow travelling pulse —
 * enough motion to read as "live system", not enough to distract.
 */
export function HeroSchematic() {
  const rows = [
    { y: 34, label: "Query", tag: "FastAPI" },
    { y: 86, label: "Retrieve", tag: "hybrid + filters" },
    { y: 138, label: "Rerank", tag: "cross-encoder" },
    { y: 190, label: "Context", tag: "token budget" },
    { y: 242, label: "LLM", tag: "OpenAI · Gemini" },
    { y: 294, label: "Tools", tag: "LangGraph" },
    { y: 346, label: "Response", tag: "streamed · cited" },
  ];

  return (
    <svg
      viewBox="0 0 320 380"
      className="h-auto w-full max-w-[340px]"
      role="img"
      aria-label="Schematic of a retrieval and agent pipeline: query, retrieve, rerank, context construction, LLM, tools, response."
    >
      <defs>
        <linearGradient id="spine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--hairline-strong)" />
          <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--hairline-strong)" />
        </linearGradient>
      </defs>

      {/* A pulse travelling the spine — one request moving through the
          pipeline. Slow enough to read as a system, not as a loader. */}
      <circle className="pulse-dot" r="3" fill="var(--accent)" />

      {/* spine */}
      <line
        x1="14"
        y1="34"
        x2="14"
        y2="346"
        stroke="url(#spine)"
        strokeWidth="1"
      />

      {rows.map((row, i) => (
        <g key={row.label}>
          {/* connector */}
          <line
            x1="14"
            y1={row.y}
            x2="30"
            y2={row.y}
            stroke="var(--hairline)"
            strokeWidth="1"
          />
          {/* node */}
          <circle
            cx="14"
            cy={row.y}
            r="3.5"
            fill="var(--bg)"
            stroke="var(--accent)"
            strokeWidth="1.2"
            style={{
              animation: `pulse-node 4.2s ${i * 0.45}s ease-in-out infinite`,
            }}
          />
          <text
            x="38"
            y={row.y - 2}
            fill="var(--ink)"
            fontSize="12.5"
            fontFamily="var(--font-sans)"
            fontWeight="500"
          >
            {row.label}
          </text>
          <text
            x="38"
            y={row.y + 13}
            fill="var(--faint)"
            fontSize="9.5"
            fontFamily="var(--font-mono)"
            letterSpacing="0.06em"
          >
            {row.tag}
          </text>
          <text
            x="306"
            y={row.y + 3}
            textAnchor="end"
            fill="var(--faint)"
            fontSize="9"
            fontFamily="var(--font-mono)"
          >
            {String(i + 1).padStart(2, "0")}
          </text>
        </g>
      ))}
    </svg>
  );
}
