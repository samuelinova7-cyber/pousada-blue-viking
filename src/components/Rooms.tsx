import { motion, AnimatePresence } from 'motion/react';
import { Shield, Wind, Tv, Box, User, Users, UsersRound, Info } from 'lucide-react';
import { useState, useEffect } from 'react';

const rooms = [
  {
    id: 1,
    name: "Quarto Duplo",
    type: "Para 2 Pessoas",
    description: "Um cantinho aconchegante pra você e seu acompanhante. Tem ar-condicionado, TV, frigobar e banheiro com secador. Lugar perfeito pra descansar depois da praia.",
    images: [
      "https://res.cloudinary.com/dqukldtq1/image/upload/v1777080059/Captura_de_tela_2026-04-24_215227_dvvogh.png",
      "https://res.cloudinary.com/dqukldtq1/image/upload/v1777080059/Captura_de_tela_2026-04-24_215300_eddy6l.png"
    ],
    icon: User
  },
  {
    id: 2,
    name: "Quarto Triplo",
    type: "Para 3 Pessoas",
    description: "Ideal pra família pequena ou amigos. Quarto completo com ar-condicionado, TV e frigobar. Banheiro limpinho com secador pra sua comodidade.",
    images: [
      "https://res.cloudinary.com/dqukldtq1/image/upload/v1777080059/Captura_de_tela_2026-04-24_215516_sz4yn0.png",
      "https://res.cloudinary.com/dqukldtq1/image/upload/v1777080059/Captura_de_tela_2026-04-24_215300_eddy6l.png",
      "https://res.cloudinary.com/dqukldtq1/image/upload/v1777080061/Captura_de_tela_2026-04-24_215429_kr3lti.png"
    ],
    icon: Users
  },
  {
    id: 3,
    name: "Quarto Quádruplo",
    type: "Para 4 Pessoas",
    description: "Espaço pra todo mundo! Quarto grande com ar-condicionado, TV e frigobar. Tudo organizado pra sua família curtir o Francês com conforto.",
    images: [
      "https://res.cloudinary.com/dqukldtq1/image/upload/v1777080062/Captura_de_tela_2026-04-24_215547_uur9v1.png",
      "https://res.cloudinary.com/dqukldtq1/image/upload/v1777080063/Captura_de_tela_2026-04-24_215531_c1pe0a.png",
      "https://res.cloudinary.com/dqukldtq1/image/upload/v1777080059/Captura_de_tela_2026-04-24_215300_eddy6l.png"
    ],
    icon: UsersRound
  }
];

function RoomCard({ room }: { room: typeof rooms[0] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, [room.images.length]);

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white border border-gray-100 overflow-hidden group flex flex-col shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <div className="relative h-72 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={room.images[currentImageIndex]}
            src={room.images[currentImageIndex]}
            alt={room.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        <div className="absolute top-4 right-4 bg-viking-blue p-3 rounded-full text-white shadow-lg z-10">
          <room.icon size={20} />
        </div>
        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {room.images.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-4 bg-viking-gold' : 'w-1.5 bg-white/50'}`} 
            />
          ))}
        </div>
      </div>

      <div className="p-8 space-y-6 flex-1 flex flex-col">
        <div>
          <h3 className="font-heading text-2xl text-viking-blue mb-1 uppercase">{room.name}</h3>
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-viking-gold font-bold block">{room.type}</span>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed h-20 overflow-hidden">
          {room.description}
        </p>

        <div className="grid grid-cols-2 gap-y-3 pt-6 border-t border-gray-50">
          <div className="flex items-center gap-3 text-gray-400 text-[9px] uppercase tracking-widest font-bold">
            <Wind size={14} className="text-viking-gold" />
            <span>Split AC</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400 text-[9px] uppercase tracking-widest font-bold">
            <Tv size={14} className="text-viking-gold" />
            <span>Televisão</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400 text-[9px] uppercase tracking-widest font-bold">
            <Box size={14} className="text-viking-gold" />
            <span>Frigobar</span>
          </div>
          {/* Wi-Fi removed from here per request */}
        </div>

        <div className="pt-6">
          <a
            href="https://hbook.hsystem.com.br/Booking/IndexMobile?companyId=5db09069ab41d412a0feb4a1&utm_medium=social&utm_source=ig&utm_content=link_in_bio&utm_id=97760_v0_s00_e0_tv3_a1dennhdgo0hl4"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 w-full p-4 bg-viking-gold text-white font-display font-bold uppercase tracking-widest text-xs hover:bg-viking-blue transition-all shadow-md"
          >
            <Shield size={16} />
            Reservar Agora
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Rooms() {
  return (
    <section id="acomodações" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-6xl text-viking-blue uppercase mb-4">
            NOSSOS <span className="text-viking-gold">QUARTOS</span>
          </h2>
          <div className="h-[2px] w-24 bg-viking-gold mx-auto mb-8" />
          <p className="font-sans text-gray-500 max-w-2xl mx-auto">
            Acomodações simples e confortáveis pra você aproveitar o melhor da Praia do Francês. Tudo limpinho e organizado com todo carinho.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {/* Info Block for Wi-Fi */}
        <div className="mt-16 bg-gray-50 border-l-4 border-viking-gold p-6 flex items-start gap-4 max-w-3xl mx-auto">
           <div className="bg-viking-gold p-2 rounded-full text-white">
             <Info size={20} />
           </div>
           <div>
             <h4 className="text-viking-blue font-bold uppercase text-sm tracking-widest mb-1">Dica importante</h4>
             <p className="text-gray-600 text-sm">
               Nosso Wi-Fi funciona muito bem em todas as <strong>áreas comuns</strong> da pousada. Assim você se desconecta do mundo dentro do quarto e aproveita o jardim e a piscina pra postar suas fotos!
             </p>
           </div>
        </div>
      </div>
    </section>
  );
}
