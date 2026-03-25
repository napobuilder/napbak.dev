import { Terminal, Code2, ArrowRight } from 'lucide-react';
import { MY_PHONE_NUMBER } from '../../data/constants';

export const AboutMe = () => {
  const whatsappLink = `https://wa.me/${MY_PHONE_NUMBER}?text=${encodeURIComponent("Hola Napbak, estuve viendo tu portafolio y tu demo de arquitectura e-commerce. Me interesa trabajar contigo.")}`;

  return (
    <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto border-t border-zinc-900/50">
      <div className="bg-zinc-900/30 rounded-3xl p-8 md:p-12 border border-zinc-800/50 flex flex-col md:flex-row items-center gap-10 md:gap-16 relative overflow-hidden group">
        
        {/* Glow de fondo */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] group-hover:bg-blue-500/10 transition-colors duration-700 pointer-events-none"></div>

        {/* Foto: Efecto Polaroid Brutalista */}
        <div className="relative shrink-0 perspective-1000">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border-4 border-zinc-800 rotate-[-2deg] hover:rotate-0 hover:scale-105 shadow-2xl z-10 relative bg-zinc-900">
            <img 
              src="/napbak 2025.png" 
              alt="Napoleon - Software Architect" 
              className="w-full h-full object-cover opacity-90 hover:opacity-100"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg z-20 animate-bounce">
            <Code2 size={24} />
          </div>
        </div>

        {/* Copy del Arquitecto */}
        <div className="flex-1 text-center md:text-left z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-black/50 text-[10px] font-mono text-zinc-400 mb-6 uppercase tracking-widest">
            <Terminal size={12} className="text-blue-500" />
            Lead Software Architect
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Diseñado y programado por <span className="text-blue-500">Napoleon.</span>
          </h2>
          
          <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-2xl font-light">
            No soy una agencia genérica. Soy un adicto a la IA, productor musical, diseñador y me la tiro de Indie Hacker con TDAH hiperfocado. Llevo la filosofía de Silicon Valley y mis años en marketing digital directamente a tu proyecto: arquitectura atómica, estado centralizado y un rendimiento absurdo. Conmigo no compras plantillas, compras <strong className="text-white">ingeniería de producto real que vende</strong>.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-zinc-100 hover:bg-white text-black font-bold py-3 px-6 rounded-full flex items-center gap-2 transition-transform hover:scale-105"
            >
              Hablemos de código <ArrowRight size={16} />
            </a>
            <div className="text-xs font-mono text-zinc-500 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               Disponible para proyectos
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
