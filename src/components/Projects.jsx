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
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4bcafe4?auto=format&fit=crop&q=80&w=1000",
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
              className="group relative bg-[#121212] border border-iron h-full flex flex-col hover:-translate-y-2 transition-transform duration-500 overflow-hidden hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:border-gold/30"
            >
              <div className="aspect-video overflow-hidden relative border-b border-iron">
                <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <div className="p-6 flex-grow flex flex-col relative z-20">
                <h3 className="font-cinzel text-xl text-gold mb-3 group-hover:text-frost transition-colors">
                  {project.title}
                </h3>
                <p className="font-inter text-gray-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-inter font-medium text-crimson bg-crimson/10 px-2 py-1 border border-crimson/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-iron">
                  {project.links.github && (
                    <a href={project.links.github} className="text-gray-400 hover:text-gold transition-colors flex items-center gap-2 font-inter text-sm">
                      <Github className="w-4 h-4" /> Code
                    </a>
                  )}
                  {/* {project.links.live && (
                    <a href={project.links.live} className="text-gray-400 hover:text-gold transition-colors flex items-center gap-2 font-inter text-sm ml-auto">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )} */}
                </div>
              </div>
              
              {/* Animated borders */}
              <div className="absolute bottom-0 left-0 h-1 bg-gold w-0 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
