<script>
  import { onMount } from 'svelte';
  let heatmapUrl = '';

  onMount(async () => {
    const baseUrl = import.meta.env.PROD
      ? 'https://tu-url-de-railway.app'
      : 'http://localhost:5001';
    try {
      const response = await fetch(`${baseUrl}/heatmap`);
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

