"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";
import { ScrollProgress } from "./ui/ScrollProgress";
import { Tokenized } from "./ui/Tokenized";

/**
 * Sticky navigation with scroll-spy. Goes from transparent to a hairline
 * bar once the hero is passed, so the top of the page stays uninterrupted.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.05, 0.3] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-hairline bg-[color:var(--bg)]/82 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="container-page flex h-16 items-center justify-between gap-6 md:h-[4.5rem]"
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5 shrink-0"
          aria-label="Home"
        >
          <span
            aria-hidden="true"
            className="grid h-7 w-7 place-items-center rounded-[7px] border border-hairline-strong font-mono text-[0.6875rem] font-semibold text-accent"
          >
            AI
          </span>
          <span className="truncate text-sm font-medium tracking-tight text-ink">
            <Tokenized text={site.shortName} />
          </span>
          <span className="hidden text-sm text-faint lg:block">
            / {site.title}
          </span>
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {nav.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative rounded-md px-3 py-2 text-[0.8125rem] transition-colors ${
                    isActive
                      ? "text-ink"
                      : "text-muted hover:text-ink-soft"
                  }`}
                >
                  {item.label}
                  {isActive ? (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-3 -bottom-px h-px bg-accent"
                    />
                  ) : null}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:grid" />
          <a
            href={site.resume.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-ink px-4 py-2 text-[0.8125rem] font-medium text-[color:var(--bg)] transition-opacity hover:opacity-88 sm:block"
          >
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-9 w-9 place-items-center rounded-full border border-hairline text-ink lg:hidden"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M3 7h18M3 17h18" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {scrolled ? <ScrollProgress /> : null}

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-hairline bg-[color:var(--bg)] lg:hidden"
      >
        <div className="container-page grid gap-1 py-5">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 rounded-lg px-2 py-3 text-lg font-medium text-ink-soft transition-colors hover:bg-[color:var(--bg-raised)] hover:text-ink"
            >
              <span className="tag w-6 text-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.label}
            </a>
          ))}
          <div className="mt-3 flex items-center gap-3 border-t border-hairline pt-5">
            <a
              href={site.resume.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-full bg-ink px-4 py-3 text-center text-sm font-medium text-[color:var(--bg)]"
            >
              Download Resume
            </a>
            <ThemeToggle className="h-11 w-11" />
          </div>
        </div>
      </div>
    </header>
  );
}
