import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://madisonilia.com',
  integrations: [sitemap()],
  build: {
    format: 'file',
  },
});
