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
    <section className="py-stack-xl relative z-10 overflow-hidden" id="about">
      {/* Background Ambient Glow - Responsive placement */}
      <div className="absolute top-0 -left-20 w-72 h-72 md:w-96 md:h-96 bg-primary/5 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-20 items-start"
        >
          {/* Left Column: Narrative & Feature Cards */}
          <div className="lg:col-span-6 space-y-10 md:space-y-16">
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <span className="text-[10px] md:text-label-sm font-bold text-primary tracking-[0.3em] md:tracking-[0.4em] uppercase">
                  Core / Identity
                </span>
                <div className="h-px w-8 md:w-12 tonal-layer-4" />
              </div>
              <h2 className="text-[32px] md:text-display-lg text-on-surface leading-[1] md:leading-[0.95] tracking-tighter font-black">
                Architecting <br />
                <span className="text-primary italic">the unseen.</span>
              </h2>
              <p className="mt-6 md:mt-8 text-body-md md:text-body-lg text-on-surface-variant/60 max-w-xl leading-relaxed font-light">
                {HERO_DATA.description}
              </p>
            </motion.div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-6 md:p-8 tonal-layer-1 rounded-[32px] md:rounded-[40px] group transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl tonal-layer-2 flex items-center justify-center text-primary mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Server className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-title-md md:text-title-lg text-on-surface mb-2 md:mb-3 font-bold">
                  API Systems
                </h3>
                <p className="text-[13px] md:text-body-sm text-on-surface-variant/50 leading-relaxed">
                  Designing resilient, versioned REST endpoints for scale.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-6 md:p-8 tonal-layer-1 rounded-[32px] md:rounded-[40px] group transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl tonal-layer-2 flex items-center justify-center text-primary mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Share2 className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-title-md md:text-title-lg text-on-surface mb-2 md:mb-3 font-bold">
                  Enterprise
                </h3>
                <p className="text-[13px] md:text-body-sm text-on-surface-variant/50 leading-relaxed">
                  Building distributed, fault-tolerant microservices for complex
                  flows.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Minimal Impact Stack */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div variants={itemVariants} className="mb-6 md:mb-10">
              <span className="text-[10px] md:text-label-sm font-bold text-on-surface-variant/40 uppercase tracking-[0.2em]">
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
                    className="p-6 md:p-10 tonal-layer-1 hover:tonal-layer-2 rounded-[32px] md:rounded-[40px] flex items-center gap-5 md:gap-8 group cursor-default transition-all duration-500"
                  >
                    <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full tonal-layer-2 text-primary flex items-center justify-center transition-all duration-500">
                      <Icon
                        className="w-6 h-6 md:w-7 md:h-7"
                        strokeWidth={1.5}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-2 md:gap-x-3 mb-1">
                        <span
                          className={`${item.label.includes("%") ? "text-headline-lg-mobile md:text-display-sm" : "text-title-md md:text-title-lg"} text-on-surface leading-none font-black tracking-tight`}
                        >
                          {item.label}
                        </span>
                        {!item.label.includes("%") && (
                          <span className="text-title-md md:text-title-lg text-on-surface font-bold tracking-tight truncate">
                            {item.description}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="min-w-0">
                          {item.label.includes("%") && (
                            <p className="text-[11px] md:text-label-sm text-on-surface-variant/40 uppercase tracking-widest font-medium truncate">
                              {item.description}
                            </p>
                          )}
                          {item.subtext && (
                            <p className="text-[11px] md:text-label-sm text-on-surface-variant/40 uppercase tracking-widest font-medium truncate">
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
