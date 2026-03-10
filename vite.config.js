import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Production optimizations
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
      },
    },
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
    // Generate source maps for production debugging
    sourcemap: true,
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
