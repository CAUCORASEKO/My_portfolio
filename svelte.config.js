import adapter from '@sveltejs/adapter-node'; // Vaihda sovitinsolmuun, jos käytät Node.js:ää
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // Käytä Node.js-sovitinta
    adapter: adapter()
  },
  preprocess: vitePreprocess()
};

export default config;

