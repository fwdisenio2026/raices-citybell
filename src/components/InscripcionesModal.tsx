import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Calendar } from 'lucide-react';
import logoColor from '../assets/logos/raices_logo_color-1.png';

export const InscripcionesModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show after 1.8 seconds if not dismissed previously in this session
    const dismissed = sessionStorage.getItem('raices_modal_dismissed');
    if (!dismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('raices_modal_dismissed', 'true');
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-sm rounded-3xl bg-white p-7 text-center shadow-2xl border border-[#ECAD05]/50 overflow-hidden">
        {/* Subtle decorative background glow */}
        <div
          className="absolute -top-12 -right-12 w-36 h-36 bg-[#ECAD05]/20 rounded-full blur-2xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors focus:outline-none cursor-pointer"
          aria-label="Cerrar aviso"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Logo oficial en el modal bien visible */}
        <div className="flex justify-center mb-4">
          <img
            src={logoColor}
            alt="Jardín Maternal Raíces"
            className="h-14 sm:h-16 w-auto object-contain"
          />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ECAD05]/15 text-[#9A6F00] text-[11px] font-semibold uppercase tracking-wider mb-2">
          <Calendar className="w-3.5 h-3.5 text-[#ECAD05]" />
          <span>Ciclo Lectivo 2027</span>
        </div>

        {/* Title */}
        <h3 id="modal-title" className="font-brand-serif text-2xl text-stone-900 mb-2 font-normal">
          Consultar Inscripciones{' '}
          <span className="font-brand-italic text-[#ECAD05]">2027</span>
        </h3>

        {/* Subtext */}
        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
          Los cupos para salas de 45 días a 3 años ya están disponibles.
          Escribinos directamente para coordinar tu entrevista y conocer las salas.
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-2.5">
          <a
            href="https://wa.me/5492213500782?text=Hola%20Raíces!%20Quisiera%20consultar%20por%20las%20Inscripciones%202027"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#ECAD05] hover:bg-[#d99f04] text-stone-950 font-semibold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-stone-950" />
            <span>Consultar por WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={handleClose}
            className="text-xs text-stone-400 hover:text-stone-600 py-1 transition-colors cursor-pointer"
          >
            Continuar navegando el sitio
          </button>
        </div>
      </div>
    </div>
  );
};
