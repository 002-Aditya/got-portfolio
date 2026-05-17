import React from "react";
import { motion } from "framer-motion";
import { HERO_DATA, IMPACT_DATA } from "../../constants/portfolioData";
import {
  Server,
  Share2,
  Gauge,
  Workflow,
  ShieldCheck,
  Database,
  Layers,
  Cpu,
  ArrowRight,
} from "lucide-react";

const IconMap = {
  database: Gauge,
  workflow: Workflow,
  security: ShieldCheck,
  schema: Database,
  api: Server,
  enterprise: Cpu,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export const About = () => {
  return (
    <section className="pt-32 pb-16 lg:py-stack-xl relative z-10 overflow-hidden" id="about">
      {/* Background Ambient Glow - Responsive placement */}
      <div className="absolute top-0 -left-20 w-72 h-72 md:w-96 md:h-96 bg-primary/5 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="content-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start"
        >
          {/* Mobile-Only Section */}
          <div className="lg:hidden col-span-1 space-y-12">
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-label-sm font-bold text-primary tracking-[0.4em] uppercase">
                  Core / Identity
                </span>
                <div className="h-px w-12 tonal-layer-4" />
              </div>
              <h2 className="text-display-lg-mobile text-on-surface leading-[1.05] tracking-tighter font-black">
                Architecting <br />
                <span className="text-primary italic">the unseen.</span>
              </h2>
              <p className="mt-6 text-body-md text-on-surface-variant/60 leading-relaxed font-light">
                {HERO_DATA.description}
              </p>
            </motion.div>

            {/* Mobile Capabilities Registry */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-on-surface/5 pb-2">
                <span className="text-[10px] font-mono text-on-surface-variant/30 uppercase tracking-widest">SYSTEM_MODULES</span>
                <span className="text-[10px] font-mono text-primary/40 uppercase tracking-widest">STATUS: ACTIVE</span>
              </div>
              
              <div className="divide-y divide-on-surface/5">
                <div className="py-5 flex gap-4 items-start">
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary mt-0.5">
                    <Server size={14} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-on-surface uppercase tracking-wide">01 // API_SYSTEMS</h4>
                    <p className="text-[11px] text-on-surface-variant/50 leading-relaxed mt-1">Designing resilient, versioned REST endpoints for scale.</p>
                  </div>
                </div>
                
                <div className="py-5 flex gap-4 items-start">
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary mt-0.5">
                    <Share2 size={14} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-on-surface uppercase tracking-wide">02 // ENTERPRISE_CORE</h4>
                    <p className="text-[11px] text-on-surface-variant/50 leading-relaxed mt-1">Building distributed, fault-tolerant microservices for complex flows.</p>
                  </div>
                </div>

                <div className="py-5 flex gap-4 items-start">
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary mt-0.5">
                    <Layers size={14} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-on-surface uppercase tracking-wide">03 // CREDENTIALS</h4>
                    <p className="text-[11px] text-on-surface-variant/50 leading-relaxed mt-1">
                      B.Tech in Electronics & Communication — MSIT, Delhi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Operational Impact Ledger */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-label-sm font-bold text-on-surface-variant/30 uppercase tracking-[0.2em]">Operational Impact</span>
                <div className="flex-1 h-px tonal-layer-4" />
              </div>
              
              <div className="space-y-3">
                {IMPACT_DATA.map((item, index) => {
                  const Icon = IconMap[item.icon] || Layers;
                  return (
                    <div key={index} className="p-4 rounded-2xl bg-surface-container-lowest/50 border border-on-surface/5 flex items-center justify-between gap-4">
                      <div className="min-w-0 flex items-center gap-3.5">
                        <div className="shrink-0 w-9 h-9 rounded-lg bg-primary/5 text-primary flex items-center justify-center">
                          <Icon size={16} strokeWidth={1.5} />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[9px] font-mono text-primary/40 block mb-0.5">REG_METRIC // 0{index + 1}</span>
                          <h4 className="text-xs font-mono font-bold text-on-surface uppercase tracking-tight truncate">{item.description}</h4>
                          {item.subtext && <p className="text-[9px] font-mono text-on-surface-variant/40 uppercase tracking-widest mt-0.5 truncate">{item.subtext}</p>}
                        </div>
                      </div>
                      <div className="shrink-0 text-right">
                        <span className="text-base font-black text-primary font-heading tracking-tight block">{item.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Desktop-Only Left Column: Narrative & Feature Cards */}
          <div className="hidden lg:flex flex-col lg:col-span-6 space-y-12 lg:space-y-16">
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-label-sm font-bold text-primary tracking-[0.4em] uppercase">
                  Core / Identity
                </span>
                <div className="h-px w-12 tonal-layer-4" />
              </div>
              <h2 className="text-display-lg text-on-surface leading-[0.95] tracking-tighter font-black">
                Architecting <br />
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
                  <Server className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-title-lg text-on-surface mb-3 font-bold">
                  API Systems
                </h3>
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
                  <Share2 className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-title-lg text-on-surface mb-3 font-bold">
                  Enterprise
                </h3>
                <p className="text-body-sm text-on-surface-variant/50 leading-relaxed">
                  Building distributed, fault-tolerant microservices for complex
                  flows.
                </p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-8 tonal-layer-1 rounded-[40px] group transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="w-14 h-14 rounded-2xl tonal-layer-2 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Layers className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-title-lg text-on-surface mb-3 font-bold">
                  Credentials
                </h3>
                <p className="text-body-sm text-on-surface-variant/50 leading-relaxed">
                  B.Tech in Electronics & Communication <br/>
                  <span className="text-[10px] uppercase tracking-wider opacity-60">MSIT, Delhi</span>
                </p>
              </motion.div>
            </div>
          </div>

          {/* Desktop-Only Right Column: Minimal Impact Stack */}
          <div className="hidden lg:block lg:col-span-6 space-y-6">
            <motion.div variants={itemVariants} className="mb-10">
              <span className="text-label-sm font-bold text-on-surface-variant/40 uppercase tracking-[0.2em]">
                Operational Impact
              </span>
            </motion.div>

            <div className="space-y-4">
              {IMPACT_DATA.map((item, index) => {
                const Icon = IconMap[item.icon] || Layers;

                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="p-10 tonal-layer-1 hover:tonal-layer-2 rounded-[40px] flex items-center gap-8 group cursor-default transition-all duration-500"
                  >
                    <div className="shrink-0 w-16 h-16 rounded-full tonal-layer-2 text-primary flex items-center justify-center transition-all duration-500">
                      <Icon
                        className="w-7 h-7"
                        strokeWidth={1.5}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3 mb-1">
                        <span
                          className={`${item.label.includes("%") ? "text-display-sm" : "text-title-lg"} text-on-surface leading-none font-black tracking-tight`}
                        >
                          {item.label}
                        </span>
                        {!item.label.includes("%") && (
                          <span className="text-title-lg text-on-surface font-bold tracking-tight truncate">
                            {item.description}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="min-w-0">
                          {item.label.includes("%") && (
                            <p className="text-label-sm text-on-surface-variant/40 uppercase tracking-widest font-medium truncate">
                              {item.description}
                            </p>
                          )}
                          {item.subtext && (
                            <p className="text-label-sm text-on-surface-variant/40 uppercase tracking-widest font-medium truncate">
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
