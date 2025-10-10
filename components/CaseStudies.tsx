'use client'

import { motion } from 'framer-motion'
import { siteData } from '@/lib/data'

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 bg-gradient-to-b from-navy/95 to-navy/90">
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
            Real-world projects with measurable outcomes
          </p>
        </motion.div>

        <div className="space-y-8">
          {siteData.case_studies.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-navy/50 backdrop-blur-sm border border-light/10 rounded-lg p-8 hover:border-accent/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-light mb-4">
                {study.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {study.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-3 text-light/80">
                <p><strong className="text-light">Problem:</strong> {study.problem}</p>
                <p><strong className="text-light">Approach:</strong> {study.approach}</p>
                <p><strong className="text-light">Outcome:</strong> {study.outcome}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}