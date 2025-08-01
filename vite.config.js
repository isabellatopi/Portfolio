import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/Portfolio/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Mantener PDFs en la raíz de dist para acceso directo
          if (assetInfo.name && assetInfo.name.endsWith('.pdf')) {
            return '[name].[ext]';
          }
          return 'assets/[name]-[hash].[ext]';
        }
      }
    }
  },
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
  },
  // Configuración para servir archivos estáticos correctamente
  publicDir: 'public',
  assetsInclude: ['**/*.pdf']
}))
