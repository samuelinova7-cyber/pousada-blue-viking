import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Info } from 'lucide-react';

const faqs = [
  {
    question: "Quais são os horários de Check-in e Check-out?",
    answer: "Sua jornada começa conosco a partir das 14h. Para o encerramento da expedição (Check-out), solicitamos o cumprimento do horário até as 12h."
  },
  {
    question: "Quais são as regras de uso da piscina?",
    answer: "Nossa piscina está disponível para seu lazer das 08h às 19h. Para garantir a segurança e o conforto de todos os exploradores, não é permitido o uso de bolas, recipientes de vidro ou consumo de alimentos e bebidas dentro da água."
  },
  {
    question: "Posso levar visitas ou caixas de som?",
    answer: "Para preservar a tranquilidade e a privacidade de nossos hóspedes, a estrutura da pousada é de uso exclusivo para clientes registrados. Também prezamos pelo silêncio, por isso o uso de caixas de som particulares não é permitido."
  },
  {
    question: "Como funciona o Café da Manhã?",
    answer: "O Banquete Matinal é servido diariamente das 7:30h às 9:30h, apresentando o melhor da culinária regional e artesanal."
  },
  {
    question: "A pousada possui estrutura para churrasco?",
    answer: "Não possuímos estrutura para churrasco, focando nossa experiência na tranquilidade absoluta e na proximidade com os melhores restaurantes da Praia do Francês."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white border-t border-viking-gold/30 text-viking-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
             <div className="w-12 h-12 border border-viking-gold flex items-center justify-center rotate-45">
                <Info className="-rotate-45 text-viking-gold w-5 h-5" />
             </div>
          </div>
          <h2 className="font-heading text-5xl md:text-7xl text-viking-dark uppercase drop-shadow-sm mb-4">
            PERGUNTAS <span className="text-viking-gold">VITAIS</span>
          </h2>
          <p className="font-serif text-viking-dark/50 italic text-xl">
            "Orientações para sua expedição no refúgio."
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-viking-gold/20 bg-viking-gold/5 rounded-none overflow-hidden hover:border-viking-gold transition-colors duration-500"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-8 text-left flex justify-between items-center group"
              >
                <span className="font-heading text-xl text-viking-dark group-hover:text-viking-gold transition-colors uppercase tracking-tight">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-viking-gold transition-transform duration-500 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                  >
                    <div className="px-8 pb-8 text-viking-dark/60 font-serif text-lg italic leading-relaxed border-t border-viking-gold/10 pt-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-20 border border-viking-gold/20 bg-viking-gold/5 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="font-heading text-3xl text-viking-gold uppercase mb-6 tracking-tight">
                LOCALIZAÇÃO <span className="text-viking-dark">ESTRATÉGICA</span>
              </h3>
              
              <div className="space-y-6 text-viking-dark/70 font-serif italic text-lg leading-relaxed">
                <p>
                  📍 <span className="text-viking-dark not-italic font-sans font-bold text-sm tracking-widest uppercase">Endereço:</span><br/>
                  Av. Caravelas, 321 – Praia do Francês,<br/>
                  Marechal Deodoro – AL, Brasil
                </p>
                
                <ul className="space-y-3 border-t border-viking-gold/10 pt-6">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-viking-gold rotate-45 shrink-0" />
                    <span>750 metros da praia (10 min andando)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-viking-gold rotate-45 shrink-0" />
                    <span>20 km do centro de Maceió</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-viking-gold rotate-45 shrink-0" />
                    <span>40 km do Aeroporto Zumbi dos Palmares</span>
                  </li>
                </ul>

                <p className="border-t border-viking-gold/10 pt-6 text-sm font-sans not-italic uppercase tracking-wider opacity-60">
                  🧭 Bairro tranquilo com acesso fácil a pé a restaurantes, mercados e o centrinho vibrante do Francês.
                </p>
              </div>
            </div>

            <div className="aspect-square md:aspect-auto w-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700 overflow-hidden border-l border-viking-gold/20">
               <iframe
                 title="Mapa da Pousada"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15725.130124239857!2d-35.85040715!3d-9.7691523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x701237a354c46f1%3A0x6b7a5a87ba2df46b!2sAv.%20Caravelas%2C%20321%20-%20Praia%20do%20Franc%C3%AAs%2C%20Marechal%20Deodoro%20-%20AL%2C%2057160-000!5e0!3m2!1spt-BR!2sbr!4v1713900000000!5m2!1spt-BR!2sbr"
                 width="100%"
                 height="100%"
                 style={{ border: 0 }}
                 allowFullScreen
                 loading="lazy"
               ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
