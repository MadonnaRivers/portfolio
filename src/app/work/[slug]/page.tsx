import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/content/projects";
import { CaseStudy } from "@/components/CaseStudy";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects
    .filter((p) => p.caseStudy?.length)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Case study not found" };

  /* Placeholder tokens are stripped from metadata — brackets in a search
     result look broken, and an unfilled slot should not be indexed. */
  const clean = (s: string) => s.replace(/\[[^\]]+\]\s*—?\s*/g, "").trim();
  const title = clean(project.name) || "Case study";

  return {
    title: `${title} — Case Study`,
    description: `${project.problem} ${project.built}`.slice(0, 200),
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${title} — Case Study`,
      description: project.problem,
      url: `/work/${project.slug}`,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.caseStudy?.length) notFound();

  return (
    <>
      <Navbar />
      <main id="main">
        <CaseStudy project={project} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
