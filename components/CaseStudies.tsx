'use client'

import { motion } from 'framer-motion'
import { siteData } from '@/lib/data'

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 bg-gradient-to-b from-navy/80 to-navy/75">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-light mb-4">
            Case Studies
          </h2>
          <p className="text-light/70 text-lg max-w-2xl mx-auto">
            Real-world projects and success stories
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {siteData.caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-navy/50 backdrop-blur-sm border border-light/20 rounded-xl p-6 hover:border-accent transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-light mb-3">{study.title}</h3>
              <p className="text-light/70 mb-4">{study.description}</p>
              <div className="flex flex-wrap gap-2">
                {study.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}