export const HERO_DATA = {
  title: "Backend Architect",
  subtitle: "Architecting high-performance backends and scalable systems for the modern web.",
  description:
    "Software Engineer specializing in Node.js, Express.js, Spring Boot, and PostgreSQL. Expert in designing scalable RESTful APIs, Asterisk VoIP telecom infrastructure, and optimizing mission-critical database systems.",
  primaryCta: "View Architectures",
  secondaryCta: "Connect",
  tags: ["Node.js", "Express.js", "Spring Boot", "PostgreSQL", "Asterisk (ARI)"]
};

export const IMPACT_DATA = [
  {
    label: "70%",
    description: "Reduction in query latency",
    subtext: "Optimized indexing & data patterns",
    icon: "database"
  },
  {
    label: "Modular",
    description: "Enterprise Systems",
    subtext: "Architected scalable core backends",
    icon: "workflow"
  },
  {
    label: "Secure",
    description: "Identity Protocols",
    subtext: "Microsoft SSO & OAuth integration",
    icon: "security"
  },
  {
    label: "Complex",
    description: "Schema Architectures",
    subtext: "Multi-model JSONB PostgreSQL",
    icon: "schema"
  }
];

export const SKILLS_DATA = {
  title: "Technical Arsenal",
  description: "A comprehensive overview of my technical expertise, from core systems to enterprise infrastructure.",
  categories: [
    {
      name: "Core Competencies",
      skills: ["REST APIs", "Scalable Systems", "Auth (RBAC)", "Database Design", "API Security", "VoIP & Telecom"],
      icon: "shield"
    },
    {
      name: "Languages",
      skills: ["JavaScript", "Java", "SQL"],
      icon: "code"
    },
    {
      name: "Backend Runtime",
      skills: ["Node.js", "Express.js", "Spring Boot"],
      icon: "cpu"
    },
    {
      name: "Databases & ORM",
      skills: ["PostgreSQL", "Sequelize", "Hibernate", "Vector DBs"],
      icon: "database"
    },
    {
      name: "Messaging & Automation",
      skills: ["Kafka", "RabbitMQ", "n8n", "AI Agents"],
      icon: "workflow"
    },
    {
      name: "Tools & Infrastructure",
      skills: ["Asterisk (ARI)", "Docker", "Git", "Bitbucket", "GitHub", "Postman", "Jira", "PgAdmin", "VS Code", "WebStorm", "Spring Tool Suite"],
      icon: "box"
    },
    {
      name: "Frontend & UI",
      skills: ["React", "TailwindCSS"],
      icon: "layout"
    },
    {
      name: "Soft Skills",
      skills: ["Problem Solving", "Adaptability", "Communication", "Team Collaboration", "Debugging", "Critical Thinking"],
      icon: "activity"
    }
  ],
};

export const STATS_DATA = [
  {
    value: "70%",
    label: "Faster Data Retrieval",
    icon: "zap"
  },
  {
    value: "Node.js",
    label: "Enterprise Platform",
    icon: "activity"
  },
  {
    value: "Java",
    label: "Scalable HRMS",
    icon: "cloud"
  },
  {
    value: "Asterisk",
    label: "VoIP & Telecom Systems",
    icon: "cpu"
  }
];

