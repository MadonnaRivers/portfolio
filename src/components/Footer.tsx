import { nav, site, socials } from "@/content/site";
import { Tokenized } from "./ui/Tokenized";

export function Footer() {
  return (
    <footer className="border-t border-hairline py-12">
      <div className="container-page">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="grid h-7 w-7 place-items-center rounded-[7px] border border-hairline-strong font-mono text-[0.6875rem] font-semibold text-accent"
              >
                AI
              </span>
              <span className="text-sm font-medium text-ink">
                <Tokenized text={site.name} />
              </span>
            </p>
            <p className="mt-3 max-w-sm text-[0.8125rem] leading-relaxed text-faint">
              {site.discipline}
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.8125rem] text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <ul className="flex gap-5 md:flex-col md:gap-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="text-[0.8125rem] text-muted transition-colors hover:text-ink"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="tag text-faint">
            © {new Date().getFullYear()} <Tokenized text={site.name} />
          </p>
          <p className="tag text-faint">
            Built with Next.js · TypeScript · Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
