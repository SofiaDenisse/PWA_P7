import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      useCredentials: true,
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Mi Galería PWA',
        short_name: 'Galería',
        description: 'Una galería de imágenes instalable para sistemas distribuidos',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'templo192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pajaritos512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })

  ],
})
