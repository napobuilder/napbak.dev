import { Command, Aperture } from 'lucide-react';

export const SocialProof = () => {
  return (
    <section className="py-10 border-t border-zinc-900/50 bg-[#0a0a0a] relative z-10">
      <p className="text-center text-zinc-600 text-[10px] font-mono tracking-[0.3em] uppercase mb-8">
        Arquitectura confiable utilizada por
      </p>
      
      {/* Máscaras de difuminado a los lados para que el scroll se vea elegante */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-20 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-20 pointer-events-none"></div>

      <div className="w-full opacity-50 hover:opacity-100 transition-opacity duration-500 marquee-container">
        <div className="marquee-track items-center pr-16 md:pr-32 gap-16 md:gap-32">
          
          {/* Latitude Med Travel Logo Personalizado */}
          <div className="flex items-center gap-3 text-zinc-400">
            <img src="https://i.imgur.com/I3ZcnCR.png" alt="Latitude Logo" className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-70" />
            <div className="text-2xl tracking-wide uppercase">
              <span className="font-black">LATITUDE</span> <span className="font-normal text-xl">MED TRAVEL</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-2xl font-black text-zinc-400"><Command size={28} className="text-zinc-500"/> OMNI<span className="font-light">FOODS</span></div>
          <div className="flex items-center gap-2 text-2xl font-black text-zinc-400"><Aperture size={28} className="text-zinc-500"/> VISION<span className="font-light">TECH</span></div>
          
          {/* Eva Guevara Psiquiatra Logo Personalizado (Formato Stack) */}
          <div className="flex items-center gap-3 text-zinc-400">
            <img src="https://i.imgur.com/IdyfXmS.png" alt="Eva Guevara Logo" className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-70" />
            <div className="flex flex-col justify-center uppercase">
              <span className="text-xl md:text-2xl font-black tracking-tight leading-none mb-1">EVA GUEVARA</span>
              <span className="text-[9px] md:text-[10px] font-medium tracking-[0.35em] leading-none text-zinc-500">PSIQUIATRA</span>
            </div>
          </div>
          
        </div>

        <div className="marquee-track items-center pr-16 md:pr-32 gap-16 md:gap-32" aria-hidden="true">
          {/* Latitude Med Travel Logo Personalizado */}
          <div className="flex items-center gap-3 text-zinc-400">
            <img src="https://i.imgur.com/I3ZcnCR.png" alt="Latitude Logo" className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-70" />
            <div className="text-2xl tracking-wide uppercase">
              <span className="font-black">LATITUDE</span> <span className="font-normal text-xl">MED TRAVEL</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-2xl font-black text-zinc-400"><Command size={28} className="text-zinc-500"/> OMNI<span className="font-light">FOODS</span></div>
          <div className="flex items-center gap-2 text-2xl font-black text-zinc-400"><Aperture size={28} className="text-zinc-500"/> VISION<span className="font-light">TECH</span></div>
          
          {/* Eva Guevara Psiquiatra Logo Personalizado (Formato Stack) */}
          <div className="flex items-center gap-3 text-zinc-400">
            <img src="https://i.imgur.com/IdyfXmS.png" alt="Eva Guevara Logo" className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-70" />
            <div className="flex flex-col justify-center uppercase">
              <span className="text-xl md:text-2xl font-black tracking-tight leading-none mb-1">EVA GUEVARA</span>
              <span className="text-[9px] md:text-[10px] font-medium tracking-[0.35em] leading-none text-zinc-500">PSIQUIATRA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
