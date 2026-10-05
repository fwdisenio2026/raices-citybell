import React, { useState, useRef } from 'react';
import { Image as ImageIcon, Video, X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { CrayonLoop, CrayonSpiral } from './HandDrawnAccents';

import fachadaImg from '../assets/images/fachada_01.png';
import banioImg from '../assets/images/interior_banio_01.png';
import interiorExteriorImg from '../assets/images/interior_exteriro_01.png';
import interior01Img from '../assets/images/interior_interior_01.png';
import interior02Img from '../assets/images/interior_interior_02.png';
import piletitaImg from '../assets/images/interior_piletita_01.png';
import plazaBlanda01Img from '../assets/images/interior_plazablanda_01.png';
import plazaBlanda02Img from '../assets/images/interior_plazablanda_02.png';
import institutionalVideo from '../assets/videos/raices_video_clean.mp4';

interface MediaItem {
  id: number;
  type: 'foto' | 'video';
  title: string;
  category: string;
  src?: string;
  videoSrc?: string;
}

export const Galeria: React.FC = () => {
  const [activeItem, setActiveItem] = useState<MediaItem | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: 'foto',
      title: 'Fachada institucional',
      category: 'Ingreso',
      src: fachadaImg,
    },
    {
      id: 2,
      type: 'video',
      title: 'Recorrido en Raíces',
      category: 'Experiencias',
      videoSrc: institutionalVideo,
    },
    {
      id: 3,
      type: 'foto',
      title: 'Plaza blanda y motricidad',
      category: 'Salas',
      src: plazaBlanda01Img,
    },
    {
      id: 4,
      type: 'foto',
      title: 'Espacios de estimulación temprana',
      category: 'Actividades',
      src: plazaBlanda02Img,
    },
    {
      id: 5,
      type: 'foto',
      title: 'Salas luminosas preparadas',
      category: 'Salas',
      src: interior01Img,
    },
    {
      id: 6,
      type: 'foto',
      title: 'Rincones de juego libre',
      category: 'Salas',
      src: interior02Img,
    },
    {
      id: 7,
      type: 'foto',
      title: 'Sector recreativo y sensorial',
      category: 'Juegos',
      src: piletitaImg,
    },
    {
      id: 8,
      type: 'foto',
      title: 'Salida directa al parque',
      category: 'Parque',
      src: interiorExteriorImg,
    },
    {
      id: 9,
      type: 'foto',
      title: 'Sanitarios adaptados a la primera infancia',
      category: 'Instalaciones',
      src: banioImg,
    },
  ];

  // Duplicamos la lista para crear el loop infinito sin saltos
  const doubleMediaItems = [...mediaItems, ...mediaItems];

  const handleNext = () => {
    if (!activeItem) return;
    const currentIndex = mediaItems.findIndex((it) => it.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % mediaItems.length;
    setActiveItem(mediaItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeItem) return;
    const currentIndex = mediaItems.findIndex((it) => it.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length;
    setActiveItem(mediaItems[prevIndex]);
  };

  const manualScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="galeria" className="relative py-20 md:py-28 bg-white border-t border-stone-100 overflow-hidden">
      {/* Trazos infantiles de crayón de fondo */}
      <div className="absolute top-6 left-12 pointer-events-none opacity-25">
        <CrayonLoop className="w-40 h-16" color="#ECAD05" />
      </div>
      <div className="absolute bottom-6 right-16 pointer-events-none opacity-20">
        <CrayonSpiral className="w-24 h-24" color="#0EA5E9" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-stone-50 border border-stone-200 text-[#9A6F00] text-xs font-semibold uppercase tracking-widest mb-3 shadow-xs">
            Espacio Visual
          </div>
          <p className="text-3xl sm:text-4xl font-brand-serif font-normal text-stone-900 leading-tight">
            Galería de{' '}
            <span className="font-brand-italic text-[#ECAD05]">
              Momentos & Espacios
            </span>
          </p>
          <p className="text-stone-600 mt-4 text-sm sm:text-base max-w-xl mx-auto">
            Recorré nuestras salas, parque y sectores de estimulación. Las fotos y video
            se desplazan continuamente para que descubras cada rincón.
          </p>
        </div>

        {/* Controles manuales opcionales */}
        <div className="flex items-center justify-end gap-2 mt-4 px-2">
          <button
            type="button"
            onClick={() => manualScroll('left')}
            className="p-2.5 rounded-full bg-stone-100 hover:bg-[#ECAD05] text-stone-700 hover:text-stone-950 transition-colors cursor-pointer shadow-xs active:scale-95"
            aria-label="Desplazar hacia la izquierda"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => manualScroll('right')}
            className="p-2.5 rounded-full bg-stone-100 hover:bg-[#ECAD05] text-stone-700 hover:text-stone-950 transition-colors cursor-pointer shadow-xs active:scale-95"
            aria-label="Desplazar hacia la derecha"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Carrusel Continuo / Marquee que pasa todas las imágenes juntas lentamente */}
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto no-scrollbar scroll-smooth py-4 cursor-grab"
      >
        <div className="animate-marquee-slow flex gap-6 px-4">
          {doubleMediaItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              onClick={() => setActiveItem(item)}
              className="w-72 sm:w-80 md:w-96 shrink-0 group relative rounded-3xl border border-stone-200 bg-stone-50 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#ECAD05] transition-all duration-300 aspect-4/3 cursor-pointer"
            >
              {item.type === 'video' ? (
                <div className="relative w-full h-full bg-stone-900 flex items-center justify-center overflow-hidden">
                  <video
                    src={item.videoSrc}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-stone-900/30 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#ECAD05] text-stone-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 ml-1 fill-stone-950" />
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              )}

              {/* Overlay con Información y Badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent flex flex-col justify-between p-5 opacity-90 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-stone-800 text-[11px] font-bold uppercase tracking-wider shadow-xs">
                    {item.type === 'video' ? (
                      <>
                        <Video className="w-3.5 h-3.5 text-[#ECAD05]" />
                        <span>Video</span>
                      </>
                    ) : (
                      <>
                        <ImageIcon className="w-3.5 h-3.5 text-[#ECAD05]" />
                        <span>{item.category}</span>
                      </>
                    )}
                  </span>
                </div>

                <div>
                  <h4 className="font-brand-serif text-white text-base sm:text-lg font-medium drop-shadow-xs">
                    {item.title}
                  </h4>
                  <p className="text-white/80 text-xs">Jardín Maternal Raíces</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-6">
        <p className="text-xs text-stone-400 font-medium">
          (Pausá el cursor sobre el carrusel para detenerlo y hacé clic para ampliar cualquier foto o video)
        </p>
      </div>

      {/* Lightbox / Media Viewer Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="absolute -top-12 right-0 sm:right-2 p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
              aria-label="Cerrar vista"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Media Content */}
            <div className="relative w-full max-h-[75vh] flex items-center justify-center rounded-2xl overflow-hidden bg-black shadow-2xl">
              {activeItem.type === 'video' ? (
                <video
                  src={activeItem.videoSrc}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[75vh] w-auto max-w-full rounded-2xl"
                />
              ) : (
                <img
                  src={activeItem.src}
                  alt={activeItem.title}
                  className="max-h-[75vh] w-auto max-w-full object-contain rounded-2xl"
                />
              )}

              {/* Prev / Next Arrows */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 text-white hover:bg-[#ECAD05] hover:text-stone-950 transition-all focus:outline-none cursor-pointer"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 text-white hover:bg-[#ECAD05] hover:text-stone-950 transition-all focus:outline-none cursor-pointer"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Caption */}
            <div className="mt-4 text-center text-white">
              <h3 className="font-brand-serif text-xl">{activeItem.title}</h3>
              <p className="text-xs text-white/60 uppercase tracking-widest mt-1">
                Jardín Maternal Raíces • City Bell
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
