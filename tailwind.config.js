/** @type {import('tailwindcss').Config} */
// Tämä rivi määrittelee, että tiedosto on Tailwind CSS -konfiguraatio. 
// Se käyttää TypeScriptin tyyppitietoa tarjotakseen oikeanlaisen autocomplete-tuen ja varmistuksen.

export default {
  // Määritellään tiedostot, joita Tailwind CSS tarkkailee ja joissa se etsii käytettyjä luokkia.
  // Tämä auttaa Tailwindia luomaan pienen ja optimoidun CSS-tiedoston.
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    // Laajennettavat teemavaihtoehdot. Täällä voi määritellä mukautetut värit, fontit, välimatkat jne.
    extend: {}
  },
  
  // Listataan Tailwind CSS -pluginien käyttö, jos niitä on. Tässä tapauksessa ei ole määritelty mitään lisäpluginia.
  plugins: []
};

/*

Tämä konfiguraatiotiedosto määrittää, miten Tailwind CSS toimii projektissasi. Se kertoo, mistä tiedostoista Tailwind CSS
tulisi etsiä käytettyjä luokkia, ja antaa mahdollisuuden laajentaa teemavaihtoehtoja tai lisätä lisäpluginia projektin tarpeiden mukaan.

*/