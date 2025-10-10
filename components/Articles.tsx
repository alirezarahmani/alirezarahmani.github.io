'use client'

import { motion } from 'framer-motion'
import { siteData } from '@/lib/data'

export default function Articles() {
  return (
    <section id="articles" className="py-20 bg-gradient-to-b from-navy/90 to-navy/85">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-light mb-4">
            Articles
          </h2>
          <p className="text-light/70 text-lg max-w-2xl mx-auto">
            Deep dives on DDD, AI engineering, and practical architecture
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.articles.map((article, index) => (
            <motion.a
              key={article.title}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-navy/50 backdrop-blur-sm border border-light/10 rounded-lg p-6 hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full">
                  {article.source}
                </span>
                <svg
                  className="w-5 h-5 text-light/50 group-hover:text-accent transition-colors"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-light group-hover:text-accent transition-colors">
                {article.title}
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}