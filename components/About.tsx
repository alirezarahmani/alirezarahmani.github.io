'use client'

import { motion } from 'framer-motion'
import { siteData } from '@/lib/data'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-navy/80 to-navy/75">
      <div className="max-w-7xl mx-auto px-6">
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
          <p className="text-light/70 text-lg max-w-3xl mx-auto">
            {siteData.profile.bio}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-light mb-6">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {siteData.profile.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-accent/20 text-accent rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-light mb-6">Experience</h3>
            <div className="space-y-4">
              {siteData.experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-accent pl-4">
                  <h4 className="text-lg font-semibold text-light">{exp.title}</h4>
                  <p className="text-accent">{exp.company}</p>
                  <p className="text-light/60 text-sm">{exp.period}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}