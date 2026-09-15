import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ImpactStats } from "@/components/ImpactStats";
import { About } from "@/components/About";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Projects } from "@/components/Projects";
import { SkillSection } from "@/components/SkillSection";
import { DepthSection } from "@/components/DepthSection";
import { AchievementSection } from "@/components/AchievementSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/ui/Section";
import { ProfileJsonLd } from "@/components/ProfileJsonLd";

export default function Home() {
  return (
    <>
      <ProfileJsonLd />
      <Navbar />
      <main id="main">
        <Hero />
        <ImpactStats />
        <About />

        <Section
          id="experience"
          index="02"
          kicker="Production experience"
          title="Where these systems actually shipped."
          lead="Four AI roles since 2023, from deep learning foundations to owning an enterprise Agentic RAG system in production."
        >
          <ExperienceTimeline />
        </Section>

        <Section
          id="projects"
          index="03"
          kicker="Systems I've built"
          title="Projects, with the architecture attached."
          lead="Each one names the problem, the design, the stack and the measured result. The deep dives go further — retrieval strategy, reranking, agent control flow, model routing, deployment."
        >
          <Projects />
        </Section>

        <Section
          id="skills"
          index="04"
          kicker="Technical stack"
          title="The stack, and how it gets used."
          lead="Capabilities first, tools second. Every entry says how it is used in a working system — no proficiency bars, no keyword padding."
        >
          <SkillSection />
        </Section>

        <Section
          id="depth"
          index="05"
          kicker="Beyond the buzzwords"
          title="The parts that decide whether it works."
          lead="Opinions formed by debugging these systems, not by reading about them. Argue with any of them in an interview."
        >
          <DepthSection />
        </Section>

        <Section
          id="achievements"
          index="06"
          kicker="Credentials"
          title="Certifications, achievements & education."
        >
          <AchievementSection />
        </Section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
