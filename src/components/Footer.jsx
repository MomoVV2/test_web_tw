import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-dark-bg border-t border-gray-200 dark:border-dark-border text-gray-900 dark:text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h3
            className="text-4xl md:text-5xl font-light tracking-tight mb-4 text-gray-900 dark:text-white"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Eason Wu
          </motion.h3>
          <p className="text-gray-600 dark:text-gray-400 mb-12 text-lg font-light">
            Visual Designer & Typographer
          </p>

          {/* Navigation Links */}
          <div className="flex justify-center gap-12 mb-12">
            {['Work', 'About', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-accent-primary transition-colors tracking-wide uppercase"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            {[
              { name: 'Behance', url: 'https://www.behance.net/j133244c646' },
              { name: 'Instagram', url: 'https://www.instagram.com/510_1208/' },
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-100 dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-full text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-accent-primary transition-all duration-300"
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.name}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 dark:border-dark-border pt-8">
            <motion.p
              className="text-gray-500 text-sm font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              © {currentYear} Eason Wu. Crafted in{' '}
              <span className="text-accent-primary">Taipei</span> ·{' '}
              <span className="text-accent-secondary">Taiwan</span>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
