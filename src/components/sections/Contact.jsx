import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_DATA } from '../../constants/portfolioData';
import { Mail, Github, Linkedin, ArrowUpRight, MessageCircle, Phone, FileText } from 'lucide-react';

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
    <section className="pt-32 pb-16 lg:py-stack-xl relative overflow-hidden" id="contact">
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

              {/* Resume Download CTA - Balanced Height Card */}
              <div className="mt-6 glass-card p-6 lg:p-10 border border-primary/10 hover:border-primary/20 transition-all duration-500 relative overflow-hidden flex flex-col gap-6">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[10px] lg:text-label-sm font-black text-on-surface/40 uppercase tracking-[0.2em]">Curriculum Vitae</h3>
                    <span className="text-[11px] font-mono text-primary uppercase font-bold tracking-widest">adityakumar_resume.pdf</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                    <FileText size={18} />
                  </div>
                </div>
                
                <a 
                  href="/Files/AdityaKumar_Resume.pdf" 
                  download="AdityaKumar_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-4 bg-primary text-surface font-black text-xs uppercase tracking-[0.25em] rounded-2xl text-center shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          </div>

          {/* Contact Links Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 lg:gap-6 border-t lg:border-t-0 border-on-surface/5">
              {contactItems.map((item, index) => (
                <div key={index}>
                  {/* Mobile View: Communication Protocol */}
                  <motion.a 
                    variants={itemVariants}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lg:hidden flex items-center justify-between py-8 border-b border-on-surface/5 group"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary/40 group-hover:text-primary transition-colors duration-500">
                        <item.icon size={22} strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[9px] font-mono text-on-surface/20 uppercase tracking-[0.2em]">
                            PROTO / {item.tag.split(' / ')[0]}
                          </span>
                        </div>
                        <h4 className="text-title-md-mobile font-black text-on-surface uppercase tracking-tight">{item.label}</h4>
                        <p className="text-[12px] text-primary/50 font-mono truncate max-w-[190px] xs:max-w-[240px] sm:max-w-none block">{item.value}</p>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-on-surface/5 flex items-center justify-center text-on-surface/20 group-hover:border-primary/30 group-hover:text-primary transition-all duration-500">
                      <ArrowUpRight size={16} />
                    </div>
                  </motion.a>

                  {/* Desktop View: Glass Card */}
                  <motion.a 
                    variants={itemVariants}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:flex group relative flex-col p-8 lg:p-10 rounded-[32px] glass-card border border-on-surface/5 overflow-hidden transition-all duration-700 hover:border-primary/30 hover:-translate-y-2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 translate-y-[-100%] group-hover:animate-scan pointer-events-none" />
                    
                    <div className="flex justify-between items-start mb-8 relative z-10">
                      <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl tonal-layer-3 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                        <item.icon size={28} strokeWidth={1.5} />
                      </div>
                      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-on-surface/5 flex items-center justify-center text-on-surface/20 group-hover:text-primary group-hover:border-primary/20 transition-all duration-500">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>

                    <div className="mt-auto relative z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-mono text-primary/40 uppercase tracking-widest">{item.tag}</span>
                      </div>
                      <h4 className="text-headline-md-mobile lg:text-title-lg font-black text-on-surface mb-2 uppercase tracking-tight">{item.label}</h4>
                      <p className="text-body-sm text-on-surface-variant/60 font-mono break-all">{item.value}</p>
                    </div>
                  </motion.a>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
