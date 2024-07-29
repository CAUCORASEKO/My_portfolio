module.exports = {
	// Määrittää PostCSS:n lisäosat, joita käytetään tässä projektissa
	plugins: {
		// Käytetään Tailwind CSS -kirjastoa, joka tarjoaa laajan joukon käyttöliittymäkomponentteja ja tyylitiedostoja.
		tailwindcss: {},
		
		// Autoprefixer lisää automaattisesti tarvittavat selaimen etuliitteet CSS-tyyleihin, mikä parantaa yhteensopivuutta eri selainten välillä.
		autoprefixer: {},
	}
};

/* 

postcss.config.cjs-tiedosto määrittelee PostCSS
konfiguraation projektillesi. PostCSS on työkalu CSS
muokkaamiseen ja laajentamiseen, ja se käyttää lisäosia (plugins) CSS
käsittelyyn.

    module.exports: Tämä määrittää, mitä tietoa viedään tästä moduulista, jolloin sitä voidaan käyttää muualla. Tässä tapauksessa se vie objektin, joka sisältää PostCSS
    lisäosien määritykset.

    plugins: Tämä avain sisältää listan PostCSS-lisäosista, joita käytetään projektissa. Lisäosat ovat työkaluja, jotka laajentavat PostCSS
    toiminnallisuutta.

        tailwindcss: Tämä lisäosa mahdollistaa Tailwind CSS -kirjaston käyttämisen projektissa. Tailwind on erittäin konfiguroitava CSS-kehys, joka keskittyy käyttöliittymäkomponenttien luomiseen. Tässä se on määritetty ilman erityisiä asetuksia, mikä tarkoittaa, että se käyttää oletusasetuksia.

        autoprefixer: Tämä lisäosa lisää automaattisesti tarvittavat selaimen etuliitteet CSS-tyyleihin. Esimerkiksi se voi lisätä -webkit- tai -moz- etuliitteet varmistaakseen, että CSS-tyylit toimivat eri selaimissa. Tässä se on myös määritetty ilman erityisiä asetuksia.

Tämä konfiguraatiotiedosto auttaa automatisoimaan ja standardoimaan CSS-tyylien käsittelyn projektissa, mikä parantaa koodin ylläpidettävyyttä ja yhteensopivuutta eri selainten välillä.


*/

