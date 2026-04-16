"use client";

import React from 'react';
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import ScrambleText from "./ScrambleText";

export default function ContactForm() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section
      id="contact"
      className="relative mt-12 mb-5 rounded-md py-24 px-4 sm:px-6 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-[inset_0_0_50px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold mb-4 text-zinc-900 dark:text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <ScrambleText text="SYS." /><span className="text-indigo-600 dark:text-lime-400"><ScrambleText text="CONTACT" /></span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Establish connection payload. Send queries.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            className="w-full lg:w-2/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-2xl shadow-sm h-full flex flex-col justify-between relative overflow-hidden glass">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-pink-500 opacity-50" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-lime-400 opacity-50" />

              <div className="relative z-10">
                <div className="flex items-center mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-indigo-600 dark:text-white text-2xl font-display font-bold shadow-[0_4px_15px_rgba(79,70,229,0.1)] dark:shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                    KR_
                  </div>
                  <div className="ml-5">
                    <h3 className="text-2xl font-display font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Kislay Rai</h3>
                    <p className="text-indigo-600 dark:text-pink-500 font-bold text-xs tracking-widest uppercase">Full Stack Developer</p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-3.5 rounded-xl mr-5 text-pink-600 dark:text-lime-400 text-xl shadow-[0_4px_10px_rgba(236,72,153,0.1)] dark:shadow-[0_0_10px_rgba(163,230,53,0.1)]">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 dark:text-white text-xs uppercase tracking-wider mb-1">Email_</h4>
                      <p className="text-zinc-600 dark:text-zinc-400 font-sans text-sm">raikislay1@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-3.5 rounded-xl mr-5 text-pink-600 dark:text-lime-400 text-xl shadow-[0_4px_10px_rgba(236,72,153,0.1)] dark:shadow-[0_0_10px_rgba(163,230,53,0.1)]">
                      <FaPhone />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 dark:text-white text-xs uppercase tracking-wider mb-1">Phone_</h4>
                      <p className="text-zinc-600 dark:text-zinc-400 font-sans text-sm">+91 9452920073</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-3.5 rounded-xl mr-5 text-pink-600 dark:text-lime-400 text-xl shadow-[0_4px_10px_rgba(236,72,153,0.1)] dark:shadow-[0_0_10px_rgba(163,230,53,0.1)]">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 dark:text-white text-xs uppercase tracking-wider mb-1">Location_</h4>
                      <p className="text-zinc-600 dark:text-zinc-400 font-sans text-sm">UP, India</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-zinc-800 relative z-10">
                <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-5">Social_Links</h4>
                <div className="flex space-x-3">
                  {[
                    { 
                      icon: <FaGithub className="w-5 h-5" />,
                      url: "https://github.com/Krishn2110"
                    },
                    { 
                      icon: <FaLinkedin className="w-5 h-5" />,
                      url: "https://www.linkedin.com/in/kislay-rai-a84834290"
                    },
                    { 
                      icon: <FaEnvelope className="w-5 h-5" />,
                      url: "mailto:raikislay1@gmail.com"
                    },
                    { 
                      icon: (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                        </svg>
                      ),
                      url: "https://x.com/KislayRai3"
                    }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-pink-600 dark:hover:text-white hover:border-pink-600 dark:hover:border-lime-400 transition-colors shadow-sm"
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="w-full lg:w-3/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.form
              action="https://formspree.io/f/xnnvwwgp"
              method="POST"
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div className="mb-6" variants={itemVariants}>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">Payload_Sender_Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="USER_NAME"
                  required
                  className="w-full px-5 py-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white focus:outline-none focus:border-pink-500 dark:focus:border-lime-400 focus:shadow-[0_0_10px_rgba(236,72,153,0.1)] dark:focus:shadow-[0_0_10px_rgba(163,230,53,0.3)] transition-all font-sans text-sm"
                />
              </motion.div>
              
              <motion.div className="mb-6" variants={itemVariants}>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">Payload_Sender_Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="USER@DOMAIN.COM"
                  required
                  className="w-full px-5 py-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white focus:outline-none focus:border-pink-500 dark:focus:border-lime-400 focus:shadow-[0_0_10px_rgba(236,72,153,0.1)] dark:focus:shadow-[0_0_10px_rgba(163,230,53,0.3)] transition-all font-sans text-sm"
                />
              </motion.div>
              
              <motion.div className="mb-6" variants={itemVariants}>
                <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">Query_Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="SUBJECT_TOPIC"
                  className="w-full px-5 py-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white focus:outline-none focus:border-pink-500 dark:focus:border-lime-400 focus:shadow-[0_0_10px_rgba(236,72,153,0.1)] dark:focus:shadow-[0_0_10px_rgba(163,230,53,0.3)] transition-all font-sans text-sm"
                />
              </motion.div>
              
              <motion.div className="mb-8" variants={itemVariants}>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">Query_Body</label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  placeholder="ENTER_DATA..."
                  required
                  className="w-full px-5 py-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white focus:outline-none focus:border-pink-500 dark:focus:border-pink-500 focus:shadow-[0_0_10px_rgba(236,72,153,0.1)] dark:focus:shadow-[0_0_10px_rgba(236,72,153,0.3)] transition-all font-sans text-sm resize-none"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  className="w-full bg-pink-600 dark:bg-lime-500 text-white py-4 rounded-xl font-bold tracking-widest uppercase text-sm border border-transparent hover:bg-pink-700 dark:hover:bg-transparent dark:hover:border-lime-500 dark:hover:text-lime-500 shadow-[0_4px_15px_rgba(236,72,153,0.2)] dark:hover:shadow-[0_0_15px_rgba(163,230,53,0.5)] transition-all"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  EXECUTE_SEND()
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}