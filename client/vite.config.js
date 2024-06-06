// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/todo",  // Ensure this is correct for your GitHub Pages setup
  build: {
    outDir: 'dist',  // This should match the path in your workflow file
  },
})
