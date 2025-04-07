import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
  },
  resolve: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
  },
});
