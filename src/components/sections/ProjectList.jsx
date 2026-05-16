import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TechBadge } from '../ui/TechBadge';
import { CodeSnippet } from '../ui/CodeSnippet';
import { PROJECTS_DATA } from '../../constants/portfolioData';
import { Github } from 'lucide-react';

const ProjectItem = ({ project, index }) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center shrink-0">
      <div className="content-container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-label-sm font-bold text-primary/60 tracking-[0.3em] uppercase">Project / 0{index + 1}</span>
            <div className="h-px w-12 tonal-layer-4" />
          </div>
          
          <h2 className="text-display-lg text-on-surface mb-6 leading-none tracking-tighter">
            {project.title.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? 'text-primary' : ''}>
                {word}{' '}
              </span>
            ))}
          </h2>
          
          <p className="text-body-lg text-on-surface/90 font-light mb-8 leading-relaxed max-w-xl">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-3 mb-10">
            {project.techStack.map(tech => (
              <span key={tech} className="no-line-boundary px-4 py-1.5 rounded-lg text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-8">
            {/* <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group inline-flex items-center gap-4 text-label-sm font-bold text-on-surface uppercase tracking-[0.2em] transition-all"
            >
              <span className="relative overflow-hidden">
                <span className="inline-block transition-transform duration-500 group-hover:-translate-y-full">View Architecture</span>
                <span className="absolute top-0 left-0 inline-block translate-y-full transition-transform duration-500 group-hover:translate-y-0 text-primary">View Architecture</span>
              </span>
              <div className="w-8 h-8 rounded-full tonal-layer-3 flex items-center justify-center transition-transform group-hover:rotate-45">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </div>
            </a> */}

            {project.repoLink && (
              <a 
                href={project.repoLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group inline-flex items-center gap-4 text-label-sm font-bold text-on-surface/40 hover:text-on-surface uppercase tracking-[0.2em] transition-all"
              >
                <Github className="w-5 h-5 transition-transform group-hover:scale-110" strokeWidth={1.5} />
                <span className="relative overflow-hidden">
                  <span className="inline-block transition-transform duration-500 group-hover:-translate-y-full">View Repository</span>
                  <span className="absolute top-0 left-0 inline-block translate-y-full transition-transform duration-500 group-hover:translate-y-0">View Repository</span>
                </span>
              </a>
            )}
          </div>
        </div>
        
        <div className="lg:col-span-6 relative hidden lg:block">
          <div className="relative z-10 transform rotate-2 scale-110">
            <CodeSnippet 
              language="system.config"
              code={JSON.stringify(project.config, null, 2)} 
            />
          </div>
          {/* Architectural Background Elements */}
          <div className="absolute -z-10 -top-20 -right-20 w-80 h-80 bg-primary/10 blur-[100px] rounded-full" />
          <div className="absolute top-0 left-0 w-full h-full tonal-layer-1 rounded-[60px] transform -rotate-3" />
        </div>
      </div>
    </div>
  );
};

export const ProjectList = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const totalSlides = PROJECTS_DATA.length + 1;
  const xPercentage = -((totalSlides - 1) / totalSlides) * 100;
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `${xPercentage}%`]);

  return (
    <section ref={targetRef} className="relative lg:h-[500vh]" id="projects">
      {/* Desktop View: Horizontal Scroll */}
      <div className="hidden lg:block sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x, width: `${totalSlides * 100}vw` }} className="flex">
          {/* Intro Slide - High Impact */}
          <div className="w-screen h-screen flex items-center justify-center shrink-0 relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
              <span className="text-[30vw] font-bold text-on-surface uppercase tracking-tighter leading-none select-none">WORKS</span>
            </div>
            <div className="relative z-10 text-center">
              <div className="mb-8 flex items-center justify-center gap-6">
                <div className="w-24 h-px tonal-layer-4" />
                <span className="text-label-sm font-bold text-primary tracking-[0.5em] uppercase">Systems Catalog</span>
                <div className="w-24 h-px tonal-layer-4" />
              </div>
              <h1 className="text-[8vw] font-bold text-on-surface leading-[0.8] tracking-tighter italic">Selected <br/>Architectures</h1>
            </div>
          </div>
          
          {/* Project Slides */}
          {PROJECTS_DATA.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>

      {/* Mobile View: Vertical Stacking */}
      <div className="lg:hidden px-margin-mobile py-stack-mobile-lg space-y-16">
        <div className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <div className="w-8 h-[2px] bg-primary" />
            <span className="text-label-sm font-bold text-primary tracking-[0.3em] uppercase">Works</span>
          </div>
          <h2 className="text-display-lg-mobile font-black text-on-surface leading-[1.1] tracking-tighter">
            Selected <span className="text-primary italic">Architectures.</span>
          </h2>
        </div>

        <div className="space-y-24">
          {PROJECTS_DATA.map((project, index) => (
            <div key={project.id} className="relative group">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-[10px] font-mono font-bold text-on-surface/30 uppercase tracking-widest">{project.category} / 0{index + 1}</span>
                <div className="flex-1 h-px tonal-layer-4" />
              </div>
              
              <h3 className="text-headline-lg-mobile text-on-surface mb-4 font-black tracking-tight leading-none group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-body-md text-on-surface-variant/60 font-light mb-8 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map(tech => (
                  <span key={tech} className="no-line-boundary px-3 py-1.5 rounded-lg text-[9px] uppercase tracking-widest text-on-surface-variant font-bold bg-surface-container-low/50">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {/* <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center justify-between p-5 rounded-2xl tonal-layer-2 active:scale-[0.98] transition-all"
                >
                  <span className="text-label-sm font-bold text-on-surface uppercase tracking-[0.1em]">View Architecture</span>
                  <div className="w-9 h-9 rounded-full tonal-layer-4 flex items-center justify-center transition-transform group-hover:rotate-45">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </div>
                </a> */}

                {project.repoLink && (
                  <a 
                    href={project.repoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group flex items-center justify-between p-5 rounded-2xl tonal-layer-1 active:scale-[0.98] transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <Github className="w-5 h-5 text-on-surface-variant" strokeWidth={1.5} />
                      <span className="text-label-sm font-bold text-on-surface-variant uppercase tracking-[0.1em]">View Repository</span>
                    </div>
                    <div className="w-9 h-9 rounded-full tonal-layer-3 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                    </div>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

