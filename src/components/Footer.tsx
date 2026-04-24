import { Anchor, Instagram, Facebook, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center px-6 sm:px-12 py-8 bg-viking-black text-[10px] font-sans uppercase tracking-[0.2em] text-white/40 z-10 border-t border-viking-gold/20">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-4 md:mb-0">
        <div className="flex items-center gap-4">
           {/* Footer Logo */}
           <div className="relative w-12 h-12 border border-viking-gold/30 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all">
             <img
               src="https://res.cloudinary.com/dqukldtq1/image/upload/v1776978423/WhatsApp_Image_2026-04-23_at_5.28.20_PM_1_fwjebi.jpg"
               alt="Blue Viking Footer Logo"
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
             />
           </div>
           <div className="flex flex-col">
             <div className="flex items-center gap-2">
               <div className="w-2 h-2 bg-viking-gold rotate-45" />
               <span>📍 Av. Caravelas, 321 — Praia do Francês, Marechal Deodoro – AL</span>
             </div>
           </div>
        </div>
      </div>
      <div className="flex gap-8">
        <span className="hover:text-viking-gold transition-colors cursor-default">Check-in: 14h</span>
        <span className="hover:text-viking-gold transition-colors cursor-default">Check-out: 12h</span>
      </div>
      <div className="mt-4 md:mt-0 opacity-50">
         © {new Date().getFullYear()} Blue Viking Pousada
      </div>
    </footer>
  );
}

