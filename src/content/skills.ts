import type { SkillGroup } from "@/lib/types";

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
