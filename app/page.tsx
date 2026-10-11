import { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';
import React, { Suspense } from 'react';
import ContactForm from './components/ContactForm';

export const metadata: Metadata = {
  title: 'ArchiTech Dynamics Solutions | SaaS & IA Studio',
  description: 'Arquitectura Tecnológica e Innovación SaaS para la Evolución Digital.',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white">
      
      {/* 1. Encabezado / Navegación Superior (Header) */}
      <header className="bg-white border-b border-[#F1F5F9] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="ArchiTech Dynamics Solutions" 
              className="h-12 md:h-16 w-auto object-contain" 
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-[#1E293B]">
            <a href="#inicio" className="hover:text-[#2563EB] transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-[#2563EB] transition-colors">Servicios</a>
            <a href="#medikai" className="hover:text-[#2563EB] transition-colors">MedikAI</a>
            <a href="#blindPass" className="hover:text-[#2563EB] transition-colors">BlindPass</a>
            <a href="#nosotros" className="hover:text-[#2563EB] transition-colors">Nosotros</a>
            <a href="#contacto" className="hover:text-[#2563EB] transition-colors">Contacto</a>
          </nav>
          <div>
            <a href="/?service=consultoria#contacto" className="px-5 py-2.5 rounded-full bg-[#2563EB] text-white font-semibold text-sm hover:bg-[#1D4ED8] transition-all shadow-md shadow-[#2563EB]/20">
              Agendar Consulta
            </a>
          </div>
        </div>
      </header>

      {/* 2. Sección Principal (Hero Section) */}
      <section id="inicio" className="relative overflow-hidden py-24 lg:py-32 bg-[#0F172A] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2563EB]/15 via-[#0F172A] to-[#0F172A] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight mb-6">
            Arquitectura Tecnológica e Innovación SaaS para la <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#3B82F6]">Evolución Digital</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#F1F5F9] max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Diseñamos infraestructura de software escalable y automatizamos procesos complejos con Inteligencia Artificial, transformando la gestión operativa en salud, cumplimiento regulatorio y soluciones empresariales
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/?service=consultoria#contacto" className="px-8 py-4 rounded-xl bg-[#2563EB] text-white font-semibold hover:bg-[#1D4ED8] transition-all shadow-lg shadow-[#2563EB]/30">
              Agendar Consultoría
            </a>
            <a href="/?service=medikai#contacto" className="px-8 py-4 rounded-xl bg-[#2563EB] text-white font-semibold hover:bg-[#1D4ED8] transition-all shadow-lg shadow-[#2563EB]/30">
              Conocer MedikAI
            </a>
            <a href="/?service=blindpass#contacto" className="px-8 py-4 rounded-xl bg-[#2563EB] text-white font-semibold hover:bg-[#1D4ED8] transition-all shadow-lg shadow-[#2563EB]/30">
              Conocer BlindPass
            </a>
          </div>
        </div>
      </section>

      {/* 3. Barra de Diferenciadores / Indicadores (Trust Bar) */}
      <div className="bg-[#1E293B] text-white py-6 border-y border-[#3B82F6]/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around items-center gap-6 text-sm md:text-base font-medium tracking-wide">
          <span className="flex items-center space-x-2"><span className="w-2 h-2 rounded-full bg-[#3B82F6]"></span><span>Arquitectura Escalable</span></span>
          <span className="flex items-center space-x-2"><span className="w-2 h-2 rounded-full bg-[#3B82F6]"></span><span>Integración con IA</span></span>
          <span className="flex items-center space-x-2"><span className="w-2 h-2 rounded-full bg-[#3B82F6]"></span><span>Metodologías Ágiles</span></span>
          <span className="flex items-center space-x-2"><span className="w-2 h-2 rounded-full bg-[#3B82F6]"></span><span>Seguridad Empresarial</span></span>
        </div>
      </div>

      {/* 4. Sección de Servicios (Core Services) */}
      <section id="servicios" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Especialidades Corporativas</h2>
          <p className="text-[#64748B] font-light">Soluciones diseñadas para acelerar los resultados de negocio de tu organización.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white border border-[#F1F5F9] rounded-2xl shadow-sm hover:border-[#2563EB] transition-all">
            <div className="w-12 h-12 rounded-lg bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] font-bold text-xl mb-6">01</div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Arquitectura & Infraestructura de Software</h3>
            <p className="text-[#64748B] text-sm leading-relaxed">Diseños robustos, análisis de rendimiento y sistemas distribuidos adaptados a la alta demanda corporativa.</p>
          </div>
          <div className="p-8 bg-white border border-[#F1F5F9] rounded-2xl shadow-sm hover:border-[#2563EB] transition-all">
            <div className="w-12 h-12 rounded-lg bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] font-bold text-xl mb-6">02</div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Automatización e Integración de IA</h3>
            <p className="text-[#64748B] text-sm leading-relaxed">Optimización de flujos de trabajo operativos mediante modelos avanzados de lenguaje e inteligencia artificial.</p>
          </div>
          <div className="p-8 bg-white border border-[#F1F5F9] rounded-2xl shadow-sm hover:border-[#2563EB] transition-all">
            <div className="w-12 h-12 rounded-lg bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] font-bold text-xl mb-6">03</div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Estrategia & Agilidad Operativa</h3>
            <p className="text-[#64748B] text-sm leading-relaxed">Alineación de la visión de negocio con la ejecución técnica mediante marcos ágiles y gestión de OKRs.</p>
          </div>
        </div>
      </section>

      {/* 5. Sección Producto Destacado (Featured Product: MedikAI) */}
      <section id="medikai" className="py-24 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="px-3 py-1 rounded-full bg-[#1E293B] border border-[#3B82F6]/30 text-xs font-semibold text-[#3B82F6] mb-6 inline-block">
              Solución SaaS Propietaria
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">MedikAI — Asistente Inteligente de Gestión y Dictado Médico</h2>
            <p className="text-[#F1F5F9] font-light leading-relaxed mb-8">
              SaaS que procesa dictados por voz en tiempo real mediante IA para agilizar la generación de notas clínicas y expedientes.
            </p>
            <ul className="space-y-4 mb-8 text-[#F1F5F9]/90">
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 rounded-full bg-[#2563EB]"></span>
                <span>Voice-to-Text especializado en terminología médica.</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 rounded-full bg-[#2563EB]"></span>
                <span>Estructuración automática de expedientes clínicos.</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 rounded-full bg-[#2563EB]"></span>
                <span>Reducción de hasta un 70% del tiempo administrativo del médico.</span>
              </li>
            </ul>
            <a href="/?service=medikai#contacto" className="inline-block px-8 py-4 rounded-xl bg-[#2563EB] text-white font-semibold hover:bg-[#1D4ED8] transition-all shadow-lg shadow-[#2563EB]/30">
              Solicitar Demo de MedikAI
            </a>
          </div>
          <div className="p-8 rounded-2xl bg-[#1E293B]/80 border border-[#3B82F6]/30 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-2 rounded-xl p-5 flex flex-col justify-between relative bg-white border-[#0052FF]/60">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Plan Básico</h3>
                  <p className="text-2xl font-extrabold text-slate-900 mt-1">
                    $499 <span className="text-xs font-normal text-slate-500">MXN/mes</span>
                  </p>
                  <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                    <li>✓ Expediente clínico electrónico</li>
                    <li>✓ 150 Notas SOAP asistidas por IA</li>
                    <li>✓ Prescripción médica estándar</li>
                  </ul>
                </div>
              </div>
              <div className="border-2 rounded-xl p-5 flex flex-col justify-between relative bg-white border-[#0052FF]/60">
                <span className="absolute -top-2.5 right-4 bg-[#0052FF] text-white text-[10px] px-2.5 py-0.5 rounded-full font-bold">
                  RECOMENDADO
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Plan Pro</h3>
                  <p className="text-2xl font-extrabold text-slate-900 mt-1">
                    $799 <span className="text-xs font-normal text-slate-500">MXN/mes</span>
                  </p>
                  <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                    <li>✓ Expediente clínico electrónico</li>
                    <li>✓ 300 Notas SOAP asistidas por IA</li>
                    <li>✓ Personalización de Recetas con Membrete</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Sección Producto Destacado (Featured Product: BlindPass) */}
      <section id="blindPass" className="py-24 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-6 grid gap-12 items-center">
          <div>
            <span className="px-5 py-2 rounded-full bg-[#1E293B] border border-[#3B82F6]/30 text-xs font-semibold text-[#3B82F6] mb-6 inline-block">
              Solución SaaS Propietaria
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              BlindPass: Cumplimiento Regulatorio y Prevención de Lavado de Dinero Automatizado
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-4xl">
              ¿Qué es BlindPass? Es una plataforma inteligente diseñada para empresas e instituciones que automatiza la validación de clientes (KYC/KYB), detecta riesgos financieros en segundos y protege la operación legal de tu negocio frente a las regulaciones mexicanas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
                <h3 className="text-white font-semibold text-base mb-2 flex items-center gap-2">
                  <span className="text-[#0052FF]">🛡️</span> Expediente Único Digital (KYC/KYB)
                </h3>
                <p className="text-sm text-slate-400">
                  Integra y valida la identidad de personas físicas y morales de forma digital, rápida y segura mediante la verificación automática de sus documentos oficiales.
                </p>
              </div>
              <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
                <h3 className="text-white font-semibold text-base mb-2 flex items-center gap-2">
                  <span className="text-[#0052FF]">🔍</span> Identificación de Beneficiario Controlador
                </h3>
                <p className="text-sm text-slate-400">
                  Mapea de forma automática las estructuras accionarias y detecta quiénes son los verdaderos dueños o controladores (con 25% o más de participación) de una empresa.
                </p>
              </div>
              <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
                <h3 className="text-white font-semibold text-base mb-2 flex items-center gap-2">
                  <span className="text-[#0052FF]">📋</span> Screening en Listas Negras Oficiales
                </h3>
                <p className="text-sm text-slate-400">
                  Realiza consultas automáticas e inmediatas en las bases de datos más críticas: listas del SAT (Artículo 69-B), UIF, OFAC, ONU y registros de Personas Políticamente Expuestas (PEPs).
                </p>
              </div>
              <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
                <h3 className="text-white font-semibold text-base mb-2 flex items-center gap-2">
                  <span className="text-[#0052FF]">🔒</span> Bóveda Inmutable (10 Años)
                </h3>
                <p className="text-sm text-slate-400">
                  Garantiza el cumplimiento legal con un sistema de sellado digital de tiempo (timestamping) que resguarda los expedientes en un historial de auditoría completamente inalterable.
                </p>
              </div>
            </div> 

            <a href="/?service=blindpass#contacto" className="inline-block px-8 py-4 rounded-xl bg-[#2563EB] text-white font-semibold hover:bg-[#1D4ED8] transition-all shadow-lg shadow-[#2563EB]/30">
              Solicitar Demo de BlindPass
            </a>
          </div>
        </div>
      </section>

      {/* 6. Nosotros*/}
      <section id="nosotros" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Sobre ArchiTech Dynamics Solutions</h2>
          <p className="text-[#64748B] font-light"><span className="text-[#0052FF]">Ingeniería de Software con Propósito y Visión de Futuro</span>.</p>
        </div>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed">
            Somos una empresa de tecnología enfocada en el desarrollo de plataformas SaaS escalables, gobernanza operativa e integración avanzada de Inteligencia Artificial para transformar sectores clave como la salud y el cumplimiento financiero.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white border border-[#F1F5F9] rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Nuestra Misión</h3>
            <p className="text-[#64748B] text-sm leading-relaxed">Diseñar e implementar infraestructura tecnológica de alto rendimiento que automatice procesos complejos, reduzca la fricción operativa y potencie la toma de decisiones estratégicas en las organizaciones.</p>
          </div>
          <div className="p-8 bg-white border border-[#F1F5F9] rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Innovación Aplicada</h3>
            <p className="text-[#64748B] text-sm leading-relaxed">Integramos soluciones de vanguardia como modelos predictivos, automatización inteligente y arquitecturas multi-tenant seguras, garantizando experiencias robustas y adaptadas a normativas estrictas.</p>
          </div>
          <div className="p-8 bg-white border border-[#F1F5F9] rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Confianza y Cumplimiento</h3>
            <p className="text-[#64748B] text-sm leading-relaxed">Construimos sistemas bajo rigurosos estándares de seguridad, cifrado y normativas regulatorias nacionales e internacionales, protegiendo los datos más sensibles de nuestros usuarios.</p>
          </div>
        </div>
      </section>

      {/* 7. Formulario de Contacto */}
      <section id="contacto" className="py-24 bg-[#F1F5F9] border-t border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-6 bg-white p-10 md:p-12 rounded-3xl shadow-lg border border-[#E2E8F0]">
          <Suspense fallback={<div className="text-center text-slate-500 py-6">Cargando formulario...</div>}>
            <ContactForm />
          </Suspense>
        </div>
      </section>

      {/* 8. Pie de Página (Footer) */}
      <footer className="bg-[#0F172A] text-[#94A3B8] py-12 border-t border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm gap-4">
          <p>© 2026 ArchiTech Dynamics Solutions</p>
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/company/architech-dynamics-solutions/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <span className="hover:text-white transition-colors cursor-pointer">Aviso de Privacidad</span>
          </div>
        </div>
      </footer>

    </div>
  );
}