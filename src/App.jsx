import React, { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import P5Background from './components/P5Background'

// Lazy load sections not visible above the fold
const LazyAbout = lazy(() => import('./components/About'))
const LazyProjects = lazy(() => import('./components/Projects'))
const LazyContact = lazy(() => import('./components/Contact'))

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <P5Background />
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-screen" />}>
          <LazyProjects />
          <LazyAbout />
          <LazyContact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
