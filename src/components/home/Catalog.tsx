import { Zap, ShoppingCart } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { products } from '../../data/constants';

export const Catalog = () => {
  const { addToCart, currency, rate } = useStore();

  const getPrice = (usdPrice: number) => {
    if (currency === 'USD') return `$${usdPrice.toFixed(2)}`;
    return `Bs ${(usdPrice * rate).toFixed(2)}`;
  };

  return (
    <section id="catalogo" className="py-24 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* ENCABEZADO DE ZONA INTERACTIVA */}
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-bold text-xs tracking-widest uppercase mb-4 animate-pulse">
          <Zap size={14} fill="currentColor" />
          Zona Interactiva
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Haz la prueba tú mismo.</h2>
        <p className="text-zinc-400 text-lg">
          Toca cualquier producto, agrégalo al carrito y mira cómo el sistema arma tu pedido en WhatsApp con la tasa calculada automáticamente.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} onClick={() => addToCart(product)} className="group cursor-pointer">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-900 mb-4 border border-zinc-800/50">
              {/* Imagen con Zoom Suave */}
              <img 
                src={product.img} 
                alt={product.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
              />
              
              {/* Gradiente Oscuro que aparece en Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Tag del Producto */}
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border border-white/10">
                {product.tag}
              </div>

              {/* Botón Flotante Reveal */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500" style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
                <button className="bg-white text-black font-bold text-sm px-6 py-3 rounded-full flex items-center gap-2 hover:bg-zinc-200 transition-colors shadow-xl">
                  <ShoppingCart size={16} /> Comprar
                </button>
              </div>
            </div>
            
            {/* Info del Producto */}
            <div className="px-2">
              <h3 className="font-medium text-zinc-300 text-sm mb-1">{product.name}</h3>
              <div className="text-xl font-black text-white flex items-center gap-2">
                {getPrice(product.priceUsd)}
                {currency === 'VES' && <span className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded uppercase tracking-wider font-bold">Auto</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
