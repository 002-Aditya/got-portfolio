import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '../../constants/portfolioData';
import { Briefcase, ArrowUpRight } from 'lucide-react';

export const Experience = () => {
  return (
    <section className="py-stack-mobile-lg lg:py-stack-xl relative z-10" id="experience">
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
        
        <div className="space-y-12">
          {EXPERIENCE_DATA.map((exp, index) => (
            <div key={exp.id} className="relative group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">
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
                <div className="lg:col-span-9 p-5 lg:p-16 tonal-layer-2 rounded-2xl lg:rounded-[40px] transition-all duration-700 group-hover:tonal-layer-3 group-hover:translate-x-2">
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

