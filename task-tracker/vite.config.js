import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcsss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcsss()
  ],
})
