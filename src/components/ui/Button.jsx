import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseClasses = "relative px-6 py-3 font-heading font-semibold text-sm transition-colors duration-300 overflow-hidden";
  
  const variants = {
    primary: "bg-primary text-on-primary rounded-lg hover:shadow-[0_0_20px_rgba(207,188,255,0.4)]",
    secondary: "bg-white/5 border border-white/10 rounded-lg text-white hover:border-white/30 hover:bg-white/10",
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};
