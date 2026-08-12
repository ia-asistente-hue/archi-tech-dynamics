// app/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function LandingPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-[#0052FF] selection:text-white">
      
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-extrabold text-lg tracking-tight text-white flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#0052FF]"></span>
            ArchiTech <span className="text-slate-400 font-normal">Dynamics</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#medikaim" className="hover:text-white transition-colors">MedikAI</a>
            <a href="#nosotros" className="hover:text-white transition-colors">Sobre Nosotros</a>
          </nav>
          <a
            href="#contacto"
            className="px-4 py-2 bg-[#0052FF] hover:bg-[#0043D6] text-white text-xs font-bold rounded-xl shadow-lg shadow-blue-500/20 transition-all"
          >
            Agendar Consultoría
          </a>
        </div>
      </header>

      {/* 1. SECCIÓN INICIO (HERO) */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-36 md:pb-32 px-6">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0052FF]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#0052FF] bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Innovación y Escalabilidad
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Arquitectura Tecnológica e Innovación SaaS para la Evolución Digital
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Diseñamos infraestructura de software escalable, automatizamos procesos complejos e impulsamos el futuro de la atención médica con Inteligencia Artificial.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#contacto"
              className="w-full sm:w-auto px-7 py-3.5 bg-[#0052FF] hover:bg-[#0043D6] text-white text-sm font-bold rounded-xl shadow-lg shadow-blue-600/30 transition-all text-center"
            >
              Agendar Consultoría
            </a>
            <a
              href="#medikai"
              className="w-full sm:w-auto px-7 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-bold rounded-xl border border-slate-700 transition-all text-center"
            >
              Conocer MedikAI ↓
            </a>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN SERVICIOS PRINCIPALES */}
      <section id="servicios" className="py-24 px-6 bg-slate-950/50 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Nuestras Capacidades Clave</h2>
            <p className="text-sm text-slate-400">Soluciones de ingeniería diseñadas para la alta exigencia corporativa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#0052FF] font-bold text-lg">
                ⚡
              </div>
              <h3 className="text-lg font-bold text-white">Arquitectura & Infraestructura de Software</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Diseñamos sistemas robustos, escalables y seguros adaptados a las necesidades operativas de tu empresa para garantizar rendimiento continuo.
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#0052FF] font-bold text-lg">
                🤖
              </div>
              <h3 className="text-lg font-bold text-white">Automatización de Procesos e Inteligencia Artificial</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Integración de modelos de IA y flujos de trabajo automatizados para eliminar tareas repetitivas y optimizar el tiempo de tu equipo.
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#0052FF] font-bold text-lg">
                📈
              </div>
              <h3 className="text-lg font-bold text-white">Estrategia & Agilidad Operativa</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Asesoría en marcos de trabajo ágiles y modelos de gestión corporativa que alinean la visión de negocio con la ejecución técnica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN PRODUCTO DESTACADO: MEDIKAI */}
      <section id="medikai" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-slate-900 to-slate-950 p-8 sm:p-14 rounded-3xl border border-slate-800 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Solución SaaS Propietaria
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              MedikAI — Asistente Inteligente de Gestión y Dictado Médico
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Una plataforma enfocada en devolverle el tiempo a los profesionales de la salud. MedikAI procesa dictados por voz en tiempo real mediante IA para agilizar la generación de notas clínicas y optimizar la administración médica sin fricciones.
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-2">✓ Dictado de voz a texto de alta precisión médica.</li>
              <li className="flex items-center gap-2">✓ Automatización de reportes y estructuración de expediente.</li>
              <li className="flex items-center gap-2">✓ Interfaz ágil e intuitiva pensada para el flujo de trabajo clínico.</li>
            </ul>
            <div>
              <a
                href="#contacto"
                className="inline-block px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-emerald-500/20 transition-all"
              >
                Solicitar Demo de MedikAI
              </a>
            </div>
          </div>
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800/80 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-slate-400 font-mono">medik-ai-preview.tsx</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
            <div className="space-y-3 font-mono text-xs text-slate-400">
              <p className="text-slate-200"># Nota SOAP Generada por Voz (IA)</p>
              <p><span className="text-blue-400">S:</span> Paciente femenina de 42 años acude por cefalea tensional...</p>
              <p><span className="text-blue-400">O:</span> TA 120/80 mmHg, Frecuencia Cardiaca 72 lpm.</p>
              <p><span className="text-blue-400">A:</span> Cefalea tensional en estudio.</p>
              <p><span className="text-blue-400">P:</span> Reposo, hidratación y analgésicos pautados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN SOBRE NOSOTROS */}
      <section id="nosotros" className="py-24 px-6 bg-slate-950/50 border-t border-slate-800/80">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Conectando Estrategia y Tecnología</h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            En ArchiTech Dynamics Solutions combinamos la consultoría técnica de alto nivel con el desarrollo de soluciones propietarias. Nos enfocamos en transformar la complejidad en sistemas eficientes que impulsan el crecimiento sostenible de las empresas.
          </p>
        </div>
      </section>

      {/* 5. SECCIÓN CONTACTO */}
      <section id="contacto" className="py-24 px-6 border-t border-slate-800">
        <div className="max-w-3xl mx-auto bg-slate-900 p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-xl space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">¿Listo para hacer evolucionar tu infraestructura tecnológica?</h2>
            <p className="text-xs sm:text-sm text-slate-400">Ponte en contacto con nosotros para explorar cómo podemos ayudarte a escalar.</p>
          </div>

          {formStatus === 'success' ? (
            <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-2xl text-center space-y-2">
              <p className="text-emerald-400 font-bold text-sm">¡Mensaje enviado con éxito!</p>
              <p className="text-xs text-slate-300">Nos pondremos en contacto contigo a la brevedad posible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Nombre completo</label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Grisdely Martínez"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white focus:border-[#0052FF] focus:outline-none focus:ring-4 focus:ring-[#0052FF]/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Correo electrónico corporativo</label>
                <input
                  type="email"
                  required
                  placeholder="grisdely@empresa.com"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white focus:border-[#0052FF] focus:outline-none focus:ring-4 focus:ring-[#0052FF]/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Mensaje / Requerimiento</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Cuéntanos sobre tu proyecto o necesidad tecnológica..."
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white focus:border-[#0052FF] focus:outline-none focus:ring-4 focus:ring-[#0052FF]/10 transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full py-4 bg-[#0052FF] hover:bg-[#0043D6] text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-600/30 transition-all disabled:opacity-50"
              >
                {formStatus === 'submitting' ? 'Enviando mensaje...' : 'Enviar Solicitud'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-slate-800 text-center text-xs text-slate-500 space-y-4">
        <p>© 2026 ArchiTech Dynamics Solutions. Todos los derechos reservados.</p>
        <div>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors font-medium inline-flex items-center gap-1"
          >
            LinkedIn Corporativo ↗
          </Link>
        </div>
      </footer>

    </div>
  );
}