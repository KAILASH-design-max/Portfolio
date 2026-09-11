import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Kailash Kumar Aman | Software Engineer & Full Stack Developer',
  description:
    'Portfolio of Kailash Kumar Aman, Software Engineer and Full Stack Developer featuring DevFlow and SpeedyShop. Hands-on expertise in Next.js, React, TypeScript, Node.js, Express.js, REST APIs, PostgreSQL, Prisma ORM, and Firebase.',
  keywords: [
    'Kailash Kumar Aman',
    'Software Engineer',
    'Full Stack Developer',
    'DevFlow',
    'SpeedyShop',
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'Prisma ORM',
    'REST APIs',
    'BCA Christ University',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen selection:bg-primary/20 selection:text-primary">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
