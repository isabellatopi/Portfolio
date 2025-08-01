import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite conexiones externas
    port: 5173, // Puerto por defecto de Vite
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '.ngrok.io',
      '.ngrok-free.app', // Permite todos los subdominios de ngrok
      '.ngrok.app'
    ]
  }
})
