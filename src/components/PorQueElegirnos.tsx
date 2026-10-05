import React from 'react';
import { ShieldCheck, HeartHandshake, Eye, Heart } from 'lucide-react';
import { CrayonSun, CrayonLoop, CrayonSpiral } from './HandDrawnAccents';
import interior02Img from '../assets/images/interior_interior_02.png';
import piletitaImg from '../assets/images/interior_piletita_01.png';

export const PorQueElegirnos: React.FC = () => {
  const beneficios = [
    {
      titulo: 'Más confianza en el cuidado',
      descripcion: 'Entorno protegido y afectivo con presencia constante y atenta.',
      icono: ShieldCheck,
      color: 'bg-rose-50 text-rose-600',
    },
    {
      titulo: 'Seguimiento real del desarrollo',
      descripcion: 'Comunicación fluida con las familias y observación personalizada de cada avance.',
      icono: Eye,
      color: 'bg-amber-50 text-[#ECAD05]',
    },
    {
      titulo: 'Espacios donde cada niño se siente único',
      descripcion: 'Atención cercana respetando los ritmos, necesidades y personalidades.',
      icono: Heart,
      color: 'bg-emerald-50 text-emerald-600',
    },
  ];

  return (
    <section id="por-que-elegirnos" className="relative py-20 md:py-28 bg-stone-50/60 border-t border-stone-100 overflow-hidden">
      {/* Trazos de crayón bien visibles */}
      <div className="absolute top-10 right-10 pointer-events-none opacity-75">
        <CrayonSun className="w-28 h-28" color="#ECAD05" />
      </div>
      <div className="absolute bottom-10 left-10 pointer-events-none opacity-70">
        <CrayonLoop className="w-48 h-20" color="#38BDF8" />
      </div>
      <div className="absolute top-1/2 left-4 pointer-events-none opacity-60">
        <CrayonSpiral className="w-24 h-24" color="#F43F5E" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-stone-200 text-[#9A6F00] text-xs font-bold uppercase tracking-widest mb-3 shadow-xs">
            Diferenciales
          </div>
          <p className="text-3xl sm:text-4xl font-brand-serif font-normal text-stone-900 leading-tight">
            ¿Por qué{' '}
            <span className="font-brand-italic text-[#ECAD05]">
              elegirnos?
            </span>
          </p>
          <p className="text-stone-600 mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            En Raíces, cada niño y niña recibe atención personalizada.
          </p>
        </div>

        {/* Featured Key Differential: 3 Docentes por sala con foto real visible */}
        <div className="max-w-5xl mx-auto mb-14">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#ECAD05]/40 shadow-sm relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9A6F00] bg-[#ECAD05]/15 px-3.5 py-1.5 rounded-full inline-block">
                  Atención personalizada
                </span>
                <h3 className="font-brand-serif text-2xl sm:text-3xl text-stone-900 leading-snug">
                  Tres docentes por sala
                </h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                  Para garantizar un vínculo afectivo, seguro y de calidad durante toda la jornada.
                  Permite observar los avances de cada niño y responder con calma a sus necesidades.
                </p>

                <div className="pt-2 flex items-center gap-4">
                  <div className="flex items-center gap-3 bg-amber-50 px-5 py-3 rounded-2xl border border-amber-200">
                    <HeartHandshake className="w-7 h-7 text-[#ECAD05]" />
                    <div>
                      <span className="font-brand-serif text-2xl font-bold text-stone-900 block leading-none">
                        3 : 1
                      </span>
                      <span className="text-[10px] text-stone-600 uppercase tracking-wider font-semibold">
                        Docentes por sala
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fotografía real visible */}
              <div className="lg:col-span-5">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-sm border border-stone-200 group">
                  <img
                    src={interior02Img}
                    alt="Salas y rincones de estimulación en Raíces"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs text-white font-medium">Espacios cuidados y seguros</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 3 Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {beneficios.map((item, idx) => {
            const Icon = item.icono;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-stone-200/80 shadow-xs hover:shadow-md hover:border-[#ECAD05]/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-4 shadow-xs`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-brand-serif text-lg text-stone-900 mb-2 font-medium">
                    {item.titulo}
                  </h4>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {item.descripcion}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
                  <span>Raíces</span>
                  <span className="text-[#ECAD05] font-bold">✓</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
