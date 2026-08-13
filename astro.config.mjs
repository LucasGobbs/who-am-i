// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://lucasgobbs.github.io',
  base: '/who-am-i/',
  integrations: [svelte(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
