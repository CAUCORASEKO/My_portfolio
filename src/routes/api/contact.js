import nodemailer from 'nodemailer';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }) {
  const data = await request.json();

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'latribubooking@gmail.com',
      pass: 'YOUR_EMAIL_PASSWORD' // Cambia esto por tu contraseña o utiliza un token de aplicación
    }
  });

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
    await transporter.sendMail(mailOptions);
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
        error: 'Failed to send email.'
      }
    };
  }
}
