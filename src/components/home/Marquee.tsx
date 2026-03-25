
export const Marquee = () => {
  return (
    <div className="w-full bg-blue-600 py-4 border-y border-blue-500 relative z-10 marquee-container">
      <div className="marquee-track items-center pr-8 gap-8 text-white font-black text-2xl uppercase tracking-widest">
        <span>⚡ Carga en Milisegundos</span>
        <span>•</span>
        <span>🤖 Tasa BCV Automatizada</span>
        <span>•</span>
        <span>📱 Checkout por WhatsApp</span>
        <span>•</span>
        <span>🛡️ Precios Blindados</span>
        <span>•</span>
      </div>
      <div className="marquee-track items-center pr-8 gap-8 text-white font-black text-2xl uppercase tracking-widest" aria-hidden="true">
        <span>⚡ Carga en Milisegundos</span>
        <span>•</span>
        <span>🤖 Tasa BCV Automatizada</span>
        <span>•</span>
        <span>📱 Checkout por WhatsApp</span>
        <span>•</span>
        <span>🛡️ Precios Blindados</span>
        <span>•</span>
      </div>
    </div>
  );
};
