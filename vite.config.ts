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
})
