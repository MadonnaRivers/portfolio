"use client";

import { useRef, type ReactNode } from "react";

/**
 * Pointer-tracked highlight for cards. Writes cursor position into CSS
 * custom properties on pointermove and lets a radial gradient in CSS do
 * the rendering — no React state, so it never re-renders the card.
 * Touch devices simply never fire the event, and the card stays flat.
 */
export function Spotlight({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || event.pointerType !== "mouse") return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      className={`spotlight ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
