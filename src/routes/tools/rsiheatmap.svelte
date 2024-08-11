<script>
  import { onMount } from 'svelte';

  // Establece la URL del heatmap directamente
  let heatmapUrl = 'https://rsiheatmap-production.up.railway.app/';

  // Ejecuta este código cuando el componente se haya montado
  onMount(async () => {
    try {
      // Realiza una solicitud para obtener la imagen del heatmap
      const response = await fetch(heatmapUrl);
      if (response.ok) {
        // Si la solicitud es exitosa, convierte la respuesta a blob y crea una URL temporal
        const blob = await response.blob();
        heatmapUrl = URL.createObjectURL(blob);
      } else {
        console.error('Error al obtener el heatmap:', response.status);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  });
</script>

<main class="widget-container">
  <h1>RSI Heatmap</h1>
  {#if heatmapUrl}
    <!-- Muestra la imagen del heatmap si la URL está disponible -->
    <img src={heatmapUrl} alt="RSI Heatmap" />
  {:else}
    <!-- Muestra un mensaje de carga hasta que se obtenga el heatmap -->
    <p>Cargando heatmap...</p>
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
