'use client'

import { motion } from 'framer-motion'
import { siteData } from '@/lib/data'

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
              <h3 className="text-xl font-bold text-light mb-3">{article.title}</h3>
              <p className="text-light/70 mb-4">{article.excerpt}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors"
              >
                Read More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}