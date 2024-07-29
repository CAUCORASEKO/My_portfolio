import { sveltekit } from '@sveltejs/kit/vite';
// Tuo SvelteKit:in pluginin, joka mahdollistaa SvelteKit-projektin konfiguroinnin Vite-kehitystyökalulla.

import { defineConfig } from 'vite';
// Tuo `defineConfig`-funktiion Vite:sta. Tämä funktio auttaa konfiguraation tyyppitietojen tarjoamisessa 
// ja varmistaa, että konfiguraatio on oikeassa muodossa.

export default defineConfig({
	plugins: [sveltekit()]
	// Määrittää, että käytetään SvelteKit-pluginia Vite-konfiguraatiossa.
	// Tämä plugin integroi SvelteKitin ja Vitin keskenään ja mahdollistaa SvelteKit-projektin
	// käynnistämisen ja rakentamisen Viten avulla.
});

/*

Tämä konfiguraatiotiedosto määrittelee, miten Vite rakennetaan ja käytetään SvelteKit-projektin kanssa. Se sisältää olennaiset pluginin määritykset, jotka varmistavat, että Vite toimii oikein SvelteKitin kanssa.

*/
