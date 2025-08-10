import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import CertificatesSection from "./components/CertificatesSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactForm from "./components/ContactForm";
import SocialIconsSidebar from "./components/SocialIconsSidebar";
import ScrollToTopButton from "./components/ScrollToTopButton";
import localFont from "next/font/local";
import DarkModeToggle from "./components/DarkModeToggle";
import { StatsSection } from "./components/StatsSection";

const funnelSans = localFont({
  src: [{ path: "fonts/funnel-sans/FunnelSans-Bold.ttf", weight: "700", style: "normal" }],
  variable: "--font-funnel-sans",
  display: "swap",
});

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 pt-8 pb-5 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      <Navbar />
      <DarkModeToggle />
      <HeroSection funnelSans={funnelSans} />
      <SkillsSection funnelSans={funnelSans} />
      <StatsSection funnelSans={funnelSans} />
      <ProjectsSection funnelSans={funnelSans} />
      <CertificatesSection funnelSans={funnelSans} />
      <ContactForm funnelSans={funnelSans} />
      <SocialIconsSidebar />
      <ScrollToTopButton />
    </main>
  );
}



// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Portfolio() {
//   const [activeSection, setActiveSection] = useState("hero");
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//     setDarkMode(prefersDark);
//   }, []);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-purple-50 text-gray-800'}`}>
//       {/* Navigation */}
//       <header className="fixed w-full top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
//         <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
//           <motion.div 
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
//           >
//             Kislay Rai
//           </motion.div>
          
//           <div className="flex items-center space-x-4">
//             <div className="hidden md:flex space-x-6">
//               {['hero', 'skills', 'projects', 'about', 'contact'].map((section) => (
//                 <motion.button
//                   key={section}
//                   onClick={() => setActiveSection(section)}
//                   className={`relative px-1 py-2 capitalize font-medium ${
//                     activeSection === section 
//                       ? 'text-blue-600 dark:text-blue-400' 
//                       : 'text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-300'
//                   }`}
//                   whileHover={{ y: -2 }}
//                 >
//                   {section}
//                   {activeSection === section && (
//                     <motion.div 
//                       className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 dark:bg-blue-400"
//                       layoutId="navIndicator"
//                     />
//                   )}
//                 </motion.button>
//               ))}
//             </div>
            
//             <motion.button
//               onClick={toggleDarkMode}
//               className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
//               whileHover={{ rotate: 15 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               {darkMode ? (
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
//                 </svg>
//               ) : (
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                   <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
//                 </svg>
//               )}
//             </motion.button>
//           </div>
//         </nav>
//       </header>

//       <main className="pt-20">
//         {/* Hero Section */}
//         <AnimatePresence mode="wait">
//           {activeSection === "hero" && (
//             <motion.section 
//               key="hero"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5 }}
//               className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-20"
//             >
//               <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
//                 <div className="relative">
//                   <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
//                     <div className="w-full h-full bg-gray-200 border-2 border-dashed rounded-full" />
//                   </div>
//                   <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg">
//                     <span className="font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//                       Full Stack Developer
//                     </span>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="w-full md:w-1/2">
//                 <motion.h1 
//                   className="text-4xl md:text-6xl font-bold mb-6"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.2 }}
//                 >
//                   Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Kislay Rai</span>
//                 </motion.h1>
                
//                 <motion.p 
//                   className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.4 }}
//                 >
//                   Crafting immersive web experiences with modern tools & elegant design.
//                 </motion.p>
                
//                 <motion.div 
//                   className="flex flex-wrap gap-4"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.6 }}
//                 >
//                   <motion.a
//                     href="#"
//                     className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Download Resume
//                   </motion.a>
                  
//                   <motion.a
//                     href="#"
//                     className="px-8 py-3 border-2 border-blue-500 text-blue-500 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 transition-all"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Contact Me
//                   </motion.a>
//                 </motion.div>
//               </div>
//             </motion.section>
//           )}
          
//           {/* Skills Section */}
//           {activeSection === "skills" && (
//             <motion.section 
//               key="skills"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5 }}
//               className="min-h-screen py-20 px-6"
//             >
//               <div className="container mx-auto">
//                 <motion.div 
//                   className="text-center mb-16"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2 }}
//                 >
//                   <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
//                   <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//                     Technologies I've mastered and love working with
//                   </p>
//                 </motion.div>
                
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//                   {[
//                     "HTML5", "CSS3", "JavaScript", "React.js", 
//                     "Next.js", "Tailwind", "Node.js", "Express.js", 
//                     "MongoDB", "Python", "Git & GitHub", "C++",
//                     "TypeScript", "GraphQL", "AWS", "TensorFlow"
//                   ].map((skill, i) => (
//                     <motion.div
//                       key={skill}
//                       className={`p-6 rounded-2xl backdrop-blur-lg shadow-lg border ${
//                         darkMode ? 'bg-gray-800/30 border-gray-700' : 'bg-white/50 border-gray-200'
//                       }`}
//                       initial={{ opacity: 0, y: 30 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: i * 0.1 }}
//                       whileHover={{ 
//                         y: -10,
//                         boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
//                       }}
//                     >
//                       <div className="flex flex-col items-center">
//                         <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white mb-4">
//                           <span className="font-bold">{skill.charAt(0)}</span>
//                         </div>
//                         <h3 className="font-bold text-center">{skill}</h3>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.section>
//           )}
          
