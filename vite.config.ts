import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/', // ensures proper paths in production
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@/components', replacement: path.resolve(__dirname, './src/components') },
      { find: '@/components/ui', replacement: path.resolve(__dirname, './src/components/ui') },
      { find: '@/components/SEO', replacement: path.resolve(__dirname, './src/components/SEO') },
      { find: '@/components/ProtectedRoute', replacement: path.resolve(__dirname, './src/components/ProtectedRoute') },
      { find: '@/components/ErrorBoundary', replacement: path.resolve(__dirname, './src/components/ErrorBoundary') },
      { find: '@/components/LoadingSkeleton', replacement: path.resolve(__dirname, './src/components/LoadingSkeleton') },
      { find: '@/components/admin/AdminLogin', replacement: path.resolve(__dirname, './src/components/admin/AdminLogin') },
    ],
  },
<<<<<<< HEAD
  build: {
    chunkSizeWarningLimit: 1000, // Suppress warnings for chunks up to 1MB (adjust as needed)
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', '@tanstack/react-query'], // Core React libs
          // In your build.rollupOptions.output.manualChunks
pdf: ['jspdf', 'html2canvas', 'jspdf-autotable'], // Fixed: Use 'jspdf-autotable' (hyphen, not dot)
          excel: ['xlsx'], // Excel-related libs
          // Add more chunks as needed for other heavy dependencies
        },
      },
    },
  },
})
=======
})
>>>>>>> 400609311a45e9bc573afd08c06928994abad773
