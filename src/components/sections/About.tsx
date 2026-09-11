import { Card, CardContent } from "@/components/ui/card";
import { professionalSummary } from "@/lib/data";
import { UserCheck, ShieldCheck, Database, Code2, Server } from "lucide-react";

export function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          About Me
        </h2>
        <p className="mt-2 text-sm sm:text-base text-accent font-semibold">
          Software Engineer & Full Stack Developer
        </p>
      </div>

      <Card className="max-w-4xl mx-auto border shadow-lg bg-card/60 backdrop-blur-sm">
        <CardContent className="p-6 sm:p-10 space-y-6">
          <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
            {professionalSummary}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border/60">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
              <span className="p-2 rounded-md bg-primary/10 text-primary shrink-0">
                <Server className="h-5 w-5" />
              </span>
              <div>
                <h4 className="font-semibold text-sm text-foreground">Full-Stack Core</h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Next.js, TypeScript, React, Node.js & Express.js REST APIs
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
              <span className="p-2 rounded-md bg-accent/10 text-accent shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <h4 className="font-semibold text-sm text-foreground">Security & RBAC</h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Auth, JWT session management, RBAC, input validation
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
              <span className="p-2 rounded-md bg-primary/10 text-primary shrink-0">
                <Database className="h-5 w-5" />
              </span>
              <div>
                <h4 className="font-semibold text-sm text-foreground">Data & Cloud</h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  PostgreSQL, Prisma ORM, MySQL & Firebase Firestore
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
