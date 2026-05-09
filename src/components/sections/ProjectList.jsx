import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { TechBadge } from '../ui/TechBadge';
import { CodeSnippet } from '../ui/CodeSnippet';
import { PROJECTS_DATA } from '../../constants/portfolioData';

const ProjectItem = ({ project, index }) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center shrink-0 px-4 md:px-12">
      <GlassCard className="w-full max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-headline-md text-primary mb-4">{project.title}</h2>
            <p className="text-body-lg text-on-surface font-semibold mb-4">
              {project.summary}
            </p>
            <p className="text-body-md text-on-surface-variant mb-8">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map(tech => (
                <TechBadge key={tech}>{tech}</TechBadge>
              ))}
            </div>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-sm font-mono text-on-surface hover:text-primary transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              View Source
            </a>
          </div>
          
          <div className="hidden lg:block relative h-full">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative z-10 shadow-2xl transition-transform duration-500 hover:scale-105 hover:-rotate-2">
              <CodeSnippet 
                language="json"
                code={`{
  "project": "${project.title}",
  "status": "production",
  "metrics": {
    "uptime": "99.99%",
    "latency": "<50ms"
  }
}`} 
              />
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export const ProjectList = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Number of items + 1 for the intro slide
  const totalSlides = PROJECTS_DATA.length + 1;
  const xPercentage = -((totalSlides - 1) / totalSlides) * 100;

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `${xPercentage}%`]);

  return (
    <section ref={targetRef} className="relative h-[400vh]" id="projects">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x, width: `${totalSlides * 100}vw` }} className="flex">
          {/* Intro Slide */}
          <div className="w-screen h-screen flex items-center justify-center shrink-0">
            <h1 className="text-[10vw] font-bold text-on-surface uppercase tracking-tighter mix-blend-difference">Selected Works</h1>
          </div>
          
          {/* Project Slides */}
          {PROJECTS_DATA.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
