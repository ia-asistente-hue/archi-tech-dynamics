import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white">
      
      {/* 1. Encabezado / Navegación Superior (Header) */}
{/* 1. Encabezado / Navegación Superior (Header) */}
<header className="bg-white border-b border-[#F1F5F9] sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
    <div className="flex items-center space-x-3">
      {/* 🟢 SE QUITÓ scale-125 Y SE AJUSTÓ A h-12 md:h-16 PARA QUE NO SE SALGA DEL BORDE */}
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
      <a href="#nosotros" className="hover:text-[#2563EB] transition-colors">Nosotros</a>
      <a href="#contacto" className="hover:text-[#2563EB] transition-colors">Contacto</a>
    </nav>
    <div>
      <a href="#contacto" className="px-5 py-2.5 rounded-full bg-[#2563EB] text-white font-semibold text-sm hover:bg-[#1D4ED8] transition-all shadow-md shadow-[#2563EB]/20">
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
            Diseñamos infraestructura de software escalable, automatizamos procesos complejos e impulsamos el futuro de la salud con Inteligencia Artificial.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contacto" className="px-8 py-4 rounded-xl bg-[#2563EB] text-white font-semibold hover:bg-[#1D4ED8] transition-all shadow-lg shadow-[#2563EB]/30">
              Agendar Consultoría
            </a>
            <a href="#medikai" className="px-8 py-4 rounded-xl bg-[#1E293B] text-white font-semibold border border-[#3B82F6]/30 hover:bg-[#1E293B]/80 transition-all">
              Conocer MedikAI
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
            <a href="#contacto" className="inline-block px-8 py-4 rounded-xl bg-[#2563EB] text-white font-semibold hover:bg-[#1D4ED8] transition-all shadow-lg shadow-[#2563EB]/30">
              Solicitar Demo de MedikAI
            </a>
          </div>
          <div className="p-8 rounded-2xl bg-[#1E293B]/80 border border-[#3B82F6]/30 shadow-2xl">
            <div className="text-sm text-[#3B82F6] font-mono mb-2">// SISTEMA ACTIVO</div>
            <h4 className="text-xl font-bold mb-4">Arquitectura de Automatización Clínica</h4>
            <p className="text-sm text-[#F1F5F9]/70 font-light mb-6">
              Plataforma diseñada para integrarse de forma fluida en entornos clínicos reales, garantizando seguridad, rapidez y precisión de datos.
            </p>
            <div className="p-4 rounded-lg bg-[#0F172A] border border-[#1E293B] font-mono text-xs text-[#3B82F6]">
              status: online &bull; latency: 14ms &bull; encryption: TLS 1.3
            </div>
          </div>
        </div>
      </section>

      {/* 6. Sección "Por Qué Elegirnos" / Propuesta de Valor */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Por Qué Elegirnos</h2>
          <p className="text-[#64748B] font-light">La fusión perfecta entre estrategia corporativa y ejecución técnica impecable.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white border border-[#F1F5F9] rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Enfoque Estratégico</h3>
            <p className="text-[#64748B] text-sm leading-relaxed">No solo escribimos código; diseñamos soluciones alineadas directamente a los OKRs de tu empresa.</p>
          </div>
          <div className="p-8 bg-white border border-[#F1F5F9] rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Experiencia en Agilidad</h3>
            <p className="text-[#64748B] text-sm leading-relaxed">Implementación de mejores prácticas y gestión eficiente de proyectos a todos los niveles.</p>
          </div>
          <div className="p-8 bg-white border border-[#F1F5F9] rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Orientación a Resultados</h3>
            <p className="text-[#64748B] text-sm leading-relaxed">Reducción de fricción operativa y garantía total de escalabilidad en tus plataformas.</p>
          </div>
        </div>
      </section>

      {/* 7. Formulario de Contacto & Llamado a la Acción Final (Footer CTA) */}
      <section id="contacto" className="py-24 bg-[#F1F5F9] border-t border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-6 bg-white p-10 md:p-12 rounded-3xl shadow-lg border border-[#E2E8F0]">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] text-center mb-8">
            ¿Listo para transformar la infraestructura de tu empresa?
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-[#1E293B] mb-2">Nombre completo</label>
              <input type="text" placeholder="Tu nombre" className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1E293B] mb-2">Correo electrónico corporativo</label>
              <input type="email" placeholder="tu@empresa.com" className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1E293B] mb-2">Mensaje / Descripción del proyecto</label>
              <textarea rows={4} placeholder="Cuéntanos sobre tus requerimientos..." className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] focus:border-[#2563EB] focus:outline-none transition-colors"></textarea>
            </div>
            <button type="submit" className="w-full py-4 rounded-xl bg-[#2563EB] text-white font-semibold hover:bg-[#1D4ED8] transition-all shadow-lg shadow-[#2563EB]/20">
              Enviar Mensaje
            </button>
          </form>
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