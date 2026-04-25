import { motion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Instagram, Volume2, VolumeX } from 'lucide-react';
import React, { useState, useRef } from 'react';

const instagramVideos = [
  "https://res.cloudinary.com/dqukldtq1/video/upload/v1776989981/SnapInsta.to_AQPYmIYrUfXjPl5rZRim-9fwvYpw-Y9kmFuhsCxYFOA_avGn-4ybglHLkWjMhgstAoup53k5QlOKB6hE-JTxOe1v_csov0f.mp4",
  "https://res.cloudinary.com/dqukldtq1/video/upload/v1776989987/WhatsApp_Video_2026-04-23_at_9.11.33_PM_cxc4cf.mp4",
  "https://res.cloudinary.com/dqukldtq1/video/upload/v1776989991/SnapInsta.to_AQNN2XIr0nC8eqvzoRe-V2H5kRtu4u_KIj0O88DrhS1y_EPIa2TA_aqhnU67p2IiiMh8bmDCVcbDSGedKenNq0sM_etbzhp.mp4",
  "https://res.cloudinary.com/dqukldtq1/video/upload/v1776989995/SnapInsta.to_AQPtuSzp0iWcMHtN3RqiggaYW-s-sOvHkALHavsFBKo8A-rn5k9sTWc1foCfXhqlGh0U41-uHp5qI_OQfIBoK57mShDJkQLR0G-oLDo_e3qdwy.mp4"
];

function VideoSlide({ src }: { src: string; key?: React.Key }) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="flex-[0_0_80%] sm:flex-[0_0_40%] md:flex-[0_0_30%] lg:flex-[0_0_22%] min-w-0 mr-4 relative rounded-xl overflow-hidden shadow-2xl border border-viking-gold/20 aspect-[9/16] bg-black group">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Sound Overlay */}
      <button 
        onClick={toggleMute}
        className="absolute bottom-4 right-4 z-20 bg-black/50 backdrop-blur-md p-2 rounded-full text-white border border-white/20 hover:bg-viking-gold hover:text-viking-dark transition-all"
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>

      {/* Instagram Icon Overlay */}
      <div className="absolute top-4 left-4 z-20 text-white/50 group-hover:text-viking-gold transition-colors">
        <Instagram size={20} />
      </div>
    </div>
  );
}

export default function InstagramFeed() {
  const [emblaRef] = useEmblaCarousel({ 
    loop: true, 
    dragFree: true,
    align: 'start'
  }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);

  return (
    <section className="bg-white py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8 text-center md:text-left">
          <div>
            <span className="text-viking-gold font-sans text-xs uppercase tracking-[0.3em] font-bold block mb-2">Explore nossa Rotina</span>
            <h2 className="font-heading text-4xl md:text-5xl text-viking-blue uppercase">
              EXPERIÊNCIA <span className="text-viking-gold">INSTAGRAM</span>
            </h2>
          </div>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://instagram.com/pousadablueviking"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-viking-blue text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-viking-gold transition-all shadow-md"
          >
            <Instagram size={20} />
            <span>Seguir no Instagram</span>
          </motion.a>
        </div>

        <div className="relative">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex">
              {instagramVideos.map((src, index) => (
                <VideoSlide key={index} src={src} />
              ))}
              {/* Duplicate to ensure continuous feel if needed, but embla handles loop */}
              {instagramVideos.map((src, index) => (
                <VideoSlide key={`dup-${index}`} src={src} />
              ))}
            </div>
          </div>
          
          {/* Decorative Sidings */}
          <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>

      </div>
    </section>
  );
}
