'use client'

import { motion } from 'framer-motion'
import { siteData } from '@/lib/data'

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-navy/90 to-navy/80">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-light mb-4">
            Services
          </h2>
          <p className="text-light/70 text-lg max-w-2xl mx-auto">
            Comprehensive solutions for your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-navy/50 backdrop-blur-sm border border-light/20 rounded-xl p-6 hover:border-accent transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-light mb-3">{service.title}</h3>
              <p className="text-light/70">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}