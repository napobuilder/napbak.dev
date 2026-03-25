import { BRAND_NAME } from '../../data/constants';

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-900 py-12 text-center relative overflow-hidden">
      <p className="text-zinc-600 font-mono text-sm">
        ENGINEERED BY <strong className="text-white">{BRAND_NAME}</strong>
      </p>
      <p className="text-zinc-700 text-xs mt-2 font-mono">
        Las Delicias, Aragua / Global Architecture
      </p>
      {/* Marca de agua gigante */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-zinc-900/50 whitespace-nowrap -z-10 pointer-events-none select-none">
        {BRAND_NAME}
      </div>
    </footer>
  );
};
