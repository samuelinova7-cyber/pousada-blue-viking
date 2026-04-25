import { motion } from 'motion/react';
import { Anchor, Navigation, Shield } from 'lucide-react';

export default function History() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 text-viking-gold">
            <Navigation size={48} />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-viking-blue uppercase mb-2">
            O Legado do <span className="text-viking-gold">Blue Viking</span>
          </h2>
          <p className="font-sans text-viking-dark/60 uppercase tracking-[0.2em] font-bold text-xs">
            Do Gelo da Suécia ao Paraíso do Francês
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-8 font-sans">
            <p className="text-lg text-gray-600 leading-relaxed text-left border-l-4 border-viking-gold pl-6 py-2">
              A história da <strong className="text-viking-blue font-bold">Pousada Blue Viking</strong> nasce de uma jornada real à Suécia, onde a busca pelas raízes revelou um conceito único: o <strong className="text-viking-blue font-bold">Viking de Sangue Azul</strong>.
            </p>

            <div className="space-y-4">
              <h4 className="font-heading text-2xl text-viking-blue uppercase">Quem é o Verdadeiro Blue Viking?</h4>
              <p className="text-gray-500 leading-relaxed text-justify">
                O <em>Blue Viking</em> representa a nobreza de espírito e a conexão profunda com o oceano. O termo "Sangue Azul" aqui ganha um novo significado: a essência de quem vive pelo mar, sob o azul infinito do céu nórdico e o azul cristalino das águas tropicais.
              </p>
            </div>
          </div>

          <div className="space-y-8 font-sans">
            <div className="space-y-4">
              <h4 className="font-heading text-2xl text-viking-blue uppercase">A Conexão Suécia-Alagoas</h4>
              <p className="text-gray-500 leading-relaxed text-justify">
                A viagem do proprietário à Suécia foi o ponto de mutação. Lá, entre museus de barcos vikings e a arquitetura minimalista, surgiu a inspiração para trazer a força do Norte para a energia de Alagoas.
              </p>
            </div>

            <div className="p-8 bg-white border border-gray-100 shadow-sm rounded-sm">
              <h4 className="font-heading text-xl text-viking-blue uppercase mb-6">O Que Você Encontra</h4>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <Anchor size={20} className="text-viking-gold shrink-0" />
                  <span className="text-gray-600 text-sm">Elementos que remetem à navegação e ao design escandinavo, adaptados ao frescor do nosso litoral.</span>
                </li>
                <li className="flex gap-4">
                  <Shield size={20} className="text-viking-gold shrink-0" />
                  <span className="text-gray-600 text-sm">Um ambiente planejado para quem valoriza a exclusividade, a paz e a conexão com o mar.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Nossa Estrutura Video Section */}
        <div id="estrutura" className="mt-24 border-t border-gray-200 pt-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl text-viking-blue uppercase">
              NOSSA <span className="text-viking-gold">ESTRUTURA</span>
            </h2>
            <div className="h-[2px] w-24 bg-viking-gold mx-auto mt-4" />
          </div>
          
          <div className="relative w-full aspect-video rounded-sm overflow-hidden border-8 border-white shadow-2xl bg-black">
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
          </div>
        </div>
      </div>
    </section>
  );
}
