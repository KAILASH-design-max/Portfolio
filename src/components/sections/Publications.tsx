import { publications } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MicVocal } from "lucide-react";

export function Publications() {
  return (
    <section id="publications">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary">Publication</h2>
       <div className="space-y-4">
        {publications.map((pub, index) => (
          <Card key={index} className="shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4">
              <MicVocal className="h-6 w-6 text-accent" />
              <div>
                <CardTitle className="text-base">{pub.title}</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  {pub.publisher} &bull; {pub.date}
                </p>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
