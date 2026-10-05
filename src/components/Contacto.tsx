import React from 'react';
import { MapPin, MessageCircle, Instagram, Facebook, ArrowUpRight } from 'lucide-react';

export const Contacto: React.FC = () => {
  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=C.+Cantilo+727,+B1896+City+Bell,+Provincia+de+Buenos+Aires';

  return (
    <section id="contacto" className="py-20 md:py-28 bg-stone-50/70 border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-[#9A6F00] font-semibold mb-3">
            Ubicación & Contacto
          </h2>
          <p className="text-3xl sm:text-4xl font-brand-serif font-normal text-stone-900 leading-tight">
            Acercate a{' '}
            <span className="font-brand-italic text-[#ECAD05]">
              conocer Raíces
            </span>
          </p>
          <p className="text-stone-600 mt-4 text-sm sm:text-base">
            Estamos en el corazón de City Bell. Escribinos para coordinar una visita personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-6xl mx-auto">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-xs flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold block mb-2">
                  Dirección
                </span>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ECAD05]/15 flex items-center justify-center text-[#ECAD05] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900 text-base">
                      C. Cantilo 727
                    </p>
                    <p className="text-stone-600 text-sm">
                      B1896 City Bell, La Plata
                    </p>
                    <p className="text-stone-500 text-xs mt-0.5">
                      Provincia de Buenos Aires
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold block mb-2">
                  WhatsApp Directo
                </span>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ECAD05]/15 flex items-center justify-center text-[#ECAD05] shrink-0 mt-0.5">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <a
                      href="https://wa.me/5492213500782"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-stone-900 hover:text-[#ECAD05] transition-colors text-base inline-flex items-center gap-1.5"
                    >
                      <span>2213500782</span>
                      <ArrowUpRight className="w-4 h-4 text-stone-400" />
                    </a>
                    <p className="text-stone-500 text-xs mt-0.5">
                      Consultas sobre cupos e inscripciones
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold block mb-3">
                  Redes Sociales
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/jardinmaternalraices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-stone-50 hover:bg-stone-100 border border-stone-200 text-stone-700 text-xs font-medium transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-[#ECAD05]" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61582648813804"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-stone-50 hover:bg-stone-100 border border-stone-200 text-stone-700 text-xs font-medium transition-colors"
                  >
                    <Facebook className="w-4 h-4 text-[#ECAD05]" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-100">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <span>Abrir en Google Maps</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Google Maps Embed / Interactive preview */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-4 sm:p-5 border border-stone-200/90 shadow-xs flex flex-col">
            <div className="w-full h-full min-h-[380px] rounded-2xl overflow-hidden border border-stone-200 relative bg-stone-100">
              <iframe
                title="Ubicación de Jardín Maternal Raíces en Google Maps"
                src="https://maps.google.com/maps?q=C.+Cantilo+727,+City+Bell,+Provincia+de+Buenos+Aires&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full border-0 min-h-[380px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-3 flex items-center justify-between px-2 text-xs text-stone-500">
              <span>C. Cantilo 727, City Bell</span>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9A6F00] font-medium hover:underline inline-flex items-center gap-1"
              >
                <span>Ver mapa ampliado</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
