'use client'

import { motion } from 'framer-motion'
import { siteData } from '@/lib/data'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-navy/80 to-navy/75">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-light mb-4">
            Testimonials
          </h2>
          <p className="text-light/70 text-lg max-w-2xl mx-auto">
            What clients and colleagues say
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {siteData.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-navy/50 backdrop-blur-sm border border-light/20 rounded-xl p-6 hover:border-light/40 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-light/20 flex items-center justify-center mr-4">
                  <span className="text-light font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-light font-semibold">{testimonial.author}</h3>
                  <p className="text-light/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-light/80 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
