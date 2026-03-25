import { ShoppingCart, X, Package, Trash2, Minus, Plus, MessageCircle } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { MY_PHONE_NUMBER } from '../../data/constants';

export const CartDrawer = () => {
  const { cart, isCartOpen, setCartOpen, removeFromCart, updateQuantity, rate } = useStore();

  const cartTotalUsd = cart.reduce((sum: number, item: any) => sum + (item.priceUsd * item.qty), 0);
  const cartTotalBs = (cartTotalUsd * rate).toFixed(2);

  const handleCheckout = () => {
    let message = `"Hola, quiero procesar la siguiente orden:\n\n`;
    
    cart.forEach((item: any) => {
      message += `🛒 ${item.qty}x ${item.name} ($${item.priceUsd.toFixed(2)} c/u)\n`;
    });
    
    message += `\n💰 Total: $${cartTotalUsd.toFixed(2)} USD\n`;
    message += `🔄 (Aprox. Bs ${cartTotalBs})\n\n`;
    message += `¿Cuáles son los métodos de pago?"\n\n`;
    message += `Hola napbak, estoy probando la simulación del carrito y me interesa obtener un e-commerce como este.`;
    
    const whatsappUrl = `https://wa.me/${MY_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setCartOpen(false)}
      ></div>
      
      <div className={`fixed top-0 right-0 h-full w-full md:w-[420px] bg-[#121214]/95 backdrop-blur-xl border-l border-zinc-800 z-50 transform transition-transform duration-500 flex flex-col shadow-2xl ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}>
        {/* Header del Carrito */}
        <div className="p-6 border-b border-zinc-800 flex justify-between items-center bg-[#0a0a0a]/50">
           <h2 className="text-xl font-black text-white flex items-center gap-3">
             <ShoppingCart size={24} className="text-blue-500" /> 
             Tu Carrito
           </h2>
           <button onClick={() => setCartOpen(false)} className="text-zinc-500 hover:text-white transition-colors bg-zinc-900 hover:bg-zinc-800 p-2 rounded-full">
             <X size={20}/>
           </button>
        </div>
        
        {/* Lista de Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
           {cart.length === 0 ? (
             <div className="h-full flex flex-col items-center justify-center text-zinc-500 space-y-4">
               <Package size={48} className="text-zinc-800" />
               <p>Tu carrito está vacío.</p>
             </div>
           ) : (
             cart.map((item: any) => (
               <div key={item.id} className="flex gap-4 items-center group">
                 <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-zinc-900 flex-shrink-0 border border-zinc-800">
                   <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />
                 </div>
                 <div className="flex-1">
                   <h4 className="text-sm font-bold text-zinc-200 line-clamp-2 leading-tight mb-1">{item.name}</h4>
                   <div className="text-blue-400 text-sm font-black">${item.priceUsd.toFixed(2)}</div>
                 </div>
                 <div className="flex flex-col items-end gap-2">
                   <button onClick={() => removeFromCart(item.id)} className="text-zinc-600 hover:text-red-500 transition-colors">
                     <Trash2 size={16} />
                   </button>
                   <div className="flex items-center gap-3 bg-zinc-900 rounded-full px-1 border border-zinc-800">
                     <button onClick={() => updateQuantity(item.id, -1)} className="text-zinc-400 hover:text-white p-1"><Minus size={12}/></button>
                     <span className="text-xs font-bold text-white w-4 text-center">{item.qty}</span>
                     <button onClick={() => updateQuantity(item.id, 1)} className="text-zinc-400 hover:text-white p-1"><Plus size={12}/></button>
                   </div>
                 </div>
               </div>
             ))
           )}
        </div>
        
        {/* Checkout Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-zinc-800 bg-[#0a0a0a]">
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-zinc-400 text-sm font-medium">
                <span>Subtotal (USD)</span>
                <span>${cartTotalUsd.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-white font-black text-2xl">
                <span>Total (BS)</span>
                <span>Bs {cartTotalBs}</span>
              </div>
              <p className="text-[10px] text-zinc-500 text-right uppercase tracking-wider">Tasa BCV: {rate}</p>
            </div>
            <button onClick={handleCheckout} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]">
              <MessageCircle size={24} />
              Enviar Pedido por WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
};
