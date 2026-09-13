import { capabilities } from "@/content/tech";
import { TechStack } from "./TechStack";
import { Reveal } from "./ui/Reveal";

/**
 * Two halves, deliberately. Capabilities say what the work is; the icon
 * grid says what it is built with. A recruiter scanning for "Agentic RAG"
 * should not have to infer it from a framework name.
 */
export function SkillSection() {
  return (
    <div className="space-y-16">
      <section aria-labelledby="capabilities-title">
        <Reveal>
          <h3 id="capabilities-title" className="tag mb-6 text-faint">
            What I do
          </h3>
        </Reveal>
        <Reveal delay={60}>
          <dl className="grid gap-x-10 gap-y-px sm:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="flex items-baseline gap-3 border-b border-hairline py-3.5"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.5em] h-[5px] w-[5px] shrink-0 rounded-[1px] bg-[color:var(--accent)]/70"
                />
                <div className="min-w-0">
                  <dt className="text-[0.9375rem] font-medium text-ink">
                    {capability.title}
                  </dt>
                  <dd className="mt-0.5 text-[0.8125rem] leading-snug text-muted">
                    {capability.detail}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <section aria-labelledby="toolchain-title">
        <Reveal>
          <h3 id="toolchain-title" className="tag mb-6 text-faint">
            What I build with
          </h3>
        </Reveal>
        <TechStack />
      </section>
    </div>
  );
}
