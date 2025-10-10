
export const siteData = {
  profile: {
    name: "Alireza Rahmani Khalili",
    title: "Full Stack Developer & AI Specialist",
    summary: "Passionate about building scalable applications and leveraging AI to solve complex problems.",
    bio: "With years of experience in software development, I specialize in creating innovative solutions that drive business growth.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "AI/ML",
      "Cloud Architecture",
      "DevOps"
    ]
  },
  services: [
    {
      slug: "web-development",
      title: "Web Development",
      desc: "Building modern, responsive web applications using cutting-edge technologies."
    },
    {
      slug: "ai-integration",
      title: "AI Integration",
      desc: "Implementing AI solutions to enhance business processes and user experiences."
    },
    {
      slug: "cloud-solutions",
      title: "Cloud Solutions",
      desc: "Designing and deploying scalable cloud infrastructure for your applications."
    },
    {
      slug: "consulting",
      title: "Consulting",
      desc: "Strategic technology consulting to help your business grow and innovate."
    },
    {
      slug: "api-development",
      title: "API Development",
      desc: "Creating robust and scalable APIs for seamless system integration."
    },
    {
      slug: "devops",
      title: "DevOps",
      desc: "Streamlining development workflows with modern DevOps practices."
    }
  ],
  caseStudies: [
    {
      slug: "e-commerce-platform",
      title: "E-Commerce Platform",
      description: "Built a scalable e-commerce solution handling 10k+ daily transactions.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
      problem: "Built a scalable e-commerce solution handling 10k+ daily transactions.",
      approach: "",
      outcome: "",
      link: "#"
    },
    {
      slug: "ai-powered-analytics",
      title: "AI-Powered Analytics",
      description: "Developed an AI-driven analytics dashboard for business intelligence.",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      problem: "Developed an AI-driven analytics dashboard for business intelligence.",
      approach: "",
      outcome: "",
      link: "#"
    },
    {
      slug: "mobile-app-backend",
      title: "Mobile App Backend",
      description: "Created a robust backend infrastructure for a mobile application.",
      technologies: ["Node.js", "MongoDB", "Redis", "Docker"],
      problem: "Created a robust backend infrastructure for a mobile application.",
      approach: "",
      outcome: "",
      link: "#"
    },
    {
      slug: "real-time-chat-system",
      title: "Real-time Chat System",
      description: "Implemented a real-time messaging system with WebSocket technology.",
      technologies: ["Socket.io", "React", "Express", "Redis"],
      problem: "Implemented a real-time messaging system with WebSocket technology.",
      approach: "",
      outcome: "",
      link: "#"
    }
  ],
  articles: [
    {
      title: "Building Scalable Applications",
      source: "Your Blog",
      link: "https://your-blog.com/article-1"
    },
    {
      title: "AI in Modern Development",
      source: "Your Blog",
      link: "https://your-blog.com/article-2"
    },
    {
      title: "Cloud Architecture Patterns",
      source: "Your Blog",
      link: "https://your-blog.com/article-3"
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
      quote: "Exceptional work! Delivered beyond expectations.",
      author: "John Doe",
      role: "CEO, Tech Company"
    },
    {
      quote: "Professional, efficient, and highly skilled developer.",
      author: "Jane Smith",
      role: "Product Manager"
    },
    {
      quote: "Great communication and technical expertise.",
      author: "Mike Johnson",
      role: "CTO, Startup"
    }
  ],
  experience: [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Company",
      period: "2020 - Present"
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency",
      period: "2018 - 2020"
    },
    {
      title: "Software Engineer",
      company: "Startup Inc",
      period: "2016 - 2018"
    }
  ],
  contact: {
    intro: "Need help with architecture, AI enablement, or a talk for your team? Send a note and I'll reply soon.",
    fields: ["Name", "Work email", "Company (optional)", "Message", "Consent checkbox"],
    success: "Thanks — I'll get back to you soon.",
    email: "your.email@example.com",
    location: "Your City, Country"
  },
  social: {
    linkedin: "https://linkedin.com/in/your-profile",
    substack: "https://your-substack.substack.com",
    github: "https://github.com/your-profile",
    youtube: "https://youtube.com/@your-channel"
  },
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/your-profile",
      icon: "💼"
    },
    {
      name: "GitHub",
      url: "https://github.com/your-profile",
      icon: "🐙"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/your-profile",
      icon: "🐦"
    }
  ],
  booking: {
    title: "Book a Discovery Call",
    desc: "Choose a time that works. We'll map goals, constraints, and the fastest responsible path.",
    calendly_iframe: "https://calendly.com/your-link"
  }
}

export type Service = typeof siteData.services[0]
export type CaseStudy = typeof siteData.caseStudies[0]
export type Article = typeof siteData.articles[0]
export type Testimonial = typeof siteData.testimonials[0]

export const roles = [
  "Full Stack Developer",
  "AI Specialist",
  "Cloud Architect",
  "Technical Consultant"
]
