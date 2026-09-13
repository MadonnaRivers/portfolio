import type { Project } from "@/lib/types";

/**
 * Real systems, real numbers — everything here is drawn from the resume.
 * The only placeholders left are repository/demo URLs and a handful of
 * implementation parameters that were not recorded there.
 */
export const projects: Project[] = [
  {
    slug: "easygpt",
    name: "EasyGPT — Enterprise Agentic RAG Assistant",
    problem:
      "Teams were losing time hunting through internal documents for answers that already existed somewhere.",
    built:
      "A document-aware Agentic RAG assistant: 8K–10K indexed chunks behind a LangGraph agent layer of 3 specialised agents and 6 MCP-integrated tools, routing between OpenAI and Gemini per workload and traced end to end with LangFuse.",
    categories: ["Agentic AI", "RAG"],
    stack: [
      "Python",
      "LangGraph",
      "LangChain",
      "MCP",
      "LangFuse",
      "OpenAI",
      "Gemini",
      "Sentence Transformers",
      "ChromaDB",
      "FAISS",
      "Reranking",
      "FastAPI",
      "Docker",
      "AWS EC2",
      "AWS ECS",
      "AWS S3",
      "AWS Lambda",
    ],
    architecture: [
      "Query",
      "Agent Router",
      "Retrieval",
      "Rerank",
      "MCP Tools",
      "LLM",
      "Traced Response",
    ],
    contribution:
      "Built and operate the system end to end — ingestion, retrieval, the agent graph, model routing, evaluation instrumentation and AWS deployment.",
    impact: [
      "40+ users across 3 teams · 1,000+ queries/day",
      "~60–70% cut in information lookup time",
      "~15–20% lower latency · ~20–25% lower inference cost",
      "~85–90% task success rate",
    ],
    /* Add `github: "https://github.com/..."` once a public repo exists. */
    links: {},
    featured: true,
    caseStudy: [
      {
        id: "problem",
        label: "Problem",
        body: [
          "Answers existed inside the company's documents, but finding them meant knowing which document to open. That cost is invisible on any dashboard and paid many times a day, by everyone.",
          "A plain search box was not enough. The questions people actually ask span several documents, and some of them are not lookups at all — they need a calculation, a record fetched from another system, or two retrievals combined. That is the line between a retrieval feature and an assistant, and it is what pushed the design toward an agent layer.",
        ],
      },
      {
        id: "architecture",
        label: "Architecture",
        body: [
          "The request path is staged so each part can be measured and replaced on its own: query → agent routing → retrieval → reranking → context construction → generation → traced response.",
          "Above that sits the agentic layer — 3 specialised agents and 6 MCP-integrated tools, orchestrated as a LangGraph state machine. The model chooses among tools; the graph decides what is reachable from where. That distinction is what keeps an agent operable instead of merely impressive.",
          "Model routing sits behind a single interface: OpenAI and Gemini are selected per workload rather than fixed globally, because classification and routing steps do not need the strongest available model.",
        ],
        spec: [
          { key: "Orchestration", value: "LangGraph — 3 specialised agents, conditional edges" },
          { key: "Tools", value: "6 tools integrated over MCP (Model Context Protocol)" },
          { key: "Models", value: "OpenAI + Google Gemini, routed per workload" },
          { key: "Embeddings", value: "Sentence Transformers" },
          { key: "Vector store", value: "ChromaDB / FAISS" },
          { key: "Observability", value: "LangFuse — tracing and evaluation" },
          { key: "Serving", value: "FastAPI, containerised with Docker" },
          { key: "Runtime", value: "AWS EC2 · ECS · S3 · Lambda" },
        ],
      },
      {
        id: "data",
        label: "Data & ingestion",
        body: [
          "The corpus is internal company documentation, parsed and chunked into an index of **8K–10K chunks**, with source documents held in S3.",
          "Chunking is the decision that sets the ceiling on everything downstream — a passage split badly can never be retrieved as a coherent unit, and no amount of prompt work repairs it afterwards.",
          "Embeddings are generated with Sentence Transformers and written to the vector store; re-ingestion replaces a document's own chunks rather than duplicating them.",
        ],
      },
      {
        id: "retrieval",
        label: "Retrieval & reranking",
        body: [
          "Retrieval runs wide-then-narrow. The first stage over-fetches from ChromaDB/FAISS, because anything missed there can never be ranked, reranked or cited — a miss at that stage is unrecoverable, while an extra candidate costs only a little reranking time.",
          "A reranking pass then scores that candidate set and cuts it down to what actually enters the prompt. Embedding similarity is fast precisely because query and passage are encoded separately, which is also why it is approximate; reranking buys back the precision on a small enough set to be affordable.",
        ],
      },
      {
        id: "agentic",
        label: "Agentic workflow",
        body: [
          "Not every question is one retrieval away. The graph classifies the incoming query and picks a path — answer directly, retrieve once, decompose and retrieve per part, or call a tool.",
          "**3 specialised agents** divide the work rather than one general agent doing everything, which keeps each one's prompt and tool surface narrow enough to reason about. **6 tools are integrated over MCP**, so tool definitions live behind a standard protocol instead of being hard-wired into the application.",
          "State is explicit in the LangGraph state machine — query, retrieved candidates, tool results and accumulated context are fields, not hidden conversation history. That is what makes a bad answer traceable to the run that produced it.",
        ],
      },
      {
        id: "models",
        label: "Model routing",
        body: [
          "OpenAI and Gemini are both available, chosen per workload. Routing and structured extraction go to cheaper models; generation quality is reserved for the steps where it changes the answer.",
          "This routing is where most of the **~20–25% inference cost reduction** came from, together with **~15–20% lower latency** — the cheapest request is the one that never reaches the largest model.",
        ],
      },
      {
        id: "evaluation",
        label: "Evaluation & observability",
        body: [
          "LangFuse instruments the system for tracing and evaluation. Without it, every prompt change is an opinion and every regression is invisible until a user reports it.",
          "Tracing is also what makes the agent layer debuggable: a wrong answer can be walked back through the exact routing decision, retrieval set and tool calls that produced it, instead of being re-prompted at random.",
          "Measured task success settled at **~85–90%**.",
        ],
      },
      {
        id: "deployment",
        label: "Backend & deployment",
        body: [
          "Exposed over FastAPI and containerised with Docker, so the local and deployed runtimes match.",
          "Deployed on AWS: EC2 and ECS for the running services, S3 for source documents and ingestion artefacts, and Lambda for event-driven steps.",
        ],
      },
      {
        id: "challenges",
        label: "Engineering challenges",
        body: [
          "**Retrieval that looks right and reads wrong.** High similarity scores do not mean the retrieved passage answers the question. Adding a reranking stage — and evaluating retrieval separately from generation — was what moved answer quality, not prompt rewriting.",
          "**Cost and latency both live in routing.** A single strong model for every step is the simplest thing to build and the most expensive thing to run. Routing per workload addressed both at once.",
          "**Agents fail differently from pipelines.** A pipeline breaks loudly; an agent loops, or picks a plausible wrong tool. Explicit graph state and LangFuse traces turned those into observable failures rather than mysteries.",
        ],
      },
      {
        id: "results",
        label: "Results",
        body: ["Measured in production use."],
        spec: [
          { key: "Adoption", value: "40+ users across 3 teams" },
          { key: "Volume", value: "1,000+ queries/day" },
          { key: "Index size", value: "8K–10K document chunks" },
          { key: "Lookup time", value: "~60–70% reduction" },
          { key: "Latency", value: "~15–20% reduction" },
          { key: "Inference cost", value: "~20–25% reduction" },
          { key: "Task success rate", value: "~85–90%" },
        ],
      },
    ],
  },
  {
    slug: "versify",
    name: "Versify — Agentic AI Content Assistant",
    problem:
      "Content tasks need different tools — text generation for one request, image generation for the next — and a single prompt cannot decide between them reliably.",
    built:
      "A LangGraph-orchestrated agentic workflow that routes between text- and image-generation tools, built with LangChain, LlamaIndex, CrewAI and LangSmith, and benchmarked across 4 LLMs and 300+ prompts.",
    categories: ["Agentic AI", "LLM Application"],
    stack: [
      "Python",
      "LangGraph",
      "LangChain",
      "LlamaIndex",
      "CrewAI",
      "LangSmith",
      "OpenAI",
      "Tool Routing",
    ],
    architecture: ["Prompt", "Intent Route", "Tool Select", "Generate", "Score"],
    contribution:
      "Designed the agent graph, the tool-routing logic and the benchmark harness used to compare models.",
    impact: [
      "4 LLMs benchmarked across 300+ prompts",
      "~2–4s average latency",
      "~8–9/10 quality score",
    ],
    /* Add `github: "https://github.com/..."` once a public repo exists. */
    links: {},
    featured: true,
    caseStudy: [
      {
        id: "problem",
        label: "Problem",
        body: [
          "A content assistant receives requests of genuinely different shapes — write this, illustrate that, revise the other — and the right tool differs per request. Hard-coding the branch makes the product rigid; leaving it entirely to one prompt makes it unreliable.",
        ],
      },
      {
        id: "architecture",
        label: "Architecture",
        body: [
          "A LangGraph workflow routes each request to the appropriate generation tool, with LangChain and LlamaIndex providing the tool and retrieval interfaces and CrewAI used for multi-agent coordination.",
          "LangSmith traces every run, which is what made the benchmark below meaningful rather than impressionistic.",
        ],
        spec: [
          { key: "Orchestration", value: "LangGraph" },
          { key: "Agents / tools", value: "LangChain · LlamaIndex · CrewAI" },
          { key: "Tracing", value: "LangSmith" },
          { key: "Routing", value: "Text-generation and image-generation tools" },
        ],
      },
      {
        id: "benchmark",
        label: "Benchmarking",
        body: [
          "**4 LLMs were benchmarked across 300+ prompts.** A fixed prompt set is the only way to compare models honestly — spot-checking a handful of outputs rewards whichever model happens to be verbose.",
          "Measured **~2–4s average latency** and a **~8–9/10 quality score** across the set.",
        ],
      },
      {
        id: "results",
        label: "Results",
        body: [],
        spec: [
          { key: "Models compared", value: "4" },
          { key: "Prompt set", value: "300+ prompts" },
          { key: "Latency", value: "~2–4s average" },
          { key: "Quality score", value: "~8–9/10" },
        ],
      },
    ],
  },
  {
    slug: "image-forgery-detection",
    name: "Image Forgery Detection",
    problem:
      "Document images can be manipulated convincingly enough that the edit is invisible to a reader.",
    built:
      "A transformer-based detection pipeline that fuses RGB appearance with noise-fingerprint analysis, so the signal comes from the artefacts editing leaves behind rather than from what the image depicts. Evaluated on 5,000+ documents.",
    categories: ["Computer Vision", "Deep Learning"],
    stack: [
      "Python",
      "PyTorch",
      "Transformers",
      "OpenCV",
      "Noise-fingerprint Analysis",
    ],
    architecture: [
      "Document",
      "RGB Stream",
      "Noise Fingerprint",
      "Fusion",
      "Classifier",
    ],
    contribution:
      "Built the detection pipeline and the evaluation over the 5,000+ document set, at Easy Home Finance.",
    impact: [
      "~91–93% accuracy on 5,000+ documents",
      "~1–2s inference per document",
    ],
    links: {},
    caseStudy: [
      {
        id: "problem",
        label: "Problem",
        body: [
          "In a lending context, a manipulated document is a financial risk, and the manipulations that matter are the ones a human reviewer will not catch. Detection therefore cannot rely on what the image shows — it has to rely on traces of the editing process itself.",
        ],
      },
      {
        id: "approach",
        label: "Approach",
        body: [
          "Two streams, fused. The **RGB stream** reads the image as it appears; the **noise-fingerprint stream** reads the sensor and compression noise pattern underneath it. Editing disturbs that pattern locally even when the visible result is seamless.",
          "Fusing the two is the point of the design: appearance alone misses invisible edits, and noise alone is fragile to recompression and scanning. A transformer-based architecture combines them into a single decision.",
        ],
        spec: [
          { key: "Streams", value: "RGB appearance + noise fingerprint" },
          { key: "Architecture", value: "Transformer-based fusion" },
          { key: "Evaluation set", value: "5,000+ documents" },
        ],
      },
      {
        id: "results",
        label: "Results",
        body: [
          "Inference is fast enough to sit in a document processing path rather than a batch job.",
        ],
        spec: [
          { key: "Accuracy", value: "~91–93%" },
          { key: "Inference", value: "~1–2s per document" },
          { key: "Scale evaluated", value: "5,000+ documents" },
        ],
      },
    ],
  },
  {
    slug: "diabetic-retinopathy",
    name: "Diabetic Retinopathy Detection",
    problem:
      "Grading retinal images for diabetic retinopathy is specialist work, and the visual signals separating grades are subtle.",
    built:
      "An EfficientNet-B3 classifier trained on the 3,662-image APTOS 2019 dataset, with CLAHE contrast enhancement and Gaussian filtering in preprocessing and focal loss to handle grade imbalance. Served over FastAPI.",
    categories: ["Computer Vision", "Deep Learning"],
    stack: [
      "Python",
      "PyTorch",
      "EfficientNet-B3",
      "OpenCV",
      "CLAHE",
      "Focal Loss",
      "FastAPI",
    ],
    architecture: ["Retinal Image", "CLAHE + Filter", "EfficientNet-B3", "Grade"],
    contribution:
      "Built the preprocessing pipeline, training setup and the inference API.",
    impact: ["~87–90% accuracy", "~90–93% ROC-AUC", "3,662 APTOS 2019 images"],
    /* Add `github: "https://github.com/..."` once a public repo exists. */
    links: {},
    caseStudy: [
      {
        id: "problem",
        label: "Problem",
        body: [
          "Diabetic retinopathy is graded on features — microaneurysms, haemorrhages, exudates — that occupy a small fraction of the image and differ subtly between adjacent grades.",
        ],
      },
      {
        id: "data",
        label: "Data & preprocessing",
        body: [
          "The **APTOS 2019** dataset, 3,662 retinal images. Grade distribution is heavily imbalanced, which is the central difficulty: a model that predicts the majority grade scores well and is useless.",
          "**CLAHE** raises local contrast so lesion-scale features survive into the network, and **Gaussian filtering** suppresses capture noise that would otherwise be learned as signal.",
          "**Focal loss** addresses the imbalance directly by down-weighting the easy majority-class examples during training, rather than resampling the dataset.",
        ],
        spec: [
          { key: "Dataset", value: "APTOS 2019 — 3,662 images" },
          { key: "Preprocessing", value: "CLAHE + Gaussian filtering" },
          { key: "Backbone", value: "EfficientNet-B3" },
          { key: "Loss", value: "Focal loss" },
        ],
      },
      {
        id: "results",
        label: "Results & serving",
        body: [
          "ROC-AUC is reported alongside accuracy deliberately — on an imbalanced medical dataset, accuracy alone hides exactly the failure that matters.",
          "The trained model is served behind a FastAPI endpoint.",
        ],
        spec: [
          { key: "Accuracy", value: "~87–90%" },
          { key: "ROC-AUC", value: "~90–93%" },
          { key: "Serving", value: "FastAPI" },
        ],
      },
    ],
  },
  {
    slug: "hrms-chatbot",
    name: "HRMS Chatbot — LLM Assistant over HR Policy",
    problem:
      "HR teams answering the same policy questions hundreds of times, for hundreds of employees.",
    built:
      "A retrieval-backed LLM assistant over HR documentation, built with LangChain and FastAPI against a MongoDB/Pinecone vector store, serving 300+ employees.",
    categories: ["RAG", "LLM Application"],
    stack: [
      "Python",
      "LangChain",
      "FastAPI",
      "RAG",
      "Pinecone",
      "MongoDB",
      "OpenAI",
    ],
    architecture: ["Question", "Vector Search", "Context", "LLM", "Answer"],
    contribution:
      "Built the RAG pipeline, the vector store integration and the API, at Convergence IT Services.",
    impact: [
      "300+ employees served",
      "~25–30% reduction in repetitive HR queries",
    ],
    links: {},
  },
  {
    slug: "face-attendance",
    name: "Real-Time Face Recognition Attendance",
    problem:
      "Manual attendance is slow to process and easy to get wrong at scale.",
    built:
      "A real-time recognition pipeline built on FaceNet embeddings, DeepFace and OpenCV, running attendance for 150+ employees.",
    categories: ["Computer Vision", "Deep Learning"],
    stack: ["Python", "FaceNet", "DeepFace", "OpenCV", "CNNs"],
    architecture: ["Video Frame", "Face Detect", "Embedding", "Match", "Log"],
    contribution:
      "Built the recognition pipeline and its integration into the attendance workflow, at Convergence IT Services.",
    impact: [
      "~94–96% recognition accuracy",
      "150+ employees",
      "~40–50% faster attendance processing",
    ],
    links: {},
  },
];

export const projectCategories = [
  "All",
  "Agentic AI",
  "RAG",
  "LLM Application",
  "Computer Vision",
  "Deep Learning",
] as const;

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
