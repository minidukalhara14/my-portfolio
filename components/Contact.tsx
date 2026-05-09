"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin,  FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);

    emailjs.sendForm(
      'service_lvrnwuq',   
      'template_y0fwv4d',  
      formRef.current, 
      'WKqp57IvKO58jvgx5'    
    )
    .then(() => {
      setLoading(false);
      alert("Message sent successfully!");
      formRef.current?.reset();
    })
    .catch((error) => {
      setLoading(false);
      console.error(error);
      alert("Something went wrong!");
    });
  };

  return (
    <section id="contact" className="min-h-screen w-full snap-start flex items-center justify-center bg-[#000000] text-white pt-[90px]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative text-center mb-16"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-10 bg-blue-600/10 blur-[70px] -z-10 rounded-full"></div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">
                <span className="bg-gradient-to-r from-white via-blue-400 to-blue-600 bg-clip-text text-transparent">Get In</span>
                <span className="ml-3 text-white">Touch</span>
              </h2>
              <motion.p className="text-slate-500 font-bold tracking-[0.3em] uppercase text-[9px] md:text-[11px] mt-4">
                Let's Build Something Great Together
              </motion.p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="h-[1px] w-14 bg-gradient-to-r from-transparent to-blue-600/40"></div>
                <div className="relative">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <div className="absolute inset-0 w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping"></div>
                </div>
                <div className="h-[1px] w-14 bg-gradient-to-l from-transparent to-blue-600/40"></div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            
            
            <motion.div
              className="md:order-2 order-first bg-slate-900/30 p-6 rounded-[2rem] border border-slate-800 backdrop-blur-sm relative"
            >
              <form ref={formRef} onSubmit={sendEmail} className="space-y-3">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] uppercase tracking-widest text-slate-500 font-bold ml-2">Full Name</label>
                    <input
                      type="text"
                      name="from_name"
                      required
                      placeholder="Your Name"
                      className="w-full px-5 py-2.5 bg-black/50 rounded-2xl border border-slate-800 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 outline-none transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] uppercase tracking-widest text-slate-500 font-bold ml-2">Email Address</label>
                    <input
                      type="email"
                      name="from_email"
                      required
                      placeholder="Your Email"
                      className="w-full px-5 py-2.5 bg-black/50 rounded-2xl border border-slate-800 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 outline-none transition-all text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] uppercase tracking-widest text-slate-500 font-bold ml-2">Message</label>
                  <textarea
                    name="message"
                    required
                    placeholder="How can I help you?"
                    rows={3}
                    className="w-full px-5 py-2.5 bg-black/50 rounded-2xl border border-slate-800 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 outline-none transition-all text-sm resize-none"
                  ></textarea>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={loading}
                  className="group w-full md:w-max px-7 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/20 mt-2"
                >
                  <span className="text-xs">{loading ? "Sending..." : "Send Message"}</span>
                  {!loading && <FaPaperPlane size={12} />}
                </motion.button>
              </form>
            </motion.div>

            
            <div className="md:order-1 order-last flex flex-col justify-center space-y-4">
              <p className="text-slate-400 max-w-lg mx-auto text-sm leading-relaxed mb-2">
                I'm currently open to new opportunities and collaborations. Whether you have a question, want to discuss a project, or just want to say hi, feel free to reach out!
              </p>
              
              <div className="space-y-8 py-4">
                {/* Email Item */}
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative w-12 h-12 flex items-center justify-center text-slate-400 group-hover:text-blue-500 transition-colors duration-300">
                      <FiMail size={24} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-base font-medium text-slate-400 group-hover:text-slate-200 transition-colors tracking-wide">
                      minidukalhara2@gmail.com
                    </p>
                    <div className="h-[1px] w-0 bg-blue-500/40 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative w-12 h-12 flex items-center justify-center text-slate-400 group-hover:text-blue-500 transition-colors duration-300">
                      <FiPhone size={24} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-base font-medium text-slate-400 group-hover:text-slate-200 transition-colors tracking-wide">
                      +94 771198216
                    </p>
                    <div className="h-[1px] w-0 bg-blue-500/40 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group cursor-pointer">
                  
                  
                <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative w-12 h-12 flex items-center justify-center text-slate-400 group-hover:text-blue-500 transition-colors duration-300">
                      <FaWhatsapp  size={24} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-base font-medium text-slate-400 group-hover:text-slate-200 transition-colors tracking-wide">
                      +94 716072865
                    </p>
                    <div className="h-[1px] w-0 bg-blue-500/40 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>

                {/* Address Item */}
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative w-12 h-12 flex items-center justify-center text-slate-400 group-hover:text-blue-500 transition-colors duration-300">
                      <FiMapPin size={24} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-base font-medium text-slate-400 group-hover:text-slate-200 transition-colors tracking-wide">
                      5/A Welipitiya Road, Nannapurawa, Bibile, Sri Lanka
                    </p>
                    <div className="h-[1px] w-0 bg-blue-500/40 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Follow me on</h3>
                <div className="flex gap-3">
                  {[
                    { icon: <FaGithub size={18} />, link: "https://github.com/minidukalhara14", label: "GitHub" },
                    { icon: <FaLinkedin size={18} />, link: "https://www.linkedin.com/in/minidu-kalhara-46487a299", label: "LinkedIn" },
                    { icon: <FaFacebook  size={18} />, link: "https://www.facebook.com/share/18HSeXDLoC/", label: "Facebook" }
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      whileHover={{ y: -4 }}
                      href={social.link}  
                      className="w-11 h-11 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center hover:text-blue-400 hover:border-blue-500/50 transition-all shadow-xl"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;