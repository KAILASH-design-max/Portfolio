"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { name, role, contact, resumeUrl, location, professionalSummary } from "@/lib/data";
import { Download, Mail, Phone, MapPin, ArrowDown, Sparkles, CheckCircle2, FolderGit2 } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative border-b bg-gradient-to-b from-card via-background to-card/50">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="#" className="flex items-center gap-2 group">
            <span className="h-8 w-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              K
            </span>
            <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              {name}
            </span>
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-primary transition-colors">
              Internship
            </a>
            <a href="#skills" className="hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#education" className="hover:text-primary transition-colors">
              Education
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Social Icons & Direct Resume Download */}
          <div className="flex items-center gap-1.5 md:gap-2">
            <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex text-muted-foreground hover:text-primary">
              <a href={`mailto:${contact.email}`} aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary">
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary">
              <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GithubIcon className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex text-muted-foreground hover:text-primary">
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} aria-label="Phone">
                <Phone className="h-4 w-4" />
              </a>
            </Button>

            <Separator orientation="vertical" className="mx-1 h-6 hidden sm:block" />

            <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
              <a href={resumeUrl} download="Kailash_Kumar_Aman_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Download</span> Resume
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Body */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Intro */}
          <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left lg:col-span-7">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Hi, I'm <span className="text-primary">{name}</span>
            </h1>

            <p className="mt-3 text-xl sm:text-2xl font-semibold text-accent">
              {role}
            </p>

            {/* Location & Academic Credentials */}
            <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{location}</span>
              </div>
              <span className="text-border hidden sm:inline">&bull;</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>BCA Graduate &bull; Christ University, Delhi NCR</span>
              </div>
            </div>

            {/* Professional Summary */}
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {professionalSummary}
            </p>

            {/* Key Skill Highlights Pill Bar */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2">
              {["Next.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Firebase"].map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-muted text-foreground/80 font-normal px-2.5 py-0.5 border">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Button asChild size="lg" className="shadow-md">
                <a href="#projects">
                  <FolderGit2 className="mr-2 h-4 w-4" />
                  View Featured Projects
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={resumeUrl} download="Kailash_Kumar_Aman_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume (PDF)
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href={`mailto:${contact.email}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Portrait in Indigo/Teal Accent Frame */}
          <div className="order-1 flex justify-center lg:order-2 lg:col-span-5">
            <div className="relative group">
              {/* Outer decorative ambient glow */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary via-indigo-400 to-accent opacity-75 blur-xl group-hover:opacity-100 transition duration-500"></div>

              {/* Inner wrapper */}
              <div className="relative p-1.5 rounded-full bg-background ring-4 ring-primary/20 shadow-2xl">
                <Image
                  src="/photo%201.jpg"
                  alt={name}
                  width={256}
                  height={256}
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover shadow-inner"
                  priority
                />
              </div>

              {/* Floating Quick Badges */}
              <div className="absolute -bottom-2 -left-4 sm:bottom-2 sm:-left-6 bg-card/95 border shadow-lg rounded-xl px-3 py-1.5 flex items-center gap-2 backdrop-blur-sm">
                <div className="h-2.5 w-2.5 rounded-full bg-teal-500 animate-pulse"></div>
                <span className="text-xs font-semibold">DevFlow & SpeedyShop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
