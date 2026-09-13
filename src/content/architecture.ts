import type { ArchitectureNode } from "@/lib/types";

/**
 * The reference pipeline. Not every system uses every stage —
 * stages marked `optional` are added when the problem calls for them.
 */
export const pipeline: ArchitectureNode[] = [
  {
    id: "user",
    index: "01",
    label: "User",
    role: "A question, a document, or a task.",
    detail:
      "The input decides the architecture. A lookup question and a multi-step task are not the same problem, and building one pipeline that pretends they are is how systems get slow and vague at the same time.",
    techniques: ["Intent", "Session context", "Input validation"],
  },
  {
    id: "api",
    index: "02",
    label: "Application / API",
    role: "The contract between the model and everything else.",
    detail:
      "A typed FastAPI surface: validated requests, predictable response shapes, streaming where latency is felt. Auth, rate limiting and request tracing live here, because the model layer should not be the place where operational concerns are handled.",
    techniques: ["FastAPI", "Pydantic", "Async", "Streaming", "Trace IDs"],
  },
  {
    id: "query",
    index: "03",
    label: "Query processing",
    role: "Decide what kind of question this is before answering it.",
    detail:
      "Classification and routing: does this need retrieval at all, one pass or several, a tool call, or a direct answer. Query rewriting and decomposition happen here — the user's phrasing is rarely the best search query.",
    techniques: ["Routing", "Query rewriting", "Decomposition", "Metadata filters"],
  },
  {
    id: "retrieval",
    index: "04",
    label: "Retrieval",
    role: "Optimise for recall first, precision later.",
    detail:
      "The first stage should over-fetch. Anything not retrieved here can never be ranked, reranked or cited — a miss at this stage is unrecoverable, while an extra candidate only costs a little reranking time.",
    techniques: ["Dense retrieval", "Hybrid search", "BM25", "Reciprocal Rank Fusion"],
  },
  {
    id: "vector",
    index: "05",
    label: "Vector search",
    role: "Where chunking and embeddings decide the ceiling.",
    detail:
      "Chunk boundaries determine what can be retrieved as a coherent unit, and no amount of prompt engineering repairs a badly split document. Embedding model, chunk size, overlap and attached metadata are all retrieval decisions, made before a single token is generated.",
    techniques: ["Embeddings", "Chunking strategy", "ANN index", "Metadata filtering"],
  },
  {
    id: "rerank",
    index: "06",
    label: "Reranking",
    role: "Trade compute for precision, on a small candidate set.",
    detail:
      "Bi-encoders embed query and passage separately, which is what makes them fast and what makes them approximate. A cross-encoder reads both together and ranks far more accurately, at a cost that is only affordable because it runs over the top candidates rather than the corpus.",
    techniques: ["Cross-encoder", "Top-k → top-n", "Score thresholds"],
    optional: true,
  },
  {
    id: "context",
    index: "07",
    label: "Context construction",
    role: "A token budget, spent deliberately.",
    detail:
      "Selection, ordering, deduplication and source attribution, under a fixed budget. More context is not better context — irrelevant passages actively degrade answers, and burying the relevant one in the middle of a long prompt is a known failure mode.",
    techniques: ["Token budgeting", "Deduplication", "Ordering", "Citations"],
  },
  {
    id: "llm",
    index: "08",
    label: "LLM",
    role: "Constrained generation, not open-ended answering.",
    detail:
      "The model is instructed to answer from the supplied context and to say when it cannot. Structured output where the consumer is a system rather than a person. Model choice is per step — routing and extraction do not need the strongest model in the stack.",
    techniques: ["OpenAI", "Gemini", "Structured output", "Grounding constraints"],
  },
  {
    id: "agent",
    index: "09",
    label: "Tool calling / agent workflow",
    role: "For tasks a single pass cannot finish.",
    detail:
      "A LangGraph state machine rather than a free-running loop: typed state, conditional edges, schema-validated tools, bounded iterations and an explicit give-up path. The model picks among tools; the graph decides what is reachable.",
    techniques: ["LangGraph", "Function calling", "Typed state", "Bounded loops"],
    optional: true,
  },
  {
    id: "response",
    index: "10",
    label: "Response",
    role: "Grounded, cited, and streamed.",
    detail:
      "Answers carry their sources so a reader can verify them, and stream so the interface stays responsive while generation completes. 'I don't have that in the provided documents' is a valid response, not a failure.",
    techniques: ["Streaming", "Citations", "Refusal handling"],
  },
  {
    id: "eval",
    index: "11",
    label: "Evaluation & monitoring",
    role: "The difference between a demo and a system.",
    detail:
      "Retrieval is evaluated separately from generation, because a bad answer is usually a retrieval bug. A fixed question set turns prompt and pipeline changes into measurable deltas instead of opinions. Traces, latency and token spend are logged per request.",
    techniques: ["Retrieval metrics", "Golden sets", "LLM-as-judge", "Tracing", "Cost tracking"],
  },
  {
    id: "deploy",
    index: "12",
    label: "Deployment",
    role: "It isn't built until it runs somewhere other than a laptop.",
    detail:
      "Docker images, deployed on AWS — ECS or EC2 for long-running services, Lambda for event-driven steps, S3 for documents and artefacts. Configuration and secrets outside the image, and a rollback that does not require a rebuild.",
    techniques: ["Docker", "AWS ECS", "AWS EC2", "AWS Lambda", "AWS S3"],
  },
];
