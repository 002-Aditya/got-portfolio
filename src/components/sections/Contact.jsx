import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_DATA } from '../../constants/portfolioData';
import { Mail, Github, Linkedin, ArrowRight, MessageCircle, ExternalLink, Phone } from 'lucide-react';

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
    },
    {
      label: "Direct Call",
      value: `+91 ${CONTACT_DATA.whatsapp}`,
      href: `tel:+91${CONTACT_DATA.whatsapp}`,
      icon: Phone,
      tag: "Voice / GSM",
      color: "secondary"
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
    <section className="py-stack-mobile-lg lg:py-stack-xl relative overflow-hidden" id="contact">
      {/* Ambient Background Elements */}
      <div className="ambient-glow-primary -top-[400px] -right-[200px] opacity-10" />
      <div className="ambient-glow-secondary -bottom-[300px] -left-[100px] opacity-5" />
      
      <div className="content-container relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 items-start"
        >
          {/* Header & Description */}
          <div className="lg:col-span-5">
            <motion.div variants={itemVariants} className="mb-12 lg:mb-16">
              <div className="mb-6 lg:mb-8 flex items-center gap-4">
                <div className="h-[2px] w-12 bg-primary" />
                <span className="text-label-sm font-bold text-primary tracking-[0.4em] uppercase">Connectivity</span>
              </div>
              <h2 className="text-display-lg-mobile lg:text-display-lg text-on-surface mb-8 lg:mb-10 leading-[1.05] lg:leading-[0.95] tracking-tighter">
                Let's build <span className="text-primary italic">the Future.</span>
              </h2>
              <p className="text-body-md lg:text-body-lg text-on-surface-variant/60 max-w-xl leading-relaxed font-light mb-10 lg:mb-16">
                {CONTACT_DATA.description}
              </p>

              {/* Status Indicator Card - Premium Obsidian Style */}
              <div className="glass-card p-6 lg:p-10 group border border-on-surface/5 hover:border-primary/20 transition-all duration-700 relative overflow-hidden">
                {/* Precision scanning line effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[200%] -translate-y-full group-hover:translate-y-0 transition-transform duration-[2000ms] pointer-events-none" />
                
                <div className="flex items-center justify-between mb-8 lg:mb-10 relative z-10">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[10px] lg:text-label-sm font-black text-on-surface/40 uppercase tracking-[0.2em]">Inquiry Status</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(165,200,255,0.8)]" />
                      <span className="text-[11px] font-mono text-primary uppercase font-bold tracking-widest">Active_Node</span>
                    </div>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg tonal-layer-2 border border-on-surface/5">
                    <span className="text-[10px] font-mono text-on-surface/60 uppercase">v1.0.4</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 relative z-10">
                  <span className="text-headline-md-mobile lg:text-headline-lg font-mono text-on-surface tracking-tighter uppercase font-black">system_ready</span>
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] text-on-surface-variant/30 font-mono tracking-widest uppercase">LATENCY: 24-48 HRS</p>
                    <p className="text-[9px] text-primary/30 font-mono uppercase">0x7F2D1_ARCH</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Links Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {contactItems.map((item, index) => (
                <motion.a 
                  key={index} 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="block group"
                >
                  <div className="glass-card p-6 lg:p-8 h-full flex flex-col justify-between min-h-[160px] lg:min-h-[220px] transition-all duration-500 group-hover:bg-surface-container-high/60 lg:group-hover:-translate-y-2 border border-on-surface/5 hover:border-primary/20">
                    <div className="flex justify-between items-start mb-6 lg:mb-8">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl tonal-layer-4 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500`}>
                          {React.createElement(item.icon, { size: 24, strokeWidth: 1.5 })}
                        </div>
                        <div className="flex flex-col">
                          <p className="text-[10px] lg:text-label-sm font-black text-on-surface-variant/30 uppercase tracking-[0.2em] mb-1">{item.label}</p>
                          <span className="text-[9px] font-mono text-primary/40 uppercase tracking-widest">{item.tag}</span>
                        </div>
                      </div>
                      <div className="p-2 rounded-lg tonal-layer-3 opacity-40 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500">
                        <ExternalLink size={14} className="text-on-surface-variant/40" />
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-title-md lg:text-title-lg text-on-surface font-mono break-all leading-tight group-hover:text-primary transition-colors duration-300">
                        {item.value}
                      </p>
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
          className="mt-24 lg:mt-32 pt-8 lg:pt-12 border-t border-on-surface/5 flex flex-col md:flex-row justify-between items-center gap-8 pb-12"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl tonal-layer-2 flex items-center justify-center border border-on-surface/5">
              <span className="text-primary font-bold text-sm">A</span>
            </div>
            <div>
              <p className="text-label-sm font-bold text-on-surface-variant/60 uppercase tracking-[0.3em]">Architect v1.0.4</p>
              <p className="text-[10px] font-mono text-on-surface-variant/30 uppercase">BUILD_HASH: 0A7F2D1</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-3">
            <p className="text-[10px] font-mono text-on-surface-variant/30 uppercase tracking-[0.2em] text-center md:text-right">
              Designed for scalability. Built with precision.
            </p>
            <div className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-surface-container-highest" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};


