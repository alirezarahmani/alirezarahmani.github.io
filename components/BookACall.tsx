
'use client'

import { motion } from 'framer-motion'
import { siteData } from '@/lib/data'

export default function BookACall() {
  return (
    <section id="book-a-call" className="py-20 bg-gradient-to-b from-navy/90 to-navy">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-light mb-4">
            Book a Call
          </h2>
          <p className="text-light/70 text-lg mb-8">
            Schedule a consultation to discuss your project
          </p>
          <a
            href={siteData.calendly || 'https://calendly.com'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-navy font-semibold py-4 px-8 rounded-lg hover:bg-accent/80 transition-colors"
          >
            Schedule a Meeting
          </a>
        </motion.div>
      </div>
    </section>
  )
}
