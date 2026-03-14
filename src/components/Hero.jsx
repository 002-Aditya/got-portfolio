import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Particle = ({ delay, duration, x, y }) => (
  <motion.div
    className="absolute w-1 h-1 bg-gold rounded-full opacity-0 shadow-[0_0_8px_rgba(212,175,55,0.8)]"
    initial={{ x, y: y + 100, opacity: 0 }}
    animate={{
      y: y - 200,
      opacity: [0, 0.8, 0],
      x: x + (Math.random() * 50 - 25),
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  />
);

const Hero = () => {
  const { scrollY } = useScroll();
  const yBackground = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);
  const yText = useTransform(scrollY, [0, 400], [0, 100]);

  // Generate random particles (embers)
  const embers = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800) + 400,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 3,
  }));

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 w-full h-full object-cover opacity-30 bg-cover bg-center"
        style={{ 
          y: yBackground,
          backgroundImage: "url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop')",
          filter: "grayscale(100%) contrast(120%) brightness(40%)"
        }}
      />
      
      {/* Cinematic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,11,11,1)_100%)]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-transparent to-charcoal"></div>

      {/* Fire / Embers System */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {embers.map((ember) => (
          <Particle key={ember.id} {...ember} />
        ))}
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        style={{ opacity: opacityText, y: yText }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          <p className="font-inter text-gold tracking-[0.3em] uppercase text-sm md:text-base mb-4 inline-block relative">
            <span className="absolute -left-12 top-1/2 w-8 h-[1px] bg-gold"></span>
            The Realm of Code
            <span className="absolute -right-12 top-1/2 w-8 h-[1px] bg-gold"></span>
          </p>
        </motion.div>

        <motion.h1 
          className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold text-frost tracking-wider mb-6 leading-tight drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        >
          ADITYA <span className="text-crimson block md:inline mt-2 md:mt-0">KUMAR</span>
        </motion.h1>

        <motion.h2 
          className="font-cinzel text-xl md:text-3xl text-gray-300 font-medium tracking-wide mb-8 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        >
          Backend Engineer Forged in Code and Systems
        </motion.h2>

        <motion.p 
          className="font-inter text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          "Architect of Scalable APIs, Distributed Systems, <br className="hidden md:block"/>and Powerful Backend Engines."
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <a 
            href="#projects" 
            className="group relative px-8 py-4 font-cinzel font-bold text-frost tracking-widest uppercase overflow-hidden border border-crimson/50 hover:border-crimson bg-crimson/10 backdrop-blur-sm transition-all duration-500 w-full sm:w-auto"
          >
            <div className="absolute inset-0 w-0 bg-crimson transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative z-10">Enter the Realm</span>
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 font-cinzel font-bold text-gold tracking-widest uppercase border border-gold/30 hover:border-gold hover:bg-gold/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-500 w-full sm:w-auto"
          >
            Send a Raven
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <span className="font-cinzel text-xs tracking-widest text-gray-500 uppercase">Scroll to Explore</span>
        <motion.div
           animate={{ y: [0, 10, 0] }}
           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
