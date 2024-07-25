<script>
  import Step from "../components/Step.svelte"; // Varmista, että reitti on oikea

  // Määritellään steps-taulukko, joka sisältää projektit
  let steps = [
    { name: 'Crypto trading bot', icon: 'fa-solid fa-cart-shopping', href: 'https://t.me/MandaFuturesBOT' },
    { name: 'New challenges', icon: 'fa-solid fa-list-check', href: '/tools' },
    { name: 'This web diagram', icon: 'fa-solid fa-diagram-project', href: '#' }
  ];

  // Määritellään benefits-taulukko, joka sisältää tiedot taidoista
  let benefits = [
    {
      name: 'a self taught developer',
      description: 'I\'m a self-taught developer with a deep passion for technology and continuous learning. My journey in the tech world began with a curiosity for problem-solving and has evolved into a robust skill set that spans multiple programming languages and frameworks.'
    },
    {
      name: 'a product design & UX fanatic',
      description: 'Carefully crafting and designing amazing user experiences allows me to express and experiment with every morsel of creativity I have. I love the challenge of learning new design concepts and enabling users with amazing online experiences.'
    },
    {
      name: 'an excellent communicator',
      description: 'Communication is key and it\'s a paramount value of mine. I believe in transparency and constructive communication above all else. This helps me develop deep relationships and ensures my effectiveness and productivity in any workspace with any team.'
    }
  ];
</script>

