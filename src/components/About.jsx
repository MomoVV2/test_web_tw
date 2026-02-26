import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const expertise = [
    {
      title: 'Typography',
      description: 'Type design & editorial layouts',
    },
    {
      title: 'Visual Identity',
      description: 'Brand systems & guidelines',
    },
    {
      title: 'Editorial Design',
      description: 'Print & digital publications',
    },
    {
      title: 'Digital Design',
      description: 'Web & interactive experiences',
    },
  ]

  return (
    <section id="about" ref={ref} className="py-32 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">About</p>
          <h2 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
            Creating <span className="text-gray-300">visual</span> narratives
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-16 mb-20"
        >
          <div className="space-y-6">
            <p className="text-xl text-gray-600 leading-relaxed">
              I'm a freelance visual designer based in Barcelona, Spain, specializing in
              typography-driven design and visual identity systems.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              My work sits at the intersection of traditional typography and contemporary digital
              design, crafting visual experiences that communicate with clarity and purpose.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              From custom typeface development to comprehensive brand identities, I approach each
              project with meticulous attention to detail and a deep appreciation for the craft of
              visual design.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Location</p>
              <p className="text-lg text-gray-900">Barcelona, Spain</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Availability</p>
              <p className="text-lg text-gray-900">Open for freelance projects</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Focus</p>
              <p className="text-lg text-gray-900">Typography & Visual Identity</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-8">Expertise</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="border-t border-gray-200 pt-6"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
