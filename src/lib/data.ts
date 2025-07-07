import type { ProjectInsightInput } from "@/ai/flows/project-insight-generator";
import { Briefcase, GraduationCap, Code, Mic, Trophy, Languages, Star, GitBranch, Terminal, Palette, Server, BrainCircuit, Users } from 'lucide-react';

export const name = "Kailash Kumar Aman";
export const location = "Sobhan Shankarpur, Darbhanga, Bihar – 846005";
export const contact = {
  phone: "+91 9939242281",
  email: "kailashkumaraman@gmail.com",
  linkedin: "https://linkedin.com/in/kailash-kumar-aman-345832265",
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
        company: "Valueplus Outsourcing & Consultancy Services Pvt. Ltd.",
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
        image: "https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-4654-622f-a099-655e128ca92c/raw?se=2025-07-07T19%3A09%3A56Z&sp=r&sv=2024-08-04&sr=b&scid=f87f0231-ddc7-533a-a9c0-f4cb41cdaae9&skoid=add8ee7d-5fc7-451e-b06e-a82b2276cf62&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-07T11%3A58%3A42Z&ske=2025-07-08T11%3A58%3A42Z&sks=b&skv=2024-08-04&sig=ySRSW5Q6SV76ciLqkog68fP8eL%2B5jB%2B1YYmDdkKbnE4%3D",
        dataAiHint: "grocery app",
    },
    {
        projectName: "E-Grocery Website",
        projectDescription: "Built a responsive online grocery store with product categories, cart functionality, and a filter-based search interface.",
        technologiesUsed: "HTML, CSS, JavaScript",
        image: "https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-c3c8-622f-88dc-a6ca9481465e/raw?se=2025-07-07T19%3A26%3A16Z&sp=r&sv=2024-08-04&sr=b&scid=50389900-e6cc-5ce9-b751-99eb0d18a31b&skoid=a3412ad4-1a13-47ce-91a5-c07730964f35&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-07T16%3A19%3A20Z&ske=2025-07-08T16%3A19%3A20Z&sks=b&skv=2024-08-04&sig=pMRxj3yBYzfOZ5pSNqtl4ndoxXeyljuIEfC/P/497go%3D",
        dataAiHint: "grocery website",
    },
    {
        projectName: "Weather App",
        projectDescription: "Developed a mobile app providing real-time weather based on location. Displayed key metrics like temperature, humidity, and conditions through a clean, intuitive interface.",
        technologiesUsed: "Android Studio, OpenWeatherMap API",
        image: "https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-ca3c-622f-bcc3-8ca48b9851ae/raw?se=2025-07-07T19%3A15%3A43Z&sp=r&sv=2024-08-04&sr=b&scid=d9ea5604-2ec6-5b9f-aa42-e69fa7b08faa&skoid=add8ee7d-5fc7-451e-b06e-a82b2276cf62&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-07T00%3A06%3A49Z&ske=2025-07-08T00%3A06%3A49Z&sks=b&skv=2024-08-04&sig=qsIurRGg3xdG9X87Omvu7t1jiH%2BI/ZiSBieIYKFjzQg%3D",
        dataAiHint: "weather forecast",
    },
    {
        projectName: "Expense Tracker",
        projectDescription: "Created a financial tracking tool for users to monitor income and categorized spending. Enabled budget visualization using dynamic charts and summaries.",
        technologiesUsed: "HTML, CSS, JavaScript",
        image: "https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-4154-622f-a2a1-2003d1340a36/raw?se=2025-07-07T19%3A20%3A27Z&sp=r&sv=2024-08-04&sr=b&scid=cd052adb-a4c4-5395-a7ea-ab16d5fd07f7&skoid=a3412ad4-1a13-47ce-91a5-c07730964f35&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-07T08%3A56%3A13Z&ske=2025-07-08T08%3A56%3A13Z&sks=b&skv=2024-08-04&sig=iHMcSH%2BYCYvn8L1ASR3smWzgC5qOg/C1zkLaOLRBal8%3D",
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
