import { TrendingUp, Smartphone, Globe, ShieldCheck, ChevronRight } from 'lucide-react';
import { PRICE_USD, MY_PHONE_NUMBER } from '../../data/constants';

export const BentoGrid = () => {
  const whatsappMessage = `Hola Napbak. Vi la demo PRO. Me interesa la arquitectura e-commerce para mi negocio por $${PRICE_USD}.`;
  const whatsappLink = `https://wa.me/${MY_PHONE_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="mb-16 md:flex justify-between items-end">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-gradient">
          DEJA DE PERDER<br/>TIEMPO Y DINERO.
        </h2>
        <p className="text-zinc-500 max-w-sm mt-4 md:mt-0 font-mono text-sm">
          // Arquitectura de software diseñada específicamente para el caos económico venezolano.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
        {/* Bento Item 1 - Grande */}
        <div className="md:col-span-2 bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-8 border border-zinc-800 relative overflow-hidden group hover:border-blue-500/50 transition-colors duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-colors"></div>
          <TrendingUp className="text-blue-500 mb-6" size={40} />
          <h3 className="text-3xl font-black mb-4">Sincronización BCV Real.</h3>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
            Tu catálogo lee la API oficial cada 5 minutos. Actualizas tu precio base en dólares una sola vez, el sistema hace el resto matemático por ti.
          </p>
        </div>

        {/* Bento Item 2 */}
        <div className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-8 border border-zinc-800 relative overflow-hidden group hover:border-zinc-700 transition-colors duration-500">
          <Smartphone className="text-white mb-6" size={40} />
          <h3 className="text-xl font-bold mb-2">Checkout en WhatsApp</h3>
          <p className="text-zinc-500 text-sm">
            Olvídate de carritos complejos. El cliente arma su pedido y tú recibes un mensaje estructurado listo para cerrar la venta.
          </p>
        </div>

        {/* Bento Item 3 */}
        <div className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-8 border border-zinc-800 relative overflow-hidden group hover:border-zinc-700 transition-colors duration-500">
          <Globe className="text-white mb-6" size={40} />
          <h3 className="text-xl font-bold mb-2">Edge Computing</h3>
          <p className="text-zinc-500 text-sm">
            Alojado en servidores globales ultrarrápidos. Tu página cargará en milisegundos, incluso en redes 3G lentas.
          </p>
        </div>

        {/* Bento Item 4 - Oferta */}
        <div className="md:col-span-2 bg-blue-600 rounded-3xl p-8 border border-blue-500 relative overflow-hidden flex flex-col justify-center items-start text-white">
          <div className="absolute -right-20 -bottom-20 opacity-10">
            <ShieldCheck size={300} />
          </div>
          <div className="z-10 w-full md:flex justify-between items-center">
            <div>
              <p className="text-blue-200 font-mono text-xs mb-2 tracking-widest uppercase">Sistema Enterprise Llave en Mano</p>
              <div className="text-6xl font-black tracking-tighter mb-2">${PRICE_USD}</div>
              <p className="text-blue-100 mb-6 md:mb-0">Incluye: Desarrollo, Hosting (1 año) y Autoadministrador.</p>
            </div>
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-blue-900 hover:bg-zinc-100 font-bold py-4 px-8 rounded-full flex items-center justify-center gap-3 transition-transform hover:scale-105"
            >
              Inicia tu Proyecto <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
