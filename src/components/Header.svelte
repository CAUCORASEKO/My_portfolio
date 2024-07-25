<script>
  import Modal from './Modal.svelte';
  import { modalState } from './modalStore.js';

  // Vienti y:llä
  export let y; // Tätä ominaisuutta ei käytetä, joten se voidaan poistaa, jos sitä ei tarvita myöhemmin.

  // Määritellään välilehdet, jotka näkyvät navigointipalkissa
  let tabs = [
    { name: "Home", link: "/" }, // Varmista, että käytät '/' siirtyäksesi juuripolkuun
    { name: "Projects", link: "#projects" },
    { name: "About me", link: "#about" },
    { name: "Github", link: "https://github.com/CAUCORASEKO" },
  ];

  // Avaa modaalinen ikkuna
  const openModal = () => {
    if ($modalState.canOpen) {
      $modalState.show = true;
    }
  };

  // Sulje modaalinen ikkuna
  const closeModal = () => {
    $modalState.show = false;
    if (!$modalState.formSubmitted) {
      $modalState.canOpen = true;
    }
  };
</script>

<header
  class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " +
    (y > 0
      ? " py-4 bg-slate-950 border-violet-950"
      : " py-6 bg-transparent border-transparent")}
>
  <h1 class="font-medium">
    <b class="font-bold poppins">Claudio</b> <span class="">Valenzuela</span>
  </h1>
  <div class="sm:flex items-center gap-4 hidden">
    {#each tabs as tab, index}
      <a
        href={tab.link}
        class="duration-200 hover:text-violet-400"
        target={index === 3 ? "_blank" : ""}
      >
        <p>{tab.name}</p>
      </a>
    {/each}
    <button
      class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"
      on:click={openModal}
      disabled={!$modalState.canOpen && $modalState.formSubmitted}
    >
      <div
        class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
      />
      <h4 class="relative z-9">Request</h4>
    </button>
  </div>
</header>

<Modal show={$modalState.show} onClose={closeModal} />

<!-- Lisäselityksiä

    <header>: Header.svelte-komponentti sisältää verkkosivuston yläosassa olevan navigointipalkin. Tämä sisältää linkit sivuston eri osioihin ja "Ota yhteyttä" -painikkeen, joka avaa modaalisen ikkunan.

    Navigointivälilehdet:
        Koti, Projektit, Minusta, Github: Nämä ovat linkit, jotka johtavat eri osioihin tai ulkoisiin sivustoihin.

    Modaalinen ikkuna:
        openModal: Avaa modaalisen ikkunan yhteydenottoa varten.
        closeModal: Sulkee modaalisen ikkunan, kun käyttäjä sulkee sen tai kun lomake on lähetetty.

    Tyylitunnit:
        sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid: Asettaa headerin kiinteäksi yläreunaan, keskittää sisällön ja määrittää siirtymät.-->