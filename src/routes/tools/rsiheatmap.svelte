<script>
  // Establece la URL del heatmap directamente
  let heatmapUrl = 'https://rsiheatmap-production.up.railway.app/';
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
    max-width: 100%; /* Asegura que el contenedor no sobrepase el ancho de la pantalla */
    height: auto; /* Permite que la altura se ajuste según el contenido */
  }

  img {
    max-width: 100%;
    height: auto;
    object-fit: contain; /* Asegura que la imagen se ajuste bien dentro del contenedor */
  }
</style>

