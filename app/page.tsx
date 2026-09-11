import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Principles } from "@/components/sections/Principles";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { SkillsMarquee } from "@/components/sections/SkillsMarquee";
import { Work } from "@/components/sections/Work";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SkillsMarquee />
      <About />
      <Work />
      <Experience />
      <Skills />
      <Projects />
      <Principles />
      <Contact />
    </main>
  );
}
