import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Propuesta } from './components/Propuesta';
import { PrimeraInfancia } from './components/PrimeraInfancia';
import { AireLibre } from './components/AireLibre';
import { PorQueElegirnos } from './components/PorQueElegirnos';
import { Galeria } from './components/Galeria';
import { InscripcionesBanner } from './components/InscripcionesBanner';
import { Contacto } from './components/Contacto';
import { Footer } from './components/Footer';
import { InscripcionesModal } from './components/InscripcionesModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileAppNav } from './components/MobileAppNav';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-stone-800 flex flex-col font-sans selection:bg-[#ECAD05]/20 selection:text-stone-900 pb-16 md:pb-0">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <Propuesta />
        <PrimeraInfancia />
        <AireLibre />
        <PorQueElegirnos />
        <Galeria />
        <InscripcionesBanner />
        <Contacto />
      </main>

      <Footer />

      {/* Auxiliary interactive components */}
      <InscripcionesModal />
      <FloatingWhatsApp />
      
      {/* Mobile App-like Bottom Navigation */}
      <MobileAppNav />
    </div>
  );
}
