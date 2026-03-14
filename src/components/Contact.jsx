import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { fadeUp } from '../animations';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1000px] opacity-10 pointer-events-none">
        <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-crimson to-transparent"></div>
        <div className="absolute inset-y-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-crimson to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-6xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-cinzel text-4xl md:text-5xl text-frost tracking-wider">
            Send a Raven
          </h2>
          <p className="font-inter text-gray-400 mt-4 max-w-lg mx-auto">
            Whether for a new alliance or a question of strategy, your message shall be delivered swiftly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Details */}
          <motion.div 
            className="flex flex-col gap-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-iron/10 p-8 border border-iron/50 hover:border-gold/30 transition-colors h-full">
              <h3 className="font-cinzel text-2xl text-gold mb-8">Raven's Destination</h3>
              
              <div className="space-y-6">
                <a href="mailto:dr.adityakumar2001@gmail.com" className="group flex items-center gap-4 text-gray-300 hover:text-frost transition-colors">
                  <div className="w-12 h-12 flex items-center justify-center bg-charcoal border border-iron rounded-sm group-hover:border-gold transition-colors">
                    <Mail className="w-5 h-5 text-crimson group-hover:text-gold transition-colors" />
                  </div>
                  <div>
                    <p className="font-cinzel text-xs text-gray-500 uppercase tracking-widest">Parchment (Email)</p>
                    <p className="font-inter text-sm md:text-base">dr.adityakumar2001@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+918447440206" className="group flex items-center gap-4 text-gray-300 hover:text-frost transition-colors">
                  <div className="w-12 h-12 flex items-center justify-center bg-charcoal border border-iron rounded-sm group-hover:border-gold transition-colors">
                    <Phone className="w-5 h-5 text-crimson group-hover:text-gold transition-colors" />
                  </div>
                  <div>
                    <p className="font-cinzel text-xs text-gray-500 uppercase tracking-widest">Whisper (Phone)</p>
                    <p className="font-inter text-sm md:text-base">+91 8447440206</p>
                  </div>
                </a>

                <div className="group flex items-center gap-4 text-gray-300 hover:text-frost transition-colors">
                  <div className="w-12 h-12 flex items-center justify-center bg-charcoal border border-iron rounded-sm group-hover:border-gold transition-colors">
                    <MapPin className="w-5 h-5 text-crimson group-hover:text-gold transition-colors" />
                  </div>
                  <div>
                    <p className="font-cinzel text-xs text-gray-500 uppercase tracking-widest">Location</p>
                    <p className="font-inter text-sm md:text-base">India / Global (Remote)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form className="bg-iron/10 p-8 border border-iron/50 relative overflow-hidden group hover:border-crimson/50 transition-colors">
               <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-crimson to-transparent opacity-50"></div>
              
              <div className="space-y-6 relative z-10">
                <div>
                  <label htmlFor="name" className="font-cinzel text-sm text-gold tracking-widest block mb-2 cursor-pointer">Lord / Lady (Name)</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-charcoal border border-iron rounded-sm px-4 py-3 text-frost font-inter focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="font-cinzel text-sm text-gold tracking-widest block mb-2 cursor-pointer">Seal (Email)</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-charcoal border border-iron rounded-sm px-4 py-3 text-frost font-inter focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                    placeholder="your.email@realm.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="font-cinzel text-sm text-gold tracking-widest block mb-2 cursor-pointer">The Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full bg-charcoal border border-iron rounded-sm px-4 py-3 text-frost font-inter focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all resize-none"
                    placeholder="Speak your mind..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full relative px-6 py-4 font-cinzel font-bold text-frost tracking-widest uppercase overflow-hidden border border-crimson/50 hover:border-crimson bg-crimson/10 transition-all duration-300 group/btn flex items-center justify-center gap-3"
                  onClick={(e) => { e.preventDefault(); alert("The raven has been dispatched!"); }}
                >
                  <div className="absolute inset-0 w-0 bg-crimson transition-all duration-300 ease-out group-hover/btn:w-full"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    Dispatch Raven <Send className="w-4 h-4" />
                  </span>
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
