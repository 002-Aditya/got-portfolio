import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { ABOUT_DATA } from '../../constants/portfolioData';

export const About = () => {
  return (
    <section className="py-stack-lg relative z-10" id="about">
      <div className="container-max mx-auto px-margin-mobile md:px-gutter">
        <GlassCard delay={0.2} className="max-w-4xl mx-auto">
          <h2 className="text-headline-md text-on-surface mb-6">{ABOUT_DATA.title}</h2>
          <p className="text-body-lg text-on-surface-variant">
            {ABOUT_DATA.content}
          </p>
        </GlassCard>
      </div>
    </section>
  );
};
