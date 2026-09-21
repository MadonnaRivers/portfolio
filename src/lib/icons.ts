import {
  siAnthropic,
  siCrewai,
  siDocker,
  siFastapi,
  siGit,
  siGithub,
  siGooglecloud,
  siGooglegemini,
  siHuggingface,
  siKeras,
  siLangchain,
  siLanggraph,
  siMongodb,
  siNumpy,
  siOllama,
  siOpencv,
  siPydantic,
  siPython,
  siPytorch,
  siQdrant,
  siTensorflow,
} from "simple-icons";

export type Glyph =
  | { kind: "path"; path: string; brand: string; brandDark: string }
  /** Brands with no simple-icons entry get a typeset monogram tile. */
  | { kind: "mono"; label: string };

/**
 * Icons are resolved at build time inside a server component, so the SVG
 * path strings are inlined into static HTML — no icon font, no sprite
 * request, and nothing added to the client bundle.
 */
/**
 * Peak channel value, 0–255. Luminance is the wrong test here: saturated
 * brand colours (Python blue, Keras red) score low on luminance yet read
 * perfectly well on a dark ground. What actually disappears is a mark that
 * is near-black in every channel.
 */
function peakChannel(hex: string): number {
  const n = parseInt(hex, 16);
  return Math.max((n >> 16) & 255, (n >> 8) & 255, n & 255);
}

/** Lift a colour toward white by `amount` (0–1). */
function lighten(hex: string, amount: number): string {
  const n = parseInt(hex, 16);
  const mix = (v: number) => Math.round(v + (255 - v) * amount);
  const r = mix((n >> 16) & 255);
  const g = mix((n >> 8) & 255);
  const b = mix(n & 255);
  return `#${[r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")}`;
}

/**
 * Brand palettes are designed against white. A few marks here are close to
 * black (Anthropic, Ollama, GitHub, NumPy) and would vanish on the dark
 * theme, so a lifted variant is computed at build time for dark grounds.
 * Everything else keeps its true colour in both themes.
 */
const brand = (icon: { path: string; hex: string }): Glyph => {
  const needsLift = peakChannel(icon.hex) < 80;
  return {
    kind: "path",
    path: icon.path,
    brand: `#${icon.hex}`,
    brandDark: needsLift ? lighten(icon.hex, 0.55) : `#${icon.hex}`,
  };
};

export const glyphs: Record<string, Glyph> = {
  // Languages & backend
  Python: brand(siPython),
  FastAPI: brand(siFastapi),
  Pydantic: brand(siPydantic),
  NumPy: brand(siNumpy),
  SQL: { kind: "mono", label: "SQL" },
  "REST APIs": { kind: "mono", label: "API" },

  // GenAI frameworks
  LangGraph: brand(siLanggraph),
  LangChain: brand(siLangchain),
  CrewAI: brand(siCrewai),
  LlamaIndex: { kind: "mono", label: "LI" },
  LangSmith: { kind: "mono", label: "LS" },
  LangFuse: { kind: "mono", label: "LF" },
  MCP: { kind: "mono", label: "MCP" },

  // Models & providers
  Anthropic: brand(siAnthropic),
  OpenAI: { kind: "mono", label: "AI" },
  "Google Gemini": brand(siGooglegemini),
  "Hugging Face": brand(siHuggingface),
  Ollama: brand(siOllama),
  "Sentence Transformers": { kind: "mono", label: "ST" },

  // Deep learning & vision
  PyTorch: brand(siPytorch),
  TensorFlow: brand(siTensorflow),
  Keras: brand(siKeras),
  OpenCV: brand(siOpencv),

  // Cloud & devops
  AWS: { kind: "mono", label: "AWS" },
  "Amazon Bedrock": { kind: "mono", label: "BR" },
  GCP: brand(siGooglecloud),
  "Vertex AI": { kind: "mono", label: "VX" },
  Docker: brand(siDocker),
  Git: brand(siGit),
  GitHub: brand(siGithub),

  // Data & vector stores
  ChromaDB: { kind: "mono", label: "CDB" },
  Qdrant: brand(siQdrant),
  FAISS: { kind: "mono", label: "FS" },
  Pinecone: { kind: "mono", label: "PC" },
  MongoDB: brand(siMongodb),
};

export function getGlyph(name: string): Glyph {
  return (
    glyphs[name] ?? {
      kind: "mono",
      label: name.slice(0, 2).toUpperCase(),
    }
  );
}
