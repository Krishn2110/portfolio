
// "use client";

// import React, { useState, useEffect } from 'react';
// import localFont from "next/font/local";
// import { motion, useAnimation } from "framer-motion";
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

// const funnelSans = localFont({
//   src: [
//     {
//       path: "../fonts/funnel-sans/FunnelSans-Bold.ttf",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-funnel-sans",
//   display: "swap",
// });

// function ContactForm() {
//   const [particles, setParticles] = useState([]);
//   const controls = useAnimation();
  
//   // Initialize particles for background
//   useEffect(() => {
//     const newParticles = Array.from({ length: 15 }, (_, i) => ({
//       id: i,
//       size: Math.random() * 15 + 5,
//       x: Math.random() * 100,
//       y: Math.random() * 100,
//       duration: Math.random() * 8 + 8
//     }));
//     setParticles(newParticles);
//   }, []);

//   // Form variants for animation
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
//   };

//   return (
//     <section
//       id="contact"
//       className={`${funnelSans.className} relative overflow-hidden mt-5 mb-5 rounded-xl py-20 px-4 sm:px-6`}
//     >
//       {/* Animated background particles */}
//       <div className="absolute inset-0 z-0">
//         {particles.map(particle => (
//           <motion.div
//             key={particle.id}
//             className="absolute rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 dark:from-purple-500/20 dark:to-indigo-500/20"
//             style={{
//               width: particle.size,
//               height: particle.size,
//               left: `${particle.x}%`,
//               top: `${particle.y}%`,
//             }}
//             animate={{
//               y: [0, (Math.random() - 0.5) * 20],
//               x: [0, (Math.random() - 0.5) * 20],
//             }}
//             transition={{
//               duration: particle.duration,
//               repeat: Infinity,
//               repeatType: "reverse",
//               ease: "easeInOut"
//             }}
//           />
//         ))}
//       </div>
      
//       {/* Glowing blob background */}
//       <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20 overflow-hidden">
//   <motion.div 
//     className="absolute w-[20rem] h-[20rem] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-[80px] top-[10%] left-[10%] dark:from-purple-500 dark:to-indigo-600"
//     animate={{
//       scale: [1, 1.1, 1],
//     }}
//     transition={{
//       duration: 8,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }}
//   />
//   <motion.div 
//     className="absolute w-[25rem] h-[25rem] rounded-full bg-gradient-to-r from-pink-400 to-rose-500 blur-[80px] bottom-[10%] right-[10%] dark:from-pink-600 dark:to-rose-700"
//     animate={{
//       scale: [1, 1.1, 1],
//     }}
//     transition={{
//       duration: 10,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }}
//   />
// </div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <motion.h2 
//             className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-purple-400 dark:to-cyan-400"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             Get in Touch
//           </motion.h2>
//           <motion.p 
//             className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//           >
//             Have a project in mind? Let's work together!
//           </motion.p>
//         </motion.div>

//         <div className="flex flex-col lg:flex-row gap-10 max-w-5xl mx-auto">
//           {/* Contact Info */}
//           <motion.div 
//             className="w-full lg:w-2/5"
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//           >
//             <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/30 h-full">
//               <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
              
//               <div className="space-y-6">
//                 <div className="flex items-start">
//                   <div className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-purple-500 dark:to-indigo-600 p-3 rounded-lg mr-4">
//                     <FaEnvelope className="text-white text-xl" />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-900 dark:text-white">Email</h4>
//                     <p className="text-gray-700 dark:text-gray-300">raikislay1@gmail.com</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-purple-500 dark:to-indigo-600 p-3 rounded-lg mr-4">
//                     <FaPhone className="text-white text-xl" />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-900 dark:text-white">Phone</h4>
//                     <p className="text-gray-700 dark:text-gray-300">+91 9452920073</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-purple-500 dark:to-indigo-600 p-3 rounded-lg mr-4">
//                     <FaMapMarkerAlt className="text-white text-xl" />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-900 dark:text-white">Location</h4>
//                     <p className="text-gray-700 dark:text-gray-300">UP , India</p>
//                   </div>
//                 </div>
//               </div>
              
//               {/* <div className="mt-8">
//                 <h4 className="font-bold text-gray-900 dark:text-white mb-4">Follow Me</h4>
//                 <div className="flex space-x-4">
//                   {[1, 2, 3, 4].map((item) => (
//                     <motion.div
//                       key={item}
//                       className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center cursor-pointer"
//                       whileHover={{ 
//                         y: -5,
//                         background: "linear-gradient(45deg, #06b6d4, #3b82f6)",
//                         transition: { duration: 0.3 }
//                       }}
//                     >
//                       <div className="bg-gray-400 dark:bg-gray-500 rounded-full w-5 h-5" />
//                     </motion.div>
//                   ))}
//                 </div>
//               </div> */}


