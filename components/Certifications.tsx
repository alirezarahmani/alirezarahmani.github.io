
'use client'

import { siteData } from '@/lib/data'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-navy/80 to-navy/75">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-light mb-4">
            Certifications
          </h2>
          <p className="text-light/70 text-lg max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {siteData.certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-navy/50 backdrop-blur-sm border border-light/20 rounded-xl p-8 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 flex flex-col items-center text-center group"
            >
              {cert.logo && (
                <div className="mb-6 relative w-20 h-20 flex items-center justify-center">
                  <Image
                    src={cert.logo}
                    alt={cert.name}
                    width={80}
                    height={80}
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
              
              <h3 className="text-light font-bold text-xl mb-2 group-hover:text-accent transition-colors">
                {cert.name}
              </h3>
              
              <p className="text-light/70 text-sm mb-2">
                {cert.issuer}
              </p>
              
              <p className="text-accent text-sm font-medium">
                {cert.date}
              </p>
              
              <div className="mt-4 flex items-center gap-2 text-light/60 text-sm group-hover:text-accent transition-colors">
                <span>View Certificate</span>
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
