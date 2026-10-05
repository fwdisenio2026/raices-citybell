import React from 'react';
import logoWhite from '../assets/logos/raices_logo_white-1.png';
import { Instagram, Facebook, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoWhite}
                alt="Jardín Maternal Raíces"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-stone-400 max-w-md font-brand-serif italic">
              "Donde crecer es una experiencia compartida."
            </p>
            <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
              Más de 30 años acompañando a infancias. Espacio de confianza,
              cuidado y aprendizaje para niños y niñas de 45 días a 3 años.
            </p>
          </div>

          {/* Location & Contact */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-200">
              Ubicación
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              C. Cantilo 727<br />
              B1896 City Bell, La Plata<br />
              Provincia de Buenos Aires
            </p>
            <p className="text-xs text-stone-300">
              WhatsApp:{' '}
              <a
                href="https://wa.me/5492213500782"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ECAD05] hover:underline"
              >
                2213500782
              </a>
            </p>
          </div>

          {/* Social Links & Top */}
          <div className="md:col-span-3 space-y-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-200 mb-3">
                Comunidad
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/jardinmaternalraices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-stone-800 hover:bg-[#ECAD05] hover:text-stone-900 flex items-center justify-center text-stone-300 transition-colors"
                  aria-label="Instagram de Jardín Maternal Raíces"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61582648813804"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-stone-800 hover:bg-[#ECAD05] hover:text-stone-900 flex items-center justify-center text-stone-300 transition-colors"
                  aria-label="Facebook de Jardín Maternal Raíces"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs text-stone-400 hover:text-white transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Volver arriba</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Jardín Maternal Raíces. Todos los derechos reservados.</p>
          <p>City Bell, La Plata, Buenos Aires</p>
        </div>
      </div>
    </footer>
  );
};
