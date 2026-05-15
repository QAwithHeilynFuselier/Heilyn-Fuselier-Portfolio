import { cloudflare } from '@cloudflare/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

/** Vite build config. Site content (nav, logo, home) lives in `site.config.js`. */
export default defineConfig(({ mode }) => ({
  plugins: [react(), cloudflare()],
  base: mode === 'github' ? '/Heilyn-Fuselier-Portfolio/' : '/',
}));
