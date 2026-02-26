import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      title: 'Project Alpha',
      description: 'A modern web application built with React and TypeScript',
      tags: ['React', 'TypeScript', 'Tailwind'],
      link: '#',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      title: 'Project Beta',
      description: 'E-commerce platform with real-time inventory management',
      tags: ['Next.js', 'Node.js', 'PostgreSQL'],
      link: '#',
      gradient: 'from-green-500 to-teal-600',
    },
    {
      title: 'Project Gamma',
      description: 'AI-powered analytics dashboard for business intelligence',
      tags: ['Python', 'TensorFlow', 'D3.js'],
      link: '#',
      gradient: 'from-orange-500 to-red-600',
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="work" ref={ref} className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Selected Work
          </h2>
          <p className="text-xl text-gray-600">
            Here are some projects I've worked on recently
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <motion.a
                href={project.link}
                className="block h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <span className="text-white text-6xl font-bold opacity-20">
                    {project.title[0]}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
