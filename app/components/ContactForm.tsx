'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { sendContactEmail } from '@/app/actions/sendEmail'; // Ajusta la ruta si es necesario

export default function ContactForm() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service') || 'consultoria';

  const [service, setService] = useState(serviceParam);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<{ success: boolean; text: string } | null>(null);

  useEffect(() => {
    if (serviceParam) {
      setService(serviceParam);
    }
  }, [serviceParam]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setResponseMessage(null);

    // Guardamos la referencia del formulario en una variable antes del await
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set('service', service);

    const result = await sendContactEmail(formData);

    setLoading(false);
    if (result.success) {
      setResponseMessage({ success: true, text: '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.' });
      form.reset(); // Usamos la variable 'form' en lugar de event.currentTarget
    } else {
      setResponseMessage({ success: false, text: result.error || 'Ocurrió un error.' });
    }
  }

  return (
    <>
      <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] text-center mb-8">
        ¿Listo para transformar la infraestructura de tu empresa?
      </h2>

      {responseMessage && (
        <div className={`p-4 mb-6 rounded-xl text-sm font-medium ${responseMessage.success ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
          {responseMessage.text}
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-semibold text-[#1E293B] mb-2">Nombre completo</label>
          <input 
            type="text" 
            name="name"
            required 
            placeholder="Tu nombre" 
            className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none transition-colors" 
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#1E293B] mb-2">Correo electrónico</label>
          <input 
            type="email" 
            name="email"
            required 
            placeholder="tu@empresa.com" 
            className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none transition-colors" 
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#1E293B] mb-2">Asunto / Servicio de Interés</label>
          <select 
            name="service"
            value={service} 
            onChange={(e) => setService(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] bg-white focus:border-[#2563EB] focus:outline-none transition-colors text-[#0F172A]"
          >
            <option value="blindpass">Demo de BlindPass (Cumplimiento & AML)</option>
            <option value="medikai">Demo de MedikAI (Dictado Médico & SOAP)</option>
            <option value="consultoria">Consultoría en Arquitectura SaaS & IA</option>
            <option value="otro">Otro servicio / Requerimiento general</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#1E293B] mb-2">Mensaje / Descripción del proyecto</label>
          <textarea 
            name="message"
            required
            rows={4} 
            placeholder="Cuéntanos sobre tus requerimientos..." 
            className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none transition-colors"
          ></textarea>
        </div>
        <button 
          type="submit" 
          disabled={loading}
          className="w-full py-4 rounded-xl bg-[#2563EB] text-white font-semibold hover:bg-[#1D4ED8] transition-all shadow-lg shadow-[#2563EB]/20 disabled:opacity-50"
        >
          {loading ? 'Enviando...' : 'Enviar Mensaje'}
        </button>
      </form>
    </>
  );
}