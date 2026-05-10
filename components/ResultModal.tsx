"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaBook, FaGraduationCap } from "react-icons/fa";

interface ResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
}

const ResultModal = ({ isOpen, onClose, data }: ResultModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
      />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative bg-[#0a0f1a] border border-slate-800 w-full max-w-[550px] rounded-[24px] shadow-2xl overflow-hidden"
      >
        
        <div className="p-5 border-b border-slate-800/50 flex justify-between items-center bg-[#0d1321]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/10">
              <FaGraduationCap size={18} />
            </div>
            <div>
              <h2 className="text-lg font-black tracking-tighter uppercase italic text-white">
                Result <span className="text-blue-500">Details</span>
              </h2>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-800 hover:text-white transition-all border border-slate-800"
          >
            <FaTimes size={14} />
          </button>
        </div>

        <div className="p-5">
          
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
              
              <p className="text-white font-bold text-xs flex items-center gap-2">
                <FaBook className="text-blue-500" size={10}/> {data?.sem}
              </p>
            </div>
            <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
              <span className="text-[9px] text-blue-500 uppercase font-black tracking-widest">GPA</span>
              <p className="text-white font-black text-sm">{data?.gpa}</p>
            </div>
          </div>

          
          <div className="overflow-hidden border border-slate-800 rounded-xl bg-slate-950">
            <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
              <table className="w-full text-left border-collapse">
                
                <thead className="bg-[#161d2f] text-[9px] font-black text-slate-400 uppercase tracking-[0.15em] sticky top-0 z-20 border-b border-slate-800">
                  <tr>
                    <th className="px-4 py-3">Code</th>
                    <th className="px-4 py-3">Subject</th>
                    <th className="px-4 py-3 text-center">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-900 text-xs">
                  {data?.subjects?.map((sub: any, index: number) => (
                    <motion.tr 
                      key={index} 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.03 }}
                      className="hover:bg-slate-900/50 transition-colors group"
                    >
                      <td className="px-4 py-3 font-mono text-[10px] text-slate-400 font-bold group-hover:text-blue-400">{sub.code}</td>
                      <td className="px-4 py-3 text-slate-300 font-medium group-hover:text-white transition-colors">{sub.name}</td>
                      <td className="px-4 py-3 text-center">
                        <span className="bg-slate-900 text-slate-300 px-2 py-0.5 rounded-md font-black text-[10px] border border-slate-800 group-hover:border-blue-500/30 group-hover:text-blue-400 transition-all">
                          {sub.grade}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ResultModal;