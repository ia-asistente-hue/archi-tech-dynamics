'use server';

import { Resend } from 'resend';

// Inicializa Resend con tu API Key que pondrás en tus variables de entorno
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const service = formData.get('service') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { success: false, error: 'Por favor completa todos los campos obligatorios.' };
  }

  try {
    const data = await resend.emails.send({
      from: 'ArchiTech Dynamics <onboarding@resend.dev>', // Cámbialo por tu dominio verificado cuando estés en producción
      to: ['ia.asistente.gmr@gmail.com'], // El correo donde quieres recibir los leads
      subject: `Nuevo contacto web: Servicio de ${service}`,
      text: `
        Nombre: ${name}
        Correo: ${email}
        Servicio de Interés: ${service}
        Mensaje: ${message}
      `,
      html: `
        <h2>Nuevo mensaje desde ArchiTech Dynamics</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Servicio de Interés:</strong> ${service}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    return { success: true, data };
  } catch (error) {
    console.error('Error al enviar correo:', error);
    return { success: false, error: 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.' };
  }
}