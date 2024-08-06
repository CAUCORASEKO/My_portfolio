<script>
  import { onMount } from 'svelte';
  let heatmapUrl = '';

  onMount(async () => {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001';
    try {
      const response = await fetch(`${apiUrl}/heatmap`);
      if (response.ok) {
        const blob = await response.blob();
        heatmapUrl = URL.createObjectURL(blob);
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
