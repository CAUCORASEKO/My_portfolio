<script>
  import { onMount } from 'svelte';

  let heatmapUrl = '';
  // Usa la URL base de la API desde una variable de entorno, o por defecto a localhost si no está definida
  let apiBaseUrl = import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:5000';

  onMount(async () => {
    try {
      const response = await fetch(`${apiBaseUrl}/heatmap`);
      if (response.ok) {
        const blob = await response.blob();
        heatmapUrl = URL.createObjectURL(blob);
      } else {
        console.error('Error in heatmap search:', response.status);
      }
    } catch (error) {
      console.error('Error in search request:', error);
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
