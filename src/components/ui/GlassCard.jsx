import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

export const GlassCard = ({ children, className = '', delay = 0, ...props }) => {
  const ref = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    mouseX.set(x);
    mouseY.set(y);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Decrease the multiplier for a subtler effect
    setRotateX(((y - centerY) / centerY) * -5);
    setRotateY(((x - centerX) / centerX) * 5);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    mouseX.set(0);
    mouseY.set(0);
  };

  const background = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.1), transparent 80%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      animate={{ rotateX, rotateY }}
      style={{ perspective: 1000, transformStyle: "preserve-3d" }}
      className={`glass-card p-6 md:p-8 relative overflow-hidden group ${className}`}
      {...props}
    >
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background }}
      />
      <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
        {children}
      </div>
    </motion.div>
  );
};
