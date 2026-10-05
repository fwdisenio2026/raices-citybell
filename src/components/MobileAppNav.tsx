import React from 'react';
import { Home, Baby, Image as ImageIcon, MessageCircle } from 'lucide-react';
import logoWhite from '../assets/logos/raices_logo_white-1.png';

export const MobileAppNav: React.FC = () => {
  return (
    <nav
      aria-label="Navegación móvil"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/98 backdrop-blur-xl border-t border-stone-200 shadow-[0_-4px_25px_rgba(0,0,0,0.1)] px-3 py-1.5"
    >
      <div className="flex items-center justify-around max-w-md mx-auto relative">
        {/* 1. Inicio */}
        <a
          href="#inicio"
          className="flex flex-col items-center justify-center p-1 text-stone-600 hover:text-[#ECAD05] active:scale-95 transition-all"
        >
          <div className="w-9 h-9 rounded-xl flex items-center justify-center text-stone-700 hover:text-[#ECAD05] transition-colors">
            <Home className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-medium tracking-tight -mt-0.5">
            Inicio
          </span>
        </a>

        {/* 2. Salas */}
        <a
          href="#primera-infancia"
          className="flex flex-col items-center justify-center p-1 text-stone-600 hover:text-[#ECAD05] active:scale-95 transition-all"
        >
          <div className="w-9 h-9 rounded-xl flex items-center justify-center text-stone-700 hover:text-[#ECAD05] transition-colors">
            <Baby className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-medium tracking-tight -mt-0.5">
            Salas
          </span>
        </a>

        {/* 3. BOTÓN CENTRAL DESTACADO: Propuesta con el logo */}
        <a
          href="#propuesta"
          className="flex flex-col items-center justify-center -mt-6 group active:scale-95 transition-all"
          aria-label="Conocer Nuestra Propuesta"
        >
          <div className="w-14 h-14 rounded-full bg-[#ECAD05] border-4 border-white shadow-xl flex items-center justify-center p-1.5 transition-transform group-hover:scale-105">
            <img
              src={logoWhite}
              alt="Propuesta"
              className="w-10 h-auto object-contain filter drop-shadow-xs"
            />
          </div>
          <span className="text-[10px] font-bold text-stone-800 tracking-tight mt-0.5">
            Propuesta
          </span>
        </a>

        {/* 4. Galería */}
        <a
          href="#galeria"
          className="flex flex-col items-center justify-center p-1 text-stone-600 hover:text-[#ECAD05] active:scale-95 transition-all"
        >
          <div className="w-9 h-9 rounded-xl flex items-center justify-center text-stone-700 hover:text-[#ECAD05] transition-colors">
            <ImageIcon className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-medium tracking-tight -mt-0.5">
            Galería
          </span>
        </a>

        {/* 5. WhatsApp */}
        <a
          href="https://wa.me/5492213500782?text=Hola%20Raíces!%20Quisiera%20hacer%20una%20consulta"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-1 text-[#25D366] active:scale-95 transition-all"
          aria-label="WhatsApp"
        >
          <div className="w-9 h-9 rounded-xl bg-[#25D366]/15 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 fill-[#25D366] text-[#25D366]" />
          </div>
          <span className="text-[10px] font-semibold tracking-tight -mt-0.5 text-[#25D366]">
            WhatsApp
          </span>
        </a>
      </div>
    </nav>
  );
};
