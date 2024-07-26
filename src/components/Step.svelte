<script>
    export let step; // Viedään `step`, joka sisältää tiedot yhdestä projektista
</script>

<a
    href={step.href}
    target="_blank"
    class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center cursor-pointer group hover:border-violet-400 duration-200"
>
    <div
        class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"
    >
        <i class={step.icon} /> <!-- Näyttää askeleen ikonin -->
    </div>
    <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">
        {step.name} <!-- Näyttää askeleen nimen -->
    </h3>
    <slot /> <!-- Paikka lisäsisällölle -->
    <div class="flex-1 flex justify-between gap-4 items-end">
        <div
            class="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:h-0 after:right-full after:bg-white after:w-full after:h-full after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"
        >
            <p class="z-4">Go to &rarr;</p> <!-- "Go to" -painike -->
        </div>
    </div>
</a>

<!-- Lisäselityksiä

    export let step;:
        Vie step-muuttujan, joka sisältää tietoja yhdestä projektista, kuten nimi, ikoni ja linkki.

    <a>-elementti:
        Käytetään linkkinä projektiin. href={step.href} määrittää kohteen URL-osoitteen, ja target="_blank" avaa linkin uuteen välilehteen.

    <div> ikonin näyttämiseen:
        Tämä sisältää projektin ikonin, joka määritetään step.icon-arvolla.

    <h3> askeleen nimen näyttämiseen:
        Näyttää projektin nimen, joka on määritetty step.name-arvolla.

    <slot />:
        Paikka, johon voi lisätä lisäsisältöä.

    "Go to" -painike:
        Tekstielementti, joka näyttää "Go to" ja osoittaa projektin tarkasteluun.   -->