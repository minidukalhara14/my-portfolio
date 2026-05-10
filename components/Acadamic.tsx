"use client";

import { motion } from "framer-motion";
import { BarChart2, BookOpen, GraduationCap, School } from "lucide-react";
import { FaHashtag, FaCheckCircle, FaStar, FaUniversity,  } from "react-icons/fa"; 
import { useState } from "react";
import ResultModal from "./ResultModal";


const Academic = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedResult, setSelectedResult] = useState<any>(null);
  
  const results = [
 {
  "sem": "1st year 1st Semester",
  "gpa": "3.50",
  "status": "Completed",
  "subjects": [
    {
      "code": "CO 1121",
      "name": "Basic Mathematics for Computing",
      "grade": "A"
    },
    {
      "code": "CO 1122",
      "name": "Basic Computer Programming",
      "grade": "B-"
    },
    {
      "code": "CO 1112",
      "name": "Practical Work on CO 1122",
      "grade": "B-"
    },
    {
      "code": "CO 1123",
      "name": "Formal Methods for Problem Solving",
      "grade": "A-"
    },
    {
      "code": "CO 1124",
      "name": "Computer Systems & PC Applications",
      "grade": "A+"
    },
    {
      "code": "CO 1114",
      "name": "Practical Work on CO 1124",
      "grade": "A+"
    },
    {
      "code": "CO 1125",
      "name": "Statistics for Science & Technology",
      "grade": "A"
    },
    {
      "code": "CO 1115",
      "name": "Practical Work on CO 1125",
      "grade": "B-"
    },
    {
      "code": "CO 1126",
      "name": "Management Information System",
      "grade": "A+"
    },
    {
      "code": "GEP-I",
      "name": "General English Proficiency-I",
      "grade": "A+"
    }
  ]
},
  
  {
  "sem": "1st year 2nd Semester",
  "gpa": "3.02",
  "status": "Completed",
  "subjects": [
    {
      "code": "CO 1222",
      "name": "Object Oriented Programming",
      "grade": "B-"
    },
    {
      "code": "CO 1221",
      "name": "Database Management Systems",
      "grade": "B-"
    },
    {
      "code": "CO 1212",
      "name": "Practical Work on CO 1222 & CO 1221",
      "grade": "B-"
    },
    {
      "code": "CO 1223",
      "name": "Data Structures & Algorithms",
      "grade": "A"
    },
    {
      "code": "CO 1214",
      "name": "Practical Work on CO 1223",
      "grade": "B"
    },
    {
      "code": "CO 1224",
      "name": "Discrete Mathematics",
      "grade": "A"
    },
    {
      "code": "CO 1213",
      "name": "Practical Work on CO 1224",
      "grade": "C"
    },
    {
      "code": "CO 1225",
      "name": "Micro Economics",
      "grade": "A+"
    },
    {
      "code": "CO 1226",
      "name": "Social Harmony & Environmental Science",
      "grade": "D+"
    }
  ]
},
];

  const timelineData = [
    {
      title: "BSc in Computer Science",
      sub: "Eastern University, Sri Lanka",
      date: "2024 - Present",
      desc: "Studying Computer Science at Eastern University, Sri Lanka. Focused on software development, algorithms, and data structures. ",
      icon: <GraduationCap />
    },
    {
      title: "G.C.E. Advanced Level",
      sub: "Physical Science Stream (Combined Maths)",
      date: "2022/23",
      desc: "Studying Advanced Level in Physical Science Stream with a focus on Combined Maths. Currently pursuing undergraduate studies in Computer Science.",
      icon: <BookOpen />
    },
    {
      title: "G.C.E. Ordinary Level",
      sub: "Mo/Nannapurawa Maha Vidyalaya",
      date: "2019",
      desc: "Completed Ordinary Level education at Mo/Nannapurawa Maha Vidyalaya. Achieved strong results in subjects including Mathematics, Science, and English.",
      icon: <School />
    }
  ];

  return (
    
    <section id="academic" className="min-h-screen w-full snap-start flex items-center justify-center bg-[#000000] text-blue-500 py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <motion.div 
  initial={{ opacity: 0, y: -20 }} 
  whileInView={{ opacity: 1, y: 0 }} 
  transition={{ duration: 0.6 }} 
  viewport={{ once: true }} 
  className="relative text-center mb-16"
>
 
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-12 bg-blue-500/10 blur-[80px] -z-10 rounded-full"></div>

  
  <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">
    <span className="bg-gradient-to-r from-white via-blue-400 to-blue-600 bg-clip-text text-transparent">
      Academic
    </span>
    <span className="ml-3 text-white">
      Journey
    </span>
  </h2>

  
  <motion.p 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    className="text-blue-400 font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mt-4 flex items-center justify-center gap-2"
  >
    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping"></span>
    Computer Science Undergraduate @ EUSL
  </motion.p>

 
  <div className="mt-6 flex items-center justify-center gap-3">
    <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-blue-600/50"></div>
    <div className="w-1 h-1 bg-blue-500 rotate-45"></div>
    <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-blue-600/50"></div>
  </div>
</motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            
            
            <div className="space-y-6 border-l-2 border-blue-500/30 pl-6 ml-2 md:ml-4">
              {timelineData.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className="absolute -left-[41px] top-1 w-7 h-7 bg-[#0f172a] border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-500 text-xs shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10"
                  >
                    {item.icon}
                  </motion.div>
                  
                  
                  <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50 hover:border-blue-500/40 transition-all shadow-lg backdrop-blur-sm">
                    <span className="text-blue-500 font-mono text-[10px] font-black uppercase tracking-widest">
                      {item.date}
                    </span>
                    <h3 className="text-md font-bold text-white mt-1">{item.title}</h3>
                    <h4 className="text-blue-200/70 text-[11px] font-medium">{item.sub}</h4>
                    <p className="text-slate-400 text-[11px] mt-2 leading-relaxed italic md:not-italic">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

           
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700 shadow-2xl backdrop-blur-sm sticky top-24"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <BarChart2 className="text-blue-500 size-5" />
                  <h3 className="text-lg font-bold text-white">Academic Results</h3>
                </div>
                <div className="text-[10px] bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full border border-blue-500/30 flex items-center gap-1.5 leading-none">
                  <FaUniversity className="mb-[1px]" /> 
                  <span className="inline-block">EUSL</span>
                </div>
              </div>
              
              <div className="space-y-3 ">
                
                {results.map((res, i) => (
                  <div key={i} 
                    onClick={() => {
                        setSelectedResult(res); 
                        setIsModalOpen(true);   
                      }}
                    
                    className="cursor-pointer hover:bg-blue-500/10 group flex items-center justify-between p-3.5 bg-slate-700/30 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all">
                    
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-blue-600/10 rounded-lg flex items-center justify-center text-blue-500">
                        <FaHashtag size={14} />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-500 uppercase font-bold">Semester</p>
                        <h4 className="text-xs font-bold text-white">{res.sem}</h4>
                      </div>
                    </div>
                    
                    <div className="text-right flex items-center gap-6">
                      <div>
                        <div className="flex items-center gap-1 text-yellow-500 justify-end">
                          <FaStar size={8} />
                          <p className="text-[9px] font-bold uppercase text-slate-500">GPA</p>
                        </div>
                        <p className="text-xs font-black text-white">{res.gpa}</p>
                      </div>
                      
                      <div className="hidden sm:block">
                        <div className="flex items-center gap-1 text-green-500">
                          <FaCheckCircle size={10} />
                          <span className="text-[9px] font-bold uppercase">{res.status}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-3 bg-blue-600/5 rounded-lg border border-blue-500/10 text-center">
                <p className="text-[10px] text-slate-400 italic">
                    Click on a semester to view detailed results and subjects.
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <ResultModal 
          isOpen={isModalOpen} 
          data={selectedResult} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}        

    </section>
  );
};

export default Academic;