'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import {roles, siteData} from '@/lib/data'
import { motion } from 'framer-motion'

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(to bottom right, rgba(37,99,235,0.6), rgba(56,189,248,0.35))',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            {/* Social Icons */}
            <div className="flex gap-4 mb-8 justify-center md:justify-start">
              <a
                href={siteData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href={siteData.social.substack}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light hover:opacity-80 transition-opacity"
                aria-label="Substack"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                </svg>
              </a>
              {/*<a*/}
              {/*  href={siteData.social.github}*/}
              {/*  target="_blank"*/}
              {/*  rel="noopener noreferrer"*/}
              {/*  className="text-light hover:opacity-80 transition-opacity"*/}
              {/*  aria-label="GitHub"*/}
              {/*>*/}
              {/*  <svg*/}
              {/*    className="w-6 h-6"*/}
              {/*    fill="none"*/}
              {/*    stroke="currentColor"*/}
              {/*    strokeWidth="2"*/}
              {/*    viewBox="0 0 24 24"*/}
              {/*  >*/}
              {/*    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />*/}
              {/*  </svg>*/}
              {/*</a>*/}
              {/*<a*/}
              {/*  href={siteData.social.youtube}*/}
              {/*  target="_blank"*/}
              {/*  rel="noopener noreferrer"*/}
              {/*  className="text-light hover:opacity-80 transition-opacity"*/}
              {/*  aria-label="YouTube"*/}
              {/*>*/}
              {/*  <svg*/}
              {/*    className="w-6 h-6"*/}
              {/*    fill="none"*/}
              {/*    stroke="currentColor"*/}
              {/*    strokeWidth="2"*/}
              {/*    viewBox="0 0 24 24"*/}
              {/*  >*/}
              {/*    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 11.75a29 29 0 0 0-.46-5.33z" />*/}
              {/*    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />*/}
              {/*  </svg>*/}
              {/*</a>*/}
              <a
                href={siteData.social.symfony}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light hover:opacity-80 transition-opacity"
                aria-label="Symfony Certification"
              >
                  <Image
                      src="/symfony-svgrepo-com.svg"
                      alt="Symfony Certification"
                      width={24}
                      height={24}
                      className="w-7 h-7"
                  />
              </a>
            </div>

            {/* Hero Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-light mb-4">
              Hi, I&apos;m Alireza Rahmani Khalili
            </h1>

            {/* Role Display */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#3093d6]"
                >
                  {roles[currentRole]}
                </motion.span>
              </h2>
            </div>

            {/* Hero Description */}
            <p className="text-base md:text-lg lg:text-xl text-light/70 mb-10 max-w-2xl mx-auto md:mx-0">
              {siteData.profile.summary}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-light/30 text-light font-semibold rounded-full hover:border-accent hover:text-accent transition-all duration-300"
              >
                Get In Touch
              </a>
              <a
                href="#case-studies"
                className="px-8 py-3 border-2 border-light/30 text-light font-semibold rounded-full hover:border-accent hover:text-accent transition-all duration-300"
              >
                View My Work
              </a>
            </div>
          </motion.div>

          {/* Right Column - Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Animated background circles - reduced opacity */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 -z-10"
              >
                <div className="absolute top-0 right-0 w-72 h-72 bg-accent/30 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl opacity-30" />
              </motion.div>

              {/* Portrait container with modern styling */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
                {/* Decorative border - reduced opacity */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 via-blue-400/20 to-blue-600/20 p-1 animate-pulse">
                  <div className="w-full h-full rounded-full bg-navy/30 backdrop-blur-sm" />
                </div>

                {/* Portrait image */}
                <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-light/10 shadow-2xl">
                  <Image
                    src="/portrait-bg.jpg"
                    alt="Alireza Rahmani Khalili"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating accent elements - reduced opacity */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-accent/30 rounded-full blur-xl opacity-30"
                />
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500/30 rounded-full blur-xl opacity-30"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
