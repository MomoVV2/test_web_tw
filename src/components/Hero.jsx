import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const text = "Eason Wu"
  const role = "Visual Designer & Typographer"

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Gradient orbs for visual interest */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="space-y-4"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="overflow-hidden">
            <motion.p
              className="text-sm md:text-base tracking-[0.4em] uppercase text-gray-400 mb-12 font-light"
              variants={child}
            >
              Taiwanese Designer · ELISAVA Barcelona
            </motion.p>
          </motion.div>

          <motion.div className="overflow-hidden">
            <motion.h1
              className="text-[14vw] md:text-[11vw] font-light leading-[0.85] tracking-tighter text-white"
              variants={child}
              style={{
                textShadow: '0 0 80px rgba(99, 102, 241, 0.3)'
              }}
            >
              {text.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  whileHover={{ y: -15, rotation: 3, color: '#8b5cf6' }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>

          <motion.div className="overflow-hidden">
            <motion.h2
              className="text-[7vw] md:text-[5vw] font-extralight text-gray-400 leading-none tracking-wide"
              variants={child}
            >
              {role}
            </motion.h2>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-12 mt-20 pt-12 border-t border-dark-border"
            variants={child}
          >
            <motion.div
              className="group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2 group-hover:text-accent-primary transition-colors">Focus</p>
              <p className="text-base text-white font-light">Typography</p>
            </motion.div>
            <motion.div
              className="group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2 group-hover:text-accent-secondary transition-colors">Practice</p>
              <p className="text-base text-white font-light">Visual Identity</p>
            </motion.div>
            <motion.div
              className="group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2 group-hover:text-accent-tertiary transition-colors">Location</p>
              <p className="text-base text-white font-light">Barcelona · Taipei</p>
            </motion.div>
            <motion.div
              className="group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2 group-hover:text-accent-primary transition-colors">Status</p>
              <p className="text-base text-white font-light">Available for Freelance</p>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="mt-16"
            variants={child}
          >
            <motion.a
              href="#work"
              className="inline-flex items-center gap-4 px-8 py-4 bg-white text-dark-bg rounded-full hover:bg-accent-primary transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm font-medium tracking-wide">View Projects</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute right-8 md:right-12 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col items-center gap-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.p
          className="text-xs vertical-rl tracking-[0.3em] text-gray-500 font-light"
          style={{ writingMode: "vertical-rl" }}
        >
          SCROLL
        </motion.p>
        <motion.div
          className="w-px h-20 bg-gradient-to-b from-accent-primary to-transparent"
          animate={{ scaleY: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}

export default Hero
