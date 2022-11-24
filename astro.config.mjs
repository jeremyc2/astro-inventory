import { defineConfig } from 'astro/config';
import tailwindLitPlugin from "tailwind-lit-rollup-plugin";

// https://astro.build/config
import lit from "@astrojs/lit";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [lit(), tailwind()],
  vite: {
    plugins: [tailwindLitPlugin()]
  }
});