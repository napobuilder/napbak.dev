import { Cpu, ShoppingCart } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="pt-40 md:pt-48 pb-20 px-4 max-w-7xl mx-auto relative">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-mono text-zinc-400 mb-8">
          <Cpu size={14} className="text-blue-500" />
          Vende en Automático. Cobra en tu Moneda.
        </div>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-gradient">
          EL FUTURO DE TU <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 italic pr-4">INVENTARIO.</span>
        </h1>
        <p className="text-lg md:text-2xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
          Cambia la moneda arriba. Observa la magia. Un sistema diseñado para blindar tus precios contra la inflación en tiempo real.
        </p>

        <button 
          onClick={() => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })}
          className="group relative inline-flex items-center justify-center gap-3 px-6 md:px-8 py-4 bg-white text-black hover:bg-zinc-200 font-black text-sm md:text-base rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
        >
          <ShoppingCart size={22} className="text-blue-600 group-hover:-rotate-12 transition-transform" />
          <span>Juega a comprar y prueba tu nuevo E-commerce 👇</span>
        </button>
      </div>
    </section>
  );
};
