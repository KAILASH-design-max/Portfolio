import type { ProjectInsightInput } from "@/ai/flows/project-insight-generator";
import { Briefcase, GraduationCap, Code, Mic, Trophy, Languages, Star, GitBranch, Terminal, Palette, Server, BrainCircuit, Users } from 'lucide-react';

export const name = "Kailash Kumar Aman";
export const location = "Sobhan Shankarpur, Darbhanga, Bihar – 846005";
export const contact = {
  phone: "+91 9939242281",
  email: "kailashkumaraman@gmail.com",
  linkedin: "https://linkedin.com/in/kailash-kumar-aman-345832265",
  github: "https://github.com/KAILASH-design-max?tab=repositories",
};

export const objective = "Recent BCA graduate with hands-on experience in modern web technologies including React, Next.js, Firebase, and AI integration. Adept at building scalable full-stack applications and excited to contribute to fast-paced development teams with a focus on impactful, user-centric solutions.";

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
        company: "Valueplus Outsourcing & Consultancy Services Pvt Ltd",
        period: "Feb 2025 – May 2025",
        description: "Contributed to the development of Quick Cart, an e-commerce grocery platform. Developed modules using PHP, HTML, CSS, and JavaScript including product listing, cart, and checkout. Gained exposure to frontend design, backend integration, bug fixing, and database operations.",
        icon: Briefcase,
    },
];

export const projects: (ProjectInsightInput & { image: string, dataAiHint: string, link?: string })[] = [
    {
        projectName: "Blinkit-Style Grocery Platform with AI",
        projectDescription: "Built a multi-role grocery delivery system (Customer, Admin, Delivery Agent) using modern web technologies. Integrated AI-driven features like Smart Product Recommendations, Smart Shopping List Generator, and Cart-based Recipe Suggestions. Firebase handled backend functions including authentication, database (Firestore), and hosting.",
        technologiesUsed: "TypeScript, Next.js, React, Tailwind CSS, ShadCN UI, Genkit, Firebase",
        image: "/Blinkit-Style Grocery Platform with AI.png",
        dataAiHint: "grocery app",
    },
    {
        projectName: "E-Grocery Website",
        projectDescription: "Built a responsive online grocery store with product categories, cart functionality, and a filter-based search interface.",
        technologiesUsed: "HTML, CSS, JavaScript",
        image: "/E-Grocery Website.png",
        dataAiHint: "grocery website",
        link: "https://drive.google.com/file/d/1PLdc_z-lIs25Wuhyp7Kup37dMGuUA4Lu/view?usp=drive_link",
    },
    {
        projectName: "Weather App",
        projectDescription: "Developed a mobile app providing real-time weather based on location. Displayed key metrics like temperature, humidity, and conditions through a clean, intuitive interface.",
        technologiesUsed: "Android Studio, OpenWeatherMap API",
        image: "/Weather App.png",
        dataAiHint: "weather forecast",
    },
    {
        projectName: "Expense Tracker",
        projectDescription: "Created a financial tracking tool for users to monitor income and categorized spending. Enabled budget visualization using dynamic charts and summaries.",
        technologiesUsed: "HTML, CSS, JavaScript",
        image: "/expense tracker.png",
        dataAiHint: "finance chart",
    },
];

export const publications = [
    {
        title: "Sustainable Urban Futures: Seamlessly Integrating Renewable Energy into City Planning for Enhanced Green Energy Harvesting",
        authors: "Kailash Kumar Aman, Dr. Indu Verma",
        book: "Energy and Exergy Modeling of Renewable Energy Systems",
        publisher: "River Publishers, Denmark",
        date: "June 2025",
    },
];

export const certifications = [
    {
        name: "Explore Machine Learning using Python",
        issuer: "Infosys Springboard",
        date: "Oct 2024",
    },
    {
        name: "Product and Brand Management",
        issuer: "NPTEL",
    },
];

export const skills = {
    frontend: { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI"], icon: Palette },
    backend: { name: "Backend", items: ["Firebase", "Firestore", "Firebase Auth", "Firebase Hosting"], icon: Server },
    tools: { name: "Tools & Platforms", items: ["Android Studio", "Visual Studio", "Git", "SQL Server", "MySQL"], icon: Terminal },
    ai: { name: "AI/ML", items: ["Google Genkit"], icon: BrainCircuit },
    soft: { name: "Soft Skills", items: ["Problem-solving", "Collaboration", "Communication"], icon: Users },
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

export const resumeUrl = "https://drive.google.com/uc?export=download&id=1GBt2HRrMS31Zu-tDNf7gN5gBQDyiBBcj";
