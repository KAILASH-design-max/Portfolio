import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { name, contact, resumeUrl, location } from "@/lib/data";
import { Download, Mail, Phone, MapPin } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/icons";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative border-b bg-card">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="#" className="text-xl font-bold text-primary">{name}</Link>
          
          <nav className="hidden items-center gap-2 md:flex">
            <Button variant="ghost" size="icon" asChild>
              <a href={`mailto:${contact.email}`} aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GithubIcon className="h-5 w-5" />
              </a>
            </Button>
             <Button variant="ghost" size="icon" asChild>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} aria-label="Phone">
                <Phone className="h-5 w-5" />
              </a>
            </Button>
            <Separator orientation="vertical" className="mx-2 h-6" />
            <Button asChild>
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </nav>

          <div className="md:hidden">
            <Button asChild size="sm">
               <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl lg:text-6xl">{name}</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
          Full-Stack Developer | React & AI Enthusiast
        </p>
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4"/>
            <span>{location}</span>
        </div>
      </div>
    </div>
  );
}
