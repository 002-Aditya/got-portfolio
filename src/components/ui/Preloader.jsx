import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time to show the ethereal animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[10000] bg-background flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Ambient Glows for the ethereal "heavenly" vibe */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1.2 }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            className="absolute w-[800px] h-[800px] rounded-full bg-primary mix-blend-screen blur-[120px]"
          />
          
          <div className="relative z-10 flex flex-col items-center">
            <motion.div className="overflow-hidden">
              <motion.h1 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                className="text-display-lg md:text-display-xl font-heading font-bold text-on-surface tracking-tighter"
              >
                DEV<span className="text-primary">.PORTFOLIO</span>
              </motion.h1>
            </motion.div>

            <motion.div className="overflow-hidden mt-4">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
                className="text-body-md font-mono text-primary tracking-widest uppercase"
              >
                Initializing Systems...
              </motion.p>
            </motion.div>

            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "200px", opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
              className="mt-8 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