<main class="flex flex-col flex-1 p-4">
  <!-- Johdanto-osio -->
  <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
    <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
      <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
        <!-- Tervehdys ja esittely -->
        Hi! I’m <span class="poppins text-violet-400">Claudio</span> aka CAUCO <br />Full Stack
        <span class="poppins text-violet-400">Developer</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        <!-- Suosikkiteknologioiden esittely -->
        My <span class="text-violet-400">favorite tech</span> includes, Python, JavaScript (NEXT.JS or SvelteKit), TailwindCSS, Node.js + Express.js & PostgreSQL or Firebase/Firestore!
      </p>

      <!-- Painike yhteydenottoon -->
      <a
        class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer"
        href="#contact"
      >
        <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
        <h4 class="relative z-9">Get in touch &rarr;</h4>
      </a>
    </div>
    <div class="relative shadow-2xl grid place-items-center">
      <!-- Profiilikuva -->
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        src="images/profile.png"
        alt="Profile Image"
        class="object-cover z-[2] max-h-[70vh]"
      />
    </div>
  </section>

  <!-- Projektit-osio -->
  <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-lg sm:text-xl md:text-2xl">A few of my creative endeavors.</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Curious to <span class="poppins text-violet-400">see</span> my work?
      </h3>
    </div>

    <a
      href="https://github.com/CAUCORASEKO"
      target="_blank"
      class="mx-auto px-4 py-2 rounded-md fa-border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200"
    >
      <i class="fa-regular fa-circle-link"></i>
      <p>Look at my Github</p>
    </a>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
      <Step step={steps[0]}>
        <p>
          Trading bot is a tool developed in Python, which is designed to manage trade recommendations in the Binance futures market. <strong class="text-violet-400">The bot will help you manage your risk and will indicate the most recommended investment for the current moment in the Binance futures market.</strong>
          To develop this bot, I have done extensive research on trading strategies and tools used by professional traders. I have literally become a profitable trader before starting to develop this tool.
        </p>
      </Step>
      <Step step={steps[1]}>
        <p>
          At this moment I am developing on this platform specially designed to help cryptocurrency traders, where I will put tools especially dedicated to analyzing the market. <strong class="text-violet-400">The idea is to help traders manage and control capital, minimizing the risk of losses and increasing their profits.</strong>
          Another of my goals is to continue learning coding and focus on blockchain technology.
        </p>
      </Step>
      <Step step={steps[2]}>
        <p>
          If you want to see how I have come to develop this portfolio, you can check out the simple diagram made in Draw.io. <strong class="text-violet-400">It is not a piece of architecture worth framing but it is a good way to start organizing your ideas in case you want to start your own portfolio website.</strong>
          Constructive criticism is always welcome.
        </p>
      </Step>
    </div>
  </section>

  <!-- Tietoja-osio -->
  <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex-col gap-16 sm:gap-20 md:gap-24 relative">
    <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4">
      <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        A bit <span class="poppins text-violet-400">about</span> me.
      </h3>
    </div>
    <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl text-center mt-8">
      Hi I'm ...
    </p>
    <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px] mt-8">
      {#each benefits as benefit, index}
        <div class="flex gap-6 sm:gap-8">
          <p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
            0{index + 1}
          </p>
          <div class="flex flex-col gap-6 sm:gap-8">
            <h3 class="text-2xl sm:text-3xl md:text-5xl">{benefit.name}</h3>
            <p>{benefit.description}</p>
          </div>
        </div>
      {/each}
    </div>
    <h5 class="text-2xl sm:text-3xl font-semibold text-center poppins mt-20">
      The <span class="text-violet-400">Complete</span> Package
    </h5>
    
    <div class="my-8"></div>

    <div class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full mt-10">
      <table class="bg-white text-slate-700 rounded text-center">
        <thead class="border-b border-solid border-slate-200">
          <tr>
            <th></th>
            <th class="whitespace-nowrap p-2 px-4">Candidate #1</th>
            <th class="whitespace-nowrap p-2 px-4">Candidate #2</th>
            <th class="whitespace-nowrap p-2 px-4">Candidate #3</th>
            <th class="bg-violet-700 text-white whitespace-nowrap p-4 px-8">Me</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-solid border-slate-200">
            <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Dedication</td>
            <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
            <td><i class="fa-solid fa-check text-slate-500"></i></td>
            <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
            <td><i class="fa-solid fa-check text-green-500"></i></td>
          </tr>
          <tr class="border-b border-solid border-slate-200">
            <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Critical Thought</td>
            <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
            <td><i class="fa-solid fa-check text-slate-500"></i></td>
            <td><i class="fa-solid fa-check text-slate-500"></i></td>
            <td><i class="fa-solid fa-check text-green-500"></i></td>
          </tr>
          <tr>
            <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Interpersonal Skills</td>
            <td><i class="fa-solid fa-check text-slate-500"></i></td>
            <td><i class="fa-solid fa-check text-slate-500"></i></td>
            <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
            <td><i class="fa-solid fa-check text-green-500"></i></td>
          </tr>
          <tr class="border-t border-solid border-slate-200">
            <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Programming Ability</td>
            <td><i class="fa-solid fa-check text-slate-500"></i></td>
            <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
            <td><i class="fa-solid fa-check text-slate-500"></i></td>
            <td><i class="fa-solid fa-check text-green-500"></i></td>
          </tr>
        </tbody>
      </table>
    </div>
    <p id="contact" class="mx-auto text-center mt-10">So why not invest?</p>
    <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
      <p>Scroll to see more &rarr;</p>
    </div>
  </section>
</main>

<!--  Lisäselityksiä

    <main>: Pääkomponentti, joka sisältää verkkosivuston pääsisällön.

    steps ja benefits:
        steps: Taulukko, joka sisältää linkkejä projekteihin tai muihin osioihin, kuten kryptokaupan bottiin, uusiin haasteisiin ja verkkosivun kaavioon.
        benefits: Taulukko, joka sisältää tietoja kehittäjän taidoista, kuten itseopiskelu, tuotesuunnittelu & UX, ja erinomaiset viestintätaidot.

    Johdanto-osio:
        introPage: Esittelyosio, jossa kehittäjä esittelee itsensä ja suosikkiteknologiansa.

    Projektit-osio:
        projects: Tämä osio näyttää kehittäjän projektit ja sisältää linkkejä lisätietoihin tai muihin sivustoihin.

    Tietoja-osio:
        about: Osio, joka sisältää lisätietoja kehittäjästä ja hänen taidoistaan. Sisältää myös taulukon, joka vertailee kehittäjää muihin kandidaatteihin eri ominaisuuksien perusteella.   -->

