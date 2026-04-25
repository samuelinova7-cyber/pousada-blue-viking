import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('INÍCIO');

  const menuItems = [
    { name: 'INÍCIO', href: '#início' },
    { name: 'QUARTOS', href: '#acomodações' },
    { name: 'SERVIÇOS', href: '#estrutura' },
    { name: 'CONTATO', href: 'https://wa.me/5582988128379' }
  ];

  return (
    <div className="fixed w-full z-50 bg-white shadow-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 sm:h-32 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src="https://res.cloudinary.com/dqukldtq1/image/upload/v1776978423/WhatsApp_Image_2026-04-23_at_5.28.20_PM_1_fwjebi.jpg"
            alt="Blue Viking Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col -space-y-1">
            <span className="font-display text-2xl sm:text-3xl font-extrabold text-viking-blue tracking-tighter">Blue Viking</span>
            <span className="font-display text-xs sm:text-sm tracking-[0.2em] text-viking-gold font-bold uppercase">Pousada</span>
          </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex h-full items-stretch">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveItem(item.name)}
              className={`flex items-center px-6 transition-all font-display font-bold text-sm tracking-widest ${
                activeItem === item.name 
                  ? 'bg-viking-blue text-white' 
                  : 'text-viking-gold hover:bg-gray-50'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-viking-blue p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
        >
          <div className="flex flex-col p-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setIsOpen(false);
                  setActiveItem(item.name);
                }}
                className={`py-4 px-6 rounded-sm font-display font-bold text-sm tracking-widest ${
                  activeItem === item.name 
                    ? 'bg-viking-blue text-white' 
                    : 'text-viking-gold hover:bg-gray-50'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
