import { defineConfig } from 'astro/config';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  compressHTML: false,
  build: {
    inlineStylesheets: 'never',
    assets: 'assets',
    compressHTML: false
  },
  integrations: [icon()]
});