import { achievements } from "@/content/achievements";
import { education } from "@/content/experience";
import { Reveal } from "./ui/Reveal";
import { Tokenized } from "./ui/Tokenized";

export function AchievementSection() {
  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-16">
      <div>
        <Reveal>
          <h3 className="tag mb-5 text-faint">
            Certifications &amp; credentials
          </h3>
        </Reveal>
        <ul className="space-y-3">
          {achievements.map((a, i) => (
            <Reveal key={a.id} delay={i * 70} as="li">
              <div className="rounded-[var(--radius-card)] border border-hairline bg-[color:var(--bg-raised)] p-5 transition-colors hover:border-hairline-strong">
                <div className="min-w-0">
                  <h4 className="text-[0.9375rem] leading-snug font-semibold text-ink">
                    <Tokenized text={a.title} />
                  </h4>
                  <p className="mt-1.5 text-sm text-muted">
                    <span className="font-medium text-ink-soft">
                      <Tokenized text={a.issuer} />
                    </span>
                    <span className="mx-2 text-faint">·</span>
                    <Tokenized text={a.date} />
                  </p>
                  <p className="mt-2.5 text-[0.8125rem] leading-relaxed text-faint">
                    <Tokenized text={a.detail} />
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>

      <div>
        <Reveal>
          <h3 className="tag mb-5 text-faint">Education</h3>
          <div className="rounded-[var(--radius-card)] border border-hairline bg-[color:var(--bg-raised)] p-6">
            <p className="tag text-accent">
              {education.start} — {education.end}
            </p>
            <h4 className="mt-4 text-lg leading-snug font-semibold text-ink">
              <Tokenized text={education.degree} />
            </h4>
            <p className="mt-2 text-sm text-ink-soft">
              <Tokenized text={education.institution} />
            </p>
            <p className="mt-1 text-sm text-muted">
              <Tokenized text={education.location} />
            </p>
            <p className="mt-4 border-t border-hairline pt-4 text-[0.8125rem] leading-relaxed text-faint">
              <Tokenized text={education.detail} />
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
