"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Stagger, in ms. */
  delay?: number;
  className?: string;
  as?: ElementType;
};

/**
 * Scroll-triggered reveal. IntersectionObserver + two CSS properties —
 * no animation library, and it degrades to "visible" when motion is
 * reduced or JS is unavailable (see the noscript rule in globals.css
 * counterpart: [data-reveal] starts hidden only once this mounts).
 */
export function Reveal({ children, delay = 0, className, as }: Props) {
  const ref = useRef<HTMLElement>(null);
  const Tag = (as ?? "div") as ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.setAttribute("data-reveal", "shown");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          /* Reveal on any overlap, and also once an element has moved above
             the viewport. A percentage threshold is unsafe here: a tall
             section that is scrolled past quickly can never satisfy it
             again, which would leave its content invisible for good. */
          if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
            entry.target.setAttribute("data-reveal", "shown");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -64px 0px", threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={className}
    >
      {children}
    </Tag>
  );
}
