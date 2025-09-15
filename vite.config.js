import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    modules: {
      // Customize CSS modules behavior
      localsConvention: 'camelCaseOnly', // Convert kebab-case to camelCase
      generateScopedName: '[name]__[local]___[hash:base64:5]', // Custom class naming
    }
  }
})
