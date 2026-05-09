import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { EXPERIENCE_DATA } from '../../constants/portfolioData';

export const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-stack-lg relative z-10" id="experience">
      <div className="container-max mx-auto px-margin-mobile md:px-gutter">
        <h2 className="text-display-lg text-on-surface mb-12">Experience</h2>
        
        <GlassCard>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {EXPERIENCE_DATA.map((exp, index) => (
              <motion.div variants={itemVariants} key={index} className="relative pl-8 md:pl-0">
                {/* Timeline line - mobile only */}
                <div className="md:hidden absolute left-0 top-2 bottom-0 w-px bg-white/10" />
                
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8">
                  <div className="text-body-md text-on-surface-variant font-mono relative">
                    {/* Timeline dot - mobile only */}
                    <div className="md:hidden absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-primary" />
                    {exp.period}
                  </div>
                  <div>
                    <h3 className="text-headline-md text-on-surface mb-1">{exp.role}</h3>
                    <h4 className="text-title-lg text-primary mb-4">{exp.company}</h4>
                    <p className="text-body-lg text-on-surface-variant mb-4">
                      {exp.description}
                    </p>
                    {exp.techStack && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.techStack.map((tech, i) => (
                          <div key={i} className="inline-flex items-center px-3 py-1 rounded-full bg-surface-bright/50 border border-white/5 text-on-surface-variant font-mono text-sm">
                            {tech}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </GlassCard>
      </div>
    </section>
  );
};
