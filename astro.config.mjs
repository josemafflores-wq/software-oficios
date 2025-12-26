// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // ¡AÑADE ESTA LÍNEA AQUÍ ABAJO!
  site: 'https://www.softwareoficios.es', 
  
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
});