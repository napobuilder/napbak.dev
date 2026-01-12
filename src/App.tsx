import { useState, useEffect } from 'react';
import { Terminal, AlertTriangle, DollarSign, CheckCircle, MessageSquare, Cpu, ShieldCheck, RefreshCw } from 'lucide-react';

const App = () => {
  const MY_PHONE_NUMBER = "584220163089";
  const PRICE_USD = 997;
  const DISCOUNT_PRICE_USD = 697;
  const INITIAL_RATE = 700;
  const BRAND_NAME = "NAPBAK_DEV"; 

  const whatsappMessage = `Hola, vi tu página en ${BRAND_NAME}. Tengo un negocio de repuestos y me interesa el sistema.`;
  const whatsappLink = `https://wa.me/${MY_PHONE_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  // Estados para el precio y la animación de carga
  const [exchangeRate, setExchangeRate] = useState(INITIAL_RATE);
  const [parallelRate, setParallelRate] = useState(750); // Precio paralelo inicial
  const [isUpdating, setIsUpdating] = useState(false);

  // Función para obtener el precio del dólar oficial y paralelo desde DolarAPI.com
  const fetchLiveRate = async () => {
    setIsUpdating(true); // Activa la animación de carga
    
    try {
      // Obtener precio oficial
      const oficialResponse = await fetch('https://ve.dolarapi.com/v1/dolares/oficial');
      if (!oficialResponse.ok) {
        throw new Error('Error al obtener el precio oficial');
      }
      const oficialData = await oficialResponse.json();
      const newOficialRate = oficialData.promedio || oficialData.venta || INITIAL_RATE;
      
      // Obtener precio paralelo - Intentamos varios endpoints comunes
      let newParallelRate = 750; // Valor por defecto
      const parallelEndpoints = [
        'https://ve.dolarapi.com/v1/dolares/monitor-dolar-today',
        'https://ve.dolarapi.com/v1/dolares/paralelo',
        'https://ve.dolarapi.com/v1/dolares/enparalelovzla'
      ];
      
      for (const endpoint of parallelEndpoints) {
        try {
          const parallelResponse = await fetch(endpoint);
          if (parallelResponse.ok) {
            const parallelData = await parallelResponse.json();
            // Intentamos diferentes campos posibles en la respuesta
            const rate = parallelData.promedio || parallelData.venta || parallelData.precio || 
                        parallelData.venta_promedio || parallelData.valor || null;
            if (rate && rate > 0) {
              newParallelRate = rate;
              break; // Si encontramos un valor válido, salimos del loop
            }
          }
        } catch (error) {
          // Continuamos con el siguiente endpoint
          continue;
        }
      }
      
      // Actualizamos los precios con un pequeño delay para mantener la sensación de "latencia"
      setTimeout(() => {
        setExchangeRate(Number(newOficialRate.toFixed(2)));
        setParallelRate(Number(newParallelRate.toFixed(2)));
        setIsUpdating(false); // Apaga la animación
      }, 300); // Delay mínimo para mantener la UX fluida
      
    } catch (error) {
      console.error('Error al obtener precio del dólar:', error);
      // En caso de error, mantenemos el precio anterior
      setIsUpdating(false);
    }
  };

  // El "Motor" que simula la conexión en vivo
  useEffect(() => {
    fetchLiveRate(); // Ejecuta una vez al inicio
    
    // Ejecuta esto cada 4 segundos (4000ms)
    const interval = setInterval(fetchLiveRate, 4000);
    
    return () => clearInterval(interval); // Limpieza al salir
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-mono selection:bg-yellow-200 pb-20">
      <nav className="fixed top-0 w-full bg-neutral-50/90 backdrop-blur border-b-2 border-neutral-900 z-50">
        <div className="max-w-3xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
            <Terminal size={20} />
            {BRAND_NAME}
          </div>
          {/* INDICADOR DE TASA EN TIEMPO REAL */}
          <div className="flex items-center gap-2 text-xs font-bold bg-neutral-100 border border-neutral-300 rounded px-2 py-1">
            {/* Punto Verde: Hace "ping" cuando se actualiza */}
            <div className="flex items-center gap-1 text-green-700">
              <span className={`w-2 h-2 rounded-full bg-green-500 ${isUpdating ? 'animate-ping' : ''}`}></span>
              LIVE
            </div>
            
            <span className="text-neutral-600">|</span>
            
            {/* El Precio */}
            <span className="text-neutral-900">BCV: {exchangeRate} BS</span>
            
            {/* Icono de refrescar: Gira cuando carga */}
            <RefreshCw size={10} className={isUpdating ? "animate-spin text-neutral-400" : "text-neutral-400"} />
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-4 max-w-3xl mx-auto">
        <div className="bg-white border-2 border-neutral-900 p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            NO TENGO TIEMPO PARA VIDEOS EN 4K.
          </h1>
          <p className="text-lg md:text-xl font-medium mb-4">
            Y tú no tienes tiempo para cambiar precios a mano mientras el dólar sube cada día.
          </p>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 my-6">
            <p className="font-bold flex items-center gap-2">
              <AlertTriangle className="text-yellow-700" size={24} />
              ATENCIÓN DUEÑO DE REPUESTOS:
            </p>
            <p className="mt-2 text-sm md:text-base">
              Si tu inventario no se actualiza, estás perdiendo hasta el <strong>30-40% de ganancia potencial</strong> en períodos de alta volatilidad cambiaria.
            </p>
          </div>
          
          <p className="text-neutral-600 mb-8">
            Soy <strong>Arquitecto de Sistemas</strong>. No soy una agencia de marketing que te vende humo y likes. Yo diseño la lógica que hace que tu negocio facture sin ti.
          </p>
          
          <a 
            href={whatsappLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full bg-neutral-900 text-white text-center font-bold text-xl py-4 hover:bg-neutral-800 hover:translate-y-1 hover:shadow-none transition-all shadow-[4px_4px_0px_0px_rgba(150,150,150,1)] active:translate-y-1 active:shadow-none"
          >
            QUIERO MÍ TIENDA BLINDADA &rarr;
          </a>
          <p className="text-center text-xs text-neutral-500 mt-2">Cero reuniones inútiles. Hablemos de negocios.</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-black mb-8 border-b-4 border-neutral-900 inline-block">LA CRUDA VERDAD</h2>
        
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="bg-red-100 p-3 h-fit border border-red-900 text-red-900 shadow-[4px_4px_0px_0px_rgba(150,0,0,0.2)]">
              <DollarSign size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">El dólar no deja de cambiar</h3>
              <p className="text-neutral-600">
                La tasa oficial se actualiza diariamente. Si fijas un precio hoy, mañana estás perdiendo margen.<br/>
                Si cobras mal un alternador, tienes que vender dos para recuperar la pérdida.<br/>
                Mi sistema te permite gestionar precios base en Dólares Reales, sin actualizaciones manuales.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-blue-100 p-3 h-fit border border-blue-900 text-blue-900 shadow-[4px_4px_0px_0px_rgba(0,0,150,0.2)]">
              <Cpu size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Excel no es un E-commerce</h3>
              <p className="text-neutral-600">
                Tener un Excel compartido o responder precios por WhatsApp uno a uno es ineficiente. Necesitas un catálogo que actualice precios automáticamente mientras duermes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-neutral-900 text-white px-4">
        <div className="max-w-3xl mx-auto text-center">
          <ShieldCheck size={48} className="mx-auto mb-4 text-green-400" />
          <h2 className="text-2xl font-bold mb-4">¿Quién soy?</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Me llamo <strong>Napoleon (Napbak)</strong>. Desarrollo lógica de negocios y automatización para clientes en <strong>Tennessee (USA)</strong>.
          </p>
          <div className="bg-neutral-800 p-4 border border-neutral-700 inline-block text-left max-w-md shadow-lg">
            <p className="text-sm font-mono text-green-400 mb-2">$ system_status check</p>
            <p className="text-sm text-neutral-300">
              {'>'} No soy el sobrino que "sabe de compus".<br/>
              {'>'} Soy experto en procesos y lógica fundamental.<br/>
              {'>'} Trabajo con estándares americanos, aplicado a la realidad venezolana.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-3xl mx-auto">
        <div className="border-4 border-neutral-900 p-8 relative bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-neutral-900 text-white px-6 py-2 font-bold transform -rotate-2 shadow-md w-max">
            OFERTA ÚNICA
          </div>

          <h2 className="text-3xl font-black text-center mt-4 mb-2">SISTEMA "LLAVE EN MANO"</h2>
          <p className="text-center text-neutral-500 mb-8">Para Repuestos & Autopartes</p>

          <ul className="space-y-4 mb-8">
            {[
              "Sitio Web Ultra-Rápido (Carga en 3G)",
              "Precios que se actualizan automáticamente (sin intervención manual)",
              "Catálogo Autoadministrable (Desde el cel)",
              "Botón de WhatsApp Directo al Vendedor + precio actualizado en cada consulta",
              "Hosting y Dominio por 1 año incluido",
              "Entrega en 7 días hábiles"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                <span className="font-bold">{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-neutral-100 p-6 text-center border-2 border-dashed border-neutral-300 mb-6">
            <p className="text-sm text-neutral-500 mb-1">INVERSIÓN ÚNICA</p>
            <div className="text-5xl font-black tracking-tighter text-neutral-900">
              ${PRICE_USD} <span className="text-lg text-neutral-500 font-normal">USD</span>
            </div>
            <p className="text-xs text-neutral-500 mt-1">(precio normal)</p>
            <div className="bg-green-50 border-2 border-green-400 p-4 mt-4">
              <p className="text-sm font-bold text-green-800 mb-1">PRIMEROS 5 CLIENTES ESTE MES:</p>
              <p className="text-3xl font-black text-green-900">${DISCOUNT_PRICE_USD} <span className="text-lg font-normal text-green-700">USD</span></p>
            </div>
            <p className="text-xs text-red-500 font-bold mt-4 bg-red-50 inline-block px-2">
              ACEPTO: TRANSFERENCIAS DIGITALES / ZELLE / EFECTIVO
            </p>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-300 p-4 mb-6 text-center">
            <p className="text-sm font-bold text-neutral-900 mb-2">SIN DEMOSTRACIÓN. SIN ESPERA.</p>
            <p className="text-sm text-neutral-700">En 7 días hábiles tienes tu tienda blindada. Completa. Funcional.</p>
          </div>

          <a 
            href={whatsappLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-green-600 text-white font-bold text-xl py-4 hover:bg-green-700 transition-colors shadow-[4px_4px_0px_0px_rgba(0,100,0,0.4)] active:translate-y-1 active:shadow-none"
          >
            <MessageSquare size={24} />
            VAMOS A HACERLO - HABLEMOS DE NEGOCIO &rarr;
          </a>
        </div>
      </section>

      <footer className="bg-neutral-100 py-8 text-center text-sm font-mono text-neutral-500 border-t border-neutral-300">
        <p>{BRAND_NAME} © 2026. Maracay, Venezuela.</p>
        <p className="mt-2">Hecho con lógica, café y cero paja.</p>
      </footer>

    </div>
  );
};

export default App;
