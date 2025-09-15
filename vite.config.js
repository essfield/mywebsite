import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // MUST match your repo name:
  base: '/mywebsite/',
  // Build directly into docs/ so Pages can serve it from main
  build: { outDir: 'docs' }
})