//           {/* Projects Section */}
//           {activeSection === "projects" && (
//             <motion.section 
//               key="projects"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5 }}
//               className="min-h-screen py-20 px-6"
//             >
//               <div className="container mx-auto">
//                 <motion.div 
//                   className="text-center mb-16"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2 }}
//                 >
//                   <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
//                   <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//                     A selection of my recent work and personal projects
//                   </p>
//                 </motion.div>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                   {[1, 2, 3, 4, 5, 6].map((project, i) => (
//                     <motion.div
//                       key={i}
//                       className={`rounded-2xl overflow-hidden shadow-xl ${
//                         darkMode ? 'bg-gray-800' : 'bg-white'
//                       }`}
//                       initial={{ opacity: 0, y: 30 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: i * 0.1 }}
//                       whileHover={{ y: -10 }}
//                     >
//                       <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 relative">
//                         <div className="absolute inset-0 bg-gray-200 border-2 border-dashed rounded-t-2xl" />
//                         <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-bold">
//                           Project {i+1}
//                         </div>
//                       </div>
//                       <div className="p-6">
//                         <h3 className="text-xl font-bold mb-2">Project Title</h3>
//                         <p className="text-gray-600 dark:text-gray-300 mb-4">
//                           A brief description of the project goes here. This project showcases my skills in modern web development.
//                         </p>
//                         <div className="flex flex-wrap gap-2 mb-4">
//                           {['React', 'Node.js', 'MongoDB'].map((tech, j) => (
//                             <span 
//                               key={j}
//                               className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
//                             >
//                               {tech}
//                             </span>
//                           ))}
//                         </div>
//                         <div className="flex justify-between">
//                           <a 
//                             href="#" 
//                             className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
//                           >
//                             View Details →
//                           </a>
//                           <a 
//                             href="#" 
//                             className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
//                           >
//                             GitHub
//                           </a>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.section>
//           )}
          
//           {/* About Section */}
//           {activeSection === "about" && (
//             <motion.section 
//               key="about"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5 }}
//               className="min-h-screen py-20 px-6"
//             >
//               <div className="container mx-auto max-w-4xl">
//                 <motion.div 
//                   className="text-center mb-16"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2 }}
//                 >
//                   <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
//                   <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//                     Learn more about my journey and experience
//                   </p>
//                 </motion.div>
                
//                 <div className="flex flex-col md:flex-row gap-12">
//                   <div className="md:w-1/3">
//                     <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-1 rounded-2xl inline-block">
//                       <div className="bg-white dark:bg-gray-800 rounded-2xl p-4">
//                         <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="md:w-2/3">
//                     <h3 className="text-2xl font-bold mb-4">My Journey</h3>
//                     <p className="text-gray-600 dark:text-gray-300 mb-6">
//                       I'm a Full Stack Developer and Machine Learning enthusiast with 5 years of experience creating 
//                       innovative web applications. My passion lies in solving complex problems with elegant solutions 
//                       that provide exceptional user experiences.
//                     </p>
                    
//                     <div className="mb-8">
//                       <h4 className="text-xl font-bold mb-3">Experience</h4>
//                       <div className="space-y-4">
//                         {[
//                           { role: "Senior Developer", company: "TechCorp", period: "2021-Present" },
//                           { role: "Web Developer", company: "Digital Solutions", period: "2019-2021" },
//                           { role: "Junior Developer", company: "StartUp Inc", period: "2018-2019" }
//                         ].map((exp, i) => (
//                           <motion.div 
//                             key={i}
//                             className={`p-4 rounded-xl ${
//                               darkMode ? 'bg-gray-800' : 'bg-white'
//                             } shadow-md`}
//                             initial={{ opacity: 0, x: -20 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ delay: 0.3 + i * 0.1 }}
//                           >
//                             <div className="flex justify-between">
//                               <h5 className="font-bold">{exp.role}</h5>
//                               <span className="text-sm text-gray-500">{exp.period}</span>
//                             </div>
//                             <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </div>
                    
//                     <div>
//                       <h4 className="text-xl font-bold mb-3">Education</h4>
//                       <motion.div 
//                         className={`p-4 rounded-xl ${
//                           darkMode ? 'bg-gray-800' : 'bg-white'
//                         } shadow-md`}
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.6 }}
//                       >
//                         <h5 className="font-bold">BSc in Computer Science</h5>
//                         <p className="text-gray-600 dark:text-gray-400">University of Technology, 2014-2018</p>
//                       </motion.div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.section>
//           )}
          
