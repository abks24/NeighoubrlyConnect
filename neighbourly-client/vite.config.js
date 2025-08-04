import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/services': {
        target: 'http://localhost:5000', // Replace with your backend server's URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
})