import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';
import { CrayonSun, CrayonLoop } from './HandDrawnAccents';
import logoColor from '../assets/logos/raices_logo_color-1.png';
import fachadaImg from '../assets/images/fachada_01.png';

export const InscripcionesBanner: React.FC = () => {
  return (
    <section id="inscripciones" className="py-20 md:py-28 bg-white border-t border-stone-100 relative overflow-hidden">
      {/* Trazos de crayón de fondo bien visibles */}
      <div className="absolute top-4 right-10 pointer-events-none opacity-80">
        <CrayonSun className="w-32 h-32" color="#ECAD05" />
      </div>
      <div className="absolute -bottom-6 left-12 pointer-events-none opacity-75">
        <CrayonLoop className="w-56 h-24" color="#F97316" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#ECAD05]/20 via-[#ECAD05]/5 to-stone-50 border border-[#ECAD05]/40 p-8 sm:p-14 text-center overflow-hidden shadow-sm">
          {/* Imagen de fondo sutil con máscara */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img
              src={fachadaImg}
              alt=""
              className="w-full h-full object-cover"
              aria-hidden="true"
            />
          </div>

          <div className="relative z-10">
            {/* Logo oficial bien visible */}
            <div className="flex justify-center mb-6">
              <div className="p-3.5 sm:p-4 rounded-3xl bg-white shadow-sm border border-[#ECAD05]/30 inline-block">
                <img
                  src={logoColor}
                  alt="Jardín Maternal Raíces"
                  className="h-14 sm:h-16 md:h-20 w-auto object-contain"
                />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#ECAD05]/40 text-[#9A6F00] text-xs font-bold uppercase tracking-wider mb-5 shadow-xs">
              <Calendar className="w-3.5 h-3.5 text-[#ECAD05]" />
              <span>Ciclo Lectivo 2027</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-brand-serif font-normal text-stone-900 leading-tight mb-4">
              Inscripciones abiertas{' '}
              <span className="font-brand-italic text-[#ECAD05]">2027</span>
            </h2>

            <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Te invitamos a conocer Raíces y conversar sobre el ingreso de tu hijo o hija.
              Acompañamos a las familias en cada paso del proceso.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/5492213500782?text=Hola%20Raíces!%20Quisiera%20solicitar%20información%20sobre%20las%20Inscripciones%202027"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#ECAD05] hover:bg-[#d99f04] text-stone-950 font-semibold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-stone-950" />
                <span>Contactar por WhatsApp (2213500782)</span>
              </a>
            </div>

            <p className="text-xs text-stone-500 mt-6 font-medium tracking-wide">
              C. Cantilo 727, City Bell • Atención personalizada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
