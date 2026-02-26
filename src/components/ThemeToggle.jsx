import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved preference or default to light
    const savedTheme = localStorage.getItem('theme')
    const shouldBeDark = savedTheme === 'dark'

    setIsDark(shouldBeDark)

    // Immediately apply the class to prevent flash
    if (shouldBeDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    // Apply the change immediately before state update
    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-24 right-6 z-[100] p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 group cursor-pointer pointer-events-auto"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
      type="button"
    >
      <motion.div
        className="relative w-6 h-6 pointer-events-none"
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.5 }}
      >
        {/* Sun Icon */}
        <motion.svg
          className={`absolute inset-0 w-6 h-6 ${isDark ? 'opacity-0' : 'opacity-100'} text-yellow-500`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: isDark ? 0 : 1, rotate: isDark ? -180 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <circle cx="12" cy="12" r="5" strokeWidth={2} />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
          />
        </motion.svg>

        {/* Moon Icon */}
        <motion.svg
          className={`absolute inset-0 w-6 h-6 ${isDark ? 'opacity-100' : 'opacity-0'} text-blue-400`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: isDark ? 1 : 0, rotate: isDark ? 0 : 180 }}
          transition={{ duration: 0.5 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </motion.svg>
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
