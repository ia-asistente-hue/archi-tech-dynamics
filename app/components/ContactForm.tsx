'use client'

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ContactForm() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service') || 'consultoria';

  const [service, setService] = useState(serviceParam);

  useEffect(() => {
    if (serviceParam) {
      setService(serviceParam);
    }
  }, [serviceParam]);

  return (
    <>
      <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] text-center mb-8">
        ¿Listo para transformar la infraestructura de tu empresa?
      </h2>
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm font-semibold text-[#1E293B] mb-2">Nombre completo</label>
          <input type="text" placeholder="Tu nombre" className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none transition-colors" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#1E293B] mb-2">Correo electrónico corporativo</label>
          <input type="email" placeholder="tu@empresa.com" className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none transition-colors" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#1E293B] mb-2">Asunto / Servicio de Interés</label>
          <select 
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
          <textarea rows={4} placeholder="Cuéntanos sobre tus requerimientos..." className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none transition-colors"></textarea>
        </div>
        <button type="submit" className="w-full py-4 rounded-xl bg-[#2563EB] text-white font-semibold hover:bg-[#1D4ED8] transition-all shadow-lg shadow-[#2563EB]/20">
          Enviar Mensaje
        </button>
      </form>
    </>
  );
}