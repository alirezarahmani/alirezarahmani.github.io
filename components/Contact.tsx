
'use client'

import { motion } from 'framer-motion'
import { siteData } from '@/lib/data'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-navy/75 to-navy/90">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-light mb-4">
            Get In Touch
          </h2>
          <p className="text-light/70 text-lg">
            Let's discuss your next project
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-navy/50 backdrop-blur-sm border border-light/20 rounded-xl p-8"
        >
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-light mb-4">Contact Information</h3>
              <div className="space-y-3">
                <p className="text-light/70">
                  <span className="font-semibold text-light">Email:</span>{' '}
                  <a href={`mailto:${siteData.contact.email}`} className="text-accent hover:text-accent/80">
                    {siteData.contact.email}
                  </a>
                </p>
                <p className="text-light/70">
                  <span className="font-semibold text-light">Location:</span> {siteData.contact.location}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-light mb-4">Social Links</h3>
              <div className="flex gap-4">
                {siteData.socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light/70 hover:text-accent transition-colors"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-light/70 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-navy/30 border border-light/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-light/70 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-navy/30 border border-light/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-light/70 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full bg-navy/30 border border-light/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-accent transition-colors"
                placeholder="Subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-light/70 mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-navy/30 border border-light/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-accent transition-colors"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-navy font-semibold py-3 px-6 rounded-lg hover:bg-accent/80 transition-colors"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
