import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-iron py-12 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-crimson/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex gap-6">
            <a href="https://github.com/002-Aditya" target="_blank" rel="noopener noreferrer" className="p-3 bg-iron rounded-full text-gray-300 hover:text-gold hover:bg-charcoal hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/aditya-kumar-aa6838201" target="_blank" rel="noopener noreferrer" className="p-3 bg-iron rounded-full text-gray-300 hover:text-gold hover:bg-charcoal hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:dr.adityakumar2001@gmail.com" className="p-3 bg-iron rounded-full text-gray-300 hover:text-gold hover:bg-charcoal hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <div className="text-center">
            <p className="font-cinzel text-xl text-gold mb-2 tracking-widest">"The Night is Dark and Full of Code."</p>
            <p className="font-inter text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Aditya Kumar. Forged in Code and Systems.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
