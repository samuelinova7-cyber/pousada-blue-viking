import { motion } from 'motion/react';
import { Calendar, User2, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="início" className="relative pt-[128px] sm:pt-[160px]">
      {/* Main Hero Image */}
      <div className="relative h-[500px] sm:h-[800px] overflow-hidden group">
        <img
          src="https://res.cloudinary.com/dqukldtq1/image/upload/v1776978147/WhatsApp_Image_2026-04-23_at_5.28.20_PM_plggzt.jpg"
          alt="Pousada Blue Viking"
          className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        {/* Animated Shine Effect */}
        <motion.div
           animate={{ 
             left: ['-100%', '200%'],
             opacity: [0, 0.4, 0]
           }}
           transition={{ 
             duration: 3, 
             repeat: Infinity, 
             repeatDelay: 5,
             ease: "linear" 
           }}
           className="absolute top-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 pointer-events-none"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Booking Bar (Simplified) */}
      <div className="max-w-7xl mx-auto px-4 -mt-12 sm:-mt-16 relative z-10 flex justify-center">
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://hbook.hsystem.com.br/Booking/IndexMobile?companyId=5db09069ab41d412a0feb4a1&utm_medium=social&utm_source=ig&utm_content=link_in_bio&utm_id=97760_v0_s00_e0_tv3_a1dennhdgo0hl4"
          target="_blank"
          rel="noreferrer"
          className="bg-viking-gold text-white font-display font-bold text-xl sm:text-2xl tracking-widest px-12 sm:px-20 py-6 sm:py-8 hover:bg-viking-blue transition-all uppercase whitespace-nowrap shadow-2xl flex items-center justify-center cursor-pointer"
        >
          Consultar Valores
        </motion.a>
      </div>

      {/* Intro Text Section */}
      <div className="max-w-7xl mx-auto px-4 py-24 grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="space-y-8"
        >
          <div className="space-y-2">
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-viking-blue tracking-tighter">
              Pousada Blue Viking
            </h1>
            <h2 className="font-display text-2xl font-bold text-viking-gold tracking-tight">
              Na Praia do Francês em Maceió, AL
            </h2>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              A Pousada Blue Viking está situada na Praia do Francês, perto da cidade de Maceió, e a 40 km do aeroporto internacional Zumbi dos Palmares.
            </p>
            <p>
              A pousada foi construída com muito amor e carinho por pessoas que amam o que faz e tem um carinho muito grande por Alagoas, principalmente a Praia do Francês, visamos oferecer um ambiente bonito e aconchegante com um jardim maravilhoso.
            </p>
            <p>
              Temos uma localização privilegiada em uma rua tranquila com facilidade de estacionamento, estamos a apenas 750m da orla da praia.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative rounded-lg overflow-hidden border-8 border-white shadow-xl group"
        >
          <img
            src="https://res.cloudinary.com/dqukldtq1/image/upload/v1776978423/WhatsApp_Image_2026-04-23_at_5.28.20_PM_1_fwjebi.jpg"
            alt="Fachada Blue Viking"
            className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
          />
          {/* Animated Shine Effect */}
          <motion.div
             animate={{ 
               left: ['-100%', '200%'],
               opacity: [0, 0.4, 0]
             }}
             transition={{ 
               duration: 2.5, 
               repeat: Infinity, 
               repeatDelay: 4,
               ease: "linear" 
             }}
             className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 pointer-events-none"
          />
          {/* Gallery navigation simulation removed per request */}
        </motion.div>
      </div>
    </section>
  );
}
