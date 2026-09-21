import type { Role } from "@/lib/types";

/**
 * All content below is taken from the resume. Metrics are reproduced as
 * stated there, including ranges — no number is rounded up or invented.
 */
export const roles: Role[] = [
  {
    id: "ehf",
    title: "AI Engineer",
    company: "Easy Home Finance Limited",
    start: "Jun 2025",
    end: "Present",
    location: "Mumbai, India",
    current: true,
    summary:
      "Own EasyGPT end to end — an enterprise Agentic RAG assistant, from document ingestion and retrieval through the agent layer to the AWS infrastructure it runs on.",
    highlights: [
      "Engineered **EasyGPT**, a document-aware Agentic RAG knowledge assistant adopted by 40+ users across 3 teams — indexing 8K–10K document chunks and handling 1,000+ queries/day.",
      "Architected the agentic layer — 3 specialised agents and 6 MCP-integrated tools orchestrated in LangGraph for multi-step tool calling, with OpenAI/Gemini model routing per workload.",
      "Instrumented the system with LangFuse for tracing and evaluation, which is what made the latency and cost reductions measurable rather than anecdotal.",
      "Built the core RAG pipeline — document parsing, Sentence-Transformer embeddings, ChromaDB/FAISS retrieval with reranking.",
      "Deployed the stack on AWS (EC2, ECS, S3, Lambda) with Docker for production use.",
      "Set up MLOps practices around the assistant \u2014 CI/CD pipelines for containerised deployments, model and version tracking, and evaluation-driven release checks that keep model routing and prompt changes production-safe.",
      "Developed an **Image Forgery Detection** pipeline using transformer-based RGB + noise-fingerprint fusion, evaluated on 5,000+ documents.",
    ],
    outcomes: [
      "~60–70% cut in information lookup time",
      "~15–20% lower latency after agent-layer routing",
      "~20–25% lower inference cost",
      "~85–90% agent task success rate",
      "8K–10K document chunks indexed",
      "~91–93% forgery detection accuracy, ~1–2s per document",
    ],
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
      "FastAPI",
      "Docker",
      "AWS EC2",
      "AWS ECS",
      "AWS S3",
      "AWS Lambda",
      "CI/CD",
      "MLOps",
    ],
  },
  {
    id: "convergence",
    title: "AI Engineer Intern",
    company: "Convergence IT Services",
    start: "Jan 2025",
    end: "May 2025",
    location: "Mumbai, India",
    summary:
      "Shipped two production systems for internal HR operations — one retrieval-backed LLM assistant, one real-time computer vision pipeline.",
    highlights: [
      "Built an LLM-powered **HRMS chatbot** with LangChain and FastAPI, backed by a RAG pipeline over a MongoDB/Pinecone vector store, serving 300+ employees.",
      "Built a real-time **face recognition attendance system** using FaceNet, DeepFace, OpenCV and CNNs for 150+ employees.",
    ],
    outcomes: [
      "~25–30% reduction in repetitive HR queries",
      "300+ employees served by the chatbot",
      "~94–96% face recognition accuracy",
      "~40–50% faster attendance processing",
    ],
    stack: [
      "Python",
      "LangChain",
      "FastAPI",
      "RAG",
      "Pinecone",
      "MongoDB",
      "FaceNet",
      "DeepFace",
      "OpenCV",
      "CNNs",
    ],
  },
  {
    id: "sharv",
    title: "AI Engineer Intern",
    company: "Sharv Auto Tech Pvt Ltd",
    start: "May 2024",
    end: "Dec 2024",
    location: "Mumbai, India",
    summary:
      "First agentic work — moving from single-turn LLM calls to tool-using, task-oriented conversation.",
    highlights: [
      "Built an agentic AI chatbot in Python using Generative AI and LLMs to handle conversational, task-oriented interactions.",
      "Applied NLP techniques — intent recognition and prompt engineering — and explored early AI agent and tool-calling workflows for AI application development.",
    ],
    outcomes: [],
    stack: [
      "Python",
      "Generative AI",
      "LLMs",
      "NLP",
      "Prompt Engineering",
      "Tool Calling",
    ],
  },
  {
    id: "fafadia",
    title: "AI Engineer Intern",
    company: "Fafadia Tech",
    start: "May 2023",
    end: "Apr 2024",
    location: "Mumbai, India",
    summary:
      "Deep learning foundations — the training and evaluation habits that still shape how I ship LLM systems.",
    highlights: [
      "Built and fine-tuned CNN and transformer-based deep learning models in PyTorch, TensorFlow and Keras for image classification, feature extraction, and similarity/transfer-learning tasks.",
      "Used Docker to containerise model experimentation and deployment workflows, supporting reproducible, version-controlled training pipelines.",
    ],
    outcomes: [],
    stack: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "CNNs",
      "Transformers",
      "Transfer Learning",
      "Docker",
    ],
  },
];

export const education = {
  degree: "B.E. in Artificial Intelligence and Data Science",
  institution: "Vidyavardhini College of Engineering and Technology",
  location: "Mumbai, India",
  start: "Jun 2020",
  end: "Jun 2024",
  detail: "CGPA 8.29",
};
