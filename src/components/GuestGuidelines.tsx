import { motion } from 'motion/react';
import { 
  Clock, 
  Coffee, 
  Waves, 
  Ban, 
  GlassWater, 
  Utensils, 
  VolumeX, 
  CircleOff, 
  Users,
  Info
} from 'lucide-react';

export default function GuestGuidelines() {
  const schedules = [
    { label: "Check-in", time: "14h", icon: Clock },
    { label: "Check-out", time: "12h", icon: Clock },
    { label: "Café da Manhã", time: "07:30 às 09:30", icon: Coffee },
    { label: "Piscina", time: "08:00 às 19:00", icon: Waves },
  ];

  const rules = [
    { text: "Vidros: Uso de copos, garrafas ou recipientes de vidro.", icon: GlassWater },
    { text: "Alimentação: Consumir alimentos ou bebidas dentro da água.", icon: Utensils },
    { text: "Som: Uso de caixas de som de qualquer porte.", icon: VolumeX },
    { text: "Lazer: Uso de bolas ou prática de churrasco na área.", icon: CircleOff },
    { text: "Acesso: Entrada de visitas (uso exclusivo para hóspedes).", icon: Users },
  ];

  return (
    <section className="bg-white py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
             <div className="w-12 h-12 border border-viking-gold flex items-center justify-center rotate-45">
                <Info className="-rotate-45 text-viking-gold w-5 h-5" />
             </div>
          </div>
          <h2 className="font-heading text-4xl md:text-6xl text-viking-blue uppercase mb-4">
            GUIA DO <span className="text-viking-gold">HÓSPEDE</span>
          </h2>
          <p className="font-sans text-gray-500 italic text-lg">
            Regras simples para uma boa convivência
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Schedules Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-viking-blue p-8 sm:p-12 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 text-white">
              <Clock size={120} />
            </div>
            
            <h3 className="font-heading text-3xl text-white uppercase mb-8 border-b border-white/20 pb-4">
              🕒 Horários
            </h3>
            
            <div className="space-y-8">
              {schedules.map((item, idx) => (
                <div key={idx} className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/10 border border-white/20 flex items-center justify-center">
                    <item.icon className="text-viking-gold" size={20} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-white/60 font-bold mb-1">{item.label}</span>
                    <span className="text-white font-heading text-2xl">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Prohibitions Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 sm:p-12 shadow-xl relative overflow-hidden border border-gray-100"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 text-viking-blue">
              <Ban size={120} />
            </div>
            
            <h3 className="font-heading text-3xl text-viking-blue uppercase mb-8 border-b border-viking-blue/10 pb-4">
              🚫 Regras da Piscina
            </h3>
            
            <p className="text-gray-500 text-sm italic mb-8">
              Para garantir a segurança e o conforto de todos, não é permitido:
            </p>
            
            <div className="space-y-6">
              {rules.map((rule, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 border-l-2 border-gray-200 hover:border-viking-gold hover:bg-white transition-all">
                  <div className="text-viking-blue mt-1">
                    <rule.icon size={20} />
                  </div>
                  <span className="text-gray-600 font-sans text-sm font-medium leading-relaxed">
                    {rule.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-viking-blue text-white rounded-none border-l-4 border-viking-gold">
              <div className="flex items-center gap-3 mb-2">
                <Info size={16} className="text-viking-gold" />
                <span className="font-heading text-sm uppercase tracking-wider font-bold tracking-widest">Atenção</span>
              </div>
              <p className="text-xs opacity-80 leading-relaxed font-sans">
                O uso da piscina é exclusivo para hóspedes. Visitantes não têm acesso às áreas de lazer da pousada.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