//               <div className="mt-8">
//   <h4 className="font-bold text-gray-900 dark:text-white mb-4">Follow Me</h4>
//   <div className="flex space-x-4">
//     {[
//       { 
//         name: "GitHub", 
//         icon: <FaGithub className="w-5 h-5" />,
//         color: "from-gray-700 to-gray-900",
//         url: "https://github.com"
//       },
//       { 
//         name: "LinkedIn", 
//         icon: <FaLinkedin className="w-5 h-5" />,
//         color: "from-blue-600 to-blue-800",
//         url: "https://linkedin.com"
//       },
//       { 
//         name: "Email", 
//         icon: <FaEnvelope className="w-5 h-5" />,
//         color: "from-red-500 to-red-700",
//         url: "mailto:contact@example.com"
//       },
//       { 
//         name: "Twitter", 
//         icon: (
//           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
//           </svg>
//         ),
//         color: "from-sky-400 to-sky-600",
//         url: "https://twitter.com"
//       }
//     ].map((social, index) => (
//       <motion.a
//         key={index}
//         href={social.url}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer text-white"
//         whileHover={{ 
//           y: -5,
//           transition: { duration: 0.3 }
//         }}
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.1 * index }}
//       >
//         <div className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-full`} />
//         <div className="relative z-10">
//           {social.icon}
//         </div>
//       </motion.a>
//     ))}
//   </div>
// </div>

//             </div>
//           </motion.div>
          
//           {/* Contact Form */}
//           <motion.div 
//             className="w-full lg:w-3/5"
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//           >
//             <motion.form
//               action="https://formspree.io/f/xnnvwwgp"
//               method="POST"
//               className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/30"
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-50px" }}
//             >
//               <motion.div className="mb-6" variants={itemVariants}>
//                 <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Your Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
//                   placeholder="Name"
//                   required
//                   className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </motion.div>
              
//               <motion.div className="mb-6" variants={itemVariants}>
//                 <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Your Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   placeholder="Email"
//                   required
//                   className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </motion.div>
              
//               <motion.div className="mb-6" variants={itemVariants}>
//                 <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Subject</label>
//                 <input
//                   type="text"
//                   name="subject"
//                   id="subject"
//                   placeholder="Project Inquiry"
//                   className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </motion.div>
              
//               <motion.div className="mb-6" variants={itemVariants}>
//                 <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Your Message</label>
//                 <textarea
//                   name="message"
//                   id="message"
//                   rows={5}
//                   placeholder="How can I help you?"
//                   required
//                   className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </motion.div>
              
//               <motion.div variants={itemVariants}>
//                 <motion.button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-purple-600 dark:to-indigo-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-cyan-500/20 dark:shadow-purple-500/30"
//                   whileHover={{ 
//                     scale: 1.02,
//                     boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4), 0 10px 10px -5px rgba(59, 130, 246, 0.3)"
//                   }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   Send Message
//                 </motion.button>
//               </motion.div>
//             </motion.form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ContactForm;



"use client";

import React from 'react';
import localFont from "next/font/local";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const funnelSans = localFont({
  src: [
    {
      path: "../fonts/funnel-sans/FunnelSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-funnel-sans",
  display: "swap",
});

function ContactForm() {
  // Form variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section
      id="contact"
      className={`${funnelSans.className} relative mt-5 mb-5 rounded-xl py-16 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950`}
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
            className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Have a project in mind? Let's work together!
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            className="w-full lg:w-2/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 h-full">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                  KR
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Kislay Rai</h3>
                  <p className="text-blue-600 dark:text-blue-400">Full Stack Developer</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg mr-4">
                    <FaEnvelope className="text-blue-600 dark:text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Email</h4>
                    <p className="text-gray-700 dark:text-gray-300">raikislay1@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg mr-4">
                    <FaPhone className="text-blue-600 dark:text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Phone</h4>
                    <p className="text-gray-700 dark:text-gray-300">+91 9452920073</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg mr-4">
                    <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Location</h4>
                    <p className="text-gray-700 dark:text-gray-300">UP, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {[
                    { 
                      name: "GitHub", 
                      icon: <FaGithub className="w-5 h-5" />,
                      url: "https://github.com/Krishn2110"
                    },
                    { 
                      name: "LinkedIn", 
                      icon: <FaLinkedin className="w-5 h-5" />,
                      url: "https://www.linkedin.com/in/kislay-rai-a84834290"
                    },
                    { 
                      name: "Email", 
                      icon: <FaEnvelope className="w-5 h-5" />,
                      url: "mailto:raikislay1@gmail.com"
                    },
                    { 
                      name: "Twitter", 
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
                      className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400"
                      whileHover={{ 
                        y: -5,
                        transition: { duration: 0.3 }
                      }}
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
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div className="mb-6" variants={itemVariants}>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </motion.div>
              
              <motion.div className="mb-6" variants={itemVariants}>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Your Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </motion.div>
              
              <motion.div className="mb-6" variants={itemVariants}>
                <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </motion.div>
              
              <motion.div className="mb-6" variants={itemVariants}>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Your Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  placeholder="How can I help you?"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-500/20 dark:shadow-purple-500/30"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4), 0 10px 10px -5px rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;