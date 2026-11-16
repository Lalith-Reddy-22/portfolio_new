export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  architecture: string[];
  metrics: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  category: "Distributed Systems" | "Full-Stack" | "Cloud / DevOps" | "Developer Tooling" | "Backend Systems";
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  points: string[];
  skills: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    fullName: string;
    role: string;
    tagline: string;
    bio: string;
    location: string;
    email: string;
    github: string;
    linkedin: string;
    resumePdfUrl: string;
    availableForHire: boolean;
    availabilityText: string;
  };
  stats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  projects: Project[];
  experiences: Experience[];
  education: {
    institution: string;
    degree: string;
    period: string;
    gpa?: string;
    coursework: string[];
  }[];
  skillCategories: SkillCategory[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Lalith Kumar Reddy",
    fullName: "K. Lalith Kumar Reddy",
    role: "Software Development Engineer",
    tagline: "Building scalable backend services, high-throughput APIs, and modern full-stack web applications.",
    bio: "Passionate Software Development Engineer with hands-on experience spanning Go, TypeScript, Python, and Java. I love designing robust backend architectures, low-latency microservices, and intuitive developer tooling that scales reliably in production.",
    location: "India (Open to Relocation & Remote)",
    email: "lalithreddy.k@outlook.com",
    github: "https://github.com/Lalith-Reddy-22",
    linkedin: "https://www.linkedin.com/in/k-lalith-kumar-reddy-248942202/",
    resumePdfUrl: "/resume.pdf",
    availableForHire: true,
    availabilityText: "Actively Interviewing for SDE Roles",
  },
  stats: [
    {
      label: "Public Repositories",
      value: "25+",
      sublabel: "Active open-source projects on GitHub",
    },
    {
      label: "Core Backend Stack",
      value: "Go · Python · TS",
      sublabel: "Microservices, REST APIs & Distributed Systems",
    },
    {
      label: "Frontend & Full-Stack",
      value: "Next.js · React",
      sublabel: "Responsive UI & Real-Time WebSockets",
    },
    {
      label: "CI/CD & DevOps",
      value: "Docker · Actions",
      sublabel: "Automated pipelines & cloud deployments",
    },
  ],
  projects: [
    {
      id: "visual-difference",
      title: "VisualDiff: UI Regression Testing Platform",
      tagline: "Full-stack browser-driven visual regression testing platform for cross-environment UI audits.",
      description:
        "Engineered an automated visual regression testing platform that detects unintended pixel-level UI discrepancies between staging and production environments directly from the browser — without requiring local CLI setup or external scripts.",
      architecture: [
        "Automated screenshot diffing pipeline using pixelmatch algorithms with configurable color thresholds and sensitivity masks.",
        "Built-in side-by-side split screen and onion-skin transparency overlay viewer for rapid UI bug triage.",
        "Server-rendered test reports with downloadable defect summaries and exportable audit logs.",
      ],
      metrics: [
        "Instant visual diff computation under 800ms per screen",
        "100% browser-driven without terminal prerequisites",
        "Eliminated manual cross-environment UI verification overhead",
      ],
      techStack: ["JavaScript", "Node.js", "Express", "Canvas API", "HTML5", "CSS3"],
      githubUrl: "https://github.com/Lalith-Reddy-22/Visual_difference",
      featured: true,
      category: "Developer Tooling",
    },
    {
      id: "url-shortener-api",
      title: "Go-Scale: High-Throughput URL Shortener API",
      tagline: "Concurrent, low-latency URL redirection engine and analytics service built with Go.",
      description:
        "Designed and implemented a high-performance URL shortening service in Go utilizing concurrent goroutine request handling, Base62 encoding algorithms, and in-memory caching to achieve ultra-low latency redirection under load.",
      architecture: [
        "Collision-resistant Base62 hashing algorithm with distributed auto-increment sequence generation.",
        "Optimized database indexing and write-through caching layer ensuring sub-15ms redirection lookups.",
        "Structured logging, rate limiting middleware, and containerized Docker environment for seamless deployment.",
      ],
      metrics: [
        "Sub-15ms P99 redirection response latency",
        "Thousands of concurrent redirects handled with minimal CPU/RAM footprint",
        "Production-grade error handling and input sanitization",
      ],
      techStack: ["Go (Golang)", "REST API", "Docker", "Database Indexing", "Goroutines", "Base62"],
      githubUrl: "https://github.com/Lalith-Reddy-22/URL-shortnerAPI",
      featured: true,
      category: "Distributed Systems",
    },
    {
      id: "vehicle-tracking",
      title: "FleetTrack: Real-Time Vehicle Telemetry System",
      tagline: "Live geospatial vehicle location streaming and route telemetry dashboard.",
      description:
        "Architected a full-stack vehicle tracking platform streaming real-time GPS coordinates, visualizing live fleet movements on interactive map layers, and tracking spatial routes with sub-second synchronization.",
      architecture: [
        "Persistent bi-directional WebSocket connection for streaming low-latency coordinate updates from vehicles to dashboard.",
        "Interactive geospatial mapping with smooth marker interpolation and historical route trail rendering.",
        "Geofencing triggers and speed threshold monitors with instantaneous client notifications.",
      ],
      metrics: [
        "Sub-second coordinate synchronization across connected client dashboards",
        "Smooth 60 FPS marker interpolation during high-frequency telemetry streams",
        "Clean TypeScript type definitions across frontend and backend boundaries",
      ],
      techStack: ["TypeScript", "React", "Node.js", "WebSockets", "Geospatial APIs", "Tailwind CSS"],
      githubUrl: "https://github.com/Lalith-Reddy-22/vehicle-tracking",
      featured: true,
      category: "Full-Stack",
    },
    {
      id: "fastapi-backend",
      title: "Async Microservice Engine",
      tagline: "Modern asynchronous RESTful API backend featuring automated OpenAPI docs and JWT auth.",
      description:
        "Engineered a scalable Python backend service utilizing FastAPI, asynchronous database sessions, Pydantic data schemas, and role-based access control (RBAC).",
      architecture: [
        "Asynchronous non-blocking route handlers maximizing I/O concurrency.",
        "Strict request validation and serialisation with Pydantic V2 schemas.",
        "Secure password hashing via Passlib/Bcrypt with OAuth2 token authentication.",
      ],
      metrics: [
        "Automated OpenAPI 3.0 & Swagger documentation generation",
        "Modular architecture with clean dependency injection patterns",
      ],
      techStack: ["Python", "FastAPI", "Pydantic", "SQLAlchemy", "JWT", "PostgreSQL"],
      githubUrl: "https://github.com/Lalith-Reddy-22/fastapi-backend",
      featured: false,
      category: "Backend Systems",
    },
    {
      id: "inventory-app",
      title: "Cloud Inventory Management Platform",
      tagline: "Full-stack inventory tracking, item cataloging, and stock analytics system deployed to production.",
      description:
        "Developed an end-to-end cloud inventory system with interactive dashboards, dynamic product search, and automated stock level alerts.",
      architecture: [
        "Decoupled React frontend communicating with an Express REST API backend.",
        "Optimized database queries with pagination and search filtering.",
        "Continuous deployment workflow hosted on Vercel.",
      ],
      metrics: [
        "Production deployment with 100% uptime",
        "Instant search filtering across large product catalogs",
      ],
      techStack: ["React", "JavaScript", "Node.js", "Express", "REST API", "Vercel"],
      githubUrl: "https://github.com/Lalith-Reddy-22/Inventory_front",
      liveUrl: "https://inventory-front-xi.vercel.app",
      featured: false,
      category: "Full-Stack",
    },
    {
      id: "data-extraction",
      title: "Web Data Extraction & Parser",
      tagline: "Automated web parsing and structured data extraction utility platform.",
      description:
        "Built a specialized web application for extracting, parsing, and converting unstructured web data into structured JSON and tabular formats.",
      architecture: [
        "Client-server architecture for processing incoming URLs and raw HTML documents.",
        "Custom regex and DOM parsing pipeline for targeted entity extraction.",
      ],
      metrics: [
        "Live on Vercel with responsive interactive interface",
        "Supports one-click structured export to CSV & JSON",
      ],
      techStack: ["JavaScript", "React", "Node.js", "Vercel", "CSS3"],
      githubUrl: "https://github.com/Lalith-Reddy-22/data-extraction",
      liveUrl: "https://data-extraction-beryl.vercel.app",
      featured: false,
      category: "Developer Tooling",
    },
  ],
  experiences: [
    {
      company: "Software Engineering & Open Source Projects",
      role: "Software Development Engineer",
      period: "2023 - Present",
      location: "India",
      type: "Projects & Open Source",
      points: [
        "Architected and deployed 25+ software repositories covering high-throughput Go APIs, Python FastAPI microservices, and modern React/TypeScript web apps.",
        "Engineered VisualDiff, an in-browser visual regression testing tool eliminating the need for CLI configurations and reducing UI audit time.",
        "Built a concurrent URL redirection engine in Go using Base62 encoding and Redis-style caching patterns to achieve sub-15ms P99 latency.",
        "Implemented real-time WebSocket vehicle telemetry streaming systems with interactive geospatial map rendering and route replay.",
        "Configured robust CI/CD automation pipelines using GitHub Actions, containerized Docker applications, and cloud hosting on Vercel.",
      ],
      skills: ["Go", "TypeScript", "Python", "React", "Node.js", "Docker", "GitHub Actions", "WebSockets"],
    },
  ],
  education: [
    {
      institution: "Bachelor of Technology in Computer Science & Engineering",
      degree: "B.Tech in Computer Science and Engineering",
      period: "2021 - 2025",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (OOP)",
        "Database Management Systems (DBMS)",
        "Computer Networks & Protocols",
        "Operating Systems",
        "Web Technologies & Cloud Computing",
      ],
    },
  ],
  skillCategories: [
    {
      title: "Programming Languages",
      skills: ["Go (Golang)", "TypeScript", "JavaScript", "Python", "Java", "C#", "SQL", "HTML5/CSS3"],
    },
    {
      title: "Backend & Systems",
      skills: ["RESTful APIs", "FastAPI (Python)", "Go HTTP Services", "Node.js / Express", "WebSockets", "Microservices Architecture"],
    },
    {
      title: "Frontend Engineering",
      skills: ["Next.js (App Router)", "React.js", "Tailwind CSS", "Modern JavaScript (ES6+)", "Responsive Design", "State Management"],
    },
    {
      title: "Databases & Storage",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Database Indexing", "Caching Concepts", "ORM (SQLAlchemy/Prisma)"],
    },
    {
      title: "DevOps & Cloud Tooling",
      skills: ["Git & GitHub", "GitHub Actions (CI/CD)", "Docker Containers", "Vercel Deployment", "Postman", "Linux / Bash"],
    },
    {
      title: "Software Engineering Core",
      skills: ["Data Structures & Algorithms", "System Design Primitives", "Visual Regression Testing", "OOP & Design Patterns", "Concurrency & Goroutines"],
    },
  ],
};
