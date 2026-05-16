import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from '../components/Navbar';
import { CONTACT_DATA } from '../constants/portfolioData';

export const MainLayout = ({ children }) => {
  
  // Header is permanently visible as requested
  const hidden = false;

  // Lenis Smooth Scroll Setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/30 selection:text-primary">
      <motion.div 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
        className="fixed top-0 w-full z-50 pointer-events-none"
      >
        <div className="pointer-events-auto">
          <Navbar />
        </div>
      </motion.div>

      <main className="flex-1">
        {children}
      </main>

      <footer className="py-24 bg-background relative overflow-hidden">
         <div className="content-container relative z-10 border-t border-on-surface/5 pt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                <h2 className="text-display-sm text-on-surface mb-6 tracking-tighter">ADITYA.<span className="text-primary italic">DEV</span></h2>
                <p className="text-body-md text-on-surface-variant/50 max-w-xs font-light">
                  Architecting high-performance backends and scalable systems for the modern web.
                </p>
              </div>
              
              <div className="lg:col-span-4 flex flex-col gap-4">
                <span className="text-label-sm font-bold text-on-surface-variant/30 uppercase tracking-[0.3em] mb-4">Connect_Links</span>
                <div className="flex gap-8">
                  <a href={`https://${CONTACT_DATA.github}`} target="_blank" className="text-body-md text-on-surface-variant hover:text-primary transition-colors font-mono">GH</a>
                  <a href={`https://${CONTACT_DATA.linkedin}`} target="_blank" className="text-body-md text-on-surface-variant hover:text-primary transition-colors font-mono">LI</a>
                  <a href={`mailto:${CONTACT_DATA.email}`} className="text-body-md text-on-surface-variant hover:text-primary transition-colors font-mono">EM</a>
                </div>
              </div>

              <div className="lg:col-span-4 text-right">
                <span className="text-label-sm font-bold text-on-surface-variant/30 uppercase tracking-[0.3em] mb-4 block">System_Meta</span>
                <p className="text-[10px] font-mono text-on-surface-variant/20 uppercase tracking-[0.2em] mb-2">
                  Built with React + Framer Motion
                </p>
                {/* <p className="text-[10px] font-mono text-on-surface-variant/20 uppercase tracking-[0.2em]">
                  © 2024 Aditya Kumar
                </p> */}
              </div>
            </div>
         </div>
      </footer>
    </div>
  );
};

