import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { Tokenized } from "./ui/Tokenized";

const paragraphs = [
  "I'm an AI Engineer in Mumbai with 3+ years building and deploying Generative AI systems, currently inside financial services. I architect and operate EasyGPT at Easy Home Finance — an enterprise Agentic RAG assistant serving 40+ users across 3 teams at 1,000+ queries a day.",
  "I came into GenAI through deep learning. My first role was CNNs and transformers in PyTorch and TensorFlow — image classification, feature extraction, transfer learning — and that set the habit that matters most in this field: evaluate the thing, don't trust the demo. A model that looks right on ten examples is not a result.",
  "The work moved up the stack from there. Retrieval systems where chunking and reranking decide answer quality long before the prompt does. Agent layers built as LangGraph state machines — 3 specialised agents, 6 tools behind MCP — because a graph can be bounded, traced and tested where a free-running loop cannot. Model routing across OpenAI and Gemini, which is where most of the latency and cost reduction actually came from.",
  "I still ship computer vision alongside it: a transformer-based image forgery detector fusing RGB and noise-fingerprint signals, evaluated across 5,000+ documents. Different problem, same discipline — measure it properly or you don't know.",
  "The problems I like are the ones between a working prototype and a system people depend on: retrieval that fails silently, context windows spent badly, agents that pick a plausible wrong tool, latency that only shows up under load, and token cost that only shows up in the bill.",
];

const facts = [
  { k: "Current", v: "AI Engineer · Easy Home Finance" },
  { k: "Since", v: "Jun 2025" },
  { k: "Experience", v: "3+ years across 4 AI roles" },
  { k: "Domain", v: "Financial services · lending" },
  { k: "Based in", v: "Mumbai, India" },
  { k: "Education", v: "B.E. AI & Data Science · CGPA 8.29" },
  { k: "Working on", v: "Agentic RAG · LLM systems · CV" },
];

export function About() {
  return (
    <Section
      id="about"
      index="01"
      kicker="About"
      title="I build AI systems that have to keep working after the demo."
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
