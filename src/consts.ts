// Centralized site data. Edit personal content here, not in components.
// All placeholder values should be replaced with real content.

export const SITE_TITLE = "Lucas Gobbi — Software Developer";
export const SITE_DESCRIPTION =
  "Personal website, resume, and thoughts of Lucas Gobbi, a software developer working with backend, frontend, and integrations.";
// Must match the `site` value in astro.config.mjs (no trailing slash).
export const SITE_URL = "https://lucasgobbs.github.io/who-am-i";
export const SITE_AUTHOR = "Lucas Gobbi";
export const SITE_ROLE = "Software Developer";
export const SITE_LOCATION = "Espírito Santo, Brazil";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/resume", label: "Resume" },
  { href: "/projects", label: "Projects" },
  { href: "/tools", label: "Tools" },
  { href: "/thoughts", label: "Thoughts" },
  { href: "/about", label: "About" },
] as const;

export const SOCIAL_LINKS = [
  { href: "https://github.com/LucasGobbs", label: "GitHub" },
  { href: "https://www.linkedin.com/in/lucascgobbi/", label: "LinkedIn" },
  { href: "llcostagobbi@gmail.com", label: "Email" },
  { href: "/rss.xml", label: "RSS" },
] as const;

export type Experience = {
  company: string;
  role: string;
  startYear: number;
  startMonth: number; // 1-12
  endYear: number | null; // null = current
  endMonth: number | null; // null = current
  summary: string;
  highlights: string[];
  tech: string[];
};

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export function formatMonthYear(year: number, month: number | null): string {
  if (month === null) return String(year);
  return `${MONTHS[month - 1]} ${year}`;
}

export function formatExperienceRange(e: Experience): string {
  const start = formatMonthYear(e.startYear, e.startMonth);
  const end =
    e.endYear === null || e.endMonth === null
      ? "present"
      : formatMonthYear(e.endYear, e.endMonth);
  return `${start} – ${end}`;
}

export const EXPERIENCES: Experience[] = [
  {
    company: "Tractian",
    role: "Senior Software Engineer",
    startYear: 2024,
    startMonth: 9,
    endYear: null,
    endMonth: null,
    summary:
      "Systems Integration Department. Building integrations between our CMMS and leading ERP solutions such as SAP.",
    highlights: [
      "Create integrations between the CMMS platform and market-leading ERPs (SAP).",
      "Script across Python, JavaScript/TypeScript (Node.js), and Go.",
      "Use Kafka, Docker, GitHub Actions, MongoDB, and Python FastAPI.",
      "Professional engagements with customers in English.",
    ],
    tech: [
      "Python",
      "TypeScript",
      "Node.js",
      "Go",
      "Kafka",
      "Docker",
      "MongoDB",
      "FastAPI",
      "GitHub Actions",
    ],
  },
  {
    company: "Semantix",
    role: "Software Engineer",
    startYear: 2021,
    startMonth: 11,
    endYear: 2024,
    endMonth: 9,
    summary:
      "Data Integration Department. Custom integrations between services for customers across ERPs, APIs, and platforms.",
    highlights: [
      "Built customized integrations between services for customers.",
      "Worked with databases, ERPs, and APIs: SAP, Protheus, VTEX, Zendesk, Magento, UnicoRH, LG, and more.",
      "Scripting with JavaScript/TypeScript (Node.js).",
      "Docker and Kubernetes; Agile with SCRUM.",
      "Built internal tools with Flutter, Vue.js, and AngularJS.",
      "Professional engagements with customers in English and Spanish.",
    ],
    tech: [
      "TypeScript",
      "Node.js",
      "Docker",
      "Kubernetes",
      "Vue.js",
      "AngularJS",
      "Flutter",
      "SCRUM",
    ],
  },
  {
    company: "Gerpos Sistemas",
    role: "Frontend Developer (Internship)",
    startYear: 2021,
    startMonth: 8,
    endYear: 2021,
    endMonth: 11,
    summary: "Automating development and deploy pipelines in GitLab.",
    highlights: [
      "Automated development and deployment workflows in GitLab.",
      "Scripting with Flutter.",
    ],
    tech: ["Flutter", "GitLab CI"],
  },
  {
    company: "Olá Wolff",
    role: "Backend Developer (Internship)",
    startYear: 2020,
    startMonth: 9,
    endYear: 2021,
    endMonth: 8,
    summary:
      "Backend of published mobile apps (e-commerce, store/business management).",
    highlights: [
      "Worked on the backend of published mobile apps using Node.js, TypeScript, PostgreSQL, and Jest.",
      "Developed and deployed microservices with Docker on AWS.",
      "Integrated payment APIs: Zoop, Stone Open Bank, and PagarMe.",
      "Agile with SCRUM.",
    ],
    tech: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Jest",
      "Docker",
      "AWS",
      "SCRUM",
    ],
  },
];

