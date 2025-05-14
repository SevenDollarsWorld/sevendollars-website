
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/raporatory-website/',
  plugins: [react()],
  server: {
    port: 5173
  }
})
