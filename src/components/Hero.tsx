import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="início" className="relative min-h-screen flex items-center justify-center overflow-hidden border-[12px] border-viking-gold m-0 sm:m-4">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#D4AF37 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ 
            scale: [1.1, 1.15, 1.1],
            opacity: 0.4
          }}
          transition={{ 
            scale: { repeat: Infinity, duration: 20, ease: "linear" },
            opacity: { duration: 2 }
          }}
          src="https://res.cloudinary.com/dqukldtq1/image/upload/v1776978147/WhatsApp_Image_2026-04-23_at_5.28.20_PM_plggzt.jpg"
          alt="Background"
          className="w-full h-full object-cover filter blur-[30px] opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-viking-dark/30 via-viking-dark/70 to-viking-dark" />
        <div className="absolute inset-0 texture-overlay" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <div className="mb-4">
            <span className="text-viking-gold font-sans text-xs uppercase tracking-[0.5em] block animate-pulse">O Refúgio do Guerreiro</span>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-8">
            <h1 className="text-[60px] sm:text-[100px] md:text-[130px] leading-[0.85] font-black tracking-tight text-white uppercase select-none drop-shadow-2xl text-center lg:text-left">
              BLUE VIKING<br/>
              <span className="text-[50px] sm:text-[80px] md:text-[100px] text-transparent" style={{ WebkitTextStroke: '1px var(--color-viking-gold)' }}>POUSADA</span>
            </h1>

            {/* Hero Logo with animations and shine */}
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 2, -2, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative group shrink-0"
            >
              <div className="absolute inset-0 bg-viking-gold/30 rounded-full blur-2xl group-hover:blur-3xl transition-all animate-pulse" />
              <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 border-4 border-viking-gold rounded-full overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.4)] ring-2 ring-viking-gold/50">
                <img
                  src="https://res.cloudinary.com/dqukldtq1/image/upload/v1776978147/WhatsApp_Image_2026-04-23_at_5.28.20_PM_plggzt.jpg"
                  alt="Blue Viking Hero Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Reflection/Shine effect */}
                <motion.div
                  animate={{ left: ['-100%', '250%'] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="absolute top-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 pointer-events-none"
                />
              </div>
            </motion.div>
          </div>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-viking-gold-bright opacity-80 leading-relaxed italic mb-12 font-serif">
            "Um santuário de tranquilidade na Praia do Francês, a apenas 750m do mar. Onde a força nórdica encontra o descanso tropical em uma experiência exclusiva para exploradores da alma."
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <motion.button
              whileHover={{ scale: 1.05, translateY: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('acomodações')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-5 bg-viking-gold text-viking-dark font-sans font-bold uppercase tracking-[0.2em] text-xs hover:bg-white transition-all shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
            >
              Garanta seu lugar na Taverna
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Rune Elements */}
      <div className="hidden lg:block absolute top-1/2 left-8 -translate-y-1/2 text-5xl text-viking-gold opacity-10 pointer-events-none [writing-mode:vertical-rl]">ᚠ ᚢ ᚦ ᚨ ᚱ ᚲ</div>
      <div className="hidden lg:block absolute top-1/2 right-8 -translate-y-1/2 text-5xl text-viking-gold opacity-10 pointer-events-none [writing-mode:vertical-rl]">ᚺ ᚾ ᛁ ᛃ ᛇ ᛈ</div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-viking-gold/50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
