'use server';

import { Resend } from 'resend';

// Inicializa Resend con tu API Key (la cual configurarás en tus variables de entorno)
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const service = formData.get('service') as string;
  const message = formData.get('message') as string;

  // Validación básica
  if (!name || !email || !message) {
    return { success: false, error: 'Por favor, completa todos los campos obligatorios.' };
  }

  try {
    // Envío del correo usando Resend
    const data = await resend.emails.send({
      from: 'ArchiTech Web <onboarding@resend.dev>', // Cambia esto por tu dominio verificado en Resend más adelante
      to: ['contacto@architech.com'], // Coloca aquí el correo corporativo donde quieres recibir los leads
      subject: `Nuevo mensaje de contacto - Servicio: ${service || 'General'}`,
      html: `
        <div style="font-family: sans-serif; color: #0F172A; padding: 20px;">
          <h2 style="color: #2563EB;">Nuevo mensaje desde ArchiTech Dynamics Solutions</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Correo electrónico:</strong> ${email}</p>
          <p><strong>Servicio de interés:</strong> ${service ? service.toUpperCase() : 'No especificado'}</p>
          <hr style="border: 1px solid #E2E8F0; margin: 20px 0;" />
          <p><strong>Mensaje:</strong></p>
          <p style="background: #F8FAFC; padding: 15px; border-radius: 8px;">${message}</p>
        </div>
      `,
    });

    return { success: true, data };
  } catch (error) {
    console.error('Error al enviar correo:', error);
    return { success: false, error: 'Hubo un error al enviar el mensaje. Inténtalo más tarde.' };
  }
}