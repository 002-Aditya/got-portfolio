import React from 'react';
import { motion } from 'framer-motion';
import { HERO_DATA, IMPACT_DATA } from '../../constants/portfolioData';
import { Server, Share2, Gauge, Workflow, ShieldCheck, Database, Layers, Cpu, ArrowRight } from 'lucide-react';

const IconMap = {
  database: Gauge,
  workflow: Workflow,
  security: ShieldCheck,
  schema: Database,
  api: Server,
  enterprise: Cpu
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export const About = () => {
  return (
    <section className="py-stack-xl relative z-10 overflow-hidden" id="about">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-start"
        >
          
          {/* Left Column: Narrative & Feature Cards */}
          <div className="lg:col-span-6 space-y-12 md:space-y-16">
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-label-sm font-bold text-primary tracking-[0.4em] uppercase">Core / Identity</span>
                <div className="h-px w-12 tonal-layer-4" />
              </div>
              <h2 className="text-[40px] md:text-display-lg text-on-surface leading-[0.95] tracking-tighter font-black">
                Architecting <br/>
                <span className="text-primary italic">the unseen.</span>
              </h2>
              <p className="mt-8 text-body-lg text-on-surface-variant/60 max-w-xl leading-relaxed font-light">
                {HERO_DATA.description}
              </p>
            </motion.div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-8 tonal-layer-1 rounded-[40px] group transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="w-14 h-14 rounded-2xl tonal-layer-2 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Server size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-title-lg text-on-surface mb-3 font-bold">API Systems</h3>
                <p className="text-body-sm text-on-surface-variant/50 leading-relaxed">
                  Designing resilient, versioned REST endpoints for scale.
                </p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-8 tonal-layer-1 rounded-[40px] group transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="w-14 h-14 rounded-2xl tonal-layer-2 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Share2 size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-title-lg text-on-surface mb-3 font-bold">Enterprise</h3>
                <p className="text-body-sm text-on-surface-variant/50 leading-relaxed">
                  Building distributed, fault-tolerant microservices for complex flows.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Minimal Impact Stack */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div variants={itemVariants} className="mb-10">
              <span className="text-label-sm font-bold text-on-surface-variant/40 uppercase tracking-[0.2em]">Operational Impact</span>
            </motion.div>
            
            <div className="space-y-4">
              {IMPACT_DATA.map((item, index) => {
                const Icon = IconMap[item.icon] || Layers;

                return (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className={`p-8 md:p-10 rounded-[40px] flex items-center gap-8 group cursor-default transition-all duration-500 ${
                      'tonal-layer-1 hover:tonal-layer-2'
                    }`}
                  >
                    <div className={`shrink-0 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                      'tonal-layer-2 text-primary'
                    }`}>
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline gap-3 mb-2">
                        <span className={`${item.label.includes('%') ? 'text-display-sm' : 'text-title-lg'} text-on-surface leading-none font-black tracking-tight`}>
                          {item.label}
                        </span>
                        {!item.label.includes('%') && (
                          <span className="text-title-lg text-on-surface font-bold tracking-tight">
                            {item.description}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          {item.label.includes('%') && (
                            <p className="text-label-sm text-on-surface-variant/40 uppercase tracking-widest font-medium">
                              {item.description}
                            </p>
                          )}
                          {item.subtext && (
                            <p className="text-label-sm text-on-surface-variant/40 uppercase tracking-widest font-medium">
                              {item.subtext}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

