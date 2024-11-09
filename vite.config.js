import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: '/', // Change base to relative path
  plugins: [react(), svgr()],
  build: {
    outDir: 'dist', // The output directory
    assetsDir: 'assets', // Directory for static assets
  },
});