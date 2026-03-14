import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="bg-charcoal">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Timeline />
      <Contact />
    </div>
  );
};

export default Home;
