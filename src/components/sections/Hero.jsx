import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { CodeSnippet } from '../ui/CodeSnippet';
import { HERO_DATA } from '../../constants/portfolioData';

export const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.5 }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
  };

  const codeString = `const system = new Architecture({
  scale: 'infinite',
  latency: 'minimal',
  resilience: 'monolith'
});`;

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-24 pb-40 overflow-hidden">
      {/* Ambient Background Elements */}
      <div className="ambient-glow-primary top-[-20%] left-[-10%]" />
      <div className="ambient-glow-secondary bottom-[-10%] right-[-5%]" />

      <div className="container-max mx-auto px-margin-mobile md:px-gutter relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7"
          >
            {/* Status Tag */}
            <motion.div variants={item} className="mb-10">
              <span className="no-line-boundary px-6 py-2 rounded-full text-label-sm uppercase tracking-[0.2em] text-primary/80">
                <span className="w-2 h-2 rounded-full bg-primary inline-block mr-3 animate-pulse" />
                Available for Architecture
              </span>
            </motion.div>

            {/* Heading - Asymmetric focus */}
            <motion.h1 variants={item} className="text-display-xl-mobile md:text-display-xl text-on-surface mb-10 leading-[0.9] tracking-tighter">
              Building <span className="text-primary italic">Resilient</span> <br />
              <span className="pl-4 md:pl-12 text-on-surface/90">Infrastructures.</span>
            </motion.h1>
            
            {/* Description */}
            <motion.p variants={item} className="text-body-lg text-on-surface-variant/80 mb-12 max-w-xl leading-relaxed font-light">
              {HERO_DATA.description}
            </motion.p>
            
            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-6">
              <Button variant="primary" className="rounded-2xl px-10 py-6 text-label-sm uppercase tracking-widest">{HERO_DATA.primaryCta}</Button>
              <Button variant="secondary" className="rounded-2xl px-10 py-6 text-label-sm uppercase tracking-widest no-line-boundary-high">{HERO_DATA.secondaryCta}</Button>
            </motion.div>
          </motion.div>

          {/* Right Side: Code Snippet - Asymmetric displacement */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative z-10 transform lg:translate-x-12 lg:translate-y-8">
              <CodeSnippet 
                code={codeString} 
                language="architecture.sys" 
                className="w-full shadow-2xl"
              />
            </div>
            
            {/* Architectural Layering - Background blocks */}
            <div className="absolute -z-10 top-0 left-0 w-full h-full tonal-layer-2 rounded-[40px] transform rotate-3" />
            <div className="absolute -z-20 top-4 left-4 w-full h-full tonal-layer-1 rounded-[40px] transform -rotate-6 opacity-50" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Minimalist */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-margin-mobile md:left-gutter flex items-center gap-6"
      >
        <div className="w-[1px] h-12 tonal-layer-4 relative overflow-hidden">
          <motion.div 
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
          />
        </div>
        <span className="text-[10px] tracking-[0.4em] font-bold text-on-surface-variant/40 uppercase">Architecture / v1.0</span>
      </motion.div>
    </section>
  );
};
