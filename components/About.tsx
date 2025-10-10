'use client'

import { motion } from 'framer-motion'
import { siteData } from '@/lib/data'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-navy/85 to-navy/80">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-light mb-8">
            {siteData.about.headline}
          </h2>
          
          <div className="space-y-6 text-lg text-light/80 text-left">
            {siteData.about.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-8 px-8 py-3 bg-accent text-navy font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300"
          >
            {siteData.about.cta}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}