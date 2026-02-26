import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const contactMethods = [
    {
      label: 'Email',
      value: 'hello@easonwu.design',
      link: 'mailto:hello@easonwu.design',
      icon: '✉',
    },
    {
      label: 'Behance',
      value: 'View Portfolio',
      link: 'https://www.behance.net/j133244c646',
      icon: '⬢',
    },
    {
      label: 'Instagram',
      value: '@510_1208',
      link: 'https://www.instagram.com/510_1208/',
      icon: '◎',
    },
  ]

  const socials = [
    {
      name: 'LinkedIn',
      link: 'https://linkedin.com',
      icon: 'in',
    },
    {
      name: 'Dribbble',
      link: 'https://dribbble.com',
      icon: 'Dr',
    },
    {
      name: 'Behance',
      link: 'https://www.behance.net/j133244c646',
      icon: 'Be',
    },
  ]

  return (
    <section id="contact" ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <motion.p
            className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-6 font-light"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Get in Touch
          </motion.p>
          <h2 className="text-6xl md:text-8xl font-light tracking-tighter text-white mb-6">
            Let's Create{' '}
            <span className="bg-gradient-to-r from-accent-secondary to-accent-tertiary bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group block p-8 bg-dark-surface border border-dark-border rounded-2xl hover:border-accent-primary transition-all duration-300"
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <div className="flex items-start gap-6">
                  <div className="text-3xl text-accent-primary">{method.icon}</div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
                      {method.label}
                    </p>
                    <p className="text-xl text-white group-hover:text-accent-primary transition-colors duration-300">
                      {method.value}
                    </p>
                  </div>
                  <motion.svg
                    className="w-6 h-6 text-gray-600 group-hover:text-accent-primary transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 5, rotate: -45 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Availability Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-gradient-to-br from-dark-elevated to-dark-surface border border-dark-border rounded-3xl p-10 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-secondary/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Status</p>
                </div>

                <h3 className="text-4xl font-light text-white mb-6">
                  Available for{' '}
                  <span className="text-accent-primary">freelance</span>
                </h3>

                <p className="text-gray-400 leading-relaxed mb-8">
                  Open to typography, visual identity, and editorial design projects.
                  Currently based in Barcelona and available for remote collaboration worldwide.
                </p>

                <div className="flex flex-wrap gap-4">
                  {['Typography', 'Branding', 'Editorial', 'Digital'].map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-dark-bg border border-dark-border rounded-full text-sm text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-8 font-light">
            Also find me on
          </p>
          <div className="flex items-center justify-center gap-6">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center bg-dark-surface border border-dark-border rounded-full hover:border-accent-primary transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm font-medium text-gray-400 group-hover:text-accent-primary transition-colors">
                  {social.icon}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
