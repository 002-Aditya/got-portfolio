import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DragonCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [fireDrops, setFireDrops] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    const handleClick = (e) => {
      const id = Date.now();
      setFireDrops(prev => [...prev, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => {
        setFireDrops(prev => prev.filter(f => f.id !== id));
      }, 2000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      {/* Dragon Background with Spotlight Mask */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541814674068-07e366fd26ae?q=80&w=2000&auto=format&fit=crop')", // Dragon/scales image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.6,
          mixBlendMode: 'screen',
          WebkitMaskImage: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
          maskImage: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`
        }}
      />
      
      {/* Fire Clicks */}
      <AnimatePresence>
        {fireDrops.map(fire => (
          <motion.div
            key={fire.id}
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 0, scale: 2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="fixed pointer-events-none z-[100] w-48 h-48 rounded-full blur-2xl bg-[radial-gradient(circle,rgba(239,68,68,0.8)_0%,rgba(245,158,11,0.6)_40%,transparent_100%)] mix-blend-screen"
            style={{ left: fire.x - 96, top: fire.y - 96 }}
          />
        ))}
      </AnimatePresence>
    </>
  );
};

export default DragonCursor;
