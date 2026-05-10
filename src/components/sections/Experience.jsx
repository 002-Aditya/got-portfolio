import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '../../constants/portfolioData';
import { Briefcase, ArrowUpRight } from 'lucide-react';

export const Experience = () => {
  return (
    <section className="py-stack-xl relative z-10" id="experience">
      <div className="container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="mb-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="w-12 h-px bg-primary" />
              <span className="text-label-sm font-bold text-primary tracking-[0.4em] uppercase">Chronicle</span>
            </div>
            <h2 className="text-display-lg text-on-surface leading-none tracking-tighter">
              Professional <br/><span className="text-on-surface/40 italic">Evolution.</span>
            </h2>
          </div>
          <div className="md:col-span-4 pb-2">
            <p className="text-body-lg text-on-surface-variant/70 font-light leading-relaxed">
              Decade-defining architecture and infrastructure management across high-stakes enterprise environments.
            </p>
          </div>
        </div>
        
        <div className="space-y-12">
          {EXPERIENCE_DATA.map((exp, index) => (
            <div key={exp.id} className="relative group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                {/* Period - Technical Metadata */}
                <div className="lg:col-span-3 pt-2">
                  <div className="sticky top-32">
                    <span className="text-headline-lg font-bold text-on-surface/20 group-hover:text-primary/40 transition-colors duration-500 font-mono">
                      {exp.period.split(' - ')[0]}
                    </span>
                    <div className="h-px w-full tonal-layer-4 my-4 group-hover:bg-primary/20 transition-colors duration-500" />
                    <span className="text-label-sm font-bold text-on-surface-variant/40 uppercase tracking-widest">
                      Node / {exp.id}
                    </span>
                  </div>
                </div>

                {/* Content - Architectural Layer */}
                <div className="lg:col-span-9 p-10 md:p-16 tonal-layer-2 rounded-[40px] transition-all duration-700 group-hover:tonal-layer-3 group-hover:translate-x-2">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
                    <div>
                      <h3 className="text-display-lg-mobile md:text-headline-lg font-bold text-on-surface mb-2">{exp.role}</h3>
                      <h4 className="text-title-lg text-primary font-medium">{exp.company}</h4>
                    </div>
                    <div className="w-12 h-12 rounded-full tonal-layer-4 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                      <ArrowUpRight className="text-on-surface group-hover:text-on-primary transition-colors" size={20} />
                    </div>
                  </div>

                  <p className="text-body-lg text-on-surface-variant/80 mb-12 max-w-4xl leading-relaxed font-light">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {exp.techStack.map((tech) => (
                      <span key={tech} className="no-line-boundary px-5 py-2 rounded-xl text-label-sm text-on-surface-variant/70 font-bold tracking-wider">
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

