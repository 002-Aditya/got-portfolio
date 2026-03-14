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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={index}
              className="group relative bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] bg-[#ebd5b3] border-2 border-yellow-900 rounded-2xl h-full flex flex-col hover:-translate-y-2 transition-transform duration-500 overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_30px_rgba(250,204,21,0.3)] hover:border-yellow-700 before:content-[''] before:absolute before:inset-0 before:bg-yellow-900/10 before:pointer-events-none before:rounded-2xl"
            >
              <div className="aspect-video overflow-hidden relative border-b-2 border-yellow-900">
                <div className="absolute inset-0 bg-yellow-900/40 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover filter sepia-[.5] group-hover:sepia-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <div className="p-6 flex-grow flex flex-col relative z-20">
                <h3 className="font-cinzel text-xl text-yellow-950 font-bold mb-3 group-hover:text-yellow-700 transition-colors">
                  {project.title}
                </h3>
                <p className="font-inter text-yellow-900/80 font-medium text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-inter font-bold text-red-900 bg-red-900/10 px-2 py-1 border border-red-900/30 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-yellow-900/30">
                  {project.links.github && (
                    <a href={project.links.github} className="text-yellow-950 hover:text-yellow-700 font-bold transition-colors flex items-center gap-2 font-inter text-sm">
                      <Github className="w-4 h-4" /> Code
                    </a>
                  )}
                </div>
              </div>
              
              {/* Animated borders */}
              <div className="absolute bottom-0 left-0 h-1 bg-yellow-700 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
