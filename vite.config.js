import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-example/',
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        404: '404.html'
      }
    }
  }
})
