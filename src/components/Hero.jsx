import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';
import resumePdf from '../assets/Resume_AdityaKumar.pdf';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative flex items-center justify-center min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url('https://cdn.mos.cms.futurecdn.net/n9YvaPGNcGKKCBfP2jfVQc.jpg')` 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal z-0"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-20">
        
        {/* Main Titles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl text-frost mb-2 drop-shadow-lg">
            Aditya Kumar,
          </h1>
          <h2 className="font-cinzel text-4xl md:text-6xl lg:text-7xl text-gold italic mb-6 drop-shadow-md">
            Warden of the Backend
          </h2>
          <p className="font-inter text-gray-300 max-w-2xl mx-auto text-lg md:text-xl mb-10 drop-shadow-md font-bold">
            Architect of Scalable APIs, Distributed Systems, and Powerful Backend Engines forged in the fires of code.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <a href="#about" className="bg-crimson text-frost px-8 py-3.5 font-cinzel font-bold tracking-widest hover:bg-red-800 transition-colors duration-300 shadow-[0_0_15px_rgba(153,27,27,0.5)] hover:shadow-[0_0_25px_rgba(153,27,27,0.8)] text-center">
            ENTER THE REALM
          </a>
          <a href="#contact" className="bg-[#0b0b0b]/60 backdrop-blur-sm text-gold px-8 py-3.5 font-cinzel font-bold tracking-widest border border-gold hover:bg-gold/10 transition-colors duration-300 text-center">
            SEND A RAVEN
          </a>
        </motion.div>

        {/* Bottom Socials/Resume Pill (Matches the floating pill in Image 1) */}
        <motion.div 
          className="flex items-center gap-6 bg-[#121212]/80 backdrop-blur-md border border-iron px-8 py-4 rounded-full shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <a href="#" className="text-gray-400 hover:text-frost transition-colors" title="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-frost transition-colors" title="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-frost transition-colors" title="Contact">
            <Mail className="w-5 h-5" />
          </a>
          
          <div className="w-[1px] h-6 bg-iron mx-2"></div>
          
          <a 
            href={resumePdf} 
            download="AdityaKumar_Resume.pdf"
            className="bg-gold text-charcoal font-inter font-bold text-sm px-5 py-2 rounded hover:bg-yellow-500 transition-colors flex items-center gap-2"
          >
            <Terminal className="w-4 h-4" />
            RESUME
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;