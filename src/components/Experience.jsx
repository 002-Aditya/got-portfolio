import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Swords } from 'lucide-react';
import { fadeUp } from '../animations';

const experiences = [
  {
    title: "SaaS HRMS Platform",
    tech: "Spring Boot, PostgreSQL, Docker",
    responsibilities: [
      "Developed scalable backend APIs using Spring Boot to handle complex business logic.",
      "Optimized PostgreSQL queries reducing latency and improving overall application performance.",
      "Implemented Hibernate ORM to orchestrate seamless database communications.",
      "Integrated Kafka and RabbitMQ messaging systems for robust asynchronous processing."
    ]
  },
  {
    title: "Invoice Management System",
    tech: "Node.js, PostgreSQL, Docker",
    responsibilities: [
      "Built modular backend APIs ensuring a scalable and maintainable service-oriented architecture.",
      "Designed PostgreSQL schemas and complex stored functions to ensure data integrity.",
      "Managed intricate invoice lifecycle workflows from generation to fulfillment."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-charcoal relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590502593747-4229879f7625?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-5 pointer-events-none mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <Shield className="w-12 h-12 text-iron mb-2" />
          </div>
          <h2 className="font-primary text-4xl md:text-5xl text-frost tracking-wider">
            Battles Fought
          </h2>
          <p className="font-body text-gray-400 mt-4 max-w-2xl mx-auto">
            Records of active campaigns forged at <span className="text-gold font-medium">MPC Cloud Consulting Pvt. Ltd.</span> as an <span className="text-frost font-medium">Associate Software Engineer</span> (Aug 2023 – Present).
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-iron/10 border border-iron/50 p-6 md:p-10 relative group hover:bg-iron/20 transition-colors duration-500 overflow-hidden"
            >
              {/* Decorative Battle Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-crimson/5 rounded-bl-[100px] pointer-events-none transition-all duration-700 group-hover:bg-crimson/10"></div>
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
                <Swords className="w-24 h-24 text-gold transform -rotate-12" />
              </div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 pb-6 border-b border-iron/50">
                  <div>
                    <h3 className="font-primary text-2xl text-gold mb-2 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-all">
                      {exp.title}
                    </h3>
                    <p className="font-secondary text-sm md:text-base text-gray-400 font-medium">
                      Technologies: <span className="text-frost">{exp.tech}</span>
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 font-body text-gray-300 text-sm md:text-base ml-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="w-2 h-2 mt-2 bg-crimson shadow-[0_0_5px_rgba(153,27,27,1)] flex-shrink-0 rotate-45"></span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-crimson/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
