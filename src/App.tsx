import { useEffect, useRef, useState } from 'react';
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
  Zap,
  ArrowRight,
  FileText,
  Layers,
  Sparkles,
  ChevronDown
} from 'lucide-react';

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 1.5 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${this.opacity})`;
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      title: 'Domain-Driven Design in Modern PHP Applications',
      platform: 'DZone',
      description: 'Comprehensive guide to implementing DDD patterns in Symfony and Laravel projects.',
      link: 'https://dzone.com/users/4285368/alirezarahmani.html'
    },
    {
      title: 'AI Integration Patterns for Real Estate Technology',
      platform: 'DZone',
      description: 'Best practices for integrating LLMs and Vector Databases in property management systems.',
      link: 'https://dzone.com/users/4285368/alirezarahmani.html'
    },
    {
      title: 'Scaling MLS Data Processing with Go Microservices',
      platform: 'DZone',
      description: 'Technical deep-dive into building high-performance real estate data pipelines.',
      link: 'https://dzone.com/users/4285368/alirezarahmani.html'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white">
      {/* Revolutionary Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Canvas */}
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 opacity-30"
        />

        {/* Dynamic Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
              left: `${mousePosition.x * 0.02}px`,
              top: `${mousePosition.y * 0.02}px`,
              transition: 'all 0.3s ease-out'
            }}
          />
          <div 
            className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
              right: `${mousePosition.x * 0.015}px`,
              bottom: `${mousePosition.y * 0.015}px`,
              transition: 'all 0.3s ease-out'
            }}
          />
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse-slow" />
        </div>

        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/20 via-transparent to-blue-950/20" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 py-32">
          <div className="max-w-6xl mx-auto">
            
            {/* Floating Badge */}
            <div className="flex justify-center mb-12 animate-fade-in-up">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-500/10 to-blue-500/10 backdrop-blur-xl border border-violet-500/20 rounded-full px-6 py-3 shadow-lg shadow-violet-500/10">
                <Sparkles className="w-4 h-4 text-violet-400 animate-pulse" />
                <span className="text-sm font-medium bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                  Available for Remote Opportunities
                </span>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column - Text Content */}
              <div className="space-y-8">
                {/* Name */}
                <div className="space-y-4 animate-fade-in-up animation-delay-100">
                  <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-none tracking-tight">
                    <span className="block bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
                      Alireza
                    </span>
                    <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mt-2">
                      Rahmani Khalili
                    </span>
                  </h1>
                </div>

                {/* Title */}
                <div className="space-y-4 animate-fade-in-up animation-delay-200">
                  <div className="flex items-center gap-3">
                    <div className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent" />
                    <p className="text-xl text-violet-300 font-light tracking-wide">
                      Principal
                    </p>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-white">
                    Software Engineer & AI Systems Architect
                  </h2>
                </div>

                {/* Description */}
                <div className="space-y-4 animate-fade-in-up animation-delay-300">
                  <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                    Building the future of real estate through <span className="text-violet-300 font-medium">AI</span>, 
                    <span className="text-purple-300 font-medium"> data</span>, and 
                    <span className="text-blue-300 font-medium"> elegant systems</span>.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-4 animate-fade-in-up animation-delay-400">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">10+</div>
                    <div className="text-violet-300 text-sm">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">50+</div>
                    <div className="text-violet-300 text-sm">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">5M+</div>
                    <div className="text-violet-300 text-sm">Records Processed</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-6 animate-fade-in-up animation-delay-500">
                  <a 
                    href="#projects" 
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-violet-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    <span>View My Work</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="#publications" 
                    className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-violet-900 transition-all duration-300"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Read Articles</span>
                  </a>
                </div>
              </div>

              {/* Right Column - Visual Elements */}
              <div className="space-y-8 animate-fade-in-up animation-delay-600">
                {/* Expertise Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-violet-900/40 to-purple-900/40 p-5 rounded-xl border border-violet-500/20 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Brain className="w-5 h-5 text-violet-400" />
                      <span className="text-white font-medium">AI & LLM</span>
                    </div>
                    <p className="text-sm text-gray-300">Advanced integration and optimization</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 p-5 rounded-xl border border-blue-500/20 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Server className="w-5 h-5 text-blue-400" />
                      <span className="text-white font-medium">Backend</span>
                    </div>
                    <p className="text-sm text-gray-300">Scalable architecture design</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 p-5 rounded-xl border border-purple-500/20 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Cloud className="w-5 h-5 text-purple-400" />
                      <span className="text-white font-medium">Cloud</span>
                    </div>
                    <p className="text-sm text-gray-300">AWS & Kubernetes solutions</p>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 p-5 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Code2 className="w-5 h-5 text-cyan-400" />
                      <span className="text-white font-medium">Languages</span>
                    </div>
                    <p className="text-sm text-gray-300">Go, Python, PHP expertise</p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="bg-gradient-to-r from-gray-900/50 to-violet-900/30 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold mb-4 text-white">Core Technologies</h3>
                  <div className="flex flex-wrap gap-3">
                    {['Go', 'Python', 'Vector DB', 'AWS', 'Kubernetes', 'Symfony', 'Laravel'].map((tech, index) => (
                      <span key={index} className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce animate-fade-in-up animation-delay-700">
              <ChevronDown className="w-6 h-6 text-violet-400" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  With over <strong>10 years of experience</strong> in software engineering, I specialize in architecting 
                  AI-powered backend systems that scale from startup agility to enterprise reliability.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Currently serving as <strong>Principal Software Engineer at Roomvu</strong>, I lead the development 
                  of cutting-edge real estate technology solutions, integrating AI capabilities with robust system design.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  As a <strong>Symfony Certified Engineer</strong>, I bring deep expertise in system architecture, 
                  Domain-Driven Design, and modern cloud technologies to every project I undertake.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <Award className="w-6 h-6 text-violet-400" />
                  <span className="text-gray-300 font-medium">Symfony Certified Professional</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-violet-900/50 to-blue-900/50 p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-semibold mb-6 text-white">Core Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Brain className="w-5 h-5 text-violet-400" />
                    <span className="text-gray-300">AI/LLM Integration & Vector Databases</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Server className="w-5 h-5 text-violet-400" />
                    <span className="text-gray-300">System Architecture & DDD</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Cloud className="w-5 h-5 text-violet-400" />
                    <span className="text-gray-300">AWS & Cloud-Native Development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code2 className="w-5 h-5 text-violet-400" />
                    <span className="text-gray-300">Go, Python, Symfony/Laravel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">Featured Projects</h2>
            <div className="space-y-12">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-900 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-white/10">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
                      <p className="text-gray-400 mb-6 text-lg leading-relaxed">{project.description}</p>
                      <div className="space-y-3">
                        {project.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <Zap className="w-4 h-4 text-violet-400 mt-1 flex-shrink-0" />
                            <span className="text-gray-300">{highlight}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-white mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-violet-900/50 text-violet-300 px-3 py-1 rounded-full text-sm font-medium">
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
      <section id="skills" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-800/50 to-violet-900/30 p-6 rounded-xl border border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <skill.icon className="w-6 h-6 text-violet-400" />
                    <span className="font-semibold text-white">{skill.name}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-violet-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-right mt-2 text-sm text-gray-400">{skill.level}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">Publications & Writing</h2>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <BookOpen className="w-5 h-5 text-violet-400" />
                        <span className="text-sm font-medium text-violet-400">{pub.platform}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-white">{pub.title}</h3>
                      <p className="text-gray-400">{pub.description}</p>
                    </div>
                    <a href={pub.link} className="ml-4 p-2 text-violet-400 hover:bg-violet-900/30 rounded-lg transition-colors">
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
      <section className="py-20 bg-gradient-to-r from-violet-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Let's Build Something Amazing</h2>
            <p className="text-xl mb-12 text-violet-200">
              Ready to discuss your next AI-powered backend project? I'm available for global remote opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <a href="mailto:alireza@alirezarahmani.com" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300">
                <Mail className="w-5 h-5" />
                <span>alireza@alirezarahmani.com</span>
              </a>
              <a href="https://www.linkedin.com/in/rahmanikhalili/" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300">
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
      <footer className="bg-black text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Alireza Rahmani Khalili. All rights reserved.</p>
          <p className="mt-2">alirezarahmani.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;