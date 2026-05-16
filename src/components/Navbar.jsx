import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  // { name: 'Architecture', href: '#home' },
  { name: 'Core', href: '#about' },
  { name: 'Stack', href: '#stack' },
  { name: 'Chronicle', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  // { name: 'Gateway', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className={`relative transition-all duration-500 rounded-[32px] overflow-hidden ${scrolled ? 'bg-surface-container/30 backdrop-blur-xl shadow-2xl shadow-black/40 px-8 py-4 border border-on-surface/5' : 'bg-transparent py-0 border-transparent'}`}>
          <div className="flex justify-between items-center relative z-10">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl tonal-layer-4 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <Terminal size={20} strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="text-label-sm font-bold tracking-[0.2em] text-on-surface uppercase leading-tight">
                  Aditya.
                </span>
                <span className="text-[10px] font-mono text-primary/40 uppercase tracking-widest leading-tight">
                  Backend Architect
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-2">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="px-5 py-2 text-label-sm font-bold text-on-surface-variant/60 uppercase tracking-widest hover:text-primary hover:tonal-layer-4 rounded-xl transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
              <div className="ml-4 h-8 w-px tonal-layer-4" />
              <a href="#contact" className="ml-4 px-6 py-2.5 bg-primary text-surface font-bold text-xs uppercase tracking-widest rounded-xl hover:scale-105 active:scale-95 transition-all">
                Connect
              </a>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden w-10 h-10 rounded-xl tonal-layer-4 flex items-center justify-center text-on-surface hover:text-primary transition-colors focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full px-margin-mobile mt-4 md:hidden"
          >
            <div className="bg-surface-container/60 backdrop-blur-3xl rounded-[32px] p-4 lg:p-8 shadow-2xl shadow-black/60 border border-on-surface/5">
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="p-4 text-headline-sm-mobile text-on-surface hover:text-primary hover:tonal-layer-4 rounded-2xl transition-all font-bold uppercase tracking-widest text-center"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="h-px tonal-layer-4 my-2" />
                <a 
                  href="#contact" 
                  onClick={() => setIsOpen(false)}
                  className="p-6 bg-primary text-surface font-black text-sm uppercase tracking-[0.3em] rounded-2xl text-center shadow-lg shadow-primary/20"
                >
                  Connect
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
