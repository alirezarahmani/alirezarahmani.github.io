'use client'

import { motion } from 'framer-motion'
import { siteData } from '@/lib/data'

export default function Testimonials() {
  const testimonials = siteData.testimonials || []

  if (testimonials.length === 0) {
    return null
  }

  return (
    <section id="testimonials" className="py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            What Others Say
          </h2>
          <p className="text-lg text-light/70 max-w-3xl mx-auto">
            Testimonials from colleagues and clients I&apos;ve had the pleasure to work with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy/50 border border-border rounded-lg p-8 flex flex-col"
            >
              <p className="text-light/80 mb-6 flex-grow">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-light">{testimonial.author}</p>
                  <p className="text-sm text-light/60">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}