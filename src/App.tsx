import React from 'react';
import { 
  Code2, 
  Brain, 
  Database, 
  Cloud, 
  Mail, 
  Linkedin, 
  Github, 
  ExternalLink,
  Award,
  BookOpen,
  Cpu,
  Server,
  Zap
} from 'lucide-react';

function App() {
  const skills = [
    { name: 'System Architecture', icon: Server, level: 95 },
    { name: 'AI/LLM Integration', icon: Brain, level: 90 },
    { name: 'Vector Databases', icon: Database, level: 88 },
    { name: 'Go/Golang', icon: Code2, level: 92 },
    { name: 'Python', icon: Code2, level: 90 },
    { name: 'AWS/Cloud', icon: Cloud, level: 93 },
    { name: 'Symfony/Laravel', icon: Code2, level: 95 },
    { name: 'Domain-Driven Design', icon: Cpu, level: 94 }
  ];

  const projects = [
    {
      title: 'AI-Powered MLS Backend System',
      description: 'Architected enterprise-grade real-time MLS synchronization system with AI enrichment capabilities, processing millions of property records daily.',
      technologies: ['Go', 'Python', 'AWS', 'Vector DB', 'RAG', 'Microservices'],
      highlights: [
        'Built Go microservices for high-throughput image fetching and processing',
        'Integrated Python analytics pipelines with LLM-powered data enrichment',
        'Achieved 10x scalability improvement through cloud-native refactoring',
        'Implemented real-time sync with 99.9% uptime reliability'
      ]
    },
    {
      title: 'Intelligent Search & RAG Pipeline',
      description: 'Developed sophisticated search system using Vector Databases and RAG architecture for real estate market intelligence.',
      technologies: ['Vector DB', 'Embeddings', 'RAG', 'LLM', 'Python', 'AWS'],
      highlights: [
        'Optimized embeddings for real estate domain-specific queries',
        'Built retrieval-augmented generation pipeline for market insights',
        'Reduced search response time by 70% with vector similarity matching',
        'Integrated multiple LLM providers for enhanced data analysis'
      ]
    },
    {
      title: 'Legacy System Modernization',
      description: 'Led complete architectural transformation from monolithic Symfony/Laravel systems to cloud-native microservices.',
      technologies: ['Symfony', 'Laravel', 'DDD', 'Kubernetes', 'AWS', 'Go'],
      highlights: [
        'Applied Domain-Driven Design principles for clean architecture',
        'Migrated 500K+ lines of legacy code with zero downtime',
        'Implemented event-driven architecture for better scalability',
        'Established CI/CD pipelines reducing deployment time by 80%'
      ]
    }
  ];

  const publications = [
    {
      title: 'Domain-Driven Design in Modern Backend Systems',
      platform: 'DZone',
      description: 'Comprehensive guide on implementing DDD principles in large-scale applications.',
      link: '#'
    },
    {
      title: 'AI Integration Patterns for Real Estate Technology',
      platform: 'DZone',
      description: 'Best practices for integrating LLMs and Vector Databases in property management systems.',
      link: '#'
    },
    {
      title: 'Scaling MLS Data Processing with Go Microservices',
      platform: 'DZone',
      description: 'Technical deep-dive into building high-performance real estate data pipelines.',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Alireza Rahmani Khalili
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Principal Software Engineer | AI-Driven Backend | LLM Integration
            </p>
            <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Transforming enterprise systems through AI-powered architecture and scalable cloud solutions
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <a href="#projects" className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                View Projects
              </a>
              <a href="#contact" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  With over <strong>10 years of experience</strong> in software engineering, I specialize in architecting 
                  AI-powered backend systems that scale from startup agility to enterprise reliability.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Currently serving as <strong>Principal Software Engineer at Roomvu</strong>, I lead the development 
                  of cutting-edge real estate technology solutions, integrating AI capabilities with robust system design.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  As a <strong>Symfony Certified Engineer</strong>, I bring deep expertise in system architecture, 
                  Domain-Driven Design, and modern cloud technologies to every project I undertake.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <Award className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700 font-medium">Symfony Certified Professional</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Core Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Brain className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">AI/LLM Integration & Vector Databases</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Server className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">System Architecture & DDD</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Cloud className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">AWS & Cloud-Native Development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code2 className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Go, Python, Symfony/Laravel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Featured Projects</h2>
            <div className="space-y-12">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <h3 className="text-2xl font-bold mb-4 text-gray-800">{project.title}</h3>
                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">{project.description}</p>
                      <div className="space-y-3">
                        {project.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <Zap className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-800 mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <skill.icon className="w-6 h-6 text-blue-600" />
                    <span className="font-semibold text-gray-800">{skill.name}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-right mt-2 text-sm text-gray-600">{skill.level}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Publications & Writing</h2>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium text-blue-600">{pub.platform}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">{pub.title}</h3>
                      <p className="text-gray-600">{pub.description}</p>
                    </div>
                    <a href={pub.link} className="ml-4 p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Let's Build Something Amazing</h2>
            <p className="text-xl mb-12 text-blue-100">
              Ready to discuss your next AI-powered backend project? I'm available for global remote opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <a href="mailto:alireza@alirezarahmani.com" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300">
                <Mail className="w-5 h-5" />
                <span>alireza@alirezarahmani.com</span>
              </a>
              <a href="https://linkedin.com/in/alirezarahmani" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/alirezarahmani" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Alireza Rahmani Khalili. All rights reserved.</p>
          <p className="mt-2">alirezarahmani.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;