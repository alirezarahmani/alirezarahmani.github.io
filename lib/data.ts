export const roles = [
  "Principal Software Engineer",
  "Distributed Systems",
  "AI Infrastructure",
]

export const siteData = {
  profile: {
    name: "Alireza Rahmani Khalili",
    title: "Principal Software Engineer",
    summary:
      "I design and build large-scale distributed systems and production AI pipelines. With over a decade of experience, I’ve worked on high-throughput data ingestion across dozens of sources, real-world RAG systems, and AI-driven data platforms. My focus is turning complex, unreliable systems into scalable and predictable infrastructure.",
    bio: "Principal Software Engineer specializing in distributed systems, AI infrastructure, and domain-driven design. I build reliable Go/Python services and production-grade data pipelines that scale under real-world constraints.",
    skills: [
      "Go (Golang)",
      "Python",
      "Distributed Systems",
      "Retrieval-Augmented Generation (RAG)",
      "Vector Databases (pgvector, Pinecone)",
      "AI / LLM Infrastructure",
      "PostgreSQL / Redis",
      "Elasticsearch",
      "Kubernetes / AWS",
      "CI/CD & DevOps Automation",
    ],
  },

  services: [
    {
      slug: "ai-systems",
      title: "AI Systems & RAG Pipelines",
      description:
        "Design and build production-grade RAG systems that deliver relevant results, not just demos — including retrieval, ranking, and data freshness.",
    },
    {
      slug: "cloud-architecture",
      title: "Cloud & Infrastructure Architecture",
      description:
        "Architect scalable, fault-tolerant systems that handle real-world traffic, failures, and data inconsistency.",
    },
    {
      slug: "ddd-consulting",
      title: "Domain-Driven Design Consulting",
      description:
        "Model complex domains into clear, maintainable systems using practical DDD — not theoretical diagrams.",
    },
    {
      slug: "devops-platform-engineering",
      title: "Platform & DevOps Engineering",
      description:
        "Build reliable deployment, observability, and incident management systems that make production boring and predictable.",
    },
    {
      slug: "ai-real-estate",
      title: "AI for Data-Heavy Platforms",
      description:
        "Apply LLMs, embeddings, and data pipelines to large-scale domains like listings, agents, and content automation.",
    },
    {
      slug: "technical-writing",
      title: "Technical Writing & Education",
      description:
        "Write and teach real-world system design, DDD, and AI engineering — focused on production, not theory.",
    },
  ],

  caseStudies: [
    {
      title: "Roomvu MLS Transformation",
      description:
        "Architected an AI-powered MLS data platform ingesting and synchronizing data across 80+ providers, handling 300K+ daily requests. Built Go microservices, Python analytics pipelines, and real-time enrichment systems.",
      technologies: ["Go", "Python", "AWS", "Kubernetes", "Vector DB"],
    },
    {
      title: "Worksome Freelance Platform",
      description:
        "Refactored a large-scale freelancer platform, improving search relevance by 45% and reducing time-to-hire by 30%. Introduced microservices and Elasticsearch-based scoring.",
      technologies: ["Laravel", "Elasticsearch", "Microservices", "AWS"],
    },
    {
      title: "SnappMarket CQRS Redesign",
      description:
        "Redesigned core backend using CQRS and DDD, reducing overselling by 80% and improving system reliability at scale.",
      technologies: ["Symfony", "CQRS", "DDD", "Redis", "PostgreSQL"],
    },
    {
      title: "Digikala Delivery System",
      description:
        "Built and scaled delivery microservices for millions of users, improving API performance and search responsiveness using Elasticsearch.",
      technologies: ["PHP", "Elasticsearch", "REST API", "Redis"],
    },
  ],

  articles: [
    {
      title: "Stop Blaming Microservices. Your Domain Model Is the Mess",
      excerpt:
        "Why most architecture problems are actually domain modeling problems — and how to fix them.",
      source: "Substack",
      link: "https://nidly.substack.com",
    },
    {
      title: "Most RAG Systems Fail at Indexing — And You Don’t Notice",
      excerpt:
        "A deep dive into why retrieval quality silently degrades in production systems.",
      source: "Substack",
      link: "https://nidly.substack.com",
    },
    {
      title: "Domain Driven Design, System Design",
      excerpt:
        "Practical system design using DDD patterns and real-world trade-offs.",
      source: "Dzone",
      link: "https://dzone.com/users/2962895/alirezarahmani.html",
    },
    {
      title: "Software Architecture",
      excerpt: "In-depth tutorials on microservices, CQRS, event-driven architecture, and building scalable systems that last.",
      source: "Tuts+",
      link: "https://tutsplus.com/authors/alireza-rahmani-khalili"
    }
  ],

  about: {
    headline: "About Me",
    body: [
      "I design systems where distributed infrastructure and AI meet — from high-scale ingestion pipelines to production RAG systems.",
      "Most systems don’t fail because of algorithms. They fail because of poor data modeling, inconsistency, and hidden assumptions. That’s where I focus.",
      "I write research-driven articles and share practical insights on system design, heuristics, and AI systems that actually work in production.",
    ],
    cta: "Let’s Work Together",
  },

  testimonials: [
    {
      quote:
        "Alireza is a highly skilled engineer who consistently delivers top-quality code. His architectural insights were invaluable to our project.",
      author: "Jane Doe",
      role: "Lead Engineer, Tech Corp",
    },
    {
      quote:
        "Working with Alireza was a pleasure. He has a deep understanding of cloud infrastructure and helped us scale our systems efficiently.",
      author: "John Smith",
      role: "Product Manager, Innovate LLC",
    },
    {
      quote:
        "His expertise in AI and machine learning was a game-changer for our data strategy. He is a proactive problem-solver and a great team player.",
      author: "Emily White",
      role: "Data Scientist, Future Systems",
    },
  ],

  certifications: [
    {
      name: "Symfony Certified Developer",
      issuer: "SensioLabs",
      date: "Expert Level",
      link: "https://connect.symfony.com/profile/alireza_rahmani",
      logo: "/symfony-svgrepo-com.svg",
    },
  ],

  experience: [
    {
      title: "Principal Software Engineer",
      company: "Roomvu | Vancouver, BC, Canada",
      period: "Nov 2022 – Present",
      description:
        "Architecting AI-powered MLS listing systems using Go, Python, and AWS. Leading backend reliability, data pipelines, and performance optimization across large-scale real estate platforms.",
    },
    {
      title: "Senior Software Engineer",
      company: "Worksome | Copenhagen, Denmark",
      period: "Nov 2019 – Dec 2022",
      description:
        "Led refactoring of a high-traffic freelance management platform. Designed microservices, improved Elasticsearch-based scoring, and delivered scalable VMS architecture with Laravel.",
    },
    {
      title: "Tech Team Lead",
      company: "Selected Geeks | Brighton, UK",
      period: "May 2017 – Nov 2019",
      description:
        "Managed migration from monolith to microservices using Symfony, Sylius, and Kafka. Introduced DDD, automated CI/CD pipelines, and improved product delivery through agile team leadership.",
    },
    {
      title: "Tech Team Lead",
      company: "SnappMarket | Tehran, Iran",
      period: "Jun 2015 – Apr 2017",
      description:
        "Implemented CQRS and Domain-Driven Design for Iran’s largest online hypermarket. Built scalable Symfony-based enterprise systems and mentored developers in modern backend practices.",
    },
    {
      title: "Software Engineer",
      company: "Digikala | Tehran, Iran",
      period: "Mar 2014 – May 2015",
      description:
        "Developed delivery microservices for the region’s largest e-commerce platform. Enhanced API performance, Elasticsearch integration, and system scalability for millions of users.",
    },
  ],

  contact: {
    intro:
      "If your system is slowing down, scaling poorly, or producing unreliable results — I can help fix it.",
    success: "Thanks! I'll get back to you soon.",
    email: "alirezarahmani@example.com",
    location: "Vancouver, BC, Canada",
  },

  social: {
    linkedin: "https://www.linkedin.com/in/rahmanikhalili/",
    substack: "https://nidly.substack.com/",
    github: "https://github.com/alirezarahmani",
    youtube: "https://www.youtube.com/@alirezaRahmanikhalili",
    symfony: "https://connect.symfony.com/profile/alireza_rahmani",
  },

  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rahmanikhalili/",
      icon: "💼",
    },
    {
      name: "GitHub",
      url: "https://github.com/alirezarahmani",
      icon: "🐙",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/alirezarahmani",
      icon: "🐦",
    },
  ],

  booking: {
    title: "Book a Call",
    desc: "Let’s discuss your system, constraints, and the fastest path to making it reliable and scalable.",
    calendly_iframe: "https://calendly.com/alirezarahmani-p-ty/30min",
  },

  calendly: "https://calendly.com/alirezarahmani-p-ty/30min",

  privacy: {
    url: "/privacy",
  },
}

export type Service = typeof siteData.services[0]
export type CaseStudy = typeof siteData.caseStudies[0]
export type Article = typeof siteData.articles[0]
export type Testimonial = typeof siteData.testimonials[0]
