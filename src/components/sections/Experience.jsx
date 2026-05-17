import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '../../constants/portfolioData';
import { Briefcase, ArrowUpRight } from 'lucide-react';

export const Experience = () => {
  return (
    <section className="pt-32 pb-16 lg:py-stack-xl relative z-10" id="experience">
      <div className="content-container">
        <div className="mb-12 lg:mb-20 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-end">
          <div className="md:col-span-8">
            <div className="mb-4 lg:mb-6 flex items-center gap-3 lg:gap-4">
              <div className="w-8 lg:w-12 h-[2px] lg:h-px bg-primary" />
              <span className="text-label-sm font-bold text-primary tracking-[0.3em] uppercase">Chronicle</span>
            </div>
            <h2 className="text-display-lg-mobile lg:text-display-lg text-on-surface leading-[1.1] lg:leading-none tracking-tighter">
              Professional <span className="text-primary italic">Evolution.</span>
            </h2>
          </div>
          <div className="md:col-span-4 pb-2">
            <p className="text-body-md lg:text-body-lg text-on-surface-variant/60 font-light leading-relaxed">
              Decade-defining architecture and infrastructure management across high-stakes enterprise environments.
            </p>
          </div>
        </div>
        
        <div className="space-y-4 lg:space-y-12">
          {EXPERIENCE_DATA.map((exp, index) => (
            <div key={exp.id} className="relative group">
              {/* Mobile View: Architectural Timeline */}
              <div className="lg:hidden flex gap-5 relative overflow-hidden">
                {/* Timeline Path */}
                <div className="flex flex-col items-center pt-2">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-2.5 h-2.5 rounded-full bg-primary relative z-10 shadow-[0_0_10px_rgba(165,200,255,0.4)]" 
                  />
                  {index !== EXPERIENCE_DATA.length - 1 && (
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="w-px flex-1 bg-on-surface/10 mt-2" 
                    />
                  )}
                </div>
                
                {/* Content Area */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="pb-12 flex-1"
                >
                  <div className="flex flex-col gap-1 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-primary font-bold tracking-widest uppercase">
                        {exp.period.split(/[–-]/)[0]} // 0x{exp.id}
                      </span>
                      <ArrowUpRight className="text-on-surface/20" size={14} />
                    </div>
                    <h3 className="text-headline-md-mobile font-black text-on-surface leading-tight uppercase tracking-tighter">
                      {exp.role}
                    </h3>
                    <span className="text-title-md-mobile text-primary/70 font-bold">{exp.company}</span>
                  </div>

                  <p className="text-body-sm text-on-surface-variant/60 mb-6 leading-relaxed font-light">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {exp.techStack.map((tech) => (
                      <span key={tech} className="text-[9px] font-mono text-on-surface/30 uppercase tracking-widest">
                        #{tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Desktop View: Architectural Layer */}
              <div className="hidden lg:grid grid-cols-12 gap-16">
                {/* Period - Technical Metadata */}
                <div className="lg:col-span-3 pt-2">
                  <div className="lg:sticky lg:top-32 flex flex-row lg:flex-col items-baseline lg:items-start gap-4 lg:gap-0">
                    <span className="text-headline-lg-mobile lg:text-headline-lg font-bold text-on-surface/20 group-hover:text-primary/40 transition-colors duration-500 font-mono leading-none">
                      {exp.period.split(/[–-]/)[0]}
                    </span>
                    <div className="hidden lg:block h-px w-full tonal-layer-4 my-4 group-hover:bg-primary/20 transition-colors duration-500" />
                    <span className="text-[10px] lg:text-label-sm font-bold text-on-surface-variant/40 uppercase tracking-widest leading-none">
                      Node / {exp.id}
                    </span>
                  </div>
                </div>

                {/* Content - Architectural Layer */}
                <div className="lg:col-span-9 p-16 tonal-layer-2 rounded-[40px] transition-all duration-700 group-hover:tonal-layer-3 group-hover:translate-x-2">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4 lg:gap-6 mb-6 lg:mb-10">
                    <div>
                      <h3 className="text-headline-md-mobile lg:text-headline-lg font-black text-on-surface mb-1 leading-tight">{exp.role}</h3>
                      <h4 className="text-title-md-mobile lg:text-title-lg text-primary/80 font-bold">{exp.company}</h4>
                    </div>
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full tonal-layer-4 flex items-center justify-center group-hover:bg-primary transition-colors duration-500 shrink-0">
                      <ArrowUpRight className="text-on-surface group-hover:text-on-primary transition-colors" size={18} />
                    </div>
                  </div>

                  <p className="text-body-md lg:text-body-lg text-on-surface-variant/70 mb-8 lg:mb-12 max-w-4xl leading-relaxed font-light">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 lg:gap-3">
                    {exp.techStack.map((tech) => (
                      <span key={tech} className="no-line-boundary px-3 py-1 lg:px-4 lg:py-1.5 rounded-lg text-[9px] lg:text-label-sm text-on-surface-variant/60 font-bold tracking-widest">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connecting Line - Asymmetric Decorative */}
              {index !== EXPERIENCE_DATA.length - 1 && (
                <div className="hidden lg:block absolute left-[1.5rem] bottom-[-3rem] w-px h-12 tonal-layer-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

