import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { fadeUp } from '../animations';

const projects = [
  {
    id: 1,
    title: "SaaS HRMS Core Engine",
    description: "Architected the backend engine for a modern HRMS platform focusing on high availability, complex event processing, and robust authorization models.",
    tags: ["Spring Boot", "PostgreSQL", "Kafka", "Docker"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    links: { github: "#", live: "#" }
  },
  {
    id: 2,
    title: "Distrib. Invoice Workflows",
    description: "A highly resilient Node.js microservice architecture for capturing, storing, and rendering hundreds of invoices with complex SQL-driven validation constraints.",
    tags: ["Node.js", "Express", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000",
    links: { github: "#" }
  },
  {
    id: 3,
    title: "Authentication Gateway",
    description: "Built a centralized auth gateway utilizing secure sessions, JWTs, and OAuth2 integration handling cross-service authentication natively.",
    tags: ["Java", "Spring Security", "Redis"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
    links: { github: "#", live: "#" }
  }
];

const bloodDripsConfig = [
  [ { left: '12%', height: '45px', width: '7px' }, { left: '22%', height: '25px', width: '4px' }, { left: '82%', height: '55px', width: '6px' } ],
  [ { left: '18%', height: '60px', width: '8px' }, { left: '75%', height: '30px', width: '5px' }, { left: '88%', height: '45px', width: '6px' } ],
  [ { left: '8%', height: '35px', width: '5px' }, { left: '25%', height: '70px', width: '9px' }, { left: '80%', height: '25px', width: '4px' } ],
  [ { left: '15%', height: '25px', width: '4px' }, { left: '85%', height: '65px', width: '8px' }, { left: '92%', height: '35px', width: '5px' } ],
  [ { left: '20%', height: '50px', width: '6px' }, { left: '28%', height: '20px', width: '3px' }, { left: '78%', height: '55px', width: '7px' } ],
  [ { left: '10%', height: '65px', width: '8px' }, { left: '16%', height: '30px', width: '4px' }, { left: '88%', height: '40px', width: '6px' } ],
];

const BloodDrip = ({ left, height, width }) => (
  <svg
    className="absolute top-0 mix-blend-multiply pointer-events-none z-30"
    style={{ left, height, width, opacity: 0.85, filter: 'drop-shadow(0px 1px 2px rgba(60,0,0,0.6))' }}
    preserveAspectRatio="none"
    viewBox="0 0 10 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M 0 0 L 10 0 Q 8 20 5 40 T 6 80 Q 7 95 5 100 Q 3 95 4 80 T 5 40 Q 2 20 0 0 Z" fill="#4a0000" />
  </svg>
);

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-cinzel text-4xl md:text-5xl text-frost tracking-wider">
            Battles Won
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-crimson to-transparent mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 group/list">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={index}
              className="group/card relative bg-[#8b6b4a] bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')] bg-blend-multiply border border-[#4a2e1b] rounded-2xl h-full flex flex-col hover:-translate-y-2 transition-all duration-500 overflow-hidden shadow-[inset_0_0_80px_rgba(30,15,10,0.85),0_8px_20px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_0_100px_rgba(30,15,10,0.9),0_15px_40px_rgba(153,27,27,0.25)] hover:border-crimson group-hover/list:opacity-60 group-hover/list:brightness-50 hover:!opacity-100 hover:!brightness-100 cursor-pointer"
            >
              {bloodDripsConfig[index % bloodDripsConfig.length].map((drip, i) => (
                <BloodDrip key={i} left={drip.left} height={drip.height} width={drip.width} />
              ))}
              <div className="aspect-video overflow-hidden relative border-b border-[#4a2e1b]">
                <div className="absolute inset-0 bg-[#3a1a0a]/40 group-hover/card:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover filter sepia-[.5] group-hover/card:sepia-0 group-hover/card:scale-105 transition-all duration-700"
                />
              </div>

              <div className="p-6 flex-grow flex flex-col relative z-20">
                <h3 className="font-cinzel text-xl text-[#ebd5b3] font-bold mb-3 group-hover/card:text-crimson transition-colors">
                  {project.title}
                </h3>
                <p className="font-inter text-[#d4bca0] font-medium text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-inter font-bold text-crimson bg-[#5a0000]/20 px-2 py-1 border border-[#5a0000]/50 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-[#4a2e1b]/30">
                  {project.links.github && (
                    <a href={project.links.github} className="text-[#ebd5b3] hover:text-crimson font-bold transition-colors flex items-center gap-2 font-inter text-sm">
                      <Github className="w-4 h-4" /> Code
                    </a>
                  )}
                </div>
              </div>
              
              {/* Animated borders */}
              <div className="absolute bottom-0 left-0 h-1 bg-crimson w-0 group-hover/card:w-full transition-all duration-500 rounded-b-2xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
