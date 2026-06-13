// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://budgt.cl',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/TIS'),
    }),
  ],
  output: 'static',
});
