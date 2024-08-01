<script>
  import { onMount } from 'svelte';
  let heatmapUrl = '';

  onMount(async () => {
    try {
      // Reemplaza 'http://localhost:5000/heatmap' con la URL de tu servidor de Python
      const response = await fetch('http://localhost:5000/heatmap');
      if (response.ok) {
        heatmapUrl = await response.text(); // URL o contenido del heatmap
      } else {
        console.error('Error fetching heatmap:', response.status);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  });
</script>

<main class="widget-container">
  <h1>RSI Heatmap</h1>
  {#if heatmapUrl}
    <img src={heatmapUrl} alt="RSI Heatmap" />
  {:else}
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
  }

  img {
    max-width: 100%;
    height: auto;
  }
</style>
