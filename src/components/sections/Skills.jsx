import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA, STATS_DATA } from '../../constants/portfolioData';
import { Code, Database, Bot, Layout, Zap, Activity, Cloud, Cpu } from 'lucide-react';

const IconMap = {
  code: Code,
  database: Database,
  robot: Bot,
  layout: Layout,
  zap: Zap,
  activity: Activity,
  cloud: Cloud,
  cpu: Cpu
};

export const Skills = () => {
  return (
    <section className="py-stack-xl relative z-10" id="stack">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center gap-4">
              <span className="text-label-sm font-bold text-primary tracking-[0.4em] uppercase">Stack / Arsenal</span>
              <div className="flex-1 h-px tonal-layer-4" />
            </div>
            <h2 className="text-display-lg text-on-surface leading-[0.9] tracking-tighter">
              The Systems <br/><span className="text-primary italic">Expertise.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-body-lg text-on-surface-variant/70 font-light leading-relaxed">
              {SKILLS_DATA.description}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
          {SKILLS_DATA.categories.map((category, index) => {
            const Icon = IconMap[category.icon];
            return (
              <div key={category.name} className="p-12 tonal-layer-2 rounded-[40px] group hover:tonal-layer-3 transition-all duration-500">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-14 h-14 rounded-2xl tonal-layer-3 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    {Icon && <Icon size={24} strokeWidth={1.5} />}
                  </div>
                  <h3 className="text-headline-lg text-on-surface">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span key={skill} className="no-line-boundary px-5 py-2.5 rounded-xl text-label-sm text-on-surface-variant font-bold tracking-wider hover:tonal-layer-4 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Impact Section - Integrated Tonal Grid */}
        <div className="pt-24 no-line-boundary rounded-[60px] p-16 md:p-24 relative overflow-hidden" id="stats">
          <div className="absolute top-0 left-0 w-full h-full tonal-layer-1 opacity-50" />
          <div className="relative z-10 text-center mb-20">
            <h2 className="text-display-lg text-on-surface mb-6 leading-none tracking-tighter italic">
              Performance <span className="text-on-surface/30">Metrics.</span>
            </h2>
            <p className="text-body-lg text-on-surface-variant/60 max-w-2xl mx-auto font-light">
              Measurable results delivered through optimized architectures and performant code.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-on-surface/5 overflow-hidden rounded-[32px]">
            {STATS_DATA.map((stat, index) => {
              const Icon = IconMap[stat.icon];
              return (
                <div key={index} className="p-16 tonal-layer-2 text-center group hover:tonal-layer-3 transition-colors duration-500">
                  <div className="w-14 h-14 rounded-full tonal-layer-4 flex items-center justify-center text-primary mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                    {Icon && <Icon size={24} strokeWidth={1} />}
                  </div>
                  <div className="text-[64px] font-bold text-on-surface leading-none mb-4 tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="text-label-sm text-primary font-bold uppercase tracking-widest opacity-60">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

