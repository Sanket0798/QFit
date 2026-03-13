import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Production optimizations
    target: 'es2015',
    minify: 'esbuild', // Use esbuild instead of terser (faster and no extra dependency)
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks for better caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['gsap', 'framer-motion'],
          'form-vendor': ['react-hook-form', 'yup'],
          'ui-vendor': ['lucide-react', 'react-slick', 'slick-carousel'],
        },
      },
    },
    // Disable source maps for production (better performance)
    sourcemap: false,
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  // Server configuration
  server: {
    port: 5173,
    strictPort: false,
    open: true,
  },
  // Preview configuration
  preview: {
    port: 4173,
    strictPort: false,
  },
})
