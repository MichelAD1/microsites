// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/static"; // static output
// @ts-ignore
export default defineConfig({ adapter: vercel() });
