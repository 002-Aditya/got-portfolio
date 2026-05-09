import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { InputField } from '../ui/InputField';
import { Button } from '../ui/Button';
import { CONTACT_DATA } from '../../constants/portfolioData';

export const Contact = () => {
  return (
    <section className="py-stack-lg relative z-10" id="contact">
      <div className="container-max mx-auto px-margin-mobile md:px-gutter">
        <GlassCard className="max-w-3xl mx-auto text-center" delay={0.2}>
          <h2 className="text-display-lg text-on-surface mb-6">{CONTACT_DATA.title}</h2>
          <p className="text-body-lg text-on-surface-variant mb-10">
            {CONTACT_DATA.description}
          </p>
          
          <form className="text-left space-y-6 max-w-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Name" id="name" placeholder="John Doe" />
              <InputField label="Email" id="email" type="email" placeholder="john@example.com" />
            </div>
            <InputField 
              label="Message" 
              id="message" 
              component="textarea" 
              rows={4} 
              placeholder="How can I help you?" 
            />
            <Button variant="primary" className="w-full">
              Send Message
            </Button>
          </form>
          
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-6">
            <a href={`mailto:${CONTACT_DATA.email}`} className="text-body-md text-on-surface-variant hover:text-primary transition-colors">
              {CONTACT_DATA.email}
            </a>
            <a href={CONTACT_DATA.github} target="_blank" rel="noopener noreferrer" className="text-body-md text-on-surface-variant hover:text-primary transition-colors">
              GitHub
            </a>
            <a href={CONTACT_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="text-body-md text-on-surface-variant hover:text-primary transition-colors">
              LinkedIn
            </a>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};
