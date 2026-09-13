import type { ReactNode } from "react";

export function Chip({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "accent";
}) {
  const tones = {
    default:
      "border-hairline bg-[color:var(--bg-raised)] text-muted",
    accent:
      "border-[color:var(--accent)]/35 bg-[color:var(--accent-soft)] text-accent",
  } as const;

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[0.6875rem] tracking-tight whitespace-nowrap ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
