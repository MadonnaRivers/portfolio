import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ImpactStats } from "@/components/ImpactStats";
import { About } from "@/components/About";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Projects } from "@/components/Projects";
import { SkillSection } from "@/components/SkillSection";
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
          title="Professional experience."
          lead="Four AI roles since 2023, from deep learning foundations to owning an enterprise Agentic RAG system in production."
        >
          <ExperienceTimeline />
        </Section>

        <Section
          id="projects"
          index="03"
          kicker="Systems I've built"
          title="Selected work."
          lead="Production systems and applied research, with the stack and measured results for each."
        >
          <Projects />
        </Section>

        <Section
          id="skills"
          index="04"
          kicker="Technical stack"
          title="Technical stack."
          lead="Capabilities and the tools behind them."
        >
          <SkillSection />
        </Section>

        <Section
          id="achievements"
          index="05"
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
