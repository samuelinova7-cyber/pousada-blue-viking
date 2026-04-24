import { motion } from 'motion/react';
import { Anchor, Navigation, Shield } from 'lucide-react';

export default function History() {
  return (
    <section className="py-24 bg-viking-dark border-t border-viking-gold/20 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-viking-blue/5 pointer-events-none" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-viking-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-viking-blue/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="inline-block mb-6 text-viking-gold/40"
          >
            <Navigation size={48} />
          </motion.div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tighter mb-4 drop-shadow-md">
            O Legado do <span className="text-viking-gold">Blue Viking</span>
          </h2>
          <h3 className="font-sans text-[10px] md:text-xs text-viking-gold uppercase tracking-[0.3em] font-bold mb-8">
            Do Gelo da Suécia ao Paraíso do Francês
          </h3>
          <div className="h-[1px] w-24 bg-viking-gold/50 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 font-serif">
            <p className="text-lg text-white/80 leading-relaxed italic text-justify">
              A história da <strong className="text-viking-gold-bright font-normal">Pousada Blue Viking</strong> não começa em solos brasileiros, mas sim nas águas gélidas e nas lendas ancestrais da Escandinávia. Ela nasce de uma jornada real à Suécia, onde a busca pelas raízes e pelo espírito explorador dos antigos navegadores revelou um conceito único: o <strong className="text-viking-gold-bright font-normal">Viking de Sangue Azul</strong>.
            </p>

            <div className="space-y-4">
              <h4 className="font-heading text-2xl text-viking-gold uppercase tracking-tight">Quem é o Verdadeiro Blue Viking?</h4>
              <p className="text-white/70 leading-relaxed text-justify">
                Diferente dos guerreiros das crônicas medievais, o <em>Blue Viking</em> (Viking Azul) representa a nobreza de espírito e a conexão profunda com o oceano. O termo "Sangue Azul" aqui ganha um novo significado: não se trata apenas de linhagem, mas da essência de quem vive pelo mar, sob o azul infinito do céu nórdico e o azul cristalino das águas tropicais.
              </p>
            </div>

            <div className="bg-viking-slate/50 p-6 border-l-2 border-viking-gold">
              <p className="text-sm text-white/60 mb-4">Diz a lenda contemporânea que esse viajante, após desbravar os fiordes suecos, sentiu o chamado de novos horizontes. Ele trouxe consigo:</p>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-viking-gold shrink-0" />
                  <span className="text-white/80 text-sm"><strong>A Hospitalidade Nórdica:</strong> O valor do acolhimento em torno do fogo (ou do sol).</span>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-viking-gold shrink-0" />
                  <span className="text-white/80 text-sm"><strong>A Coragem do Explorador:</strong> A vontade de fincar bandeira em um lugar onde a natureza fosse soberana.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-viking-gold shrink-0" />
                  <span className="text-white/80 text-sm"><strong>O Sangue Azul:</strong> A serenidade e a sofisticação de quem sabe apreciar o belo.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8 font-serif">
            <div className="space-y-4">
              <h4 className="font-heading text-2xl text-viking-gold uppercase tracking-tight">A Conexão Suécia-Alagoas</h4>
              <p className="text-white/70 leading-relaxed text-justify">
                A viagem do proprietário à Suécia foi o ponto de mutação. Lá, entre museus de barcos vikings e a arquitetura minimalista, surgiu a pergunta: <em>Como trazer a força e a tradição do Norte para a energia vibrante da Praia do Francês?</em>
              </p>
              <p className="text-white/70 leading-relaxed text-justify">
                O resultado é a <strong className="text-viking-gold-bright font-normal">Pousada Blue Viking</strong>. Aqui, o rústico encontra o conforto, e o espírito de aventura dos antigos clãs se mistura ao ritmo relaxante de Marechal Deodoro.
              </p>
            </div>

            <blockquote className="border-y border-viking-gold/20 py-6 my-8 text-center bg-gradient-to-r from-transparent via-viking-gold/5 to-transparent">
              <p className="text-xl text-viking-gold-bright italic font-bold">
                "Não somos apenas uma pousada; somos o porto seguro para os modernos exploradores que buscam respirar a cultura viking sob as palmeiras de Alagoas."
              </p>
            </blockquote>

            <div className="p-8 bg-viking-black border border-viking-gold/20">
              <h4 className="font-heading text-xl text-white uppercase mb-6 text-center">O Que Você Encontra no Nosso Refúgio</h4>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <Anchor size={20} className="text-viking-gold shrink-0" />
                  <div>
                    <strong className="text-viking-gold-bright text-sm uppercase tracking-wider block mb-1">Respirar História</strong>
                    <span className="text-white/60 text-sm">Elementos que remetem à navegação e ao design escandinavo, adaptados ao frescor do nosso litoral.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Shield size={20} className="text-viking-gold shrink-0" />
                  <div>
                    <strong className="text-viking-gold-bright text-sm uppercase tracking-wider block mb-1">Sentir a Energia</strong>
                    <span className="text-white/60 text-sm">Um ambiente planejado para quem tem "sangue azul" — para aqueles que valorizam a exclusividade, a paz e a conexão com o mar.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Navigation size={20} className="text-viking-gold shrink-0" />
                  <div>
                    <strong className="text-viking-gold-bright text-sm uppercase tracking-wider block mb-1">Viver a Experiência</strong>
                    <span className="text-white/60 text-sm">Um pedaço da Suécia em Alagoas, onde a força viking encontra a hospitalidade brasileira.</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <p className="text-center text-white/50 text-xs uppercase tracking-[0.2em] font-sans font-bold pt-4">
              Seja bem-vindo ao clã. O Blue Viking espera por você na Praia do Francês.
            </p>
          </div>
        </div>

        {/* Nossa Estrutura Video Section */}
        <div id="estrutura" className="mt-24 border-t border-viking-gold/20 pt-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl text-white uppercase tracking-tighter mb-4 drop-shadow-md">
              NOSSA <span className="text-viking-gold">ESTRUTURA</span>
            </h2>
            <div className="h-[1px] w-24 bg-viking-gold/50 mx-auto" />
          </div>
          
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-viking-gold/30 shadow-2xl bg-black">
            <video
              className="w-full h-full object-contain"
              controls
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="https://res.cloudinary.com/dqukldtq1/video/upload/v1776988722/WhatsApp_Video_2026-04-23_at_8.51.43_PM_nqwff0.mp4" type="video/mp4" />
              Seu navegador não suporta a visualização desse vídeo.
            </video>
            {/* O overlay com event-none garante que o usuário consiga interagir com os controles nativos do video */}
          </div>
        </div>
      </div>
    </section>
  );
}
