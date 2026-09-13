import type { SkillGroup, DepthTopic } from "@/lib/types";

export const skillGroups: SkillGroup[] = [
  {
    id: "genai",
    title: "AI / GenAI",
    note: "The core of the work — retrieval quality and agent control flow, not model trivia.",
    items: [
      { name: "Agentic AI & multi-agent systems", detail: "Specialised agents, routing, bounded multi-step workflows" },
      { name: "Agentic RAG", detail: "Query routing, decomposition and multi-pass retrieval" },
      { name: "RAG", detail: "Ingestion, chunking, retrieval, context construction" },
      { name: "Tool / function calling", detail: "Typed schemas, validation, MCP-integrated tools" },
      { name: "Embeddings & vector search", detail: "Sentence Transformers, semantic and similarity search" },
      { name: "Reranking", detail: "Precision pass over first-stage candidates" },
      { name: "Prompt engineering", detail: "Treated as an interface problem, evaluated not guessed" },
      { name: "Transformer architectures", detail: "Fine-tuning and fusion architectures for vision and text" },
      { name: "CNNs & computer vision", detail: "Classification, detection, forensic feature extraction" },
      { name: "NLP", detail: "Intent recognition and conversational task handling" },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & orchestration",
    note: "Used for orchestration, state and observability — not as a substitute for design.",
    items: [
      { name: "LangGraph", detail: "Graph agents with typed state and conditional edges" },
      { name: "LangChain", detail: "Retrieval chains, tool interfaces, output parsing" },
      { name: "CrewAI", detail: "Multi-agent coordination" },
      { name: "LlamaIndex", detail: "Indexing and retrieval interfaces" },
      { name: "MCP", detail: "Model Context Protocol — tools behind a standard interface" },
      { name: "LangFuse / LangSmith", detail: "Tracing and evaluation of agent runs" },
    ],
  },
  {
    id: "models",
    title: "Models & APIs",
    note: "Behind one interface, routed per workload on cost and latency.",
    items: [
      { name: "OpenAI APIs", detail: "Generation, structured output, function calling" },
      { name: "Google Gemini APIs", detail: "Generation and long-context workloads" },
      { name: "Hugging Face", detail: "Open models and fine-tuning" },
      { name: "Sentence Transformers", detail: "Embedding generation for retrieval" },
      { name: "Ollama", detail: "Local model runs for evaluation" },
    ],
  },
  {
    id: "backend",
    title: "Backend & ML",
    note: "AI workflows are services, and are built like services.",
    items: [
      { name: "Python", detail: "Primary language across pipelines and services" },
      { name: "FastAPI · Pydantic", detail: "Async APIs with typed request/response contracts" },
      { name: "PyTorch · TensorFlow · Keras", detail: "Model training and fine-tuning" },
      { name: "OpenCV · NumPy", detail: "Vision preprocessing and numerical work" },
      { name: "SQL", detail: "Querying and data extraction" },
      { name: "REST APIs", detail: "Versioned contracts and integration" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    note: "Where the systems actually run.",
    items: [
      { name: "AWS", detail: "EC2, ECS, S3, Lambda, Bedrock" },
      { name: "GCP", detail: "Vertex AI, Compute Engine, Cloud Storage, Document AI" },
      { name: "Docker", detail: "Containerised builds, parity from local to production" },
      { name: "Git & GitHub", detail: "Version-controlled experimentation and deployment" },
    ],
  },
  {
    id: "data",
    title: "Data & vector infrastructure",
    note: "The storage layer retrieval quality depends on.",
    items: [
      { name: "ChromaDB", detail: "Vector store for production retrieval" },
      { name: "FAISS", detail: "Similarity search over dense embeddings" },
      { name: "Pinecone", detail: "Managed vector store" },
      { name: "MongoDB", detail: "Document storage alongside the vector index" },
    ],
  },
];

export const depthTopics: DepthTopic[] = [
  {
    id: "retrieval-first",
    title: "Most bad answers are retrieval bugs",
    body:
      "When a RAG system answers badly, the prompt is usually the last thing at fault. If the correct passage was never retrieved, no instruction recovers it. Evaluating retrieval on its own — did the right chunk come back, and at what rank — before looking at generation is what makes the system debuggable.",
    tags: ["RAG", "Evaluation", "Debugging"],
  },
  {
    id: "two-stage",
    title: "Wide retrieval, narrow reranking",
    body:
      "Embedding search is fast because query and passage are encoded separately, which is also exactly why it is approximate. Retrieving wide and reranking narrow buys back precision at a price that scales, because the expensive scoring pass only ever sees a handful of candidates.",
    tags: ["Vector search", "Reranking", "Latency"],
  },
  {
    id: "routing",
    title: "Cost and latency both live in routing",
    body:
      "Sending every step to the strongest model is the easiest system to build and the most expensive one to run. Routing per workload — cheap models for classification and extraction, strong models only where reasoning changes the answer — is where EasyGPT's ~20–25% inference cost and ~15–20% latency reductions came from.",
    tags: ["Model routing", "Cost", "OpenAI / Gemini"],
  },
  {
    id: "chunking",
    title: "Chunking is a retrieval decision",
    body:
      "Chunk size, overlap and boundary choice set the ceiling on what can be retrieved as a coherent unit. A table split across two chunks cannot be retrieved as a table. It is decided at ingestion, long before a prompt exists, and re-ingestion is the only way to change it.",
    tags: ["Ingestion", "Chunking", "Metadata"],
  },
  {
    id: "context",
    title: "More context is not better context",
    body:
      "Filling the window degrades answers: irrelevant passages compete with relevant ones, and position within a long prompt affects what the model actually uses. Context construction is a budgeting problem — select, order, deduplicate, attribute.",
    tags: ["Context", "Token budget", "Grounding"],
  },
  {
    id: "graphs",
    title: "Graphs over free-running loops",
    body:
      "An open-ended agent loop demos well and operates badly. A LangGraph state machine keeps state typed and explicit, makes reachable transitions a design decision rather than a model decision, and bounds iteration. The model chooses among tools; it does not choose the control flow.",
    tags: ["LangGraph", "State", "Control flow"],
  },
  {
    id: "tools",
    title: "Tools are an API design problem",
    body:
      "A tool is a schema and a failure mode. Narrow, typed arguments and validation before execution mean a malformed call fails fast with a message the model can use, instead of reaching the downstream system. Putting tools behind MCP keeps that contract standard rather than bespoke per application.",
    tags: ["Function calling", "MCP", "Validation"],
  },
  {
    id: "enterprise",
    title: "Enterprise constraints are design inputs",
    body:
      "Building inside a lending business means the document corpus is sensitive, answers get acted on, and \u201cthe model said so\u201d is not an acceptable audit trail. That pushes the design toward grounded answers tied to their source passage, traced runs you can reconstruct after the fact, and refusal as a correct outcome rather than a failure.",
    tags: ["Financial services", "Traceability", "Grounding"],
  },
  {
    id: "observability",
    title: "You cannot improve what you do not trace",
    body:
      "Agent runs fail quietly — a plausible wrong tool, a route taken for the wrong reason. LangFuse and LangSmith traces turn those into observable events, and make a prompt or routing change a measurable delta instead of an opinion. Task success rate is only a real number if something recorded it.",
    tags: ["LangFuse", "Evaluation", "Tracing"],
  },
  {
    id: "imbalance",
    title: "Accuracy hides the failure that matters",
    body:
      "On an imbalanced dataset — medical grading, forgery detection — a model that predicts the majority class scores well and is useless. That is why the retinopathy work reports ROC-AUC alongside accuracy and trains with focal loss rather than resampling.",
    tags: ["Evaluation", "Focal loss", "ROC-AUC"],
  },
];
