import { objective } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="text-center">
      <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
        Objective
      </h2>
      <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl leading-relaxed">
        {objective}
      </p>
    </section>
  );
}
