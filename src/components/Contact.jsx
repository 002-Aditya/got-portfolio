import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Bird, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { fadeUp } from '../animations';

import crowVideo from '../assets/videos/AnimatedCrow.gif';

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [showCrow, setShowCrow] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMsg("");

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_id', 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_id', 
      formRef.current, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key'
    )
    .then((result) => {
        setIsSending(false);
        setIsSent(true);
        setShowCrow(true);
        formRef.current.reset();
        
        // Hide crow animation after ~4.5 seconds
        setTimeout(() => setShowCrow(false), 4500);
        setTimeout(() => setIsSent(false), 5000);
    }, (error) => {
        setIsSending(false);
        console.error(error.text);
        setErrorMsg("The raven was intercepted! Dark winds prevent dispatch. Please try again.");
        setTimeout(() => setErrorMsg(""), 6000);
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden flex items-center justify-center min-h-screen">
      
      {/* Immersive Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 z-0"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop')` }}
      ></div>
      
      {/* Base dark gradient to ensure the card pops */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/90 to-charcoal z-0"></div>

      {/* Crow Video Overlay */}
      {showCrow && (
        <motion.div
           initial={{ x: "-50vw", y: "30vh", scale: 0.8 }}
           animate={{ x: "120vw", y: "-20vh", scale: 1.2 }}
           transition={{ duration: 4, ease: "easeInOut" }}
           className="fixed inset-0 z-[200] pointer-events-none flex items-center justify-start"
        >
          <video 
            autoPlay 
            loop={false}
            muted 
            playsInline
            className="w-72 h-72 md:w-96 md:h-96 object-contain opacity-90 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <source src={crowVideo} type="video/webm" />
          </video>
        </motion.div>
      )}

      <div className="container mx-auto px-4 relative z-10 flex justify-center">
        
        <motion.div 
          className="w-full max-w-2xl bg-[#2a2421] p-8 md:p-12 shadow-2xl border border-[#3d342f] relative"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Subtle noise texture over the card to give it that parchment/matte feel */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')` }}
          ></div>

          {/* Header Section */}
          <div className="text-center mb-10 relative z-10">
            <div className="flex justify-center mb-4">
              <Mail className="w-8 h-8 text-[#d4af37]" />
            </div>
            <h2 className="font-cinzel text-3xl md:text-4xl text-frost tracking-wider mb-2">
              Send a Raven
            </h2>
            <p className="font-inter text-gray-400 italic text-sm md:text-base">
              Whether for a new alliance or a question of strategy, your message shall be delivered swiftly.
            </p>
          </div>

          {/* Form */}
          <form ref={formRef} onSubmit={sendEmail} className="relative z-10">
            
            {/* Two Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="font-inter text-xs text-[#b89b4f] font-bold tracking-[0.15em] uppercase block mb-2 cursor-pointer">
                  LORD / LADY (NAME)
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="user_name"
                  className="w-full bg-[#1e1a18] border border-[#1e1a18] px-4 py-3 text-gray-300 font-inter text-sm focus:outline-none focus:border-[#d4af37]/50 focus:bg-[#151211] transition-colors placeholder-gray-600"
                  placeholder="Your Name"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="font-inter text-xs text-[#b89b4f] font-bold tracking-[0.15em] uppercase block mb-2 cursor-pointer">
                  SEAL (EMAIL)
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="user_email"
                  className="w-full bg-[#1e1a18] border border-[#1e1a18] px-4 py-3 text-gray-300 font-inter text-sm focus:outline-none focus:border-[#d4af37]/50 focus:bg-[#151211] transition-colors placeholder-gray-600"
                  placeholder="your.email@realm.com"
                  required
                />
              </div>
            </div>

            {/* Urgency of Dispatch Field */}
            <div className="mb-6">
              <label htmlFor="urgency" className="font-inter text-xs text-[#b89b4f] font-bold tracking-[0.15em] uppercase block mb-2 cursor-pointer">
                URGENCY OF DISPATCH
              </label>
              <select 
                id="urgency" 
                name="urgency_level"
                className="w-full bg-[#1e1a18] border border-[#1e1a18] px-4 py-3 text-gray-300 font-inter text-sm focus:outline-none focus:border-[#d4af37]/50 focus:bg-[#151211] transition-colors cursor-pointer"
              >
                <option value="Standard Dispatch">Standard Dispatch</option>
                <option value="Swift Wings (Urgent)">Swift Wings (Urgent)</option>
                <option value="Dark Wings (Critical)">Dark Wings, Dark Words (Critical)</option>
              </select>
            </div>

            {/* Message Field */}
            <div className="mb-8">
              <label htmlFor="message" className="font-inter text-xs text-[#b89b4f] font-bold tracking-[0.15em] uppercase block mb-2 cursor-pointer">
                THE MESSAGE
              </label>
              <textarea 
                id="message" 
                name="message"
                rows="5" 
                className="w-full bg-[#1e1a18] border border-[#1e1a18] px-4 py-3 text-gray-300 font-inter text-sm focus:outline-none focus:border-[#d4af37]/50 focus:bg-[#151211] transition-colors placeholder-gray-600 resize-y"
                placeholder="Speak your mind..."
                required
              ></textarea>
            </div>

            {/* Error Message Display */}
            {errorMsg && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mb-6 text-center"
              >
                <p className="font-inter text-red-400 text-sm">
                  {errorMsg}
                </p>
              </motion.div>
            )}

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isSending || isSent}
              className={`w-full py-4 font-inter text-sm tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                isSent 
                  ? 'bg-[#1b4332] text-green-200 cursor-default' 
                  : 'bg-[#8b2621] hover:bg-[#a62d27] text-gray-200 shadow-[0_4px_15px_rgba(139,38,33,0.3)] hover:shadow-[0_4px_20px_rgba(139,38,33,0.5)]'
              }`}
            >
              {isSending ? 'ASSIGNING RAVEN...' : isSent ? 'RAVEN DEPARTED' : 'DISPATCH RAVEN'}
              {isSent && <Bird className="w-4 h-4 ml-2" />}
            </button>
            
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;