export type Education = {
  institution: string;
  degree: string;
  startYear: number;
  endYear: number | null; // null = current
};

export const EDUCATION: Education[] = [
  {
    institution: "UFES — Federal University of Espírito Santo",
    degree: "Post Graduation — Artificial Intelligence",
    startYear: 2024,
    endYear: 2025,
  },
  {
    institution: "IFES — Federal Institute of Espírito Santo",
    degree: "Post Graduation — Internet of Things",
    startYear: 2024,
    endYear: 2024,
  },
  {
    institution: "IFES — Federal Institute of Espírito Santo",
    degree: "Graduation — Bachelor in Information Systems",
    startYear: 2018,
    endYear: 2022,
  },
];

export type Certificate = {
  name: string;
  issuer: string;
  year: number;
};

export const CERTIFICATES: Certificate[] = [
  {
    name: "Calculus and Optimization for Artificial Intelligence",
    issuer: "PUC-Rio",
    year: 2025,
  },
  {
    name: "Geospatial Data Visualization",
    issuer: "FGV",
    year: 2023,
  },
  {
    name: "LAFF On Programming for High Performance",
    issuer: "University of Texas at Austin",
    year: 2023,
  },
  {
    name: "OWASP Top 10: API Security Playbook",
    issuer: "OWASP",
    year: 2022,
  },
  {
    name: "Network Security",
    issuer: "Cisco",
    year: 2022,
  },
  {
    name: "CCNA Routing and Switching: Introduction to Networks",
    issuer: "Cisco",
    year: 2020,
  },
];

export type Interest =
  | "development"
  | "art"
  | "gamedev"
  | "life";

export const INTERESTS: { id: Interest; label: string }[] = [
  { id: "development", label: "Development" },
  { id: "art", label: "Art" },
  { id: "gamedev", label: "Gamedev" },
  { id: "life", label: "Life" },
];

export type Project = {
  name: string;
  description: string;
  tech: string[];
  role: string;
  links: { label: string; href: string }[];
  thumbnail?: string; // optional "/projects/<slug>/thumb.png"
  thumbnailAlt?: string;
  interest?: Interest;
};

export const PROJECTS: Project[] = [
  {
    name: "Project One",
    description:
      "A short, honest description of what this project is and why it exists.",
    tech: ["TypeScript", "Astro", "Postgres"],
    role: "Creator, maintainer",
    links: [
      { label: "Source", href: "#" },
      { label: "Live", href: "#" },
    ],
    interest: "development",
  },
  {
    name: "Project Two",
    description:
      "Another project. Replace this placeholder with real content in consts.ts.",
    tech: ["Go", "SQLite"],
    role: "Creator",
    links: [{ label: "Source", href: "#" }],
    interest: "gamedev",
  },
];

export const SKILLS = [
  {
    group: "Stack",
    items: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "C#",
      "Python",
      "Java",
      "Vue.js",
      "Go",
    ],
  },
  {
    group: "Others",
    items: [
      "Docker",
      "Kubernetes",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "AWS",
      "Kafka",
      "RabbitMQ",
    ],
  },
  {
    group: "Communication",
    items: ["English", "Spanish"],
  },
];

export const ABOUT_BIO = [
  "For more than 5 years, I have worked as a Software Developer, with experience in both Backend and Frontend development. I also have knowledge of DevOps practices and data processing.",
  "I am passionate about technology and a lover of the mathematical sciences.",
  "This website is a place for my resume, my projects, and a small notebook of thoughts I want to keep around.",
];
