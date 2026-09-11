import type { ProjectInsightInput } from "@/ai/flows/project-insight-generator";
import {
  Briefcase,
  GraduationCap,
  Code,
  Terminal,
  Palette,
  Server,
  BrainCircuit,
  Users,
  ShieldCheck,
  Database,
  Layers,
  Award,
  Globe,
  Lock,
  Cpu
} from "lucide-react";

export const name = "Kailash Kumar Aman";
export const role = "Software Engineer | Full Stack Developer";
export const location = "Greater Noida, Uttar Pradesh";

export const contact = {
  phone: "+91 9939242281",
  email: "kailashkumaraman@gmail.com",
  linkedin: "https://linkedin.com/in/kailash-kumar-aman-345832265",
  github: "https://github.com/KAILASH-design-max?tab=repositories",
};

export const professionalSummary =
  "BCA graduate and Software Engineer with hands-on experience building full-stack web applications using JavaScript, TypeScript, React, Next.js, Node.js, Express.js, REST APIs, PostgreSQL, Prisma ORM, Firebase, and Git. Academic exposure to Java and Python, with practical experience in software development, debugging, testing, database operations, authentication, API integration, and application deployment. Strong problem-solving foundation with an interest in reliable, scalable, and maintainable software systems.";

export const objective =
  "BCA graduate and Software Engineer with hands-on experience building full-stack web applications using JavaScript, TypeScript, React, Next.js, Node.js, Express.js, REST APIs, PostgreSQL, Prisma ORM, and Firebase. Passionate about architecting scalable systems, robust APIs, and seamless user experiences.";

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Christ University, Delhi NCR",
    period: "Graduated May 2025",
    details: "CGPA: 3.19 / 4.0",
    highlight: "Core focus on Data Structures, Algorithms, Software Engineering & Database Systems",
  },
  {
    degree: "12th Standard (Senior Secondary)",
    institution: "M K College, Darbhanga",
    period: "2022",
    details: "Percentage: 68%",
  },
  {
    degree: "10th Standard (Secondary Examination)",
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
    location: "Noida, Uttar Pradesh",
    description:
      "Contributed to Quick Cart, an e-commerce grocery application using PHP, JavaScript, HTML, CSS, and database technologies.",
    bullets: [
      "Contributed to Quick Cart, an e-commerce grocery application using PHP, JavaScript, HTML, CSS, and database technologies.",
      "Developed product listing, shopping cart, and checkout modules and integrated frontend components with backend functionality.",
      "Performed database operations, software debugging, bug fixing, and functional testing to improve application reliability.",
      "Participated in feature development and continuous improvement across the software development lifecycle (SDLC).",
    ],
    technologies: ["PHP", "JavaScript", "HTML5", "CSS3", "MySQL", "SDLC", "Functional Testing"],
    icon: Briefcase,
  },
];

export interface ProjectItem extends ProjectInsightInput {
  shortTitle?: string;
  tagline: string;
  image: string;
  dataAiHint: string;
  featured?: boolean;
  link?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  keyFocus: string;
  highlights: string[];
}

