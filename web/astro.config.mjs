import netlify from "@astrojs/netlify";

export default defineConfig({
  adapter: netlify({
    edge: false,
  }),
});

// for vercel
// import { defineConfig } from "astro/config";
// import vercel from "@astrojs/vercel/static";
// export default defineConfig({ adapter: vercel() });
