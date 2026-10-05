import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Contacto por WhatsApp" className="fixed bottom-6 right-6 z-40 hidden md:block">
      <a
        href="https://wa.me/5492213500782?text=Hola%20Raíces!%20Quisiera%20hacer%20una%20consulta"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        aria-label="Abrir conversación de WhatsApp con Raíces al 2213500782"
        title="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </a>
    </aside>
  );
};
