import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = ({ brandName }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Mencegah scroll saat menu mobile terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-100">
      {/* Header Utama */}
      <div className="flex justify-between items-center py-6 px-6 md:px-12 relative z-110 mix-blend-difference text-white">
        {/* Logo */}
        <div className="text-xl font-serif font-bold uppercase tracking-tighter italic">
          {brandName}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-widest opacity-70">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:opacity-100 transition-opacity">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="text-white border-b border-white/30 pb-1">Book Now</a>
        </div>

        {/* Mobile Toggle Button - Z-Index Tinggi agar tidak terhalang */}
        <button 
          className="md:hidden text-white focus:outline-none p-2 relative z-120"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/95 flex flex-col items-center justify-center gap-10 transition-all duration-500 ease-in-out md:hidden z-105 ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'
        }`}
      >
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={() => setIsOpen(false)}
            className="text-3xl font-serif text-white italic hover:text-gray-400 transition-colors tracking-widest"
          >
            {link.name}
          </a>
        ))}
        <a 
          href="https://wa.me/6285724175815"
          target="_blank" 
          onClick={() => setIsOpen(false)}
          className="mt-6 px-10 py-4 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-full shadow-xl"
        >
          Book Now
        </a>
      </div>
    </nav>
  );
};