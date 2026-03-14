import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Code, GitBranch, Layers, Terminal } from 'lucide-react';

const skillsData = [
  {
    category: "Programming Languages",
    icon: <Code className="w-8 h-8 mb-4" />,
    items: ["Java", "JavaScript"]
  },
  {
    category: "Backend Frameworks",
    icon: <Server className="w-8 h-8 mb-4" />,
    items: ["Spring Boot", "Express.js (Node.js)"]
  },
  {
    category: "Databases",
    icon: <Database className="w-8 h-8 mb-4" />,
    items: ["PostgreSQL", "MySQL"]
  },
  {
    category: "ORM & Data Access",
    icon: <Layers className="w-8 h-8 mb-4" />,
    items: ["Hibernate", "Sequelize", "Prisma"]
  },
  {
    category: "Messaging Systems",
    icon: <Terminal className="w-8 h-8 mb-4" />,
    items: ["Apache Kafka", "RabbitMQ"]
  },
  {
    category: "DevOps & Version Control",
    icon: <GitBranch className="w-8 h-8 mb-4" />,
    items: ["Docker", "Git", "Maven", "Bitbucket", "GitHub"]
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
    className="absolute top-0 mix-blend-multiply pointer-events-none z-0"
    style={{ left, height, width, opacity: 0.85, filter: 'drop-shadow(0px 1px 2px rgba(60,0,0,0.6))' }}
    preserveAspectRatio="none"
    viewBox="0 0 10 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M 0 0 L 10 0 Q 8 20 5 40 T 6 80 Q 7 95 5 100 Q 3 95 4 80 T 5 40 Q 2 20 0 0 Z" fill="#4a0000" />
  </svg>
);

const tools = [
  { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-plain.svg' },
  { name: 'Spring Tool Suite', logo: 'https://cdn.simpleicons.org/spring' },
  { name: 'WebStorm', logo: 'https://cdn.simpleicons.org/webstorm' },
  { name: 'Postman', logo: 'https://cdn.simpleicons.org/postman' },
  { name: 'PgAdmin', logo: 'https://cdn.simpleicons.org/postgresql' },
  { name: 'Jira', logo: 'https://cdn.simpleicons.org/jira' },
  { name: 'Datagrip', logo: 'https://cdn.simpleicons.org/datagrip' },
  { name: 'ApiDog', logo: 'https://cdn.jsdelivr.net/gh/callback-io/allogo@main/public/logos/apidog/icon.svg' },
  { name: 'Antigravity', logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%233e2723" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
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
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-crimson to-transparent mx-auto mt-6"></div>
        </motion.div>

        {/* Removed the '/cards' specific naming and just used standard 'group' */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 group"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillsData.map((skillGroup, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.2 } }}
              className="relative bg-[#8b6b4a] border border-[#4a2e1b] p-8 rounded-xl transition-all duration-500 shadow-[inset_0_0_80px_rgba(30,15,10,0.85),0_8px_20px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_0_100px_rgba(30,15,10,0.9),0_15px_40px_rgba(153,27,27,0.25)] hover:border-crimson overflow-hidden group-hover:opacity-60 group-hover:brightness-50 hover:!opacity-100 hover:!brightness-100 cursor-pointer"
              style={{
                backgroundImage: `url('https://www.transparenttextures.com/patterns/crumpled-paper.png')`,
                backgroundBlendMode: 'multiply'
              }}
            >
              {bloodDripsConfig[index % bloodDripsConfig.length].map((drip, i) => (
                <BloodDrip key={i} left={drip.left} height={drip.height} width={drip.width} />
              ))}
              
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="transform transition-transform duration-500 drop-shadow-md">
                  {React.cloneElement(skillGroup.icon, { className: "w-8 h-8 text-[#5a0000] mb-4" })}
                </div>
                <h3 className="font-cinzel text-xl text-[#ebd5b3] font-bold mb-6 tracking-wide transition-colors duration-300">
                  {skillGroup.category}
                </h3>
                
                <ul className="flex flex-col gap-3 w-full">
                  {skillGroup.items.map((item, idx) => (
                    <li key={idx} className="font-inter font-bold text-[#d4bca0] text-[15px] flex items-center justify-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#5a0000] rounded-full block shadow-sm"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools Marquee Carousel */}
        <div className="mt-24 pt-10 border-t border-iron/50 overflow-hidden relative w-full flex flex-col items-center">
          <p className="font-cinzel text-gray-500 tracking-widest uppercase text-sm mb-10 text-center">
            Arsenals & Tools
          </p>

          <div className="flex w-full group overflow-hidden">  
            <div className="flex shrink-0 w-max animate-marquee gap-8 md:gap-12 items-center group-hover:[animation-play-state:paused] pr-8 md:pr-12 pb-4">
              {tools.map((tool, idx) => (
                <div key={`track1-${idx}`} className="flex items-center gap-3 px-6 py-3 bg-[#8b6b4a] bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')] bg-blend-multiply border border-[#4a2e1b] rounded-full shadow-[inset_0_0_80px_rgba(30,15,10,0.85),0_8px_20px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_0_100px_rgba(30,15,10,0.9),0_15px_40px_rgba(153,27,27,0.25)] hover:border-crimson hover:-translate-y-1 transition-all duration-500 cursor-pointer flex-shrink-0">
                  <div className="w-6 h-6 bg-[#ebd5b3]" style={{ WebkitMaskImage: `url('${tool.logo}')`, maskImage: `url('${tool.logo}')`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center' }} title={tool.name} />
                  <span className="font-inter font-bold text-[#ebd5b3] text-sm md:text-base">{tool.name}</span>
                </div>
              ))}
            </div>

            <div className="flex shrink-0 w-max animate-marquee gap-8 md:gap-12 items-center group-hover:[animation-play-state:paused] pr-8 md:pr-12 pb-4" aria-hidden="true">
              {tools.map((tool, idx) => (
                <div key={`track2-${idx}`} className="flex items-center gap-3 px-6 py-3 bg-[#8b6b4a] bg-[url('https://www.transparenttextures.com/patterns/crumpled-paper.png')] bg-blend-multiply border border-[#4a2e1b] rounded-full shadow-[inset_0_0_80px_rgba(30,15,10,0.85),0_8px_20px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_0_100px_rgba(30,15,10,0.9),0_15px_40px_rgba(153,27,27,0.25)] hover:border-crimson hover:-translate-y-1 transition-all duration-500 cursor-pointer flex-shrink-0">
                  <div className="w-6 h-6 bg-[#ebd5b3]" style={{ WebkitMaskImage: `url('${tool.logo}')`, maskImage: `url('${tool.logo}')`, WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center' }} title={tool.name} />
                  <span className="font-inter font-bold text-[#ebd5b3] text-sm md:text-base">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;