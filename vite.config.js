import { defineConfig } from 'vite';
export default defineConfig({
  base: './',
  build: { outDir: 'dist', chunkSizeWarningLimit: 1200 },
  server: { port: 5173, host: true },
  preview: { port: 8080, host: true },
});
