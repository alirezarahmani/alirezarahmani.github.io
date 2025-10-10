'use client'

import { siteData } from '@/lib/data'
import { motion } from 'framer-motion'

export default function Articles() {
  return (
    <section id="articles" className="py-20 bg-gradient-to-b from-navy/75 to-navy/80">
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
            Insights and thoughts on technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {siteData.articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-navy/50 backdrop-blur-sm border border-light/20 rounded-xl p-6 hover:border-accent transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                  {article.source}
                </span>
              </div>
              <h3 className="text-xl font-bold text-light mb-3">{article.title}</h3>
              <p className="text-light/70 mb-4">{article.excerpt}</p>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1"
              >
                Read More 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}