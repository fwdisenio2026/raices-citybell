import React from 'react';
import { ArrowDown } from 'lucide-react';
import cleanHeroVideo from '../assets/videos/raices_video_clean.mp4';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-stone-900 text-white">
      {/* 
        Video Background:
        Ocupa el 100% del ancho y alto sin bordes negros ni barras laterales.
      */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          src={cleanHeroVideo}
          className="w-full h-full object-cover scale-105 origin-center filter brightness-[0.75] contrast-105"
        />
        {/* Capas de sombreado sutil para garantizar contraste y legibilidad total */}
        <div className="absolute inset-0 bg-stone-950/40 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/30" />
      </div>

      {/* Main Content (Centrado) */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center justify-center space-y-8">
        
        {/* Main Title (sin filete) */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-brand-serif font-normal tracking-tight leading-[1.12] text-white max-w-3xl drop-shadow-md">
          Donde crecer es una{' '}
          <span className="font-brand-italic text-[#ECAD05]">
            experiencia compartida
          </span>
        </h1>

        {/* Subtitle - sin "en City Bell" */}
        <p className="text-base sm:text-lg md:text-xl text-stone-200 font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-xs">
          En Raíces seguimos acompañando a las familias durante todo el año.
          Un espacio de confianza, cuidado y aprendizaje para la primera infancia.
        </p>

        {/* Acción principal: Solo Conocé Raíces (sin botón de WhatsApp al lado) */}
        <div className="flex items-center justify-center pt-2">
          <a
            href="#propuesta"
            className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-medium text-sm border border-white/35 transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <span>Conocé Raíces</span>
            <ArrowDown className="w-4 h-4 text-white/80" />
          </a>
        </div>

        {/* Micro Diferenciales */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-stone-300 font-medium">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ECAD05]" />
            De 45 días a 3 años
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ECAD05]" />
            3 docentes por sala
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ECAD05]" />
            Parque abierto todos los días
          </span>
        </div>
      </div>

      {/* Indicador sutil de scroll */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none opacity-60">
        <ArrowDown className="w-5 h-5 text-white animate-bounce" />
      </div>
    </section>
  );
};
