<script>
    import { onMount } from 'svelte'; // Tuodaan onMount-funktio Sveltestä komponentin elinkaaren hallintaan
  
    let news = []; // Taulukko uutisten tallentamiseen
    let loading = true; // Lataustila, alussa asetettu todeksi
  
    // Korvaa omalla Alpha Vantage API-avaimellasi
    const ALPHA_VANTAGE_API_KEY = 'YDWNMW9PWX9THHPA';
  
    // Funktio uutisten hakemiseen
    async function fetchNews() {
        const url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=${ALPHA_VANTAGE_API_KEY}&topics=trading,finance,stocks,crypto,market,forex`;
        try {
            const response = await fetch(url); // Hakee uutisia annetusta URL:sta
            const data = await response.json(); // Muuntaa vastauksen JSON-muotoon
            news = data.feed.slice(0, 5).map(article => ({ // Valitsee 5 uutista ja muotoilee tiedot
                title: article.title,
                description: article.summary,
                url: article.url
            }));
        } catch (error) {
            console.error('Error fetching news:', error); // Tulostaa virheen konsoliin, jos haku epäonnistuu
        } finally {
            loading = false; // Asettaa lataustilan epätodeksi, kun prosessi on valmis
        }
    }
  
    onMount(() => {
        fetchNews(); // Hakee uutiset, kun komponentti ladataan
    });
</script>

<main>
    <h1>The latest financial news</h1>
    {#if loading}
        <p>Loading news...</p> <!-- Näytetään, kun uutisia ladataan -->
    {:else}
        {#if news.length === 0}
            <p>No news available.</p> <!-- Näytetään, jos uutisia ei löydy -->
        {:else}
            <ul>
                {#each news as { title, description, url }}
                    <li>
                        <h2>{title}</h2> <!-- Uutisen otsikko -->
                        <p>{description}</p> <!-- Uutisen kuvaus -->
                        <a href={url} target="_blank">Read more</a> <!-- Linkki uutiseen -->
                    </li>
                {/each}
            </ul>
        {/if}
    {/if}
</main>

<style>
    /* Tyylit uutisosioon */
    main {
        padding: 20px; /* Sisäpehmuste */
        background-color: #f9f9f9; /* Taustaväri */
        border-radius: 8px; /* Kulmien pyöristys */
    }

    h1 {
        font-size: 24px; /* Otsikon kirjasinkoko */
        margin-bottom: 16px; /* Alaosio */
    }

    ul {
        list-style-type: none; /* Poistaa listan merkit */
        padding: 0; /* Poistaa sisäpehmusteen */
    }

    li {
        margin-bottom: 20px; /* Alaosio */
    }

    h2 {
        font-size: 20px; /* Otsikon kirjasinkoko */
        margin: 0 0 8px 0; /* Reunukset */
    }

    p {
        margin: 0 0 8px 0; /* Reunukset */
    }

    a {
        color: #7c3aed; /* Linkin väri */
        text-decoration: none; /* Poistaa alleviivauksen */
    }

    a:hover {
        text-decoration: underline; /* Alleviivaus, kun osoitin on linkin päällä */
    }
</style>
