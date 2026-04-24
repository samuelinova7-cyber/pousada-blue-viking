import { motion } from 'motion/react';
import { Anchor, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed w-full z-50">
      {/* Informative Top Bar */}
      <div className="bg-viking-gold text-viking-dark py-2 px-4 text-[10px] sm:text-xs font-sans font-bold uppercase tracking-widest text-center border-b border-white/20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 sm:gap-8">
          <span>✨ Check-in: 14:00 | Check-out: 12:00</span>
          <span>📍 Praia do Francês, AL</span>
          <span className="hidden sm:inline">📞 (82) 99999-9999</span>
        </div>
      </div>

      <nav className="bg-viking-dark/30 backdrop-blur-md px-6 sm:px-12 py-4 transition-all border-b border-viking-gold/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Logo with animations and shine */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-viking-gold/40 rounded-full blur-md group-hover:blur-lg transition-all animate-pulse" />
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 border-2 border-viking-gold rounded-full overflow-hidden shadow-gold ring-1 ring-viking-gold/30">
                <img
                  src="https://res.cloudinary.com/dqukldtq1/image/upload/v1776978423/WhatsApp_Image_2026-04-23_at_5.28.20_PM_1_fwjebi.jpg"
                  alt="Blue Viking Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Reflection/Shine effect */}
                <motion.div
                  animate={{ left: ['-100%', '200%'] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 pointer-events-none"
                />
              </div>
            </motion.div>
            
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl tracking-tighter text-white uppercase drop-shadow-sm">BLUE VIKING</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-viking-gold rotate-45" />
                <span className="tracking-[0.2em] text-[8px] uppercase text-viking-gold font-bold">Desde 2006</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-[11px] font-sans uppercase tracking-[0.2em] font-semibold">
            {['Tavernas', 'Estrutura', 'Oásis', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase() === 'tavernas' ? 'acomodações' : item.toLowerCase()}`}
                className="text-viking-gold-bright hover:text-viking-gold transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="https://wa.me/5582999999999"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-viking-gold text-viking-dark px-4 py-2 rounded-sm hover:bg-white transition-all group"
            >
              <span className="text-[10px]">Reservar por WhatsApp</span>
            </a>
          </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-viking-gold p-2"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-viking-slate border-b border-viking-gold/20 flex flex-col items-center py-8 space-y-6"
        >
          {['Início', 'Acomodações', 'Estrutura', 'História', 'Oásis', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-viking-gold font-accent text-lg uppercase tracking-widest"
            >
              {item}
            </a>
          ))}
          <a
            href="https://wa.me/5582999999999"
            target="_blank"
            rel="noreferrer"
            className="bg-viking-gold text-viking-dark px-8 py-3 rounded-sm font-accent font-bold tracking-widest uppercase"
          >
            Reservar Agora
          </a>
        </motion.div>
      )}
      </nav>
    </div>
  );
}
