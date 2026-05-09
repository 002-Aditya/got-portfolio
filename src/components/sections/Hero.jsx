import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Marquee } from '../ui/Marquee';
import { HERO_DATA } from '../../constants/portfolioData';

export const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 2.8 }
    }
  };

  const item = {
    hidden: { y: "100%", opacity: 0 },
    show: { y: "0%", opacity: 1, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
  };

  const titleWords = HERO_DATA.title.split(" ");

  return (
    <section className="relative min-h-[80vh] flex items-center pt-20 pb-32 overflow-hidden">
      {/* Background Marquee */}
      <Marquee baseVelocity={-2}>BACKEND ENGINEER</Marquee>

      {/* Ambient Lighting with Parallax */}
      <motion.div 
        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="ambient-glow-purple top-1/4 -left-1/4" 
      />
      <motion.div 
        animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="ambient-glow-cyan bottom-0 -right-1/4" 
      />

      <div className="container-max mx-auto px-margin-mobile md:px-gutter relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <div className="flex flex-wrap gap-x-4 mb-2">
            {titleWords.map((word, i) => (
              <div key={i} className="overflow-hidden">
                <motion.span variants={item} className="inline-block text-display-xl-mobile md:text-display-xl text-on-surface">
                  {word}
                </motion.span>
              </div>
            ))}
          </div>
          <div className="overflow-hidden mb-6">
            <motion.h1 variants={item} className="text-display-xl-mobile md:text-display-xl text-primary mt-2">
              {HERO_DATA.subtitle}
            </motion.h1>
          </div>
          
          <div className="overflow-hidden mb-10">
            <motion.p variants={item} className="text-body-lg text-on-surface-variant max-w-2xl">
              {HERO_DATA.description}
            </motion.p>
          </div>
          
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <Button variant="primary">{HERO_DATA.primaryCta}</Button>
            <Button variant="secondary">{HERO_DATA.secondaryCta}</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
