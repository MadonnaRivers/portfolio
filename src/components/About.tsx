import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { Tokenized } from "./ui/Tokenized";

const paragraphs = [
  "I'm an AI Engineer based in Mumbai with 3+ years building and deploying Generative AI systems, currently in financial services. At Easy Home Finance I architect and operate EasyGPT, an enterprise Agentic RAG assistant serving 40+ users across 3 teams at 1,000+ queries a day.",
  "My work covers the full path from retrieval to production: document ingestion and vector search, agent orchestration in LangGraph, model routing across OpenAI and Gemini, FastAPI services, and deployment on AWS with Docker \u2014 supported by CI/CD, model and version tracking, and evaluation-driven release checks.",
  "I came into Generative AI through deep learning, training CNN and transformer models in PyTorch and TensorFlow, and still ship computer vision alongside LLM work \u2014 most recently a transformer-based image forgery detector evaluated across 5,000+ documents.",
];

const facts = [
  { k: "Current", v: "AI Engineer \u00b7 Easy Home Finance" },
  { k: "Since", v: "Jun 2025" },
  { k: "Experience", v: "3+ years across 4 AI roles" },
  { k: "Domain", v: "Financial services \u00b7 lending" },
  { k: "Based in", v: "Mumbai, India" },
  { k: "Education", v: "B.E. AI & Data Science \u00b7 CGPA 8.29" },
];

export function About() {
  return (
    <Section
      id="about"
      index="01"
      kicker="About"
      title="AI Engineer, production Generative AI."
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:gap-20">
        <div className="space-y-6">
          {paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 70}>
              <p className="max-w-[68ch] text-[1.0625rem] leading-[1.75] text-ink-soft">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <dl className="divide-y divide-[color:var(--hairline)] rounded-[var(--radius-card)] border border-hairline bg-[color:var(--bg-raised)]">
            {facts.map((f) => (
              <div
                key={f.k}
                className="flex items-baseline justify-between gap-6 px-5 py-4"
              >
                <dt className="tag shrink-0 text-faint">{f.k}</dt>
                <dd className="text-right text-sm font-medium text-ink-soft">
                  <Tokenized text={f.v} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
