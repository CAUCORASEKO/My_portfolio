<script>
  import { onMount } from 'svelte';

  // Tässä määritellään API:n perus-URL-osoite.
  // Jos ympäristömuuttuja 'VITE_BACKEND_URL' on määritetty, sitä käytetään.
  // Muussa tapauksessa käytetään oletuksena 'http://localhost:5002' paikalliseen kehitykseen.
  let heatmapUrl = '';
  let apiBaseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5002';

  // Tämä koodi suoritetaan, kun komponentti on ladattu.
  onMount(async () => {
    try {
      // Tehdään pyyntö API:lle heatmap-kuvan hakemiseksi.
      const response = await fetch(`${apiBaseUrl}/heatmap`);
      if (response.ok) {
        // Jos pyyntö onnistuu, vastaus muunnetaan blob-muotoon ja luodaan väliaikainen URL-osoite.
        const blob = await response.blob();
        heatmapUrl = URL.createObjectURL(blob);
      } else {
        console.error('Virhe heatmapin haussa:', response.status);
      }
    } catch (error) {
      console.error('Virhe hakupyynnössä:', error);
    }
  });
</script>

<main class="widget-container">
  <h1>RSI Heatmap</h1>
  {#if heatmapUrl}
    <!-- Näytetään heatmap-kuva, jos URL on saatavilla. -->
    <img src={heatmapUrl} alt="RSI Heatmap" />
  {:else}
    <!-- Näytetään latausviesti, kunnes heatmap on haettu. -->
    <p>Ladataan heatmapia...</p>
  {/if}
</main>

<style>
  .widget-container {
    padding: 20px;
    background-color: #1f1f1f;
    border-radius: 8px;
    color: #ffffff;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    max-width: 100%;
    height: auto;
  }
</style>
