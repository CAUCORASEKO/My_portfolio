<script>
  import { modalState } from './modalStore.js';

  // Viedään muuttujat show ja onClose
  export let show = false;
  export let onClose = () => {};

  // Funktio modaalin sulkemiseksi
  const close = () => {
    onClose();
    if (!$modalState.formSubmitted) {
      $modalState.canOpen = true;
    }
  };

  // Lomakkeen lähetyksen käsittely
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xanwqjvy', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: data
      });

      if (response.ok) {
        $modalState.formSubmitted = true;
        $modalState.canOpen = false;
      } else {
        console.error('There was an error sending your message.');
      }

    } catch (error) {
      console.error('There was an error sending your message.', error);
    }
  };
</script>

{#if show}
  <!-- Modaalin overlay -->
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
    <div class="bg-white p-8 rounded shadow-lg w-full max-w-lg relative">
      <!-- Sulkemispainike -->
      <button class="absolute top-2 right-2 text-gray-600 hover:text-gray-900" on:click={close}>✕</button>
      
      {#if $modalState.formSubmitted}
        <h2 class="text-xl mb-4 text-gray-900">Thank You!</h2>
        <p class="text-gray-700">Your message has been sent successfully. We'll get back to you soon.</p>
      {:else}
        <h2 class="text-xl mb-4 text-gray-900">Get in Touch</h2>
        <form on:submit={handleSubmit}>
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">First Name</label>
            <input type="text" id="name" name="name" class="mt-1 p-2 border border-gray-300 rounded w-full text-gray-900" required />
          </div>
          <div class="mb-4">
            <label for="lastname" class="block text-sm font-medium text-gray-700">Last Name</label>
            <input type="text" id="lastname" name="lastname" class="mt-1 p-2 border border-gray-300 rounded w-full text-gray-900" required />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" class="mt-1 p-2 border border-gray-300 rounded w-full text-gray-900" required />
          </div>
          <div class="mb-4">
            <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" id="phone" name="phone" class="mt-1 p-2 border border-gray-300 rounded w-full text-gray-900" required />
          </div>
          <div class="mb-4">
            <label for="requestType" class="block text-sm font-medium text-gray-700">Work Request</label>
            <select id="requestType" name="requestType" class="mt-1 p-2 border border-gray-300 rounded w-full text-gray-900" required>
              <option value="Telegram bot">Telegram bot</option>
              <option value="Web page">Web page</option>
            </select>
          </div>
          <div class="mb-4">
            <label for="description" class="block text-sm font-medium text-gray-700">Project Description</label>
            <textarea id="description" name="description" class="mt-1 p-2 border border-gray-300 rounded w-full text-gray-900" rows="4" required></textarea>
          </div>
          <div class="text-right">
            <button type="submit" class="bg-violet-600 text-white px-4 py-2 rounded">Send</button>
          </div>
        </form>
      {/if}
    </div>
  </div>
{/if}

<style>
  .fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 50;
  }
</style>

<!-- Lisäselityksiä

    show ja onClose:
        show: Määrittää, näkyykö modaalinen ikkuna.
        onClose: Funktio, joka kutsutaan, kun modaalinen ikkuna suljetaan.

    Funktio close:
        Sulkee modaalisen ikkunan ja päivittää tilan, jos lomaketta ei ole lähetetty.

    Funktio handleSubmit:
        Käsittelee lomakkeen lähetyksen, lähettää lomaketiedot Formspree-palveluun ja päivittää tilan, jos lähetys onnistuu.

    Modaalinen ikkuna:
        Näyttää kiitosviestin, jos lomake on lähetetty onnistuneesti, tai näyttää lomakkeen, jos sitä ei ole vielä lähetetty. -->