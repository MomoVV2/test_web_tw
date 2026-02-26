import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Eason Wu</h3>
          <p className="text-gray-400 mb-6">
            Product Designer & Developer
          </p>

          <div className="flex justify-center gap-8 mb-8">
            {['Work', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © {currentYear} Eason Wu. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Built with React + Vite, deployed on Vercel
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
