import React, { useRef } from 'react'
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
      color: 'from-accent-primary to-accent-secondary',
    },
    {
      number: '02',
      title: 'Turquoise Font',
      category: 'Type Design',
      year: '2024',
      description: 'Custom typeface development',
      link: 'https://www.behance.net/j133244c646',
      color: 'from-accent-secondary to-accent-tertiary',
    },
    {
      number: '03',
      title: 'BLOSSOM FOREST',
      category: 'Visual Identity',
      year: '2020',
      description: 'Brand identity for forest conservation',
      link: 'https://www.behance.net/j133244c646',
      color: 'from-accent-tertiary to-accent-primary',
    },
    {
      number: '04',
      title: '2025 Typo',
      category: 'Editorial',
      year: '2024',
      description: 'Typography-forward editorial design',
      link: 'https://www.behance.net/j133244c646',
      color: 'from-accent-primary to-accent-tertiary',
    },
    {
      number: '05',
      title: 'Coding VIS',
      category: 'Digital',
      year: '2023',
      description: 'Computational visual design',
      link: 'https://www.behance.net/j133244c646',
      color: 'from-accent-secondary to-accent-primary',
    },
    {
      number: '06',
      title: 'Women of Adventure',
      category: 'Visual Design',
      year: '2022',
      description: 'Garmin adventure campaign visuals',
      link: 'https://www.behance.net/j133244c646',
      color: 'from-accent-tertiary to-accent-secondary',
    },
  ]

  return (
    <section id="work" ref={ref} className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <motion.p
            className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-6 font-light"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Selected Work
          </motion.p>
          <h2 className="text-6xl md:text-8xl font-light tracking-tighter text-white">
            Featured{' '}
            <span className="bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Projects List */}
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
              className="group relative block border-t border-dark-border py-16 -mx-6 px-6 hover:bg-dark-elevatedbg-dark-surface/50 transition-all duration-500"
              whileHover={{ x: 10 }}
            >
              {/* Hover gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              <div className="relative grid grid-cols-12 gap-6 items-center">
                {/* Project Number */}
                <motion.span
                  className="col-span-12 md:col-span-1 text-xs text-gray-400 dark:text-gray-400 font-mono group-hover:text-accent-primary transition-colors duration-300"
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 1, scale: 1.1 }}
                >
                  {project.number}
                </motion.span>

                {/* Project Title */}
                <div className="col-span-12 md:col-span-5">
                  <h3 className="text-4xl md:text-5xl font-light tracking-tight text-white group-hover:text-accent-primary transition-all duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Category and Year */}
                <div className="col-span-12 md:col-span-4 flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
                  <span className="text-sm text-gray-400 group-hover:text-white dark:group-hover:text-gray-300 transition-colors">{project.category}</span>
                  <span className="text-xs text-gray-400 dark:text-gray-400 hidden md:inline">·</span>
                  <span className="text-sm text-gray-500 group-hover:text-gray-400 dark:group-hover:text-gray-400 transition-colors">{project.year}</span>
                </div>

                {/* Description and Arrow */}
                <div className="col-span-12 md:col-span-2 flex items-center justify-between md:justify-end gap-4">
                  <p className="text-sm text-gray-500 group-hover:text-gray-400 dark:group-hover:text-gray-400 transition-colors hidden md:block">
                    {project.description}
                  </p>
                  <motion.svg
                    className="w-6 h-6 text-gray-400 dark:text-gray-400 group-hover:text-accent-primary transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 5, rotate: -45 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </div>
              </div>

              {/* Mobile Description */}
              <p className="text-sm text-gray-500 mt-4 md:hidden">
                {project.description}
              </p>
            </motion.a>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-32 text-center"
        >
          <motion.a
            href="https://www.behance.net/j133244c646"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-10 py-5 bg-dark-surface border border-dark-border rounded-full text-white hover:border-accent-primary transition-all duration-300 group"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(99, 102, 241, 0.3)' }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-sm uppercase tracking-[0.2em] font-light">View All Projects</span>
            <motion.span
              className="text-xl group-hover:text-accent-primary transition-colors"
              whileHover={{ x: 5 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
