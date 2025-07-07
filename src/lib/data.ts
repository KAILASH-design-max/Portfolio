import type { ProjectInsightInput } from "@/ai/flows/project-insight-generator";
import { Briefcase, GraduationCap, Code, Mic, Trophy, Languages, Star, GitBranch, Terminal, Palette, Server, BrainCircuit } from 'lucide-react';

export const name = "Kailash Kumar Aman";
export const location = "Sobhan Shankarpur, Darbhanga, Bihar – 846005";
export const contact = {
  phone: "+91 9939242281",
  email: "kailashkumaraman@gmail.com",
  linkedin: "https://linkedin.com/in/kailash-kumar-aman-345832265",
};

export const objective = "A recent BCA graduate with a solid foundation in full-stack development, specializing in modern technologies like React, Next.js, and Firebase. Eager to leverage hands-on project experience and a passion for creating intuitive, AI-enhanced web applications to contribute to a forward-thinking organization. Seeking an internship or entry-level role in frontend or full-stack development to apply my skills and continue growing as a developer.";

export const education = [
    {
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "Christ University, Delhi NCR",
        period: "Graduating May 2025",
        details: "CGPA: 3.19/4.0",
    },
    {
        degree: "12th Standard",
        institution: "M K College, Darbhanga",
        period: "2022",
        details: "Percentage: 68%",
    },
    {
        degree: "10th Standard",
        institution: "Darbhanga Public School",
        period: "2020",
        details: "Percentage: 70%",
    },
];

export const experience = [
    {
        role: "Web Development Intern",
        company: "Valueplus Outsourcing & Consultancy Services Pvt. Ltd.",
        period: "Feb 2025 – May 2025",
        description: "Contributed to the development of the Quick Cart platform, a dynamic e-commerce solution. Gained practical experience with PHP, JavaScript, HTML, and CSS in a professional agile environment.",
        icon: Briefcase,
    },
];

export const projects: (ProjectInsightInput & { image: string, dataAiHint: string, link?: string })[] = [
    {
        projectName: "Blinkit-Style Grocery App with AI",
        projectDescription: "A full-featured e-grocery application replicating the Blinkit user experience, enhanced with AI-powered features for smart suggestions and personalized user journeys.",
        technologiesUsed: "Next.js, Firebase, Genkit, Tailwind CSS, ShadCN UI",
        image: "https://placehold.co/600x400.png",
        dataAiHint: "grocery app",
    },
    {
        projectName: "Weather App",
        projectDescription: "A clean and intuitive weather forecasting application for Android, utilizing the OpenWeatherMap API to provide real-time weather data and forecasts.",
        technologiesUsed: "Android Studio, OpenWeatherMap API",
        image: "https://placehold.co/600x400.png",
        dataAiHint: "weather forecast",
    },
    {
        projectName: "Expense Tracker",
        projectDescription: "A simple yet effective web-based tool to track daily expenses, helping users manage their finances with a clear and concise interface.",
        technologiesUsed: "HTML, CSS, JavaScript",
        image: "https://placehold.co/600x400.png",
        dataAiHint: "finance chart",
    },
    {
        projectName: "E-Grocery Website",
        projectDescription: "A foundational e-commerce website for groceries, built with fundamental web technologies to demonstrate core principles of web design and functionality.",
        technologiesUsed: "HTML, CSS, JavaScript",
        image: "https://placehold.co/600x400.png",
        dataAiHint: "online shopping",
    },
];

export const publications = [
    {
        title: "Sustainable Urban Futures: Seamlessly Integrating Renewable Energy, AI-Powered Waste Management, and Smart Transportation",
        publisher: "River Publishers, Denmark",
        date: "June 2025",
    },
];

export const certifications = [
    {
        name: "Explore Machine Learning using Python",
        issuer: "Infosys Springboard",
    },
    {
        name: "Product and Brand Management",
        issuer: "NPTEL",
    },
];

export const skills = {
    frontend: { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "HTML/CSS", "JavaScript"], icon: Palette },
    backend: { name: "Backend", items: ["Firebase", "Firestore", "Firebase Auth"], icon: Server },
    tools: { name: "Tools & Platforms", items: ["Android Studio", "Git", "SQL Server", "MySQL"], icon: Terminal },
    ai: { name: "AI/ML", items: ["Google Genkit", "Python"], icon: BrainCircuit },
};

export const languages = [
    { name: "English", proficiency: "Fluent" },
    { name: "Hindi", proficiency: "Native" },
];

export const extracurricular = [
    {
        activity: "Member of Christ University Football Team",
    },
];

export const resumeUrl = "/Kailash_Aman_Resume.pdf";
