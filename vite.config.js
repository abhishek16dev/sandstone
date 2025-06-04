import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 👇 This makes Vite serve index.html on any route (important for SPA routing)
    historyApiFallback: true,
  },
})
