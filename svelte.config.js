// Tuodaan 'adapter' Svelte-projektin konfiguraatioon, joka mahdollistaa sovelluksen käyttöönoton eri ympäristöissä.
import adapter from '@sveltejs/adapter-auto';
// Tuodaan 'vitePreprocess', joka on Viten tarjoama esiprosessointityökalu Svelte-projekteille.
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // Adapter-konfiguraatio, joka käyttää oletusarvoista 'adapter-autoa'. Tämä adapteri valitsee automaattisesti oikean alustan, johon sovellus otetaan käyttöön.
    adapter: adapter()
  },
  // Esiprosessointiasetukset, jotka käyttävät Viten esiprosessointityökaluja.
  preprocess: vitePreprocess()
};

export default config; // Viedään konfiguraatio, jotta se on käytettävissä muualla projektissa.
