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
          <motion.img
            key={fire.id}
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Fire.png"
            initial={{ opacity: 0.9, scale: 0.2, y: 0 }}
            animate={{ opacity: 0, scale: 1.2, y: -60 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="fixed pointer-events-none z-[100] w-32 h-32 object-contain drop-shadow-[0_0_20px_rgba(255,100,0,0.6)]"
            style={{ left: fire.x - 64, top: fire.y - 64 }}
          />
        ))}
      </AnimatePresence>
    </>
  );
};

export default DragonCursor;
