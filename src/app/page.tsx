import { About } from "@/components/sections/About";
import { Certifications } from "@/components/sections/Certifications";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Publications } from "@/components/sections/Publications";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Hero />
      <main className="container mx-auto px-4 py-16 sm:py-24 space-y-24 sm:space-y-32">
        <About />
        <Projects />
        <Experience />
        <Skills />

        <div className="grid gap-12 lg:grid-cols-2">
          <Education />
          <Certifications />
        </div>

        <Publications />
      </main>
      <Footer />
    </div>
  );
}
