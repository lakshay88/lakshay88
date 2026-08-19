import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/lakshay88/',
  build: {
    outDir: '../docs',
    emptyOutDir: true,
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
})
