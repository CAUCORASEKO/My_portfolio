<script>
    import Footer from "../components/Footer.svelte"; // Tuodaan Footer-komponentti
    import Header from "../components/Header.svelte"; // Tuodaan Header-komponentti
    import "../app.css"; // Tuodaan tyylitiedosto

    let y; // Muuttuja, joka tallentaa nykyisen pystysuoran vierityksen
    let innerWidth = 0; // Muuttuja, joka tallentaa ikkunan leveyden
    let innerHeight = 0; // Muuttuja, joka tallentaa ikkunan korkeuden

    // Funktio, joka vierittää sivun ylös
    function goTop() {
        document.body.scrollIntoView();
    }
</script>

<div
    class="container relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"
>
    <div
        class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10] " +
            (y > 0
                ? " opacity-full pointer-events-auto"
                : " pointer-events-none opacity-0")}
    >
        <button
            on:click={goTop}
            class="ml-auto rounded-full bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer aspect-square grid place-items-center"
        >
            <i class="fa-solid fa-arrow-up" /> <!-- Ylös vieritys -painikkeen kuvake -->
        </button>
    </div>
    <Header {y} {innerHeight}/> <!-- Sisällytetään Header-komponentti -->
    <slot /> <!-- Paikka sisällölle, joka tulee lapsikomponenteista -->
    <Footer /> <!-- Sisällytetään Footer-komponentti -->
</div>
<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />


<!-- Lisäselityksiä

    <script>-osio:
        import-lauseet:
            Tuodaan Footer ja Header -komponentit sekä app.css-tyylitiedosto.
        let-muuttujat:
            y: Tallentaa nykyisen pystysuoran vierityksen määrän.
            innerWidth: Tallentaa ikkunan nykyisen leveyden.
            innerHeight: Tallentaa ikkunan nykyisen korkeuden.
        function goTop():
            Funktio, joka vierittää sivun takaisin ylös.

    <div>-kontaineri:
        Sisältää pääkomponentit ja sivun rakenteen.
        <div> ylös vieritys -painikkeella:
            Tämä sisältää ylös vieritys -painikkeen, joka näkyy, kun sivua on vieritetty alaspäin.
            <button on:click={goTop}:
                Painike, joka kutsuu goTop-funktion ja vierittää sivun ylös.

    Komponenttien sijoittelu:
        <Header {y} {innerHeight}/>:
            Asettaa Header-komponentin, joka käyttää y ja innerHeight-arvoja.
        <slot />:
            Paikka, johon lapsikomponentit voivat tuoda sisältönsä.
        <Footer />:
            Asettaa Footer-komponentin sivun alaosaan.

    <svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />:
        Bindaa scrollY, innerHeight ja innerWidth ikkunan vastaaviin arvoihin, jotta niitä voidaan käyttää sovelluksen logiikassa. -->