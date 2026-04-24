import { motion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const poolImages = [
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776982617/WhatsApp_Image_2026-04-23_at_5.28.26_PM_2_vo51sd.jpg",
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776982617/WhatsApp_Image_2026-04-23_at_5.28.27_PM_2_si68qn.jpg",
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776982618/WhatsApp_Image_2026-04-23_at_5.28.26_PM_1_v9t8hs.jpg",
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776982618/WhatsApp_Image_2026-04-23_at_5.28.26_PM_3_qrzsmd.jpg",
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776982619/WhatsApp_Image_2026-04-23_at_5.28.33_PM_2_ckmlcu.jpg",
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776982619/WhatsApp_Image_2026-04-23_at_5.28.27_PM_ehzltv.jpg",
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776982619/WhatsApp_Image_2026-04-23_at_5.28.33_PM_ugpt9y.jpg",
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776982620/WhatsApp_Image_2026-04-23_at_5.28.33_PM_1_zubfum.jpg",
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776982620/WhatsApp_Image_2026-04-23_at_5.28.35_PM_vvbgb2.jpg",
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776982620/WhatsApp_Image_2026-04-23_at_5.28.36_PM_1_t11pqm.jpg",
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776982621/WhatsApp_Image_2026-04-23_at_5.28.59_PM_nomg9m.jpg",
  "https://res.cloudinary.com/dqukldtq1/image/upload/v1776982622/WhatsApp_Image_2026-04-23_at_5.28.58_PM_ip9nq9.jpg"
];

export default function Amenities() {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);

  return (
    <section className="bg-white py-32 overflow-hidden border-t border-viking-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pool Section */}
        <div id="oásis" className="grid lg:grid-cols-2 gap-24 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <span className="text-viking-gold font-sans text-xs uppercase tracking-[0.3em] font-bold block mb-4">Oasis de Águas Claras</span>
              <h2 className="font-heading text-5xl md:text-7xl text-viking-dark uppercase leading-[0.85]">
                O <span className="text-viking-gold">REPOUSO</span> DO GUERREIRO
              </h2>
            </div>
            <div className="h-[2px] w-24 bg-viking-gold" />
            <p className="font-serif text-xl text-viking-dark/70 leading-relaxed italic">
              "Aproveite momentos de puro relaxamento em nossa piscina exclusiva para hóspedes. Um ambiente desenhado para o repouso absoluto onde o silêncio é a trilha sonora principal."
            </p>
            <div className="grid grid-cols-2 gap-12 pt-6">
              <div className="space-y-2">
                <span className="block font-sans text-[10px] uppercase tracking-[0.2em] text-viking-dark/40 font-bold">Privacidade</span>
                <span className="text-viking-dark text-lg font-heading">Uso reservado</span>
              </div>
              <div className="space-y-2">
                <span className="block font-sans text-[10px] uppercase tracking-[0.2em] text-viking-dark/40 font-bold">Estado de Espírito</span>
                <span className="text-viking-dark text-lg font-heading">Paz absoluta</span>
              </div>
            </div>
          </motion.div>
          <div className="relative group">
             <div className="absolute -top-6 -left-6 w-full h-full border border-viking-gold/20 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-700" />
             <div className="overflow-hidden border border-viking-gold/20" ref={emblaRef}>
               <div className="flex touch-pan-y">
                 {poolImages.map((src, index) => (
                   <div key={index} className="flex-[0_0_100%] min-w-0 mr-4 relative cursor-grab active:cursor-grabbing">
                     <img
                       src={src}
                       alt={`Piscina Blue Viking ${index + 1}`}
                       className="w-full h-auto max-h-[600px] object-cover transition-all duration-1000 group-hover:scale-105"
                       referrerPolicy="no-referrer"
                     />
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