export const EXPERIENCE_DATA = [
  {
    id: 2,
    role: "Software Engineer",
    company: "Sarv.com",
    period: "Aug 2026 – Present",
    description: "Developing robust VoIP communications, custom telecom applications, and third-party enterprise CRM integrations.",
    highlights: [
      "Implemented CRM integrations, enabling seamless data synchronization between internal systems and third-party CRM platforms.",
      "Configured and managed Asterisk Server to handle robust VoIP communications, ensuring high availability and secure SIP trunking for enterprise clients.",
      "Developed custom telecom applications utilizing Asterisk REST Interface (ARI) and Node.js, enabling real-time call control, dynamic routing, and automated interactive voice responses (IVR)."
    ],
    techStack: ["Node.js", "Asterisk (ARI)", "VoIP", "SIP Trunking", "CRM Integrations", "REST APIs"],
  },
  {
    id: 1,
    role: "Associate Software Engineer",
    company: "MPC Cloud Consulting Pvt. Ltd.",
    period: "Aug 2023 – Aug 2026",
    description: "Architected modular enterprise management backends and scalable SaaS HRMS solutions across distributed microservice environments.",
    highlights: [
      "Architected a modular enterprise management backend handling projects, customers, vendors, and invoices.",
      "Developed secure backend authentication flows utilizing a custom Microsoft SSO login handler, coupled with real-time device and geolocation tracking for rigorous audit histories.",
      "Designed a multi-model PostgreSQL database schema incorporating JSONB, primary/foreign keys, and robust generic functions capable of joining multiple tables while controlling fetch limits.",
      "Managed the complete end-to-end invoice and expense request lifecycle, designing responsive HTML notification templates to streamline multi-stage workflow approvals.",
      "Built and deployed scalable backend APIs using Spring Boot, integrating Hibernate ORM to manage complex data access patterns efficiently.",
      "Spearheaded extensive database query optimizations and implemented strategic indexing, slashing critical data retrieval latency from 5 seconds to 1.5–2 seconds.",
      "Integrated Kafka messaging queues to facilitate highly reliable, asynchronous communication across disparate microservice environments."
    ],
    techStack: ["Node.js", "Express.js", "Java", "Spring Boot", "PostgreSQL", "Kafka", "Docker", "Sequelize"],
  }
];

export const PROJECTS_DATA = [
  {
    id: "project-1",
    title: "Unified Business Operations",
    category: "Node.js",
    summary: "Modular enterprise management backend for end-to-end business operations.",
    description:
      "Architected a modular enterprise backend handling projects, customers, vendors, and invoices. Developed secure Microsoft SSO integration with real-time geolocation tracking and a complex multi-model PostgreSQL schema.",
    techStack: ["Node.js", "Express.js", "Sequelize", "PostgreSQL", "Docker"],
    link: "#",
    repoLink: null,
    config: {
      "node": "ops-platform",
      "architecture": "modular-enterprise",
      "auth": "microsoft-sso",
      "tracking": "enabled"
    }
  },
  {
    id: "project-2",
    title: "SaaS-Based HRMS",
    category: "Java",
    summary: "Scalable HR management system with microservices architecture.",
    description:
      "Built scalable Spring Boot APIs with Hibernate ORM. Optimized database queries slashing latency by 70%. Integrated Kafka messaging queues for reliable asynchronous communication across disparate microservices.",
    techStack: ["Java", "Spring Boot", "PostgreSQL", "Kafka", "Docker"],
    link: "#",
    repoLink: null,
    config: {
      "service": "hrms-core",
      "architecture": "microservices",
      "latency": "1.5s",
      "streaming": "kafka"
    }
  },
  {
    id: "project-3",
    title: "Telecom & IVR Platform",
    category: "VoIP & Node.js",
    summary: "High-availability VoIP communications and automated IVR system.",
    description:
      "Developed custom telecom applications utilizing Asterisk REST Interface (ARI) and Node.js for real-time call control, dynamic routing, and automated IVRs. Configured Asterisk Server for enterprise SIP trunking and built seamless CRM data synchronization pipelines.",
    techStack: ["Node.js", "Asterisk (ARI)", "VoIP", "SIP Trunking", "CRM Integration", "REST APIs"],
    link: "#",
    repoLink: null,
    config: {
      "telecom": "asterisk-ari",
      "voice": "dynamic-ivr-routing",
      "trunking": "enterprise-sip",
      "sync": "crm-integrations"
    }
  },
];

export const CONTACT_DATA = {
  title: "Ready to build the future?",
  description: "I am actively seeking new opportunities to architect performant systems, specializing in backend engineering and full-stack development. Whether you have a complex technical challenge or are looking for a backend-first collaborator, my inbox is always open.",
  email: "dr.adityakumar2001@gmail.com",
  github: "github.com/002-Aditya",
  linkedin: "linkedin.com/in/adityakkumarr",
  whatsapp: "8447440206",
};
