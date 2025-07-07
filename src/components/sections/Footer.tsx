import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { name, contact, resumeUrl } from "@/lib/data";
import { Download, Mail, Phone } from "lucide-react";
import { LinkedinIcon } from "@/components/icons";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-24">
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold">Get In Touch</h2>
        <p className="mt-2 max-w-xl mx-auto text-muted-foreground">
          I'm currently looking for new opportunities. Feel free to reach out via email or connect with me on LinkedIn.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button asChild>
            <a href={`mailto:${contact.email}`}>
              <Mail className="mr-2 h-4 w-4" /> Email Me
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>
        </div>
        <div className="mt-12 flex justify-center gap-6">
           <a href={`mailto:${contact.email}`} aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
              <LinkedinIcon className="h-6 w-6" />
            </a>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} aria-label="Phone" className="text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-6 w-6" />
            </a>
        </div>
         <p className="mt-12 text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {name}. All Rights Reserved.
          </p>
      </div>
    </footer>
  );
}
