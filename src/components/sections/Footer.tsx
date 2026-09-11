import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { name, role, contact, resumeUrl, location } from "@/lib/data";
import { Download, Mail, Phone, MapPin, ArrowUp, Github } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/icons";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border mt-28">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-600 dark:text-teal-400 mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Let's Connect & Build Together
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-muted-foreground text-sm sm:text-base">
            I'm currently seeking Software Engineer and Full Stack Developer roles. Whether you have an opportunity or want to discuss full-stack & AI projects, I'd love to hear from you.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-md">
              <a href={`mailto:${contact.email}`}>
                <Mail className="mr-2 h-4 w-4" /> Email Me Directly
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-primary/30 hover:border-primary">
              <a href={resumeUrl} download="Kailash_Kumar_Aman_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" /> Download Resume (PDF)
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>{contact.email}</span>
            </a>
            <span className="hidden sm:inline text-border">&bull;</span>
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>{contact.phone}</span>
            </a>
            <span className="hidden sm:inline text-border">&bull;</span>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{location}</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex justify-center gap-4">
            <Button variant="outline" size="icon" className="rounded-full h-10 w-10 border-border/80 hover:border-primary hover:text-primary" asChild>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-10 w-10 border-border/80 hover:border-primary hover:text-primary" asChild>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GithubIcon className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-10 w-10 border-border/80 hover:border-primary hover:text-primary" asChild>
              <a href={`mailto:${contact.email}`} aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <Separator className="my-10" />

          {/* Quick jump navigation and copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} {name}. Built with Next.js, TypeScript & Tailwind CSS.
            </p>
            <div className="flex items-center gap-4">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#experience" className="hover:text-primary transition-colors">Internship</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#education" className="hover:text-primary transition-colors">Education</a>
              <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors font-medium">
                Back to top <ArrowUp className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
