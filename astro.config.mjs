// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lalrop.github.io',
  base: '/Budgt',
  integrations: [sitemap()],
  output: 'static',
});
