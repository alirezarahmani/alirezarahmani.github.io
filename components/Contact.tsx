
'use client'

import { motion } from 'framer-motion'
import { siteData } from '@/lib/data'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('https://formspree.io/f/xzzjjjdv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setErrorMessage('Failed to send message. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('An error occurred. Please try again later.')
      console.error('Form submission error:', error)
    }
  }

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
            {siteData.contact.intro}
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
                    className="text-2xl hover:scale-110 transition-transform"
                    aria-label={link.name}
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center"
            >
              {siteData.contact.success}
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center"
            >
              {errorMessage}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-light/70 mb-2">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  className="w-full bg-navy/30 border border-light/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-accent transition-colors disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-light/70 mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  className="w-full bg-navy/30 border border-light/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-accent transition-colors disabled:opacity-50"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-light/70 mb-2">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
                className="w-full bg-navy/30 border border-light/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-accent transition-colors disabled:opacity-50"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-light/70 mb-2">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
                rows={5}
                className="w-full bg-navy/30 border border-light/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-accent transition-colors disabled:opacity-50 resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-accent text-navy font-semibold py-3 px-6 rounded-lg hover:bg-accent/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
