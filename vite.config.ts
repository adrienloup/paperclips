import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'Paperclips App',
        short_name: 'Paperclips',
        description:
          'Paperclips is a game inspired by "Universal Paperclips". This captivating game immerses you in an adventure where you play as an artificial intelligence (AI) responsible for maximizing the production of paperclips. This journey begins small, but quickly evolves into an immersive and strategic experience. Whether to kill time on a long trip or to explore your management skills, Universal Paperclips offers an authentic and atypical experience.',
        start_url: '/paperclips/',
        display: 'standalone',
        theme_color: '#e6e6e6',
        background_color: '#171717',
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
  resolve: {
    alias: {
      '@': path.resolve('./'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api'],
        additionalData: '@use "@/src/assets/scss/base/breakpoints" as *;',
      },
    },
  },
});
