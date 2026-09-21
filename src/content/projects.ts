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
      "Teams were losing time searching internal documents for answers that already existed.",
    built:
      "A document-aware Agentic RAG assistant: 8K–10K indexed chunks behind a LangGraph agent layer of 3 specialised agents and 6 MCP-integrated tools, with OpenAI/Gemini routing and LangFuse tracing.",
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
        id: "overview",
        label: "Overview",
        body: [
          "An internal knowledge assistant for Easy Home Finance. Company documentation is indexed as 8K\u201310K chunks and served through an agent layer that answers questions, calls tools, and cites its sources.",
          "Adopted by 40+ users across 3 teams, handling 1,000+ queries a day.",
        ],
      },
      {
        id: "architecture",
        label: "Architecture",
        body: [
          "Requests run through a staged pipeline: query \u2192 agent routing \u2192 retrieval \u2192 reranking \u2192 context construction \u2192 generation \u2192 traced response.",
          "The agent layer is a LangGraph state machine of 3 specialised agents with 6 tools integrated over MCP. Model selection is per workload rather than fixed, which is where the latency and cost reductions came from.",
        ],
        spec: [
          { key: "Orchestration", value: "LangGraph \u2014 3 specialised agents" },
          { key: "Tools", value: "6 tools integrated over MCP" },
          { key: "Models", value: "OpenAI + Google Gemini, routed per workload" },
          { key: "Embeddings", value: "Sentence Transformers" },
          { key: "Vector store", value: "ChromaDB / FAISS with reranking" },
          { key: "Observability", value: "LangFuse \u2014 tracing and evaluation" },
          { key: "Serving", value: "FastAPI, containerised with Docker" },
          { key: "Runtime", value: "AWS EC2 \u00b7 ECS \u00b7 S3 \u00b7 Lambda" },
        ],
      },
      {
        id: "contribution",
        label: "What I built",
        body: [
          "**Ingestion and retrieval.** Document parsing, Sentence-Transformer embeddings, and ChromaDB/FAISS retrieval with a reranking pass over first-stage candidates.",
          "**Agent layer.** The LangGraph graph, the 3 agents, the 6 MCP tool integrations, and OpenAI/Gemini model routing.",
          "**Evaluation.** LangFuse tracing and evaluation, which is what made the latency, cost and task-success figures measurable.",
          "**MLOps.** CI/CD for containerised deployments, model and version tracking, and evaluation-driven release checks covering prompt and routing changes.",
          "**Deployment.** FastAPI service on AWS EC2/ECS with S3 for documents and Lambda for event-driven steps.",
        ],
      },
      {
        id: "results",
        label: "Results",
        body: [],
        spec: [
          { key: "Adoption", value: "40+ users across 3 teams" },
          { key: "Volume", value: "1,000+ queries/day" },
          { key: "Index size", value: "8K\u201310K document chunks" },
          { key: "Lookup time", value: "~60\u201370% reduction" },
          { key: "Latency", value: "~15\u201320% reduction" },
          { key: "Inference cost", value: "~20\u201325% reduction" },
          { key: "Task success rate", value: "~85\u201390%" },
        ],
      },
    ],
  },
  {
    slug: "versify",
    name: "Versify — Agentic AI Content Assistant",
    problem:
      "Content requests need different tools, and a single prompt cannot route between them reliably.",
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
        id: "overview",
        label: "Overview",
        body: [
          "An agentic content assistant that routes each request to the appropriate generation tool rather than handling every request with a single prompt.",
        ],
      },
      {
        id: "architecture",
        label: "Architecture",
        body: [
          "A LangGraph workflow routes between text- and image-generation tools, with LangChain and LlamaIndex providing the tool and retrieval interfaces and CrewAI handling multi-agent coordination. LangSmith traces every run.",
        ],
        spec: [
          { key: "Orchestration", value: "LangGraph" },
          { key: "Agents / tools", value: "LangChain \u00b7 LlamaIndex \u00b7 CrewAI" },
          { key: "Tracing", value: "LangSmith" },
          { key: "Routing", value: "Text- and image-generation tools" },
        ],
      },
      {
        id: "results",
        label: "Benchmark",
        body: [
          "Four LLMs were compared across a fixed set of 300+ prompts.",
        ],
        spec: [
          { key: "Models compared", value: "4" },
          { key: "Prompt set", value: "300+ prompts" },
          { key: "Latency", value: "~2\u20134s average" },
          { key: "Quality score", value: "~8\u20139/10" },
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
      "A transformer-based detection pipeline fusing RGB appearance with noise-fingerprint analysis, evaluated on 5,000+ documents.",
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
        id: "overview",
        label: "Overview",
        body: [
          "A detection pipeline for manipulated document images, built at Easy Home Finance where a forged document carries direct financial risk.",
        ],
      },
      {
        id: "approach",
        label: "Approach",
        body: [
          "Two streams are fused: an RGB stream reading the image as it appears, and a noise-fingerprint stream reading the sensor and compression pattern beneath it. Editing disturbs that pattern locally even where the visible result is seamless.",
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
        body: [],
        spec: [
          { key: "Accuracy", value: "~91\u201393%" },
          { key: "Inference", value: "~1\u20132s per document" },
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
        id: "overview",
        label: "Overview",
        body: [
          "A retinal image classifier for diabetic retinopathy grading, trained on the APTOS 2019 dataset and served over FastAPI.",
        ],
      },
      {
        id: "approach",
        label: "Data & training",
        body: [
          "Grade distribution in the dataset is heavily imbalanced. CLAHE raises local contrast so lesion-scale features survive into the network, Gaussian filtering suppresses capture noise, and focal loss handles the imbalance during training.",
        ],
        spec: [
          { key: "Dataset", value: "APTOS 2019 \u2014 3,662 images" },
          { key: "Preprocessing", value: "CLAHE + Gaussian filtering" },
          { key: "Backbone", value: "EfficientNet-B3" },
          { key: "Loss", value: "Focal loss" },
        ],
      },
      {
        id: "results",
        label: "Results",
        body: [
          "ROC-AUC is reported alongside accuracy because accuracy alone is misleading on an imbalanced set.",
        ],
        spec: [
          { key: "Accuracy", value: "~87\u201390%" },
          { key: "ROC-AUC", value: "~90\u201393%" },
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
