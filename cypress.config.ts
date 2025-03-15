import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3030/paperclips',
    supportFile: 'src/test/support/e2e.ts',
    specPattern: 'src/test/e2e/*.spec.ts',
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    indexHtmlFile: 'src/test/support/component-index.html',
    supportFile: 'src/test/support/component.ts',
    specPattern: 'src/test/component/*.spec.tsx',
  },
});
