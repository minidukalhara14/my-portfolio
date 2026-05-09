"use client";

import { useState } from "react"; 
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, GraduationCap, Briefcase, Mail, Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const navLinks = [
    { name: "Home", href: "#hero", icon: <Home size={16} /> },
    { name: "About", href: "#about", icon: <User size={16} /> },
    { name: "Academic", href: "#academic", icon: <GraduationCap size={16} /> },
    { name: "Projects", href: "#projects", icon: <Briefcase size={16} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={16} /> },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full h-[80px] fixed top-0 left-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/5"
    >
      <nav className="w-full h-full max-w-7xl mx-auto flex justify-between items-center px-6 text-white">
        
        {/* Logo */}
        <motion.h1 whileHover={{ scale: 1.05 }} className="text-2xl font-bold tracking-tight cursor-pointer">
          <span className="font-bold text-slate-400">KALHARA</span> 
        </motion.h1>

        
        <div className="hidden md:flex gap-1"> 
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link href={link.href} className="group relative px-4 py-2 rounded-full flex items-center gap-2">
                <span className="text-slate-400 group-hover:text-blue-400 transition-colors duration-300">
                  {link.icon}
                </span>
                <span className="text-sm font-medium text-slate-100 group-hover:text-white transition-colors">
                  {link.name}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </Link>
            </motion.div>
          ))}
        </div>

        
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white p-2 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-lg border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)} // Link එක click කළාම menu එක වහන්න
                  className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/5 transition-all text-slate-300 hover:text-blue-400"
                >
                  {link.icon}
                  <span className="text-base font-semibold">{link.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;