
export const siteData = {
  profile: {
    name: "Alireza Rahmani",
    title: "Principal Software Engineer · AI/DDD Practitioner",
    summary: "Principal Software Engineer focused on AI-assisted systems, MLS-scale data pipelines, and pragmatic DDD. I build reliable Go/Python microservices, vector DB–backed retrieval, and boring deploys that actually ship.",
    location: "Azerbaijan (remote-friendly)",
    availability: "Open for consulting, architecture, and advisory."
  },
  services: [
    {
      slug: "cloud-solution-architecture",
      title: "Cloud Solution Architecture",
      desc: "Design scalable, secure cloud foundations with CI/CD, observability, and cost-aware patterns. Uptime steady, deploys boring."
    },
    {
      slug: "ai-systems-rag-pipelines",
      title: "AI Systems & RAG Pipelines",
      desc: "Embeddings, vector databases, retrieval orchestration, evaluation, and guardrails. From prototype to measurable impact."
    },
    {
      slug: "engineering-management",
      title: "Engineering Management",
      desc: "Team rituals that work, hiring loops, technical strategy, and delivery cadence based on data not vibes."
    },
    {
      slug: "devops-enablement",
      title: "DevOps Enablement",
      desc: "Infra-as-code, Kubernetes, resilient releases, incident hygiene, and postmortems people actually read."
    },
    {
      slug: "content-speaking",
      title: "Content & Speaking",
      desc: "Talks and deep-dive articles on DDD/BDD heuristics and AI-in-the-trenches engineering."
    },
    {
      slug: "career-coaching",
      title: "Career Coaching",
      desc: "Positioning, portfolios, interview prep, and negotiation for senior engineers and leads."
    }
  ],
  case_studies: [
    {
      slug: "roomvu-mls-platform",
      title: "Roomvu MLS Platform: Reliable Listing Sync at Scale",
      stack: ["Symfony/Laravel", "Kubernetes", "Go", "PostgreSQL", "RabbitMQ"],
      problem: "Fragmented MLS providers, inconsistent data, high change-rate, missing images.",
      approach: "Provider-normalization, resilient fetchers in Go, idempotent upserts, and performance-first pipelines.",
      outcome: "System became fully reliable, millions of listings synced with measurable latency and fewer defects.",
      link: "#"
    },
    {
      slug: "nidly-ai-marketing",
      title: "Nidly: AI-Driven Real-Estate Marketing SaaS",
      stack: ["Next.js", "FastAPI", "OpenAI", "pgvector", "Cloudflare"],
      problem: "Agents need automated listing videos, overlays, and scheduling with search/analytics.",
      approach: "Microservices in Go/Python, vector search across listings/news, AI content generation, calendar scheduling.",
      outcome: "Pilot-ready platform with clear plan for $9/$19/$49 tiers.",
      link: "#"
    },
    {
      slug: "news-ingestion-vector",
      title: "Vector News Ingestion & RAG",
      stack: ["Firecrawl", "SentenceTransformers", "pgvector", "FastAPI"],
      problem: "Real-estate intel scattered across sites; manual curation slow.",
      approach: "Scheduled crawling, metadata enrichment, embeddings, and retrieval APIs for downstream apps.",
      outcome: "Sub-2s query returns with high-signal summaries for agents and analysts.",
      link: "#"
    }
  ],
  articles: [
    {
      title: "Beyond Principles: Embracing Heuristics in DDD for Practical Solutions",
      source: "DZone",
      link: "#"
    },
    {
      title: "Behind the Feed: Engineering Real Estate Listings the Right Way",
      source: "DZone",
      link: "#"
    },
    {
      title: "From Listings to Leads: Engineering Real-Estate AI Agents with MCP",
      source: "Draft",
      link: "#"
    }
  ],
  about: {
    headline: "Hi There",
    body: [
      "I build systems where AI, DDD, and DevOps meet. My work spans MLS-scale ingestion, microservices in Go/Python, and vector DB pipelines that turn messy data into real products.",
      "I write research-driven pieces for DZone and speak about practical architecture, heuristics, and AI that reduces toil.",
      "If you want outcomes, not buzzwords, we'll get along."
    ],
    cta: "Hire Me Now"
  },
  testimonials: [
    {
      quote: "Alireza took a chaotic codebase and gave us reliable releases. We stopped firefighting.",
      author: "N. Farzad",
      role: "CTO, PropTech startup"
    },
    {
      quote: "Clear thinking, fast iterations, and honest trade-offs. Exactly what we needed.",
      author: "S. Momeni",
      role: "Head of Product"
    },
    {
      quote: "His AI architecture saved us weeks per quarter. Practical, measurable results.",
      author: "R. Jalili",
      role: "Engineering Manager"
    }
  ],
  contact: {
    intro: "Need help with architecture, AI enablement, or a talk for your team? Send a note and I'll reply soon.",
    fields: ["Name", "Work email", "Company (optional)", "Message", "Consent checkbox"],
    success: "Thanks — I'll get back to you soon."
  },
  social: {
    linkedin: "https://linkedin.com/in/your-profile",
    substack: "https://yourname.substack.com",
    github: "https://github.com/your-username",
    youtube: "https://youtube.com/@your-channel"
  },
  booking: {
    title: "Book a Discovery Call",
    desc: "Choose a time that works. We'll map goals, constraints, and the fastest responsible path.",
    calendly_iframe: "https://calendly.com/your-link/30min"
  }
}

export type Service = typeof siteData.services[0]
export type CaseStudy = typeof siteData.case_studies[0]
export type Article = typeof siteData.articles[0]
export type Testimonial = typeof siteData.testimonials[0]
