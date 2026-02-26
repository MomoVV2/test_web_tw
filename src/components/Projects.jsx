import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects = [
    {
      number: '01',
      title: 'TOKYO TDC',
      category: 'Typography',
      year: '2024',
      description: 'Annual typography design competition',
      link: 'https://www.behance.net/j133244c646',
    },
    {
      number: '02',
      title: 'Turquoise Font',
      category: 'Type Design',
      year: '2024',
      description: 'Custom typeface development',
      link: 'https://www.behance.net/j133244c646',
    },
    {
      number: '03',
      title: '2025 Typo',
      category: 'Editorial',
      year: '2024',
      description: 'Typography-forward editorial design',
      link: 'https://www.behance.net/j133244c646',
    },
    {
      number: '04',
      title: 'Visual Identity',
      category: 'Branding',
      year: '2023',
      description: 'Brand identity system',
      link: 'https://www.behance.net/j133244c646',
    },
    {
      number: '05',
      title: 'Global Architecture',
      category: 'Visual Design',
      year: '2023',
      description: 'Symbol-based identity system',
      link: 'https://www.behance.net/j133244c646',
    },
    {
      number: '06',
      title: 'Coding VIS',
      category: 'Digital',
      year: '2023',
      description: 'Computational visual design',
      link: 'https://www.behance.net/j133244c646',
    },
  ]

  return (
    <section id="work" ref={ref} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">Selected Work</p>
          <h2 className="text-5xl md:text-7xl font-light tracking-tight">
            Design <span className="text-gray-300">Projects</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group block border-t border-gray-200 py-12 hover:bg-gray-50 transition-colors -mx-6 px-6"
              whileHover={{ x: 10 }}
            >
              <div className="grid grid-cols-12 gap-4 items-center">
                <motion.span
                  className="col-span-1 text-xs text-gray-400 font-mono"
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 1 }}
                >
                  {project.number}
                </motion.span>

                <div className="col-span-12 md:col-span-5">
                  <h3 className="text-3xl md:text-4xl font-light tracking-tight group-hover:tracking-tight transition-all">
                    {project.title}
                  </h3>
                </div>

                <div className="col-span-12 md:col-span-4 flex items-center gap-4">
                  <span className="text-sm text-gray-500">{project.category}</span>
                  <span className="text-xs text-gray-300">·</span>
                  <span className="text-sm text-gray-400">{project.year}</span>
                </div>

                <div className="col-span-12 md:col-span-2 md:text-right">
                  <p className="text-sm text-gray-400">{project.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <motion.a
            href="https://www.behance.net/j133244c646"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gray-900 hover:text-gray-600 transition-colors"
            whileHover={{ gap: '12px' }}
          >
            View All Projects
            <span className="text-lg">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
