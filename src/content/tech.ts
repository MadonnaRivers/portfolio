import type { Capability, TechCategory, TechItem } from "@/lib/types";

/**
 * What I do — the capabilities, stated as work rather than keywords.
 * These are deliberately separate from the tool list below: tools change,
 * and a recruiter scanning for "RAG" should not have to infer it from a
 * framework name.
 */
export const capabilities: Capability[] = [
  {
    title: "Agentic AI & multi-agent systems",
    detail:
      "Specialised agents on a typed state graph, bounded loops, explicit termination",
  },
  {
    title: "Agentic RAG",
    detail: "Query routing, decomposition and multi-pass retrieval",
  },
  {
    title: "Production RAG",
    detail: "Ingestion, chunking, retrieval, reranking, context budgeting",
  },
  {
    title: "Tool & function calling",
    detail: "Typed schemas, argument validation, MCP-integrated tools",
  },
  {
    title: "LLM orchestration & model routing",
    detail: "Per-workload model selection across providers, on cost and latency",
  },
  {
    title: "Embeddings & vector search",
    detail: "Semantic and similarity search over dense indexes",
  },
  {
    title: "Reranking",
    detail: "Precision pass over first-stage retrieval candidates",
  },
  {
    title: "Evaluation & tracing",
    detail: "Golden sets, task success measurement, per-run traces",
  },
  {
    title: "Prompt engineering",
    detail: "Treated as an interface problem — evaluated, not guessed",
  },
  {
    title: "Computer vision & deep learning",
    detail: "CNNs, transformer fusion architectures, forensic feature extraction",
  },
  {
    title: "Backend & API design",
    detail: "Async services, typed contracts, streaming responses",
  },
  {
    title: "Cloud deployment",
    detail: "Containerised services on AWS and GCP",
  },
];

export const techCategories: readonly ("All" | TechCategory)[] = [
  "All",
  "GenAI & Agents",
  "Models",
  "Backend",
  "Deep Learning",
  "Cloud & DevOps",
  "Data & Vector",
];

export const techStack: TechItem[] = [
  // GenAI & Agents
  { name: "LangGraph", category: "GenAI & Agents", detail: "Graph agents, typed state, conditional edges" },
  { name: "LangChain", category: "GenAI & Agents", detail: "Retrieval chains, tools, output parsing" },
  { name: "CrewAI", category: "GenAI & Agents", detail: "Multi-agent coordination" },
  { name: "LlamaIndex", category: "GenAI & Agents", detail: "Indexing and retrieval interfaces" },
  { name: "MCP", category: "GenAI & Agents", detail: "Tools behind a standard protocol" },
  { name: "LangFuse", category: "GenAI & Agents", detail: "Production tracing and evaluation" },
  { name: "LangSmith", category: "GenAI & Agents", detail: "Run tracing and prompt evaluation" },

  // Models
  { name: "OpenAI", category: "Models", detail: "Generation, structured output, function calling" },
  { name: "Anthropic", category: "Models", detail: "Claude models for generation and tool use" },
  { name: "Google Gemini", category: "Models", detail: "Generation and long-context workloads" },
  { name: "Amazon Bedrock", category: "Models", detail: "Managed model access on AWS" },
  { name: "Hugging Face", category: "Models", detail: "Open models and fine-tuning" },
  { name: "Sentence Transformers", category: "Models", detail: "Embedding generation for retrieval" },
  { name: "Ollama", category: "Models", detail: "Local model runs for evaluation" },

  // Backend
  { name: "Python", category: "Backend", detail: "Primary language across pipelines and services" },
  { name: "FastAPI", category: "Backend", detail: "Async APIs with streaming responses" },
  { name: "Pydantic", category: "Backend", detail: "Typed request, response and tool schemas" },
  { name: "REST APIs", category: "Backend", detail: "Versioned contracts and integration" },
  { name: "SQL", category: "Backend", detail: "Querying and data extraction" },
  { name: "NumPy", category: "Backend", detail: "Numerical work across vision pipelines" },

  // Deep Learning
  { name: "PyTorch", category: "Deep Learning", detail: "Model training and fine-tuning" },
  { name: "TensorFlow", category: "Deep Learning", detail: "CNN and transformer training" },
  { name: "Keras", category: "Deep Learning", detail: "Rapid model prototyping" },
  { name: "OpenCV", category: "Deep Learning", detail: "Vision preprocessing and inference pipelines" },

  // Cloud & DevOps
  { name: "AWS", category: "Cloud & DevOps", detail: "EC2, ECS, S3, Lambda — production runtime" },
  { name: "GCP", category: "Cloud & DevOps", detail: "Compute Engine, Cloud Storage, Document AI" },
  { name: "Vertex AI", category: "Cloud & DevOps", detail: "Managed model training and serving" },
  { name: "Docker", category: "Cloud & DevOps", detail: "Local-to-production runtime parity" },
  { name: "Git", category: "Cloud & DevOps", detail: "Version-controlled experimentation" },

  // Data & Vector
  { name: "ChromaDB", category: "Data & Vector", detail: "Vector store behind production retrieval" },
  { name: "FAISS", category: "Data & Vector", detail: "Similarity search over dense embeddings" },
  { name: "Qdrant", category: "Data & Vector", detail: "Vector database with payload filtering" },
  { name: "Pinecone", category: "Data & Vector", detail: "Managed vector store" },
  { name: "MongoDB", category: "Data & Vector", detail: "Document storage beside the vector index" },
];
