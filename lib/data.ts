export const roles = [
  "Principal Software Engineer",
  "AI Architect",
  "Full-Stack Developer",
  "Cloud Solutions Expert",
]

export const siteData = {
  profile: {
    name: "Alireza Rahmani Khalili",
    title: "Full Stack Developer & AI Specialist",
    summary:
      "I am a seasoned Principal Software Engineer and AI Architect with over a decade of experience in designing and building scalable, high-performance software solutions. My expertise lies in full-stack development, cloud architecture, and leveraging AI to solve complex business problems.",
    bio: "Principal Software Engineer specializing in AI-assisted architecture, domain-driven design, and large-scale data systems. I build reliable Go/Python microservices and pragmatic solutions that turn complexity into clarity.",
    skills: [
      "Go (Golang)",
      "Python",
      "Symfony / Laravel",
      "Next.js / React",
      "Retrieval-Augmented Generation (RAG)",
      "Vector Databases (pgvector, Pinecone)",
      "AI / LLM Integration",
      "CI/CD & DevOps Automation",
      "PostgreSQL / Redis",
      "Elasticsearch",
    ]
  },
  services: [
    {
      slug: "ai-systems",
      title: "AI Systems & RAG Pipelines",
      description:
        "Build retrieval-augmented generation (RAG) systems using embeddings, vector databases, and LLM orchestration that actually scale.",
    },
    {
      slug: "cloud-architecture",
      title: "Cloud & Infrastructure Architecture",
      description:
        "Design reliable, observable, and cost-efficient cloud foundations using Kubernetes, Terraform, and CI/CD automation.",
    },
    {
      slug: "ddd-consulting",
      title: "Domain-Driven Design Consulting",
      description:
        "Help teams translate complex business logic into clear domain models and bounded contexts that last.",
    },
    {
      slug: "devops-platform-engineering",
      title: "DevOps & Platform Engineering",
      description:
        "Streamline deployments, monitoring, and incident management for boring, predictable releases.",
    },
    {
      slug: "ai-real-estate",
      title: "AI Integration for Real-Estate Platforms",
      description:
        "Apply LLMs and analytics pipelines to property listings, agent tools, and content automation workflows.",
    },
    {
      slug: "technical-writing",
      title: "Technical Writing & Education",
      description:
        "Publish practical guides and workshops on DDD, BDD, and applied AI — helping engineers bridge theory and production.",
    },
  ],
  caseStudies: [
    {
      title: "Roomvu MLS Transformation",
      description:
        "Architected an AI-powered MLS data platform handling millions of listings across providers. Designed Go-based microservices, Python analytics, and AWS-native pipelines for real-time sync and listing enrichment.",
      technologies: ["Go", "Python", "AWS", "Kubernetes", "Vector DB", "Symfony"],
    },
    {
      title: "Worksome Freelance Management Platform",
      description:
        "Refactored and optimized a large-scale freelancer hiring platform. Introduced microservice architecture, Elasticsearch-based talent scoring, and Laravel VMS design to improve scalability and speed.",
      technologies: ["Laravel", "Elasticsearch", "Microservices", "AWS", "MySQL"],
    },
    {
      title: "SnappMarket CQRS Redesign",
      description:
        "Implemented CQRS and Domain-Driven Design for Iran’s largest online hypermarket. Improved performance, maintainability, and data integrity through Symfony-based enterprise systems.",
      technologies: ["Symfony", "CQRS", "DDD", "Redis", "PostgreSQL"],
    },
    {
      title: "Digikala Delivery Microservice",
      description:
        "Developed and migrated the delivery microservice for the Middle East’s largest e-commerce platform, enabling millions of concurrent users with optimized Elasticsearch and REST APIs.",
      technologies: ["PHP", "Elasticsearch", "REST API", "Redis", "Nginx"],
    },
  ],
  articles: [
    {
      title: "AI & Domain Driven Design",
      excerpt: "Exploring how AI-assisted tools can enhance domain modeling, bounded context discovery, and strategic design decisions in complex systems.",
      source: "Substack",
      link: "https://nidly.substack.com"
    },
    {
      title: "Domain Driven Design, System Design",
      excerpt: "Practical guides on applying DDD patterns, event storming, and system design principles to real-world enterprise applications.",
      source: "Dzone",
      link: "https://dzone.com/users/2962895/alirezarahmani.html"
    },
    {
      title: "Software Architecture",
      excerpt: "In-depth tutorials on microservices, CQRS, event-driven architecture, and building scalable systems that last.",
      source: "Tuts+",
      link: "https://tutsplus.com/authors/alireza-rahmani-khalili"
    }
  ],
  about: {
    headline: "Hi There",
    body: [
      "I design and build systems where AI, DDD, and DevOps intersect. My focus is on MLS-scale ingestion, Go/Python microservices, and vector DB pipelines that transform raw data into reliable, intelligent products.",
      "I write research-driven articles for DZone and share practical insights on architecture, heuristics, and AI systems that eliminate friction instead of creating it.",
      "If you care about outcomes, scalability, and clarity over buzzwords — we’ll probably get along well."
    ],
    cta: "Hire Me Now"
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
      logo: "/symfony-svgrepo-com.svg"
    }
  ],
  experience: [
    {
      title: "Principal Software Engineer",
      company: "Roomvu | Vancouver, BC, Canada",
      period: "Nov 2022 – Present",
      description:
        "Architecting AI-powered MLS listing systems using Go, Python, and AWS. Leading backend reliability, data pipelines, and performance optimization across large-scale real estate platforms."
    },
    {
      title: "Senior Software Engineer",
      company: "Worksome | Copenhagen, Denmark",
      period: "Nov 2019 – Dec 2022",
      description:
        "Led refactoring of a high-traffic freelance management platform. Designed microservices, improved Elasticsearch-based scoring, and delivered scalable VMS architecture with Laravel."
    },
    {
      title: "Tech Team Lead",
      company: "Selected Geeks | Brighton, UK",
      period: "May 2017 – Nov 2019",
      description:
        "Managed migration from monolith to microservices using Symfony, Sylius, and Kafka. Introduced DDD, automated CI/CD pipelines, and improved product delivery through agile team leadership."
    },
    {
      title: "Tech Team Lead",
      company: "SnappMarket | Tehran, Iran",
      period: "Jun 2015 – Apr 2017",
      description:
        "Implemented CQRS and Domain-Driven Design for Iran’s largest online hypermarket. Built scalable Symfony-based enterprise systems and mentored developers in modern backend practices."
    },
    {
      title: "Software Engineer",
      company: "Digikala | Tehran, Iran",
      period: "Mar 2014 – May 2015",
      description:
        "Developed delivery microservices for the region’s largest e-commerce platform. Enhanced API performance, Elasticsearch integration, and system scalability for millions of users."
    }
  ],
  contact: {
    intro: "Need help with architecture, AI enablement, or a talk for your team? Send a note and I'll reply soon.",
    success: "Thanks! I'll get back to you soon.",
    email: "alirezarahmani@example.com",
    location: "Vancouver, BC, Canada"
  },
  social: {
    linkedin: "https://www.linkedin.com/in/rahmanikhalili/",
    substack: "https://nidly.substack.com/",
    github: "https://github.com/alirezarahmani",
    youtube: "https://www.youtube.com/@alirezaRahmanikhalili",
    symfony: "https://connect.symfony.com/profile/alirezarahmani"
  },
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rahmanikhalili/",
      icon: "💼"
    },
    {
      name: "GitHub",
      url: "https://github.com/alirezarahmani",
      icon: "🐙"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/alirezarahmani",
      icon: "🐦"
    }
  ],
  booking: {
    title: "Book a Discovery Call",
    desc: "Choose a time that works. We'll map goals, constraints, and the fastest responsible path.",
    calendly_iframe: "https://calendly.com/alirezarahmani-p-ty/30min"
  },
  calendly: "https://calendly.com/alirezarahmani-p-ty/30min",
  privacy: {
    url: "/privacy"
  }
}

export type Service = typeof siteData.services[0]
export type CaseStudy = typeof siteData.caseStudies[0]
export type Article = typeof siteData.articles[0]
export type Testimonial = typeof siteData.testimonials[0]
