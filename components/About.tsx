'use client'

import { motion } from 'framer-motion'
import { siteData } from '@/lib/data'

export default function About() {
  return (
    <section 
      id="about" 
      className="py-20 md:py-28 bg-navy relative overflow-hidden"
    >
      {/* Subtle radial vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(600px circle at 15% 20%, rgba(30, 58, 138, 0.13), transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
            <h2 className="text-4xl md:text-5xl font-bold text-light mb-4">
            About Me
          </h2>
        </motion.div>

        {/* 3-Column Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-10">
          {/* Column 1: Who I Am */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <motion.div 
              className="bg-white/6 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-300"
              whileHover={{ 
                y: -2,
                borderColor: 'rgba(56, 189, 248, 0.3)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <svg 
                  className="w-5 h-5 text-white/90" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24"
                >
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  Who I Am
                </h3>
              </div>
              <p className="text-white/85 leading-relaxed max-w-prose">
                {siteData.profile.bio}
              </p>
            </motion.div>
          </motion.div>

          {/* Column 2: Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-1"
          >
            <motion.div 
              className="bg-white/6 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-300"
              whileHover={{ 
                y: -2,
                borderColor: 'rgba(56, 189, 248, 0.3)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <svg 
                  className="w-5 h-5 text-white/90" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24"
                >
                  <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  Skills
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {siteData.profile.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ 
                      borderColor: 'rgba(56, 189, 248, 0.4)',
                      transition: { duration: 0.2 }
                    }}
                    className="px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/90 text-sm font-medium cursor-default transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Column 3: Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <motion.div 
              className="bg-white/6 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-300"
              whileHover={{ 
                y: -2,
                borderColor: 'rgba(56, 189, 248, 0.3)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <svg 
                  className="w-5 h-5 text-white/90" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24"
                >
                  <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  Experience
                </h3>
              </div>
              <div className="space-y-6 border-l border-white/10 pl-6">
                {siteData.experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div 
                      className="absolute -left-[27px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#38BDF8]"
                      style={{
                        boxShadow: '0 0 0 3px rgba(56, 189, 248, 0.2)',
                      }}
                    />
                    
                    <h4 className="text-base font-bold text-white mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-[#38BDF8] text-sm font-medium mb-0.5">
                      {exp.company}
                    </p>
                    <p className="text-white/60 text-xs">
                      {exp.period}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}