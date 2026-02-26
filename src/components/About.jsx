import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const expertise = [
    {
      icon: '✤',
      title: 'Typography',
      description: 'Type design & editorial layouts',
    },
    {
      icon: '◉',
      title: 'Visual Identity',
      description: 'Brand systems & guidelines',
    },
    {
      icon: '◇',
      title: 'Editorial Design',
      description: 'Print & digital publications',
    },
    {
      icon: '△',
      title: 'Digital Design',
      description: 'Web & interactive experiences',
    },
  ]

  const timeline = [
    {
      year: '2024',
      title: 'ELISAVA Barcelona',
      role: 'Visual Design Student',
    },
    {
      year: '2023',
      title: 'Garmin',
      role: 'UI Designer · Taiwan',
    },
    {
      year: '2022',
      title: 'Freelance',
      role: 'Visual Designer',
    },
  ]

  return (
    <section id="about" ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-tertiary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
            About
          </motion.p>
          <h2 className="text-6xl md:text-8xl font-light tracking-tighter text-white">
            Crafting{' '}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Visual
            </span>{' '}
            Stories
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-20 mb-24">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-2xl text-gray-300 leading-relaxed font-light">
                I'm a Taiwanese visual designer based in{' '}
                <span className="text-white font-normal">Taipei</span>. I studied visual design at{' '}
                <span className="text-accent-primary">ELISAVA Barcelona</span> and previously worked at Garmin in Taiwan.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed font-light">
                My work sits at the intersection of traditional typography and contemporary digital
                design, crafting visual experiences that communicate with clarity and emotional
                resonance.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed font-light">
                My practice spans custom typeface development, comprehensive brand identities, and editorial design projects.
                I approach each project with meticulous attention to detail and a deep appreciation for the craft.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-dark-border">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-4xl font-light text-white mb-2">3+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Years Exp</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-4xl font-light text-white mb-2">20+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Projects</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-4xl font-light text-white mb-2">2</p>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Cities</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-8 font-light">
                Journey
              </p>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="group pl-6 border-l border-dark-border hover:border-accent-primary transition-colors duration-300"
                  >
                    <span className="text-sm text-accent-primary font-mono mb-2 block">
                      {item.year}
                    </span>
                    <h4 className="text-xl text-white font-light mb-1 group-hover:text-accent-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Status Card */}
            <motion.div
              className="bg-dark-elevated border border-dark-border rounded-2xl p-8"
              whileHover={{ scale: 1.02, borderColor: 'rgba(99, 102, 241, 0.3)' }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <p className="text-sm text-gray-400 uppercase tracking-wide">Status</p>
              </div>
              <p className="text-2xl text-white font-light mb-2">
                Available for freelance
              </p>
              <p className="text-sm text-gray-500">
                Open to typography, visual identity, and editorial design projects
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Expertise Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-12 font-light">
            Expertise
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group p-8 bg-dark-elevated border border-dark-border rounded-2xl hover:border-accent-primary/30 transition-all duration-300"
                whileHover={{ y: -8 }}
              >
                <div className="text-4xl mb-6 text-accent-primary">{item.icon}</div>
                <h3 className="text-xl text-white font-light mb-3 group-hover:text-accent-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
