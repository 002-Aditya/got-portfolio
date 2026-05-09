export const HERO_DATA = {
  title: "Backend Engineer",
  subtitle: "Building Scalable Systems",
  description:
    "I specialize in distributed systems, high-performance APIs, and cloud infrastructure. I turn complex problems into elegant, reliable services.",
  primaryCta: "View Projects",
  secondaryCta: "Contact Me",
};

export const ABOUT_DATA = {
  title: "About Me",
  content:
    "With a deep understanding of core architectural principles, I engineer solutions that can scale from 0 to millions of users. I thrive at the intersection of infrastructure and application logic.",
};

export const EXPERIENCE_DATA = [
  {
    id: 1,
    role: "Senior Backend Engineer",
    company: "Tech Solutions Inc.",
    period: "2023 - Present",
    description: "Architected microservices for high-throughput payment processing systems.",
    techStack: ["Node.js", "Go", "Kubernetes", "PostgreSQL"],
  },
  {
    id: 2,
    role: "Backend Engineer",
    company: "CloudNative Corp",
    period: "2020 - 2023",
    description: "Developed robust REST and GraphQL APIs for a global user base.",
    techStack: ["Python", "Django", "Redis", "AWS"],
  },
];

export const SKILLS_DATA = {
  title: "Technical Arsenal",
  categories: [
    {
      name: "Core Languages",
      skills: ["Go", "Node.js (TypeScript)", "Python", "Rust"],
    },
    {
      name: "Infrastructure & Cloud",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
    },
    {
      name: "Databases",
      skills: ["PostgreSQL", "Redis", "MongoDB", "Cassandra"],
    },
  ],
};

export const PROJECTS_DATA = [
  {
    id: "project-1",
    title: "Distributed Task Queue",
    summary: "A high-performance, distributed task queue built with Go and Redis.",
    description:
      "Engineered a highly available task queue that processes millions of jobs per day. It features automatic retries, prioritization, and real-time dashboard analytics.",
    techStack: ["Go", "Redis", "Docker", "Prometheus"],
    link: "https://github.com/example/task-queue",
  },
  {
    id: "project-2",
    title: "Microservices Auth Gateway",
    summary: "Unified authentication gateway for microservices architecture.",
    description:
      "Designed and implemented an API gateway that handles JWT validation, rate limiting, and request routing across 20+ microservices.",
    techStack: ["Node.js", "Express", "JWT", "Nginx"],
    link: "https://github.com/example/auth-gateway",
  },
  {
    id: "project-3",
    title: "Real-time Metrics Pipeline",
    summary: "Data pipeline for ingesting and processing real-time application metrics.",
    description:
      "Built a scalable data ingestion pipeline using Kafka and ClickHouse, capable of handling 50k events per second with sub-second query latency.",
    techStack: ["Python", "Kafka", "ClickHouse", "Grafana"],
    link: "https://github.com/example/metrics-pipeline",
  },
];

export const CONTACT_DATA = {
  title: "Let's Connect",
  description: "I'm always open to discussing new opportunities, system architecture, or just geeking out about backend tech.",
  email: "hello@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
};
