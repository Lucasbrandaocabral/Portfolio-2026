import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serve em /Portfolio-2026/; Vercel serve na raiz
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? '/Portfolio-2026/' : '/',
})
