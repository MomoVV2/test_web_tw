import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      // Enable Fast Refresh
      fastRefresh: true,
    }),
  ],
  build: {
    // Use esbuild for minification (faster than terser)
    minify: 'esbuild',
    // Split chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'animation': ['framer-motion'],
        },
      },
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Set target to modern browsers for smaller bundle
    target: 'es2020',
  },
  // Enable CSS preloading
  css: {
    devSourcemap: true,
  },
})
