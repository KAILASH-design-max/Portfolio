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
    <div className="bg-background text-foreground">
      <Hero />
      <main className="container mx-auto px-4 py-16 space-y-24">
        <Experience />
        <Projects />
        
        <div className="grid gap-16 md:grid-cols-5">
            <div className="md:col-span-3">
                <Skills />
            </div>
            <div className="md:col-span-2">
                <Education />
            </div>
        </div>
        
        <div className="grid gap-16 md:grid-cols-2">
           <Publications />
           <Certifications />
        </div>
      </main>
      <Footer />
    </div>
  );
}
