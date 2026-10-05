import React from 'react';
import { Sun, Trees, Compass } from 'lucide-react';
import { CrayonSun, CrayonLoop } from './HandDrawnAccents';
import parqueImg from '../assets/images/interior_exteriro_01.png';

export const AireLibre: React.FC = () => {
  return (
    <section id="parque" className="relative py-20 md:py-28 bg-white border-t border-stone-100 overflow-hidden">
      {/* Trazos de crayón infantiles de fondo */}
      <div className="absolute -top-6 -right-6 pointer-events-none opacity-30">
        <CrayonSun className="w-28 h-28" color="#ECAD05" />
      </div>
      <div className="absolute bottom-6 left-6 pointer-events-none opacity-20">
        <CrayonLoop className="w-44 h-18" color="#10B981" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-stone-50 border border-stone-200 text-[#9A6F00] text-xs font-semibold uppercase tracking-widest shadow-xs">
              Naturaleza & Movimiento
            </div>

            <h2 className="text-3xl sm:text-4xl font-brand-serif font-normal text-stone-900 leading-tight">
              Parque abierto{' '}
              <span className="font-brand-italic text-[#ECAD05]">
                todos los días
              </span>
            </h2>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
              Juego al aire libre, exploración y actividades adaptadas a cada etapa.
              El contacto diario con la naturaleza fomenta la curiosidad, el movimiento
              y el bienestar emocional de los más pequeños.
            </p>

            {/* Micro Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/60 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#ECAD05]/15 flex items-center justify-center text-[#ECAD05] mb-3">
                  <Sun className="w-5 h-5" />
                </div>
                <h4 className="font-medium text-stone-900 text-sm mb-1">Aire libre diario</h4>
                <p className="text-stone-500 text-xs leading-relaxed">
                  Experiencias al sol y contacto con el entorno natural.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/60 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-600 mb-3">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="font-medium text-stone-900 text-sm mb-1">Exploración activa</h4>
                <p className="text-stone-500 text-xs leading-relaxed">
                  Juegos sensoriales adaptados a cada momento del crecimiento.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Container for the Park */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl p-3 sm:p-4 bg-stone-50 border border-stone-200/90 shadow-sm overflow-hidden">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-inner group">
                <img
                  src={parqueImg}
                  alt="Parque y sector al aire libre de Jardín Maternal Raíces en City Bell"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="font-brand-serif text-lg font-medium">Parque de Raíces</p>
                    <p className="text-xs text-white/80">Espacio de juego, verde y exploración diaria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
