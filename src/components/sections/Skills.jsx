import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { TechBadge } from '../ui/TechBadge';
import { SKILLS_DATA } from '../../constants/portfolioData';

export const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 15 } }
  };

  return (
    <section className="py-stack-lg relative z-10" id="skills">
      <div className="container-max mx-auto px-margin-mobile md:px-gutter">
        <h2 className="text-display-lg text-on-surface mb-12 text-center md:text-left">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS_DATA.categories.map((category, index) => (
            <GlassCard key={category.name} delay={index * 0.2}>
              <h3 className="text-title-lg text-primary mb-6">{category.name}</h3>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill, i) => (
                  <motion.div variants={itemVariants} key={i}>
                    <TechBadge>{skill}</TechBadge>
                  </motion.div>
                ))}
              </motion.div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
