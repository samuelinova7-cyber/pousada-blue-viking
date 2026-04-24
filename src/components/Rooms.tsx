import { motion } from 'motion/react';
import { Shield, Wifi, Wind, Tv, Box, User, Users, UsersRound } from 'lucide-react';

const rooms = [
  {
    id: 1,
    name: "Taverna Duo",
    type: "Ideal para Casais",
    description: "Espaço íntimo e acolhedor com madeira nobre. Possui mini frigobar, TV, ar condicionado e banheiro privativo com secador acoplado. Inclui espelho e local planejado para mochilas.",
    image: "https://res.cloudinary.com/dqukldtq1/image/upload/v1776979275/WhatsApp_Image_2026-04-23_at_5.28.23_PM_3_voeclo.jpg",
    icon: User
  },
  {
    id: 2,
    name: "Taverna Trio",
    type: "Conforto Triplo",
    description: "Perfeita para pequenos grupos. Equipada com mini frigobar, TV, ar condicionado e banheiro de alto padrão com secador. Conta com espelho e organizador de bagagens.",
    image: "https://res.cloudinary.com/dqukldtq1/image/upload/v1776979274/WhatsApp_Image_2026-04-23_at_5.28.25_PM_2_sohv4y.jpg",
    icon: Users
  },
  {
    id: 3,
    name: "Taverna Clan",
    type: "Acomodação Familiar",
    description: "Espaço amplo para a família. Todos os confortos: frigobar, TV, climatização e banheiro equipado com secador. Área dedicada para mochilas e pertences temporários.",
    image: "https://res.cloudinary.com/dqukldtq1/image/upload/v1776979272/WhatsApp_Image_2026-04-23_at_5.28.25_PM_3_dq5ztt.jpg",
    icon: UsersRound
  }
];

export default function Rooms() {
  return (
    <section id="acomodações" className="py-24 bg-viking-slate border-t border-viking-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl md:text-7xl text-white uppercase mb-6 drop-shadow-lg">
            OS <span className="text-viking-gold">QUARTOS</span>
          </h2>
          <div className="h-[2px] w-32 bg-viking-gold mx-auto mb-8" />
          <p className="font-serif text-xl text-viking-gold-bright opacity-60 italic max-w-2xl mx-auto">
            "Acomodações planejadas para o máximo descanso. Todos os banheiros seguem o mais alto padrão de qualidade e conforto."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border border-viking-gold/20">
          {rooms.map((room) => (
            <motion.div
              key={room.id}
              className="bg-viking-dark border-r md:last:border-r-0 border-viking-gold/20 overflow-hidden group flex flex-col"
            >
              <div className="relative h-72 overflow-hidden border-b border-viking-gold/20">
                {/* Floating Animation Wrapper for the Image */}
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="w-full h-full"
                >
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover brightness-90 transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  {/* Reflection / Shine Effect */}
                  <motion.div
                    animate={{ left: ['-100%', '200%'] }}
                    transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                    className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 pointer-events-none mix-blend-overlay"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-viking-blue/20 mix-blend-overlay pointer-events-none" />
                <div className="absolute top-4 right-4 bg-viking-gold/80 backdrop-blur-sm p-3 rounded-full text-viking-dark shadow-gold">
                  <room.icon size={20} className="font-bold" />
                </div>
              </div>

              <div className="p-10 space-y-6 flex-1 flex flex-col">
                <div>
                  <h3 className="font-heading text-3xl text-viking-gold mb-2 uppercase tracking-tighter">{room.name}</h3>
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold block">{room.type}</span>
                </div>
                
                <p className="text-viking-gold-bright/70 text-sm leading-relaxed font-serif italic h-24 overflow-hidden">
                  {room.description}
                </p>

                <div className="grid grid-cols-2 gap-y-4 pt-4 border-t border-viking-gold/10 flex-1">
                  <div className="flex items-center gap-3 text-white/50 text-[9px] uppercase tracking-widest font-sans font-bold">
                    <Wind size={14} className="text-viking-gold" />
                    <span>Split AC</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/50 text-[9px] uppercase tracking-widest font-sans font-bold">
                    <Tv size={14} className="text-viking-gold" />
                    <span>Televisão</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/50 text-[9px] uppercase tracking-widest font-sans font-bold">
                    <Box size={14} className="text-viking-gold" />
                    <span>Frigobar</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/50 text-[9px] uppercase tracking-widest font-sans font-bold">
                    <Wifi size={14} className="text-viking-gold" />
                    <span>Free Wi-Fi</span>
                  </div>
                </div>

                <div className="pt-6 mt-auto">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://wa.me/5582999999999"
                    target="_blank"
                    rel="noreferrer"
                    className="relative flex items-center justify-center p-4 bg-viking-gold text-viking-dark font-sans font-bold uppercase tracking-[0.2em] text-xs shadow-[0_5px_15px_rgba(212,175,55,0.2)] overflow-hidden group/btn"
                  >
                    <motion.div
                      animate={{ left: ['-100%', '200%'] }}
                      transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
                      className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 pointer-events-none"
                    />
                    <span className="relative z-10 flex items-center gap-3">
                      <Shield size={16} />
                      Reservar Agora
                    </span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

