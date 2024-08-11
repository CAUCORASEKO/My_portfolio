<script>
   // Aseta heatmapin URL suoraan
  let heatmapUrl = 'https://rsiheatmap-production.up.railway.app/';
</script>

<main class="widget-container">
  <h1>RSI Heatmap</h1>
  {#if heatmapUrl}
    <!-- Näytä heatmap-kuva, jos URL on saatavilla -->
    <img src={heatmapUrl} alt="RSI Heatmap" />
  {:else}
    <!-- Näytä latausviesti, kunnes heatmap on haettu -->
    <p>Loading heatmap...</p>
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
    max-width: 100%; /* Varmistaa, että kontti ei ylitä näytön leveyttä */
    height: auto; /* Salli korkeuden mukautuminen sisällön mukaan */
  }

  img {
    max-width: 100%;
    height: auto;
    object-fit: contain; /* Varmistaa, että kuva mahtuu hyvin kontin sisään */
  }
</style>

