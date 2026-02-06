import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

// Cloudflare Workers deployment
export default defineConfig({
  integrations: [tailwind()],
  adapter: cloudflare(),
  output: 'static',
  image: {
    service: {
      entrypoint: 'astro/assets/services/default',
    },
  },
});
