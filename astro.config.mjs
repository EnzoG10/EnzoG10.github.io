import { defineConfig } from 'astro/config';

// Deployed as a GitHub Pages user site at:
//   https://enzog10.github.io/
//
// Because the repo is named EnzoG10.github.io (matching the username), GitHub
// Pages serves it from the root domain. No `base` path needed.
export default defineConfig({
  site: 'https://enzog10.github.io',
  build: {
    format: 'directory',
  },
});
