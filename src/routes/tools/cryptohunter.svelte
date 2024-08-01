<script>
    import { onMount } from 'svelte'; // Tuodaan onMount-funktio Svelte-kirjastosta komponentin elinkaaren hallintaa varten.
  
    let data = []; // Tietoja varten taulukko.
    let loading = true; // Aluksi tiedot ladataan, joten lataus on totta.
  
    onMount(async () => {
      try {
        const response = await fetch('https://api.binance.com/api/v3/ticker/24hr'); // Tietojen haku Binance API:sta.
        const result = await response.json(); // Muunnetaan vastaus JSON-muotoon.
        data = result
          .filter(ticker => ticker.symbol.endsWith('USDC')) // Suodatetaan vain USDC-pareilla.
          .sort((a, b) => b.volume - a.volume) // Järjestetään parit volyymin mukaan laskevasti.
          .slice(0, 4); // Otetaan neljä suurinta volyymin perusteella.
        loading = false; // Lataustila muuttuu epätodeksi, kun tiedot on ladattu.
      } catch (error) {
        console.error('Error fetching data:', error); // Tulostaa virheen konsoliin, jos tiedonhaku epäonnistuu.
      }
    });
  </script>
  
  <main>
    <h1>CryptoHunter</h1>
    <p>Top 4 USDC-Pairs by volume:</p>
    {#if loading}
      <p>Loading...</p> <!-- Näytetään latausteksti, kunnes tiedot on ladattu. -->
    {:else}
      <ul>
        {#each data as { symbol, volume, priceChangePercent }}
          <li>
            {symbol} - Volume: {volume} - Price change in percent: {priceChangePercent}%
          </li> <!-- Näytetään tiedot, kun ne on ladattu ja käsitelty. -->
        {/each}
      </ul>
    {/if}
  </main>
  
  <style>
    /* CryptoHunter-komponentin tyylit */
    main {
      padding: 20px; /* Asettaa pääsisällölle pehmusteen */
      background-color: #f5f5f5; /* Asettaa taustavärin */
      border-radius: 8px; /* Pyöristää reunat */
    }
  </style>
  