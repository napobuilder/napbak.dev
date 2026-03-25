import { useEffect, useState } from 'react';
import { ShoppingCart, RefreshCw } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { BRAND_NAME } from '../../data/constants';

export const Navbar = () => {
  const { currency, setCurrency, rate, isUpdatingRate, cart, setCartOpen } = useStore();
  const [scrolled, setScrolled] = useState(false);

  const cartCount = cart.reduce((sum: number, item: any) => sum + item.qty, 0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* TOP BANNER */}
      <div className="bg-blue-600 text-white text-[10px] uppercase tracking-[0.2em] font-bold text-center py-2 px-4 flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
        Interactive Architecture Demo by {BRAND_NAME}
      </div>

      {/* NAVBAR GLASSMORPHISM */}
      <nav className={`fixed top-8 w-full z-40 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className={`flex justify-between items-center rounded-2xl transition-all duration-500 ${scrolled ? 'glass-nav px-6 py-3 shadow-2xl shadow-black/50' : 'px-2 py-2'}`}>
            
            <div className="font-black text-xl tracking-tighter flex items-center gap-2 text-white">
              {/* Logo con CSS Masking para darle el color azul exacto */}
              <div 
                className="w-7 h-7 bg-blue-500" 
                style={{
                  WebkitMaskImage: `url(https://i.imgur.com/MotEKRQ.png)`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskImage: `url(https://i.imgur.com/MotEKRQ.png)`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                }}
              />
              NAPBAK<span className="text-zinc-500 font-normal">STORE</span>
            </div>
            
            <div className="flex items-center gap-4 md:gap-6">
              {/* Pill Switcher Awwwards Style */}
              <div className="flex items-center bg-zinc-900/80 backdrop-blur-md rounded-full p-1 border border-zinc-800 shadow-inner">
                <button 
                  onClick={() => setCurrency('USD')}
                  className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-300 ${currency === 'USD' ? 'bg-white text-black shadow-md scale-100' : 'text-zinc-400 hover:text-white scale-95'}`}
                >
                  USD
                </button>
                <button 
                  onClick={() => setCurrency('VES')}
                  className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-300 ${currency === 'VES' ? 'bg-white text-black shadow-md scale-100' : 'text-zinc-400 hover:text-white scale-95'}`}
                >
                  BCV
                </button>
              </div>

              {/* Tasa Live Minimalista */}
              <div className="hidden md:flex items-center gap-2 text-[10px] tracking-wider uppercase font-bold text-zinc-400">
                 <RefreshCw size={12} className={isUpdatingRate ? "animate-spin text-blue-500" : ""} />
                 <span>RATE: {rate}</span>
              </div>

              <button 
                onClick={() => setCartOpen(true)}
                className="relative p-2 text-white hover:text-blue-400 transition-colors group"
              >
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 bg-blue-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
