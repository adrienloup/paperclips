import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'Paperclips App',
        short_name: 'Paperclips',
        description:
          'A React app inspired by Universal Paperclips, a game based on the idea of artificial intelligence (AI) optimized for a single task.',
        start_url: '/paperclips/',
        display: 'standalone',
        theme_color: '#fff',
        background_color: '#000',
        icons: [
          {
            src: '/paperclips/paperclips-192x192.svg',
            type: 'image/svg+xml',
            sizes: '192x192',
          },
          {
            src: '/paperclips/paperclips-256x256.svg',
            type: 'image/svg+xml',
            sizes: '256x256',
          },
          {
            src: '/paperclips/paperclips-384x384.svg',
            type: 'image/svg+xml',
            sizes: '384x384',
          },
          {
            src: '/paperclips/paperclips-512x512.svg',
            type: 'image/svg+xml',
            sizes: '512x512',
          },
        ],
      },
    }),
  ],
  base: '/paperclips/',
});
