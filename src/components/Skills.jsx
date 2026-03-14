import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Code, GitBranch, Layers, Terminal } from 'lucide-react';

const skillsData = [
  {
    category: "Programming Languages",
    icon: <Code className="w-8 h-8 text-gold mb-4" />,
    items: ["Java", "JavaScript"]
  },
  {
    category: "Backend Frameworks",
    icon: <Server className="w-8 h-8 text-gold mb-4" />,
    items: ["Spring Boot", "Express.js (Node.js)"]
  },
  {
    category: "Databases",
    icon: <Database className="w-8 h-8 text-gold mb-4" />,
    items: ["PostgreSQL", "MySQL"]
  },
  {
    category: "ORM & Data Access",
    icon: <Layers className="w-8 h-8 text-gold mb-4" />,
    items: ["Hibernate", "Sequelize", "Prisma"]
  },
  {
    category: "Messaging Systems",
    icon: <Terminal className="w-8 h-8 text-gold mb-4" />,
    items: ["Apache Kafka", "RabbitMQ"]
  },
  {
    category: "DevOps & Version Control",
    icon: <GitBranch className="w-8 h-8 text-gold mb-4" />,
    items: ["Docker", "Git", "Maven", "Bitbucket", "GitHub"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 50 }
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-crimson/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-inter text-crimson font-medium tracking-[0.2em] uppercase text-sm mb-4">Mastery of the Craft</p>
          <h2 className="font-cinzel text-4xl md:text-5xl text-frost tracking-wider">
            Weapons of Choice
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillsData.map((skillGroup, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="group relative bg-[#121212] border border-iron p-8 rounded-sm hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)] hover:border-gold/30"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold transition-all duration-500 group-hover:w-full"></div>
              
              <div className="flex flex-col items-center text-center">
                <div className="transform group-hover:scale-110 transition-transform duration-500">
                  {skillGroup.icon}
                </div>
                <h3 className="font-cinzel text-xl text-frost mb-6 tracking-wide group-hover:text-gold transition-colors duration-300">
                  {skillGroup.category}
                </h3>
                
                <ul className="flex flex-col gap-3 w-full">
                  {skillGroup.items.map((item, idx) => (
                    <li key={idx} className="font-inter text-gray-400 text-[15px] flex items-center justify-center gap-2">
                      <span className="w-1.5 h-1.5 bg-crimson rounded-full opacity-50 block"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools Marquee (Optional extra touch) */}
        <div className="mt-20 pt-10 border-t border-iron/50 text-center">
          <p className="font-cinzel text-gray-500 tracking-widest uppercase text-sm mb-6">Arsenals & Tools</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-inter text-gray-400 text-sm md:text-base">
            {['VS Code', 'Spring Tool Suite', 'WebStorm', 'Postman', 'PgAdmin', 'Jira'].map(tool => (
              <span key={tool} className="px-4 py-2 bg-charcoal border border-iron rounded-full hover:text-frost hover:border-gray-500 transition-colors">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
