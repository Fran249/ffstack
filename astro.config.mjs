// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  // Production origin (Vercel). Required for canonical URLs, absolute OG image
  // URLs, and the generated sitemap.
  site: "https://ffstack.vercel.app",
  // The directory build format and the locale URLs already use trailing
  // slashes; keep the canonical URL identical to the served one.
  trailingSlash: "always",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: { es: "es-ES", en: "en-US" },
      },
    }),
    react(),
  ],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      // Spanish (default) has no prefix: `/`, `/hire-me`.
      // English is prefixed: `/en/`, `/en/hire-me`.
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
