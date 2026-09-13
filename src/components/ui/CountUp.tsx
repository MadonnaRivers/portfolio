"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts up to `value` when scrolled into view, then renders `display`
 * verbatim so ranges and approximations stay honest.
 *
 * The real number is what renders by default — the count is only shown
 * while an animation is actually running. That way a backgrounded tab
 * (where requestAnimationFrame never fires), a reduced-motion setting,
 * or no JS at all all fall back to the true figure rather than to zero.
 */
export function CountUp({
  value,
  display,
  durationMs = 1500,
}: {
  value: number;
  display: string;
  durationMs?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [animating, setAnimating] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;
        observer.disconnect();

        /* Nothing animates in a hidden tab; leave the real number shown. */
        if (document.hidden) return;

        setAnimating(true);
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / durationMs, 1);
          /* easeOutExpo — fast arrival, long settle. */
          const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
          setCurrent(Math.round(value * eased));
          if (t < 1) {
            frame = requestAnimationFrame(tick);
          } else {
            setAnimating(false);
          }
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0, rootMargin: "0px 0px -80px 0px" },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value, durationMs]);

  return (
    <span ref={ref} className="tabular-nums">
      {animating ? current.toLocaleString("en-IN") : display}
    </span>
  );
}
