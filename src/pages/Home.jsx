import React from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { ProjectList } from '../components/sections/ProjectList';
import { PersonalWorks } from '../components/sections/PersonalWorks';
import { Experience } from '../components/sections/Experience';
import { Skills } from '../components/sections/Skills';
import { Contact } from '../components/sections/Contact';
import { PageTransition } from '../components/ui/PageTransition';

export const Home = () => {
  return (
    <PageTransition>
      <div className="flex flex-col">
        <Hero />
        <About />
        <ProjectList />
        <Experience />
        <PersonalWorks />
        <Skills />
        <Contact />
      </div>
    </PageTransition>
  );
};
