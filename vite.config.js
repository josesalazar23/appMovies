import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  define: {
    'process.env.REACT_APP_API_KEY': JSON.stringify('addca2007d9e1f9e7fdccf326e9c2ac6'),
  },
})
