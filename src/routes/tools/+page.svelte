<script>
  import { onMount } from 'svelte';

  let activeComponent = null;

  async function loadComponent(componentName) {
    switch (componentName) {
      case 'cryptohunter':
        activeComponent = (await import('./cryptohunter.svelte')).default;
        break;
      case 'news':
        activeComponent = (await import('./news.svelte')).default;
        break;
      case 'rsiheatmap':
        activeComponent = (await import('./rsiheatmap.svelte')).default;
        break;
    }
  }

  onMount(() => {
    loadComponent('cryptohunter');
  });
</script>

<main class="container">
  <h1>Crypto Trading Tools</h1>
  <p>Welcome to the tools section, where you can find:</p>
  <ul>
    <li><strong>CryptoHunter:</strong> Identifies high-demand coins suitable for scalping.</li>
    <li><strong>News Section:</strong> Displays relevant fundamental news for the day.</li>
    <li><strong>RSI Heat Map:</strong> Shows an 1 day RSI map.</li>
  </ul>

  <nav class="button-group">
    <button on:click={() => loadComponent('cryptohunter')}>CryptoHunter</button>
    <button on:click={() => loadComponent('news')}>News</button>
    <button on:click={() => loadComponent('rsiheatmap')}>RSI Heatmap</button>
  </nav>

  {#if activeComponent}
    <svelte:component this={activeComponent} />
  {:else}
    <p>Select a tool to view details.</p>
  {/if}
</main>

<style>
  /* Pääsisältö ja asettelu */
  .container {
    padding: 20px;
    background-color: #1f1f1f; /* Tumma tausta */
    border-radius: 8px;
    color: #000000; /* Musta teksti */
    font-family: 'Poppins', sans-serif; /* Yhteensopiva fontti */
    text-align: center;
  }

  h1, p, ul {
    margin-bottom: 16px;
    color: #ffffff; /* Varmista, että teksti on luettavissa */
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
  }

  /* Navigointipainikkeet */
  .button-group {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  button {
    margin-right: 10px;
    padding: 10px 20px;
    border: none;
    background-color: #7c3aed; /* Violettinen pääväri */
    color: #ffffff; /* Valkoinen teksti */
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #6b21a8; /* Tumma sävy hover-tilassa */
  }

  
</style>