export const projects: ProjectItem[] = [
  {
    projectName: "DevFlow – AI-Powered Developer Collaboration & Issue Management Platform",
    shortTitle: "DevFlow",
    tagline: "Flagship Full-Stack Platform for Agile Sprints & Issue Tracking",
    projectDescription:
      "Built a full-stack platform for projects, issues, sprints, teams, comments, notifications, and developer workflows. Designed REST APIs with Node.js and Express.js and used PostgreSQL with Prisma ORM for structured data operations. Implemented authentication, session management, RBAC, input validation, and access controls for secure multi-user workflows. Performed API debugging, error handling, testing, and deployment-focused improvements for reliability and maintainability.",
    technologiesUsed: "Next.js, TypeScript, Node.js, Express.js, PostgreSQL, Prisma ORM, REST APIs, RBAC",
    image: "/devflow.jpg",
    dataAiHint: "developer platform dashboard",
    featured: true,
    keyFocus: "REST APIs & Access Controls (RBAC)",
    githubUrl: "https://github.com/KAILASH-design-max/DevFlow",
    liveDemoUrl: "https://devflowapi-atv7911-7228.vercel.app",
    highlights: [
      "Designed & implemented production-grade REST APIs using Node.js & Express.js with structured request validation and centralized error handling.",
      "Modeled relational database architecture using PostgreSQL and Prisma ORM for high performance and type-safe data access.",
      "Engineered secure multi-tenant access controls including session management, JWT authentication, and fine-grained Role-Based Access Control (RBAC).",
      "Created complete developer workflows: Kanban sprint planning, issue lifecycle states, team assignments, and threaded notifications.",
    ],
  },
  {
    projectName: "SpeedyShop – AI-Powered Grocery Delivery Platform",
    shortTitle: "SpeedyShop",
    tagline: "Next-Gen Multi-Role Grocery Delivery Platform",
    projectDescription:
      "Developed a multi-role application supporting Customer, Admin, and Delivery Agent workflows with authentication and database integration. Integrated AI-powered product recommendations, smart shopping lists, and cart-based recipe suggestions using Google Genkit. Built responsive interfaces and application workflows for product discovery, cart, checkout, ordering, and administration.",
    technologiesUsed: "Next.js, React, TypeScript, Firebase, Firestore, Tailwind CSS, Genkit",
    image: "/Blinkit-Style Grocery Platform with AI.png",
    dataAiHint: "grocery delivery platform",
    featured: true,
    keyFocus: "Multi-Role Architecture & User Workflows",
    githubUrl: "https://github.com/KAILASH-design-max/speedyshop",
    liveDemoUrl: "https://speedyshop--ai-app-bb63d.us-central1.hosted.app/",
    highlights: [
      "Engineered multi-role state architecture supporting distinct Customer, Admin, and Delivery Agent workflows with role-based dashboard views.",
      "Integrated Google Genkit for intelligent context-aware product recommendations, dynamic shopping list generation, and cart-based recipe discovery.",
      "Implemented real-time catalog search, reactive cart management, instant checkout, and order lifecycle tracking with Firebase & Firestore.",
      "Crafted mobile-first, highly responsive interfaces using Tailwind CSS with seamless animations and rapid micro-interactions.",
    ],
  },
  {
    projectName: "Quick Cart (E-Commerce Grocery Platform)",
    shortTitle: "Quick Cart",
    tagline: "E-Commerce Grocery Application with Modular Architecture",
    projectDescription:
      "Developed an e-commerce grocery application featuring full product catalog browsing, cart operations, user checkout, and persistent relational database storage. Engineered modular PHP backend endpoints and interactive frontend interfaces.",
    technologiesUsed: "PHP, JavaScript, HTML5, CSS3, MySQL",
    image: "/E-Grocery Website.png",
    dataAiHint: "grocery website",
    featured: false,
    keyFocus: "Cart, Checkout & Database Operations",
    githubUrl: "https://github.com/KAILASH-design-max/Quick-Cart",
    link: "https://drive.google.com/file/d/1PLdc_z-lIs25Wuhyp7Kup37dMGuUA4Lu/view?usp=drive_link",
    highlights: [
      "Built dynamic product listings, category filters, and cart calculations.",
      "Handled database CRUD operations, session state, and order logging in MySQL.",
    ],
  },
  {
    projectName: "Weather App",
    shortTitle: "Weather App",
    tagline: "Native Android Real-Time Weather Application",
    projectDescription:
      "Developed a mobile app providing real-time weather based on location. Displayed key metrics like temperature, humidity, and conditions through a clean, intuitive mobile interface.",
    technologiesUsed: "Android Studio, Java, OpenWeatherMap API",
    image: "/Weather App.png",
    dataAiHint: "weather forecast",
    featured: false,
    keyFocus: "API Consumption & Mobile UI",
    githubUrl: "https://github.com/KAILASH-design-max?tab=repositories",
    highlights: [
      "Integrated OpenWeatherMap REST API for real-time geographic forecast telemetry.",
      "Designed responsive Android UI with native Java components and lifecycle management.",
    ],
  },
  {
    projectName: "Expense Tracker",
    shortTitle: "Expense Tracker",
    tagline: "Interactive Personal Budget & Spending Analytics",
    projectDescription:
      "Created a financial tracking tool for users to monitor income and categorized spending. Enabled budget visualization using dynamic charts and summaries.",
    technologiesUsed: "JavaScript, HTML5, CSS3, Chart.js",
    image: "/expense tracker.png",
    dataAiHint: "finance chart",
    featured: false,
    keyFocus: "Client-Side Analytics & Visualization",
    githubUrl: "https://github.com/KAILASH-design-max/-Expense-Tracker",
    highlights: [
      "Implemented budget calculation engine with expense categorization and localStorage persistence.",
      "Visualized expenditure trends with responsive charts and financial summary cards.",
    ],
  },
];

export const skills = {
  programming: {
    name: "Programming Languages",
    items: [
      "JavaScript",
      "TypeScript",
      "Java (Academic)",
      "Python (Coursework/Certification)",
      "PHP",
      "HTML5",
      "CSS3",
    ],
    icon: Code,
  },
  frontend: {
    name: "Frontend Development",
    items: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "ShadCN UI",
      "Responsive Web Design",
      "State Management",
    ],
    icon: Palette,
  },
  backend: {
    name: "Backend & APIs",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Firebase",
      "API Integration",
      "Error Handling",
    ],
    icon: Server,
  },
  databases: {
    name: "Databases & ORM",
    items: [
      "PostgreSQL",
      "Prisma ORM",
      "MySQL",
      "SQL Server",
      "Firestore",
    ],
    icon: Database,
  },
  security: {
    name: "Security & Access",
    items: [
      "Authentication",
      "Authorization",
      "RBAC (Role-Based Access)",
      "Session Management",
      "Input Validation",
    ],
    icon: ShieldCheck,
  },
  engineering: {
    name: "Software Engineering",
    items: [
      "OOP",
      "SDLC",
      "Requirement Analysis",
      "Debugging",
      "Functional Testing",
      "API Integration",
    ],
    icon: Cpu,
  },
  tools: {
    name: "Tools & Deployment",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "Firebase Hosting",
      "Visual Studio",
      "Android Studio",
    ],
    icon: Terminal,
  },
};

export const publications = [
  {
    title:
      "Sustainable Urban Futures: Seamlessly Integrating Renewable Energy into City Planning for Enhanced Green Energy Harvesting",
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
    skills: "Machine Learning, Python, Data Analysis",
  },
  {
    name: "Product and Brand Management",
    issuer: "NPTEL",
    date: "2024",
    skills: "Product Strategy, Market Analysis",
  },
];

export const languages = [
  { name: "English", proficiency: "Professional / Fluent" },
  { name: "Hindi", proficiency: "Native" },
];

export const resumeUrl = "/Kailash_Kumar_Aman_Resume.pdf";
