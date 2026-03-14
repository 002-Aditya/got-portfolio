import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    year: "2023",
    title: "Crucible of MSIT",
    description: "Graduated with B.Tech in Electronics and Communication Engineering.",
    isMajor: true,
  },
  {
    year: "2023",
    title: "Taking the Oath",
    description: "Joined MPC Cloud Consulting Pvt. Ltd. to forge robust systems in production.",
    isMajor: false,
  },
  {
    year: "2023 - Present",
    title: "Architect of APIs",
    description: "Backend Engineer building scalable APIs, optimizing architectures, and managing diverse databases.",
    isMajor: true,
  }
];

const Timeline = () => {
  return (
    <section id="journey" className="py-24 bg-charcoal relative">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl relative z-10">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-cinzel text-4xl md:text-5xl text-frost tracking-wider">
            The Journey
          </h2>
        </motion.div>

        <div className="relative">
          {/* Glowing Timeline Sword / Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-iron">
            {/* Sword handle at top */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="w-8 h-2 bg-gold rounded-sm mb-1"></div>
              <div className="w-3 h-10 bg-iron border border-gold rounded-sm"></div>
              <div className="w-4 h-4 bg-crimson shadow-[0_0_10px_rgba(153,27,27,0.8)] rotate-45 mt-1"></div>
            </div>
            
            {/* Animated inner line glow */}
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-crimson via-gold to-crimson shadow-[0_0_10px_rgba(212,175,55,0.8)]"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </div>

          <div className="space-y-16 mt-16 pb-12">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex md:justify-between items-center w-full">
                  
                  {/* Left content (empty on mobile, alternates on desktop) */}
                  <div className={`hidden md:block w-5/12 ${isEven ? 'text-right pr-12' : 'opacity-0'}`}>
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-iron/10 p-6 border border-iron/50 hover:border-gold/30 transition-colors"
                      >
                        <span className="font-cinzel text-gold text-xl block mb-2">{milestone.year}</span>
                        <h3 className="font-cinzel text-frost text-2xl mb-2">{milestone.title}</h3>
                        <p className="font-inter text-gray-400">{milestone.description}</p>
                      </motion.div>
                    )}
                  </div>

                  {/* Marker Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-20 w-4 h-4 flex items-center justify-center">
                    <motion.div 
                      className={`w-4 h-4 rotate-45 ${milestone.isMajor ? 'bg-gold shadow-[0_0_12px_rgba(212,175,55,0.9)]' : 'bg-iron border border-gold'}`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, type: 'spring' }}
                    />
                  </div>

                  {/* Right content (always visible on mobile, alternates on desktop) */}
                  <div className={`pl-16 md:pl-0 w-full md:w-5/12 ${!isEven ? 'md:text-left md:pl-12' : 'md:opacity-0'}`}>
                    {(!isEven || typeof window !== 'undefined' && window.innerWidth < 768) && (
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`bg-iron/10 p-6 border border-iron/50 hover:border-gold/30 transition-colors ${isEven ? 'block md:hidden' : ''}`}
                      >
                        <span className="font-cinzel text-gold text-xl block mb-2">{milestone.year}</span>
                        <h3 className="font-cinzel text-frost text-2xl mb-2">{milestone.title}</h3>
                        <p className="font-inter text-gray-400">{milestone.description}</p>
                      </motion.div>
                    )}
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

export default Timeline;
