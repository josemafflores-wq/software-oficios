// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.softwareoficios.es',

  // 🔴 ESTO ES LO QUE FALTABA (Corrección SEO crítica):
  trailingSlash: 'always', // Fuerza la barra al final (evita duplicados)
  build: {
    format: 'directory'    // Crea carpetas limpias (fontaneros/index.html)
  },
  // ----------------------------------------------------

  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
});