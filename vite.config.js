import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Render uses root path
  build: {
    outDir: 'build', // Render expects 'build' directory
  },
})

