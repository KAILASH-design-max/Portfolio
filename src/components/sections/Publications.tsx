import { publications } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calendar, MapPin, Sparkles } from "lucide-react";

export function Publications() {
  return (
    <section id="publications" className="scroll-mt-20">
      <div className="mb-8">
        <h3 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          Research Publication
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Peer-reviewed book chapter and academic research contributions
        </p>
      </div>

      <div className="space-y-4">
        {publications.map((pub, index) => (
          <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-5 flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary mt-0.5">
                <BookOpen className="h-5 w-5" />
              </span>
              <div className="space-y-1.5">
                <h4 className="font-bold text-base text-foreground leading-snug">
                  {pub.title}
                </h4>
                <p className="text-sm font-medium text-accent">
                  {pub.authors}
                </p>
                <div className="text-xs text-muted-foreground leading-relaxed pt-0.5">
                  <span>Published in </span>
                  <em className="text-foreground/90 font-medium">{pub.book}</em>
                  <span> &bull; {pub.publisher}</span>
                  <span> &bull; {pub.date}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
