export type NavSection = "hero" | "experience" | "projects" | "skills" | "contact";

/** Brittany-style experience block: title row + prose + stacked tech lines */
export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  stack: string[];
}

export interface ProjectEntry {
  title: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  title:
    | "Backend"
    | "Frontend"
    | "Cloud"
    | "Databases"
    | "DevOps"
    | "ML/MLOps"
    | "Tools";
  items: string[];
}

export const socialLinks = {
  email: "mailto:samantaraybiplaba@gmail.com",
  github: "https://github.com/bips1996",
  linkedin: "https://www.linkedin.com/in/bips96/",
  resume: "https://drive.google.com/file/d/12Oio-7HGZuMarqoA30lOiYIMuYN4hjCY/view?usp=drive_link",
};

/** Logo + portrait — vendored under `public/images/` (copied from your previous site) */
export const brandMedia = {
  logoSrc: "/images/logo.png",
  logoAlt: "Biplaba Samantaray logo",
  profileSrc: "/images/profile.png",
  profileAlt: "Biplaba Samantaray",
} as const;

export const profileName = "Biplaba Samantaray";

/** Folio navigation — reads like a table of contents, not an HR form. */
export const navItems: { id: NavSection; label: string }[] = [
  { id: "hero", label: "Prologue" },
  { id: "experience", label: "Field notes" },
  { id: "projects", label: "Artifacts" },
  { id: "skills", label: "Instruments" },
  { id: "contact", label: "Correspondence" },
];

/** Notebook / plate metadata */
export const folioMeta = {
  plate: "Plate I",
  focus: "Systems · interfaces · scale",
  edition: "2026",
};

export const profileMeta = {
  location: "Hyderabad, India",
  stackFocus: "Backend · Platform · TypeScript / Java",
  availability: "Open to senior & staff engineer roles",
};

/** One thesis line — manifesto, not job summary. */
export const heroStatement =
  "Coherence under load—systems that stay legible when traffic, teams, and time press in.";

/** Numbered observations: people, craft, and who you’re for—Field notes carry the résumé. */
export const editorialIntro = {
  observations: [
    "Observation I — The work that stays with me is human as much as technical: teaching what I've learned, guiding people through rough patches in their journey, and leaving teammates more capable than I found them—capacity should compound with the codebase.",
    "Observation II — When I build, I aim for platforms you can stand on—APIs and data paths with clear intent, operations that don't need heroics, and tradeoffs you can defend with evidence when stakes are high.",
    "Observation III — I'd love to meet leaders and peers who treat growth as part of the mandate—managers who protect time to mentor, tech leads who model curiosity, founders shipping something serious—especially if you want both resilient backends and a stronger bench around them.",
  ],
};

export const experiences: ExperienceItem[] = [
  {
    role: "Software Engineer - III",
    company: "Verizon",
    period: "2025 — Present",
    location: "Hyderabad, India",
    description:
      "Leading development of scalable microservices for enterprise telecommunications systems. I design and evolve service APIs for large-scale telecom workflows, improve reliability through performance tuning and operational ownership, and partner with cross-functional teams to align backend architecture with platform roadmaps.",
    stack: ["Java", "Spring Boot", "AWS", "Elasticsearch", "DBMS", "Project Management"],
  },
  {
    role: "Software Engineer - II",
    company: "Newton Classroom",
    period: "2022 — 2025",
    location: "Hyderabad, India",
    description:
      "Built interactive educational platforms and learning management systems serving thousands of students and educators. I shipped backend features for classroom and school operations, maintained production services in containerized AWS pipelines, and supported deployment workflows with CircleCI.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Docker", "AWS", "CircleCI"],
  },
  {
    role: "Software Engineer",
    company: "Accenture Applied Intelligence",
    period: "2021 — 2022",
    location: "Bangalore, India",
    description:
      "Contributed to AI-powered MLOps platforms and data pipelines for Fortune 500 clients—backend services for model lifecycle workflows, API and data integration, and deployment-ready containerized services on Kubernetes.",
    stack: ["Python", "FastAPI", "MLflow", "PostgreSQL", "Docker", "Kubernetes"],
  },
];

export const projects: ProjectEntry[] = [
  {
    title: "PrepEasy (InterviewDock)",
    description:
      "Full-stack interview prep platform: browse and filter questions by technology and difficulty, with a documented Express API, PostgreSQL schema, and deployment guides for EC2, Vercel, and Netlify.",
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/bips1996/InterviewDock",
  },
  {
    title: "AskBiplaba",
    description:
      "Spring Boot service for ingesting profile intelligence—PDF extraction, GitHub API integration, LinkedIn JSON mapping, and portfolio parsing behind a small set of REST endpoints.",
    stack: ["Java 17", "Spring Boot", "PostgreSQL", "WebFlux", "JPA", "JSoup"],
    githubUrl: "https://github.com/bips1996/AskBiplaba",
  },
  {
    title: "Classification model analysis",
    description:
      "End-to-end comparison of six classifiers on the UCI Bank Marketing dataset, with metrics-driven writeups and a Streamlit app for interactive exploration.",
    stack: ["Python", "Streamlit", "XGBoost", "scikit-learn", "Pandas"],
    githubUrl: "https://github.com/bips1996/classification-model-analysis",
    liveUrl: "https://2025aa05343.streamlit.app/",
  },
];

export const skills: SkillCategory[] = [
  { title: "Backend", items: ["Java", "Spring Boot", "Node.js", "TypeScript", "FastAPI"] },
  { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"] },
  { title: "Cloud", items: ["AWS", "GCP"] },
  { title: "Databases", items: ["PostgreSQL", "MongoDB", "SQLite"] },
  { title: "DevOps", items: ["Docker", "Kubernetes", "CircleCI", "Nginx", "Linux"] },
  { title: "ML/MLOps", items: ["MLflow", "Model evaluation", "Classification workflows"] },
  { title: "Tools", items: ["Git", "Maven", "Vite", "TypeORM", "Elasticsearch"] },
];
