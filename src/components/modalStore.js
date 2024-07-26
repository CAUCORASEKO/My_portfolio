import { writable } from 'svelte/store';

// Määritellään writable-tiedosto modalin tilan hallintaan
export const modalState = writable({
  show: false,  // Määrittää, onko modaalinen ikkuna näkyvissä
  canOpen: true // Määrittää, voiko modaalinen ikkuna avautua
});

/*
Lisäselityksiä

    import { writable } from 'svelte/store';:
        Tuo Svelte-kirjastosta writable, jota käytetään tilan hallintaan.

    modalState:
        Tämä on writable-tiedosto, jota käytetään hallitsemaan modaalisen ikkunan tilaa.
        show: Boolean-arvo, joka määrittää, onko modaalinen ikkuna näkyvissä vai ei.
        canOpen: Boolean-arvo, joka määrittää, voiko modaalinen ikkuna avautua vai ei.
*/