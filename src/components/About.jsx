import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../animations';

const About = () => {
  return (
    <section id="about" className="py-24 bg-charcoal relative">
      {/* Ornamental top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-iron to-transparent"></div>
      
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="font-cinzel text-4xl md:text-5xl text-frost tracking-wider flex items-center justify-center gap-4">
            <span className="w-12 h-[2px] bg-crimson"></span>
            The Origin Story
            <span className="w-12 h-[2px] bg-crimson"></span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Left Column - Portrait/Visual */}
          <motion.div 
            className="md:col-span-4 lg:col-span-5 relative group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {/* Cinematic frame */}
            <div className="relative p-2 border border-iron bg-iron/20 transform rotate-1 transition-transform group-hover:rotate-0 duration-500">
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-gold"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-gold"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-gold"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-gold"></div>
              
              <div className="aspect-[3/4] overflow-hidden bg-charcoal relative filter grayscale hover:grayscale-0 transition-all duration-700">
                {/* Visual placeholder - Using an abstract iron/stone texture */}
                <img 
                  src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" 
                  alt="Aditya Kumar - Portrait" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Narrative */}
          <motion.div 
            className="md:col-span-8 lg:col-span-7 flex flex-col gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="prose prose-invert prose-lg">
              <p className="font-inter text-gray-300 leading-relaxed text-lg first-letter:text-6xl first-letter:font-cinzel first-letter:text-gold first-letter:mr-3 first-letter:float-left">
                From the halls of Maharaja Surajmal Institute of Technology to building scalable 
                backend systems in production environments, Aditya Kumar has forged his skills 
                in the fires of modern backend engineering.
              </p>
              <p className="font-inter text-gray-400 leading-relaxed mt-4">
                With a Bachelor’s in Engineering and over 2+ years of battle-tested experience, 
                he specializes in crafting robust, highly available architectures. Drawing strength 
                from robust frameworks like Spring Boot and Node.js, and scaling data across expansive 
                PostgreSQL strongholds, every line of code represents a calculated maneuver.
              </p>
            </div>

            {/* Education Scroll block */}
            <div className="mt-6 border-l-2 border-crimson pl-6 py-2 relative">
              <div className="absolute w-3 h-3 bg-crimson rounded-full -left-[7px] top-4 shadow-[0_0_10px_rgba(153,27,27,0.8)]"></div>
              
              <h3 className="font-cinzel text-xl text-gold mb-4 tracking-widest">Crucible of Learning</h3>
              
              <div className="flex flex-col gap-2">
                <h4 className="font-inter font-bold text-frost text-lg">B.Tech in Electronics and Communication Engineering</h4>
                <p className="font-inter text-gray-400">Maharaja Surajmal Institute of Technology</p>
                <div className="flex flex-wrap gap-4 mt-2 font-inter text-sm md:text-base">
                  <span className="bg-iron px-3 py-1 rounded text-gray-300 border border-gray-700">CGPA: <span className="text-gold">8.9</span></span>
                  <span className="bg-iron px-3 py-1 rounded text-gray-300 border border-gray-700">Graduated: <span className="text-gold">June 2023</span></span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
