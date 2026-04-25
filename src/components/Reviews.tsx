import { motion } from 'motion/react';
import { Star, MessageSquare } from 'lucide-react';

const reviews = [
  {
    name: "Denir Jose De Oliveira Jose",
    text: "Boa localização, café da manhã bom, atendimento muito receptivo, piscina maravilhosa 5 estrela com certeza. Ambiente calmo e tranquilo pra quem quer descansar. Eu voltaria a me hospedar lá com certeza. custo benefício excelente.",
    rating: 5,
    date: "6 meses atrás"
  },
  {
    name: "Wallace Oliveira",
    text: "Excelente ambiente, quartos limpos e café da manhã excepcional. Quartos serviço e localização nota 5.",
    rating: 5,
    date: "5 meses atrás"
  },
  {
    name: "Fernando Munhoz",
    text: "Que surpresa boa, ótimo em tudo, café da manhã muito bom, as melhores tapiocas que já comemos hahaha, mto recheio e fresquinho! Ovos mexidos feito na hora, sucos naturais deliciosos!",
    rating: 5,
    date: "um ano atrás"
  },
  {
    name: "kauannys2023",
    text: "Local muito bom, organizado e higienizado, bem tranquilo e aconchegante. Recepção excelente e café da manhã maravilhoso, área de laser bem organizada. Irei novamente em outra oportunidade. Super recomendo.",
    rating: 5,
    date: "3 anos atrás"
  },
  {
    name: "carlosjosef642",
    text: "Ótima pousada. Quarto e camas confortáveis. Ar condicionado split silencioso. Café da manhã muito bom. Área verde excelente para as crianças. O proprietário Erick está sempre presente e ainda prepara tapioca no café da manhã. Super satisfeito. Recomendo.",
    rating: 5,
    date: "3 anos atrás"
  },
  {
    name: "Paulinha Oliveira",
    text: "Que lugar aconchegante. Tudo aqui é muito lindo e organizado. Logo na entrada tem um paisagismo belíssimo, muitas plantas, e muita decoração com madeira. Adorei me hospedar aqui.",
    rating: 5,
    date: "3 anos atrás"
  },
  {
    name: "fabiocR6326AP",
    text: "Ficamos hospedados na primeira semana de dezembro. A localização da pousada é muito boa, não é dentro do agito da praia, o que traz um pouco de tranquilidade e sossego.",
    rating: 5,
    date: "4 anos atrás"
  }
];

export default function Reviews() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 px-4">
          <div className="flex justify-center gap-1 mb-4 select-none">
            <span className="text-[#4285F4] font-black text-3xl">G</span>
            <span className="text-[#EA4335] font-black text-3xl">o</span>
            <span className="text-[#FBBC05] font-black text-3xl">o</span>
            <span className="text-[#4285F4] font-black text-3xl">g</span>
            <span className="text-[#34A853] font-black text-3xl">l</span>
            <span className="text-[#EA4335] font-black text-3xl">e</span>
          </div>
          <h2 className="font-heading text-4xl md:text-6xl text-viking-dark uppercase mb-4 tracking-tighter">
            O QUE DIZEM NOSSOS <span className="text-viking-gold">CONQUISTADORES</span>
          </h2>
          <p className="font-serif text-viking-dark/60 text-lg sm:text-xl italic max-w-2xl mx-auto">
            "A experiência real de quem já navegou por nossas águas."
          </p>
          
          <div className="flex justify-center items-center gap-1 mt-6">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <Star key={i} className="fill-[#FBBC05] text-[#FBBC05]" size={24} />
            ))}
            <span className="ml-2 font-accent font-bold text-viking-dark text-lg select-none">5.0/5</span>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-visible">
          <motion.div 
            className="flex gap-6 pb-12 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear"
            }}
            whileHover={{ animationPlayState: 'paused' }}
          >
            {/* Double the reviews for absolute infinite loop */}
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className="w-[300px] sm:w-[450px] bg-viking-gold/5 border border-viking-gold/20 p-8 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star key={i} className="fill-[#FBBC05] text-[#FBBC05]" size={14} />
                    ))}
                  </div>
                  <p className="text-viking-dark/80 font-serif italic text-lg leading-relaxed mb-6">
                    "{review.text}"
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-viking-gold/10 pt-6 mt-auto">
                  <div>
                    <span className="block font-sans font-bold text-viking-dark text-sm uppercase tracking-wider">{review.name}</span>
                    <span className="text-xs text-viking-dark/40 uppercase tracking-widest">{review.date} • Google</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#4285F4] flex items-center justify-center text-white font-bold text-sm shadow-md uppercase">
                    {review.name.charAt(0)}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          {/* Fading edges for aesthetic */}
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>

        <div className="mt-12 text-center">
            <motion.a
                href="https://g.page/r/Cf-DMehcF73UEAE/review"
                target="_blank"
                rel="noreferrer"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-viking-dark text-white px-10 py-5 rounded-full font-sans font-bold uppercase tracking-[0.2em] text-xs hover:bg-viking-gold transition-all shadow-xl group"
            >
                <MessageSquare className="group-hover:rotate-12 transition-transform" size={18} />
                <span>Avaliar no Google com 5 Estrelas</span>
            </motion.a>
            <p className="mt-6 text-[10px] uppercase tracking-widest text-viking-dark/30 font-bold">
               Sua opinião é o nosso maior tesouro
            </p>
        </div>
      </div>
    </section>
  );
}
