import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Principles } from "@/components/sections/Principles";
import { Skills } from "@/components/sections/Skills";
import { Work } from "@/components/sections/Work";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Work />
      <Experience />
      <Principles />
      <Skills />
      <Contact />
    </main>
  );
}
