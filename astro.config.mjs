// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://gatsdev.fr',
  trailingSlash: 'ignore',
  build: {
    // Inline le CSS (petit) pour éviter une requête bloquante.
    inlineStylesheets: 'always',
  },
  // Ancienne page fusionnée dans l'accueil : redirection pour les liens existants.
  redirects: {
    '/expertise': '/#competences',
  },
  integrations: [sitemap()],
});
