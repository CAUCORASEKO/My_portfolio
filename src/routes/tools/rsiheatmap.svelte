<script>
  import { onMount } from 'svelte';
  let heatmapUrl = '';

  onMount(() => {
    heatmapUrl = 'http://localhost:5000/heatmap'; // URL to the Flask endpoint
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

