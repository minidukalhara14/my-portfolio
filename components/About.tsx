"use client";

import { motion } from "framer-motion";
import { FaCode, FaBriefcase, FaDownload, FaUserAlt, FaGraduationCap, FaCss3Alt } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { SiHtml5, SiHyperskill, SiJavascript, SiNextdotjs, SiPhp, SiReact, SiThreedotjs } from "react-icons/si";

const About = () => {
  const handleDownloadCV = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'CV.pdf';
    link.click();
  };

  return (
    <section id="about" className="relative min-h-screen w-full snap-start flex items-center justify-center bg-[#050810] text-white px-6 scroll-mt-20 pt-0">
      {/* Background Glow - Balanced with Indigo & Blue */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full -z-10"></div>
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-indigo-500/5 blur-[100px] rounded-full -z-10"></div>

      <div className="container mx-auto max-w-6xl">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative text-center mb-16">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-12 bg-blue-600/25 blur-[60px] -z-10 rounded-full"></div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">
              <span className="bg-gradient-to-r from-white via-blue-300 to-blue-500 bg-clip-text text-transparent">
                About
              </span>
              <span className="ml-3 text-white">
                Me
              </span>
            </h2>

            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-blue-600 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
              <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-blue-600 rounded-full"></div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Column - Story & Skills */}
          <div className="space-y-6">
            <motion.div
              whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.3)" }}
              className="bg-slate-900/20 p-8 rounded-[2rem] border border-slate-800/40 backdrop-blur-md transition-all group"
            >
              <h3 className="text-lg font-black mb-4 flex items-center gap-3 text-white uppercase tracking-tighter">
                <IoPersonCircleOutline size={20} className="text-blue-500 group-hover:scale-110 transition-transform"/> My Story
              </h3>
              <p className="text-slate-400 leading-relaxed text-[15px] font-medium">
                I am a dedicated Web Developer and a student currently enrolled in higher education.
                With professional experience in the export sector at <span className="text-blue-400 font-bold">Lakmee Export Lanka</span>,
                I bring a disciplined approach to building modern digital solutions.
              </p>
            </motion.div>

            <div className="bg-slate-900/20 p-8 rounded-[2rem] border border-slate-800/40 backdrop-blur-md">
              <h3 className="text-lg font-black mb-6 flex items-center gap-3 text-white uppercase tracking-tighter">
                <SiHyperskill size={20} className="text-blue-500" /> Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "HTML", icon: <SiHtml5 className="text-[#E34F26]" /> },
                  { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
                  { name: "JS", icon: <SiJavascript className="text-[#F7DF1E]" /> },
                  { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
                  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
                  { name: "PHP", icon: <SiPhp className="text-[#777BB4]" /> },
                  { name: "AJAX", icon: <SiThreedotjs className="text-blue-400" /> },
                ].map((skill) => (
                  <motion.span 
                    key={skill.name} 
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "rgba(30, 41, 59, 0.8)",
                      borderColor: "rgba(59, 130, 246, 0.4)",
                      color: "#fff"
                    }}
                    className="px-4 py-2 bg-slate-900/40 text-slate-400 rounded-xl border border-slate-800/60 text-[11px] font-black transition-all cursor-default flex items-center gap-2 backdrop-blur-sm uppercase tracking-wider"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Experience & Education */}
          <div className="space-y-6">
            <div className="bg-slate-900/20 p-8 rounded-[2rem] border border-slate-800/40 backdrop-blur-md h-full">
              <h3 className="text-lg font-black mb-8 flex items-center gap-3 text-white uppercase tracking-tighter">
                <FaBriefcase size={20} className="text-blue-500"/> Career & Education
              </h3>
              
              <div className="space-y-10 border-l border-slate-800/60 ml-2 pl-8 relative">
                {/* Work Item */}
                <div className="relative group">
                  <div className="absolute -left-[41px] top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-[#050810] ring-4 ring-blue-600/5 group-hover:scale-125 transition-transform shadow-[0_0_15px_rgba(37,99,235,0.4)]"></div>
                  <h4 className="font-black text-slate-100 tracking-tight">Lakmee Export Lanka Pvt Ltd</h4>
                  <p className="text-blue-500 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Oct 2025 - Present</p>
                  <p className="text-slate-500 text-[13px] mt-2 leading-relaxed font-medium italic">Export Sector Professional</p>
                </div>

                {/* Education Item */}
                <div className="relative group">
                  <div className="absolute -left-[41px] top-1 w-4 h-4 bg-slate-700 rounded-full border-4 border-[#050810] group-hover:bg-blue-900 transition-colors"></div>
                  <h4 className="font-black text-slate-100 tracking-tight flex items-center gap-2">
                    Higher Education Studies <FaGraduationCap className="text-slate-600" />
                  </h4>
                  <p className="text-blue-400/80 text-[10px] font-black uppercase tracking-[0.2em] mt-1">2023 - Present</p>
                  <p className="text-blue-400 text-[9px] mt-3 inline-block px-3 py-1 bg-blue-600/5 rounded-full border border-blue-500/20 font-black tracking-widest uppercase shadow-sm">
                    MAHAPOLA RECIPIENT (22/23 BATCH)
                  </p>
                </div>
              </div>
            </div>

            {/* Download Button - Dynamic Shadow */}
            <motion.button
              onClick={handleDownloadCV}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px -15px rgba(37, 99, 235, 0.4)" 
              }}
              whileTap={{ scale: 0.98 }}
              className="group w-full md:w-auto px-12 py-5 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-2xl font-black text-xs tracking-[0.2em] flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-900/20"
            >
              <FaDownload className="group-hover:translate-y-1 transition-transform" />
              DOWNLOAD RESUME
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;