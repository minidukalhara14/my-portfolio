"use client";
import { motion } from "framer-motion";
const projects = [
  {
    title: "Writings for Developers",
    description: "A specialized platform for developers to share technical notes and resources.",
    tech: ["HTML", "CSS", "JS", "PHP"],
    link: "#", // GitHub or Live link 
  },
  {
    title: "Export Management UI",
    description: "Experience-driven design concepts inspired by the export sector.",
    tech: ["Next.js", "Tailwind"],
    link: "#",
  },
  // More projects can be added here
];

const Projects = () => {
  return (
    <section id="projects" className="pt-[110px] bg-black text-white h-screen w-full snap-start " >
      <div className="container mx-auto px-6">
        <motion.div 
  initial={{ opacity: 0, y: -20 }} 
  whileInView={{ opacity: 1, y: 0 }} 
  transition={{ duration: 0.6 }} 
  viewport={{ once: true }} 
  className="relative text-center mb-20"
>
  
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-12 bg-blue-500/10 blur-[90px] -z-10 rounded-full"></div>

  
  <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">
    <span className="bg-gradient-to-r from-white via-blue-400 to-blue-600 bg-clip-text text-transparent">
      Featured
    </span>
    <span className="ml-3 text-white">
      Projects
    </span>
  </h2>

  
  <motion.p 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    className="text-slate-500 font-bold tracking-[0.4em] uppercase text-[9px] md:text-[11px] mt-4"
  >
    Crafting Digital Experiences with Code
  </motion.p>

 
  <div className="mt-6 flex items-center justify-center gap-4">
    <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-blue-600/40"></div>
    <div className="relative flex items-center justify-center">
      <div className="w-1.5 h-1.5 bg-blue-500 rotate-45"></div>
      
      <div className="absolute w-4 h-4 border border-blue-500/30 rounded-full animate-ping"></div>
    </div>
    <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-blue-600/40"></div>
  </div>
</motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-2xl hover:border-blue-500 border border-transparent transition-all">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-slate-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs bg-blue-900/30 text-blue-400 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <a href={project.link} className="text-blue-500 hover:underline font-medium">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;