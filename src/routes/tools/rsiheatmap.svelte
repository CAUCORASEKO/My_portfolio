<script>
  import { onMount } from 'svelte';

  // Määritä API:n perus-URL-osoite
  // Tarkista ympäristömuuttuja 'VITE_BACKEND_URL', joka pitäisi olla määritetty Railway:ssa
  // Jos sitä ei ole asetettu, käytetään oletuksena paikallista kehitysympäristöä 'http://localhost:5002'.
  let heatmapUrl = '';
  let apiBaseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5002';

  // Suorita tämä koodi, kun komponentti on ladattu
  onMount(async () => {
    try {
      // Tee pyyntö API:lle saadaksesi heatmap-kuvan
      const response = await fetch(`${apiBaseUrl}/heatmap`);
      if (response.ok) {
        // Jos pyyntö onnistuu, muunna vastaus blob-muotoon ja luo väliaikainen URL
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
    <!-- Näytä heatmap-kuva, jos URL on saatavilla -->
    <img src={heatmapUrl} alt="RSI Heatmap" />
  {:else}
    <!-- Näytä latausviesti, kunnes heatmap on haettu -->
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

