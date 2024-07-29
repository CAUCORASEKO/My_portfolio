import nodemailer from 'nodemailer';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }) {
  const data = await request.json(); // Hakee tiedot pyynnöstä

  // Määritellään sähköpostin lähettäjä
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'latribubooking@gmail.com',
      pass: 'YOUR_EMAIL_PASSWORD' // Vaihda tämä salasanaksi tai käytä sovelluksen tunnusta
    }
  });

  // Sähköpostin lähetyksen asetukset
  let mailOptions = {
    from: 'latribubooking@gmail.com',
    to: 'latribubooking@gmail.com',
    subject: 'New Contact Form Submission',
    text: `
      Name: ${data.name}
      Lastname: ${data.lastname}
      Email: ${data.email}
      Phone: ${data.phone}
      Request Type: ${data.requestType}
      Description: ${data.description}
    `
  };

  try {
    await transporter.sendMail(mailOptions); // Lähetetään sähköposti
    return {
      status: 200,
      body: {
        message: 'Email sent successfully!'
      }
    };
  } catch (error) {
    return {
      status: 500,
      body: {
        error: 'Failed to send email.' // Virheilmoitus, jos sähköpostin lähetys epäonnistuu
      }
    };
  }
}

/** Lisäselityksiä

    import nodemailer from 'nodemailer';:
        Tuo Nodemailer-kirjaston, joka mahdollistaa sähköpostien lähettämisen.

    export async function post({ request }):
        Tämä funktio käsittelee POST-pyynnöt, jotka tulevat /api/contact-reittiin.

    const data = await request.json();:
        Lukee ja jäsentää pyynnön sisältämät JSON-tiedot.

    let transporter = nodemailer.createTransport({...}):
        Luo Nodemailer-kuljetusobjektin, joka määrittelee sähköpostin lähettäjän tiedot ja asetukset. Tässä tapauksessa käytetään Gmail-palvelua.

    let mailOptions = {...}:
        Määrittelee sähköpostiviestin vaihtoehdot, kuten lähettäjän, vastaanottajan, aiheen ja sisällön.

    await transporter.sendMail(mailOptions);:
        Lähettää sähköpostin käyttäen määriteltyjä asetuksia.

    Virheenkäsittely:
        Jos sähköpostin lähetys onnistuu, palautetaan status 200 ja onnistumisviesti. Jos lähetys epäonnistuu, palautetaan status 500 ja virheilmoitus.  */
