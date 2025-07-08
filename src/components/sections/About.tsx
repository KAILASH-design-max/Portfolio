export function About() {
  const aboutText = "I’m a BCA graduate from Christ University, Delhi NCR. I’ve interned at Valueplus, where I contributed to building a full-stack e-grocery platform. I specialize in React, Firebase, and Tailwind, and actively explore AI tools like Genkit to build smarter web apps.";

  return (
    <section id="about">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary">
        About Me
      </h2>
      <p className="mx-auto max-w-3xl text-center text-lg text-muted-foreground md:text-xl leading-relaxed">
        {aboutText}
      </p>
    </section>
  );
}
