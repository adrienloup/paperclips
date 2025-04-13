import { defineConfig } from 'vitest/config';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'Paperclip',
        short_name: 'paperclip',
        description:
          'Paperclip is an incremental game (also an idle game, clicker game, or tapper game).',
        start_url: '/paperclip',
        display: 'standalone',
        theme_color: '#4c00ff',
        background_color: '#252529',
        icons: [
          {
            src: '/paperclip/paperclip-192x192.svg',
            type: 'image/svg+xml',
            sizes: '192x192',
          },
          {
            src: '/paperclip/paperclip-256x256.svg',
            type: 'image/svg+xml',
            sizes: '256x256',
          },
          {
            src: '/paperclip/paperclip-384x384.svg',
            type: 'image/svg+xml',
            sizes: '384x384',
          },
          {
            src: '/paperclip/paperclip-512x512.svg',
            type: 'image/svg+xml',
            sizes: '512x512',
          },
        ],
      },
    }),
  ],
  base: '/paperclip',
  resolve: {
    alias: {
      '@': path.resolve('./'),
    },
  },
  server: {
    port: 3030,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/src/assets/scss/base/breakpoints" as *;',
        api: 'modern',
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: '@testing-library/jest-dom/vitest',
    include: ['src/**/__tests__/*.component.spec.(ts|tsx)'],
    exclude: ['node_modules', 'src/test/e2e/**'],
  },
});
