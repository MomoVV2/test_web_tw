import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const contactMethods = [
    {
      label: 'Email',
      value: 'hello@easonwu.design',
      link: 'mailto:hello@easonwu.design',
    },
    {
      label: 'Behance',
      value: 'View Portfolio',
      link: 'https://www.behance.net/j133244c646',
    },
    {
      label: 'Location',
      value: 'Barcelona, Spain',
      link: null,
    },
  ]

  return (
    <section id="contact" ref={ref} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">Contact</p>
          <h2 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
            Let's <span className="text-gray-300">collaborate</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-2xl text-gray-600 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <p className="text-xl text-gray-500 leading-relaxed">
              Whether you have a question about typography, want to discuss a visual identity project,
              or just want to say hello, feel free to reach out.
            </p>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">
                Get in touch
              </p>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                      {method.label}
                    </p>
                    {method.link ? (
                      <motion.a
                        href={method.link}
                        target={method.link.startsWith('http') ? '_blank' : undefined}
                        rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-lg text-gray-900 hover:text-gray-600 transition-colors inline-block"
                        whileHover={{ x: 5 }}
                      >
                        {method.value}
                      </motion.a>
                    ) : (
                      <p className="text-lg text-gray-900">{method.value}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:pt-20"
          >
            <div className="bg-gray-50 p-12 border-l-2 border-gray-900">
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                Current Status
              </p>
              <h3 className="text-3xl font-light text-gray-900 mb-4">
                Available for freelance projects
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Open to typography, visual identity, and editorial design projects.
                Currently based in Barcelona and available for remote collaboration worldwide.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
