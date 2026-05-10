import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_DATA } from '../../constants/portfolioData';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

export const Contact = () => {
  const contactItems = [
    {
      label: "Direct Email",
      value: CONTACT_DATA.email,
      href: `mailto:${CONTACT_DATA.email}`,
      icon: Mail,
      tag: "SMTP / TLS"
    },
    {
      label: "GitHub Profile",
      value: CONTACT_DATA.github,
      href: `https://${CONTACT_DATA.github}`,
      icon: Github,
      tag: "Git / SSH"
    },
    {
      label: "LinkedIn Connect",
      value: CONTACT_DATA.linkedin,
      href: `https://${CONTACT_DATA.linkedin}`,
      icon: Linkedin,
      tag: "OAUTH 2.0"
    }
  ];

  return (
    <section className="py-stack-xl relative z-10" id="contact">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="mb-8 flex items-center gap-4">
              <span className="text-label-sm font-bold text-primary tracking-[0.4em] uppercase">Connectivity / Gateway</span>
              <div className="h-px w-24 tonal-layer-4" />
            </div>
            <h2 className="text-display-lg text-on-surface mb-8 leading-[0.9] tracking-tighter">
              Let's build <br/><span className="text-primary italic">the Future.</span>
            </h2>
            <p className="text-body-lg text-on-surface-variant/70 max-w-xl leading-relaxed font-light mb-12">
              {CONTACT_DATA.description}
            </p>
            
            <div className="p-10 tonal-layer-1 rounded-[40px] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />
              <h3 className="text-label-sm font-bold text-on-surface mb-6 uppercase tracking-widest">Inquiry Status: Online</h3>
              <div className="flex items-center gap-6">
                <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
                <span className="text-body-lg text-on-surface font-mono">system_ready_for_input</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            {contactItems.map((item, index) => (
              <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="block group">
                <div className="p-8 tonal-layer-2 rounded-[32px] flex items-center justify-between transition-all duration-500 group-hover:tonal-layer-4 group-hover:translate-x-2">
                  <div className="flex items-center gap-8">
                    <div className="w-14 h-14 rounded-2xl tonal-layer-3 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      {React.createElement(item.icon, { size: 24, strokeWidth: 1.5 })}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <p className="text-label-sm font-bold text-on-surface-variant/40 uppercase tracking-widest">{item.label}</p>
                        <span className="text-[10px] font-mono text-primary/40 px-2 py-0.5 rounded-full no-line-boundary-high">{item.tag}</span>
                      </div>
                      <p className="text-headline-lg-mobile md:text-title-lg text-on-surface font-mono break-all">{item.value}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full tonal-layer-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <ArrowRight className="text-primary" size={20} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Meta */}
      <div className="mt-32 pt-12 border-t border-on-surface/5 max-w-container-max mx-auto px-margin-mobile md:px-gutter flex flex-col md:flex-row justify-between items-center gap-8 pb-12">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-bold text-xs">P</span>
          </div>
          <span className="text-label-sm font-bold text-on-surface-variant/40 uppercase tracking-[0.3em]">Architect v1.0.4</span>
        </div>
        <p className="text-[10px] font-mono text-on-surface-variant/30 uppercase tracking-widest">
          No lines used in the creation of this layout. Tonal layering only.
        </p>
      </div>
    </section>
  );
};

