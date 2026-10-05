import React from 'react';
import { CrayonSpiral, CrayonLoop, CrayonScribble } from './HandDrawnAccents';
import plazaBlandaImg from '../assets/images/interior_plazablanda_01.png';
import interiorImg from '../assets/images/interior_interior_01.png';
import plazaBlanda2Img from '../assets/images/interior_plazablanda_02.png';

export const PrimeraInfancia: React.FC = () => {
  const etapas = [
    {
      rango: '45 días a 1 año',
      titulo: 'Primeros vínculos',
      detalle: 'Cuidado afectuoso, contención y atención a las rutinas de sueño y nutrición.',
      tagColor: 'bg-rose-100 text-rose-900 border-rose-300 hover:bg-rose-500 hover:text-white',
      accentColor: 'border-t-rose-400',
      badgeHover: 'group-hover:bg-rose-500 group-hover:text-white group-hover:rotate-2',
      img: plazaBlandaImg,
      imgAlt: 'Plaza blanda para lactantes y primeros vínculos',
    },
    {
      rango: '1 a 2 años',
      titulo: 'Primeros pasos y juego',
      detalle: 'Exploración motriz libre, curiosidad e interacción en espacios seguros.',
      tagColor: 'bg-amber-100 text-amber-900 border-amber-300 hover:bg-[#ECAD05] hover:text-stone-950',
      accentColor: 'border-t-[#ECAD05]',
      badgeHover: 'group-hover:bg-[#ECAD05] group-hover:text-stone-950 group-hover:-rotate-2',
      img: interiorImg,
      imgAlt: 'Salas de 1 a 2 años con juegos y estímulos',
    },
    {
      rango: '2 a 3 años',
      titulo: 'Lenguaje y autonomía',
      detalle: 'Desarrollo de la comunicación, socialización y experiencias compartidas.',
      tagColor: 'bg-emerald-100 text-emerald-900 border-emerald-300 hover:bg-emerald-600 hover:text-white',
      accentColor: 'border-t-emerald-400',
      badgeHover: 'group-hover:bg-emerald-600 group-hover:text-white group-hover:rotate-2',
      img: plazaBlanda2Img,
      imgAlt: 'Espacios de autonomía y actividades de 2 a 3 años',
    },
  ];

  return (
    <section id="primera-infancia" className="relative py-20 md:py-28 bg-stone-50/70 border-t border-stone-100 overflow-hidden">
      {/* Trazos de crayón de fondo bien visibles */}
      <div className="absolute top-10 left-6 pointer-events-none opacity-80">
        <CrayonSpiral className="w-28 h-28" color="#ECAD05" />
      </div>
      <div className="absolute bottom-12 right-6 pointer-events-none opacity-75">
        <CrayonLoop className="w-52 h-24" color="#10B981" />
      </div>
      <div className="absolute top-1/2 right-1/4 pointer-events-none opacity-70">
        <CrayonScribble className="w-36 h-14" color="#F43F5E" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-stone-200 text-[#9A6F00] text-xs font-bold uppercase tracking-widest mb-3 shadow-xs">
            Primera Infancia
          </div>
          <p className="text-3xl sm:text-4xl font-brand-serif font-normal text-stone-900 leading-tight">
            Acompañamiento integral de{' '}
            <span className="font-brand-italic text-[#ECAD05]">
              45 días a 3 años
            </span>
          </p>
          <p className="text-stone-600 mt-4 text-sm sm:text-base max-w-xl mx-auto">
            Actividades adaptadas a cada etapa del desarrollo, respetando el ritmo
            único y natural de cada niño y niña.
          </p>
        </div>

        {/* Etapas Grid con fotos reales visibles, etiquetas coloridas y animaciones al pasar el mouse */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {etapas.map((etapa, idx) => (
            <div
              key={idx}
              className={`group bg-white rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden ${etapa.accentColor} border-t-4`}
            >
              {/* Fotografía real claramente visible en la tarjeta */}
              <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                <img
                  src={etapa.img}
                  alt={etapa.imgAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs font-brand-serif font-bold text-xs text-[#ECAD05] px-2.5 py-1 rounded-full shadow-xs">
                  0{idx + 1}
                </div>
              </div>

              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Etiqueta colorida interactiva con animación hover */}
                  <div className="mb-4 inline-block">
                    <span
                      className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border shadow-xs transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1 ${etapa.tagColor} ${etapa.badgeHover} cursor-pointer`}
                    >
                      <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                      {etapa.rango}
                    </span>
                  </div>

                  <h3 className="font-brand-serif text-2xl text-stone-900 mb-2.5 group-hover:text-stone-950 transition-colors">
                    {etapa.titulo}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {etapa.detalle}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-medium">
                  <span className="group-hover:text-stone-800 transition-colors">Atención personalizada</span>
                  <span className="text-[#ECAD05] font-bold">●</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Respetando los tiempos */}
        <div className="mt-14 max-w-2xl mx-auto text-center p-6 rounded-3xl bg-white border border-stone-200/80 shadow-xs">
          <p className="font-brand-serif italic text-stone-800 text-base sm:text-lg">
            "Respetando los tiempos de cada niño, niña y familia."
          </p>
        </div>
      </div>
    </section>
  );
};
