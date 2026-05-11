import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_DATA } from '../../constants/portfolioData';
import { Mail, Github, Linkedin, ArrowRight, MessageCircle, ExternalLink } from 'lucide-react';

export const Contact = () => {
  const contactItems = [
    {
      label: "Direct Email",
      value: CONTACT_DATA.email,
      href: `mailto:${CONTACT_DATA.email}`,
      icon: Mail,
      tag: "SMTP / TLS",
      color: "rose"
    },
    {
      label: "GitHub Profile",
      value: CONTACT_DATA.github,
      href: `https://${CONTACT_DATA.github}`,
      icon: Github,
      tag: "Git / SSH",
      color: "amber"
    },
    {
      label: "LinkedIn Connect",
      value: CONTACT_DATA.linkedin,
      href: `https://${CONTACT_DATA.linkedin}`,
      icon: Linkedin,
      tag: "OAUTH 2.0",
      color: "lavender"
    },
    {
      label: "WhatsApp Message",
      value: `+91 ${CONTACT_DATA.whatsapp}`,
      href: `https://wa.me/91${CONTACT_DATA.whatsapp}`,
      icon: MessageCircle,
      tag: "Instant / P2P",
      color: "primary"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="py-stack-xl relative overflow-hidden" id="contact">
      {/* Ambient Background Elements */}
      <div className="ambient-glow-primary -top-[400px] -right-[200px] opacity-10" />
      <div className="ambient-glow-secondary -bottom-[300px] -left-[100px] opacity-5" />
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start"
        >
          {/* Header & Description */}
          <div className="lg:col-span-5">
            <motion.div variants={itemVariants} className="mb-12">
              <div className="mb-6 flex items-center gap-4">
                <span className="text-label-sm font-bold text-primary tracking-[0.4em] uppercase">Connectivity</span>
                <div className="h-px w-16 tonal-layer-4" />
              </div>
              <h2 className="text-display-lg md:text-display-xl text-on-surface mb-8 leading-[0.9] tracking-tighter">
                Let's build <br/>
                <span className="text-primary italic">the Future.</span>
              </h2>
              <p className="text-body-lg text-on-surface-variant/70 max-w-xl leading-relaxed font-light mb-12">
                {CONTACT_DATA.description}
              </p>

              {/* Status Indicator Card */}
              <div className="glass-card p-8 group border border-on-surface/5 hover:border-primary/20 transition-colors duration-500">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-label-sm font-bold text-on-surface/50 uppercase tracking-widest">Inquiry Status</h3>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] font-mono text-primary uppercase font-bold">Live</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-headline-lg font-mono text-on-surface tracking-tighter">system_ready</span>
                  <p className="text-label-sm text-on-surface-variant/40 font-mono">EST_LATENCY: 24-48 HOURS</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Links Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactItems.map((item, index) => (
                <motion.a 
                  key={index} 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="block group"
                >
                  <div className="glass-card p-8 h-full flex flex-col justify-between min-h-[220px] transition-all duration-500 group-hover:bg-surface-container-high/60 group-hover:-translate-y-2 border border-on-surface/5 hover:border-primary/20">
                    <div className="flex justify-between items-start mb-8">
                      <div className={`w-14 h-14 rounded-2xl tonal-layer-4 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500`}>
                        {React.createElement(item.icon, { size: 28, strokeWidth: 1.5 })}
                      </div>
                      <div className="p-2 rounded-lg tonal-layer-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <ExternalLink size={16} className="text-on-surface-variant/40" />
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-label-sm font-bold text-on-surface-variant/40 uppercase tracking-widest mb-2">{item.label}</p>
                      <p className="text-title-lg text-on-surface font-mono break-all leading-tight group-hover:text-primary transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      {/* <span className="text-[10px] font-mono text-on-surface-variant/30 uppercase tracking-[0.2em]">{item.tag}</span> */}
                      {/* <ArrowRight size={18} className="text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" /> */}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer Meta */}
        {/* <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          viewport={{ once: true }}
          className="mt-32 pt-12 border-t border-on-surface/5 flex flex-col md:flex-row justify-between items-center gap-8 pb-12"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl tonal-layer-2 flex items-center justify-center border border-on-surface/5">
              <span className="text-primary font-bold text-sm">P</span>
            </div>
            <div>
              <p className="text-label-sm font-bold text-on-surface-variant/60 uppercase tracking-[0.3em]">Architect v1.0.4</p>
              <p className="text-[10px] font-mono text-on-surface-variant/30 uppercase">BUILD_HASH: 0A7F2D1</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-[10px] font-mono text-on-surface-variant/30 uppercase tracking-widest text-center md:text-right">
              Designed for scalability. Built with precision.
            </p>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-surface-container-highest" />
              <div className="w-2 h-2 rounded-full bg-primary/20" />
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};


