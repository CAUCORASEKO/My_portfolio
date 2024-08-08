import adapter from '@sveltejs/adapter-node'; // Cambia a adapter-node si usas Node.js
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // Usa el adaptador Node.js
    adapter: adapter()
  },
  preprocess: vitePreprocess()
};

export default config;

