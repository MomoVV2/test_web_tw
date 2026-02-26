import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const text = "Eason Wu"
  const role = "Visual Designer"

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
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
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="space-y-2"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="overflow-hidden">
            <motion.p
              className="text-sm md:text-base tracking-[0.3em] uppercase text-gray-400 mb-8"
              variants={child}
            >
              Barcelona · Visual Design
            </motion.p>
          </motion.div>

          <motion.div className="overflow-hidden">
            <motion.h1
              className="text-[12vw] md:text-[10vw] font-light leading-[0.85] tracking-tighter text-gray-900"
              variants={child}
            >
              {text.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  whileHover={{ y: -10, rotation: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>

          <motion.div className="overflow-hidden">
            <motion.h2
              className="text-[8vw] md:text-[6vw] font-thin text-gray-300 leading-none"
              variants={child}
            >
              {role}
            </motion.h2>
          </motion.div>

          <motion.div
            className="flex items-center gap-8 mt-16 pt-8 border-t border-gray-200"
            variants={child}
          >
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">Typography</p>
              <p className="text-sm text-gray-900">Editorial Design</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">Identity</p>
              <p className="text-sm text-gray-900">Digital Design</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">Based in</p>
              <p className="text-sm text-gray-900">Barcelona, Spain</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Side indicator */}
      <motion.div
        className="absolute right-6 top-1/2 transform -translate-y-1/2 hidden md:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.p
          className="text-xs vertical-rl tracking-widest text-gray-400"
          style={{ writingMode: "vertical-rl" }}
        >
          SCROLL TO EXPLORE
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Hero
