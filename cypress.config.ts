import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3030/paperclip',
    supportFile: 'src/test/support/e2e.ts',
    specPattern: 'src/test/e2e/*.spec.ts',
  },
});
