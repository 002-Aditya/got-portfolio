import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Lenis from 'lenis';
import { Magnetic } from '../components/ui/Magnetic';

export const MainLayout = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  // Header hide/show logic
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

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

  const NavLink = ({ href, children }) => {
    if (href.startsWith('/')) {
      return (
        <Magnetic>
          <Link to={href} className="text-body-sm font-mono text-on-surface-variant hover:text-primary transition-colors inline-block p-2">
            {children}
          </Link>
        </Magnetic>
      );
    }
    
    const target = isHome ? href : `/${href}`;
    return (
      <Magnetic>
        <a href={target} className="text-body-sm font-mono text-on-surface-variant hover:text-primary transition-colors inline-block p-2">
          {children}
        </a>
      </Magnetic>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/30 selection:text-primary-fixed">
      <motion.header 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5"
      >
        <div className="container-max mx-auto px-margin-mobile md:px-gutter h-20 flex items-center justify-between">
          <Link to="/" className="text-body-lg font-heading font-bold tracking-tighter text-on-surface">
            DEV<span className="text-primary">.PORTFOLIO</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#about">01. About</NavLink>
            <NavLink href="#experience">02. Experience</NavLink>
            <NavLink href="#skills">03. Skills</NavLink>
            <NavLink href="/projects">04. Projects</NavLink>
            <NavLink href="#contact">05. Contact</NavLink>
          </nav>
        </div>
      </motion.header>

      <main className="flex-1 pt-20">
        {children}
      </main>

      <footer className="py-8 border-t border-white/5 text-center">
        <p className="text-sm font-mono text-on-surface-variant">
          Designed with Google Stitch. Built with React & Tailwind.
        </p>
      </footer>
    </div>
  );
};
