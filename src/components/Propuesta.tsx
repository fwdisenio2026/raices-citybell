import React from 'react';
import { CrayonSun, CrayonLoop, CrayonScribble } from './HandDrawnAccents';
import fachadaImg from '../assets/images/fachada_01.png';
import interiorImg from '../assets/images/interior_interior_01.png';

export const Propuesta: React.FC = () => {
  return (
    <section id="propuesta" className="relative py-20 md:py-28 bg-white border-t border-stone-100 overflow-hidden">
      {/* Trazos de crayón de fondo bien visibles */}
      <div className="absolute top-2 right-4 pointer-events-none opacity-80">
        <CrayonSun className="w-32 h-32" color="#ECAD05" />
      </div>
      <div className="absolute top-1/2 -left-6 pointer-events-none opacity-75">
        <CrayonLoop className="w-48 h-24" color="#0284C7" />
      </div>
      <div className="absolute bottom-4 right-1/4 pointer-events-none opacity-80">
        <CrayonScribble className="w-40 h-16" color="#F97316" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-stone-50 border border-stone-200 text-[#9A6F00] text-xs font-bold uppercase tracking-widest mb-3 shadow-xs">
            Nuestra Propuesta
          </div>

          <p className="text-3xl sm:text-4xl font-brand-serif font-normal text-stone-900 leading-snug">
            Brindamos continuidad en los procesos,{' '}
            <span className="font-brand-italic text-[#ECAD05]">
              respetando los tiempos
            </span>{' '}
            de cada niño, niña y familia.
          </p>
        </div>

        {/* 2 Focused Columns con fotos reales claramente visibles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Card 1: Trayectoria con foto de la fachada */}
          <div className="relative rounded-3xl bg-amber-50/50 border border-amber-200/80 shadow-sm flex flex-col justify-between overflow-hidden group">
            <div className="h-56 w-full overflow-hidden relative">
              <img
                src={fachadaImg}
                alt="Fachada del Jardín Maternal Raíces en City Bell"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full shadow-xs text-xs font-bold text-stone-900">
                City Bell
              </div>
            </div>

            <div className="p-8 sm:p-9 flex-1 flex flex-col justify-between">
              <div>
                <span className="font-brand-serif text-4xl sm:text-5xl text-[#ECAD05] font-light block mb-2">
                  +30 años
                </span>
                <h3 className="font-brand-serif text-2xl text-stone-900 mb-2">
                  Acompañando a infancias
                </h3>
                <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
                  Un espacio de confianza, cuidado y aprendizaje donde cada niño y niña
                  crece en un entorno seguro y afectuoso.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-amber-200/70 flex items-center justify-between text-xs tracking-wider text-stone-600 uppercase font-semibold">
                <span>Trayectoria institucional</span>
                <span className="text-[#ECAD05] font-bold">● ● ●</span>
              </div>
            </div>
          </div>

          {/* Card 2: Acompañamiento todo el año con foto de salas */}
          <div className="relative rounded-3xl bg-stone-50 border border-stone-200/90 shadow-sm flex flex-col justify-between overflow-hidden group">
            <div className="h-56 w-full overflow-hidden relative">
              <img
                src={interiorImg}
                alt="Salas luminosas acondicionadas para la primera infancia"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full shadow-xs text-xs font-bold text-stone-900">
                Salas equipadas
              </div>
            </div>

            <div className="p-8 sm:p-9 flex-1 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#ECAD05]/20 text-stone-900 font-brand-serif font-bold text-sm mb-3">
                  365 días al año
                </div>
                <h3 className="font-brand-serif text-2xl text-stone-900 mb-2">
                  Acompañamiento continuo
                </h3>
                <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
                  En Raíces seguimos acompañando a las familias durante todo el año,
                  sosteniendo un vínculo diario afectivo, seguro y constante.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-stone-200 flex items-center justify-between text-xs tracking-wider text-stone-600 uppercase font-semibold">
                <span>Continuidad & cercanía</span>
                <span className="text-[#ECAD05] text-sm">●</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
