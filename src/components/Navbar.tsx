import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Baby, ShieldCheck, Image as ImageIcon, MapPin, HeartHandshake } from 'lucide-react';
import logoWhite from '../assets/logos/raices_logo_white-1.png';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menú sin "Parque y Juego", sin estrellas/sparkles
  const navLinks = [
    { label: 'Inicio', href: '#inicio', icon: Home, color: 'bg-amber-100 text-amber-900' },
    { label: 'Propuesta', href: '#propuesta', icon: HeartHandshake, color: 'bg-yellow-100 text-yellow-900' },
    { label: 'Primera Infancia', href: '#primera-infancia', icon: Baby, color: 'bg-orange-100 text-orange-900' },
    { label: 'Por Qué Elegirnos', href: '#por-que-elegirnos', icon: ShieldCheck, color: 'bg-blue-100 text-blue-900' },
    { label: 'Galería', href: '#galeria', icon: ImageIcon, color: 'bg-rose-100 text-rose-900' },
    { label: 'Contacto', href: '#contacto', icon: MapPin, color: 'bg-stone-100 text-stone-900' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 bg-[#ECAD05] transition-all duration-300 ease-in-out ${
        isScrolled ? 'py-1.5 sm:py-2 shadow-lg' : 'py-3 sm:py-4 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo en blanco prominente que se achica al scrolear */}
          <a href="#inicio" className="flex items-center group focus:outline-none py-1">
            <img
              src={logoWhite}
              alt="Jardín Maternal Raíces"
              className={`w-auto object-contain transition-all duration-300 ease-in-out group-hover:scale-105 filter drop-shadow-xs ${
                isScrolled ? 'h-9 sm:h-11 md:h-12' : 'h-13 sm:h-16 md:h-18'
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[12px] uppercase tracking-wider font-semibold text-white/95 hover:text-white hover:bg-black/15 px-3.5 py-2 rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button con icono táctil */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-white hover:bg-black/10 active:scale-95 focus:outline-none transition-all cursor-pointer"
            aria-label="Abrir menú"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Estilo App */}
      {isOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-stone-200 px-4 pt-4 pb-8 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <div className="text-center pb-3 border-b border-stone-100 mb-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#9A6F00]">
              Secciones
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-stone-50 hover:bg-[#ECAD05]/10 border border-stone-200/80 active:scale-95 transition-all text-center shadow-xs"
                >
                  <div className={`w-11 h-11 rounded-2xl ${link.color} flex items-center justify-center mb-1.5 shadow-xs`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-stone-800 leading-tight">
                    {link.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
