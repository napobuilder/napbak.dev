import { useEffect } from 'react';
import { useStore } from './store/useStore';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { Marquee } from './components/home/Marquee';
import { Catalog } from './components/home/Catalog';
import { BentoGrid } from './components/home/BentoGrid';
import { SocialProof } from './components/home/SocialProof';
import { AboutMe } from './components/home/AboutMe';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/cart/CartDrawer';

const App = () => {
  const { fetchRate } = useStore();

  // Fetch Tasa API al montar
  useEffect(() => {
    fetchRate();
  }, [fetchRate]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <Catalog />
      <BentoGrid />
      <SocialProof />
      <AboutMe />
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default App;
