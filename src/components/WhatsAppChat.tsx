import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppChat() {
  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[#25D366] rounded-full blur-xl opacity-40 animate-pulse" />
      
      <motion.a
        href="https://wa.me/5582999999999?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva%20na%20Blue%20Viking."
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          y: [0, -10, 0] 
        }}
        transition={{ 
          scale: { type: 'spring', damping: 12, stiffness: 200 },
          y: { repeat: Infinity, duration: 3, ease: 'easeInOut' }
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative block bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] group overflow-hidden"
      >
        {/* Shine Animation */}
        <motion.div
          animate={{ left: ['-100%', '200%'] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
          className="absolute top-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 pointer-events-none"
        />
        
        <MessageCircle size={32} className="relative z-10" />
        
        {/* Tooltip / Label */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-viking-dark px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          Falar com a Pousada
        </div>
      </motion.a>
    </div>
  );
}