//           {/* Contact Section */}
//           {activeSection === "contact" && (
//             <motion.section 
//               key="contact"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5 }}
//               className="min-h-screen py-20 px-6"
//             >
//               <div className="container mx-auto max-w-4xl">
//                 <motion.div 
//                   className="text-center mb-16"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2 }}
//                 >
//                   <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
//                   <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//                     Have a project in mind or want to collaborate? Let's connect!
//                   </p>
//                 </motion.div>
                
//                 <div className="flex flex-col md:flex-row gap-12">
//                   <motion.div 
//                     className="md:w-1/2"
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.4 }}
//                   >
//                     <div className={`p-8 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
//                       <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                      
//                       <div className="space-y-6">
//                         <div className="flex items-start">
//                           <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                             </svg>
//                           </div>
//                           <div>
//                             <h4 className="font-bold">Email</h4>
//                             <p className="text-gray-600 dark:text-gray-400">hello@kislayrai.com</p>
//                           </div>
//                         </div>
                        
//                         <div className="flex items-start">
//                           <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                             </svg>
//                           </div>
//                           <div>
//                             <h4 className="font-bold">Phone</h4>
//                             <p className="text-gray-600 dark:text-gray-400">+1 (123) 456-7890</p>
//                           </div>
//                         </div>
                        
//                         <div className="flex items-start">
//                           <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                             </svg>
//                           </div>
//                           <div>
//                             <h4 className="font-bold">Location</h4>
//                             <p className="text-gray-600 dark:text-gray-400">San Francisco, California</p>
//                           </div>
//                         </div>
//                       </div>
                      
//                       <div className="mt-10">
//                         <h4 className="font-bold text-lg mb-4">Connect with me</h4>
//                         <div className="flex space-x-4">
//                           {['github', 'linkedin', 'twitter', 'dribbble'].map((social, i) => (
//                             <a 
//                               key={i}
//                               href="#"
//                               className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
//                             >
//                               <div className="w-6 h-6 bg-gray-300 rounded-full" />
//                             </a>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
                  
//                   <motion.div 
//                     className="md:w-1/2"
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.6 }}
//                   >
//                     <div className={`p-8 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
//                       <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                      
//                       <form className="space-y-6">
//                         <div>
//                           <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
//                           <input 
//                             type="text" 
//                             id="name" 
//                             className={`w-full p-3 rounded-lg ${
//                               darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
//                             } border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
//                             placeholder="John Doe"
//                           />
//                         </div>
                        
//                         <div>
//                           <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
//                           <input 
//                             type="email" 
//                             id="email" 
//                             className={`w-full p-3 rounded-lg ${
//                               darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
//                             } border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
//                             placeholder="john@example.com"
//                           />
//                         </div>
                        
//                         <div>
//                           <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
//                           <input 
//                             type="text" 
//                             id="subject" 
//                             className={`w-full p-3 rounded-lg ${
//                               darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
//                             } border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
//                             placeholder="Project Inquiry"
//                           />
//                         </div>
                        
//                         <div>
//                           <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
//                           <textarea 
//                             id="message" 
//                             rows="5"
//                             className={`w-full p-3 rounded-lg ${
//                               darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
//                             } border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
//                             placeholder="Hello, I'd like to discuss..."
//                           ></textarea>
//                         </div>
                        
//                         <motion.button
//                           type="submit"
//                           className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
//                           whileHover={{ scale: 1.02 }}
//                           whileTap={{ scale: 0.98 }}
//                         >
//                           Send Message
//                         </motion.button>
//                       </form>
//                     </div>
//                   </motion.div>
//                 </div>
//               </div>
//             </motion.section>
//           )}
//         </AnimatePresence>
//       </main>

//       {/* Footer */}
//       <footer className={`py-12 border-t ${
//         darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-gradient-to-br from-blue-50 to-purple-50'
//       }`}>
//         <div className="container mx-auto px-6">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="mb-6 md:mb-0">
//               <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
//                 Kislay Rai
//               </div>
//               <p className="text-gray-600 dark:text-gray-400 mt-2">
//                 Crafting digital experiences with passion
//               </p>
//             </div>
            
//             <div className="flex space-x-6">
//               {['hero', 'skills', 'projects', 'about', 'contact'].map((section) => (
//                 <a 
//                   key={section}
//                   href={`#${section}`}
//                   onClick={() => setActiveSection(section)}
//                   className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors capitalize"
//                 >
//                   {section}
//                 </a>
//               ))}
//             </div>
//           </div>
          
//           <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-400">
//             <p>© {new Date().getFullYear()} Kislay Rai. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }