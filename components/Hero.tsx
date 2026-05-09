"use client"; 

import Image from "next/image";
import { motion } from "framer-motion"; 
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen w-full snap-start flex items-center justify-center bg-[#000000] overflow-hidden" >
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center justify-between">
        
       
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
         <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative"
>
  
  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-20 bg-blue-600/10 blur-[100px] -z-10 rounded-full"></div>

  <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
    <span className="text-slate-400 font-bold text-2xl md:text-3xl block mb-2">Hi, I'm</span>
    <span className="bg-gradient-to-r from-white via-blue-400 to-blue-600 bg-clip-text text-transparent italic">
      Minidu Kalhara
    </span>
  </h1>

  
  <div className="mt-2 h-[2px] w-24 bg-gradient-to-r from-blue-600 to-transparent rounded-full"></div>
</motion.div>
          <p className="mt-4 text-lg text-slate-400 max-w-lg">
            I'm a Web Developer and a Student passionate about building creative 
            digital solutions. I specialize in HTML, CSS, JavaScript, and PHP.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="#projects">
              <motion.button 
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" 
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-3 bg-gradient-to-r from-white via-blue-400 to-blue-600 text-black rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 tracking-wider shadow-lg"
                  >
                    <span className="group-hover:scale-105 transition-transform">VIEW MY WORK</span>
                    <svg 
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.button>
            </Link>
            <Link href="#contact">
               <motion.button    
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    borderColor: "rgba(59, 130, 246, 0.5)" // Hover එකේදී Border එක නිල් පාට වෙනවා
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-3 border border-slate-800 text-slate-300 hover:text-white rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 tracking-wider backdrop-blur-sm"
                >
                  CONTACT ME
                  <svg 
                    className="w-4 h-4 group-hover:rotate-12 transition-transform text-slate-400 group-hover:text-blue-500" 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </motion.button>
            </Link>
          </div>
        </motion.div>

        
        <motion.div 
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative"
>
 
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    className="absolute w-[270px] h-[270px] md:w-[340px] md:h-[340px] rounded-full z-0"
    style={{
      background: "conic-gradient(from 0deg, transparent 70%, #3b82f6 100%)", // නිල් පාට pulse එක විතරක් පේන්න
    }}
  />

 
  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#0f172a] p-[3px] z-10"> 
    
    <div className="w-full h-full rounded-full overflow-hidden relative border border-blue-500/20">
      <Image 
        src="/heroimg.jpg"
        alt="My Profile Picture"
        fill 
        className="object-cover"
        priority 
      />
    </div>
  </div>

  
  <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-600/10 blur-[60px] -z-10"></div>
</motion.div>
      </div>
    </section>
  );
};

export default Hero;