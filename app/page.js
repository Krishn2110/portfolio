// "use client";
// import { motion,  useAnimation } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import Navbar from "./components/Navbar";
// import { useEffect, useState , useRef} from "react";
// import Head from "next/head";
// import localFont from "next/font/local";
// import { FaGithub, FaExternalLinkAlt,  FaEnvelope, FaLinkedin } from "react-icons/fa";
// import { useInView } from "react-intersection-observer";
// import { Mail, Github, Linkedin,  ArrowUp } from "lucide-react";


// const funnelSans = localFont({
//   src: [
//     // {
//     //   path: "fonts/funnel-sans/FunnelSans-SemiBold.ttf",
//     //   weight: "700",
//     //   style: "normal",
//     // },
//     {
//       path: "fonts/funnel-sans/FunnelSans-Bold.ttf",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-funnel-sans",
//   display: "swap",
// });


// function AnimatedHeading({ text }) {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     triggerOnce: true, 
//     threshold: 0.4,    
//   });

//   useEffect(() => {
//     if (inView) controls.start("visible");
//   }, [inView, controls]);

//   const letterVariants = {
//     hiddenLeft: { x: -40, opacity: 0 },
//     hiddenRight: { x: 40, opacity: 0 },
//     visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
//   };

//   return (
//     <h2 ref={ref} className="text-5xl font-bold mb-6 flex justify-center space-x-1">
//       {text.split("").map((char, index) => (
//         <motion.span
//           key={index}
//           initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
//           animate={controls}
//           variants={letterVariants}
//         >
//           {char}
//         </motion.span>
//       ))}
//     </h2>
//   );
// }


// const certificates = [
//   {
//     title: "Data Science",
//     file: "Datascience.pdf",
//     desc: "Completed comprehensive course on data science tools & techniques.",
//   },
//   {
//     title: "NASA Space Apps Challenge",
//     file: "NASA Space Apps Challenge.pdf",
//     desc: "Participated in global hackathon focused on space tech innovation.",
//   },
//   {
//     title: "Python",
//     file: "pycertificate1.pdf",
//     desc: "Learned Python basics, functions, OOP, and automation.",
//   },
//   {
//     title: "Frontend Internship",
//     file: "Kislay Rai.pdf",
//     desc: "Completed internship on modern frontend technologies (React, Tailwind).",
//   },
//   {
//     title: "Javascript",
//     file: "Javascript.pdf",
//     desc: "Mastered core JavaScript, DOM manipulation, and ES6+ features.",
//   },
//   {
//     title: "HTML",
//     file: "HTML.pdf",
//     desc: "Certified in HTML5 for semantic and accessible web development.",
//   },
//   {
//     title: "DSA",
//     file: "gfg_dsa.pdf",
//     desc: "Built strong foundation in Data Structures & Algorithms (GFG).",
//   },
//   {
//     title: "CSS",
//     file: "CSS.pdf",
//     desc: "Gained skills in modern responsive styling and layout systems.",
//   },
// ];

// const projects = [
//   {
//     title: "Excel Analytics App",
//     desc: "Upload Excel files and visualize data with charts.",
//     image: "/images/excel.png",
//     github: "https://github.com/krushal29/ZidioFrontendInternship",
   
//   },
//   {
//     title: "Twitter Clone",
//     desc: "A Twitter clone built with Tailwind CSS and fully responsive.",
//     image: "/images/twitter.png",
//     github: "https://github.com/Krishn2110/twitter",
//     demo: "#",
//   },
//   {
//     title: "Password Manager",
//     desc: "A full-stack encrypted password manager with secure login.",
//     image: "https://via.placeholder.com/400x200?text=Password+Manager",
//     github: "https://github.com/Krishn2110/Password_manager",
//     demo: "#",
//   },
//   {
//     title: "Travel Booking Website",
//     desc: "Search and book travel services with secure payments via Razorpay.",
//     image: "https://via.placeholder.com/400x200?text=Travel+Booking+Site",
//     github: "https://github.com/Krishn2110/TravelBooking",
//     demo: "#",
//   },
//   {
//     title: "Calculator",
//     desc: "A basic calculator built using HTML, CSS, and JavaScript.",
//     image: "https://via.placeholder.com/400x200?text=Calculator",
//     github: "https://github.com/Krishn2110/Calculator",
//     demo: "#",
//   },
//   {
//     title: "Music Player",
//     desc: "A responsive music player with custom UI built with vanilla JS.",
//     image: "https://via.placeholder.com/400x200?text=Music+Player",
//     github: "https://github.com/Krishn2110/music-player",
//     demo: "#",
//   },
// ];

// const contactIcons = [
//   {
//     href: "mailto:raikislay1@gmail.com",
//     icon: <FaGithub />,
//     title: "Email",
//     iconComponent: <FaGithub />,
//   },
//   {
//     href: "https://github.com/yourusername",
//     iconComponent: <FaGithub />,
//     title: "GitHub",
//   },
//   {
//     href: "https://linkedin.com/in/yourprofile",
//     iconComponent: <FaExternalLinkAlt />,
//     title: "LinkedIn",
//   },
// ];


// // Animation variants for scroll-based animation
// const getCardVariant = (i) => ({
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0 },
// });


// export default function Home() {

//    const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

//   useEffect(() => {
//     const move = (e) => {
//       setCursorPos({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   const [showTopBtn, setShowTopBtn] = useState(false);

// useEffect(() => {
//   const handleScroll = () => {
//     setShowTopBtn(window.scrollY > 300);
//   };
//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);

// // Add at the top of your component
// const hoverAudio = useRef(null);

// useEffect(() => {
//   hoverAudio.current = new Audio("/sounds/hover.mp3");
// }, []);



//   return (
//     <main className="min-h-screen  font-sans px-6 pt-20 pb-10  text-gray-900 dark:text-white bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-300">
//       <Navbar/>

//     <section className={`${funnelSans.className} relative overflow-hidden min-h-screen flex flex-col-reverse md:flex-row items-center rounded-2xl justify-around px-6 md:px-20 py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white`}>

//   {/* Background & cursor-following bubbles remain same */}
//   <motion.div className="absolute w-96 h-96 bg-pink-300 rounded-full opacity-20 blur-3xl top-[-10%] left-[-10%] z-0"
//     animate={{ x: [0, 30, -30, 0], y: [0, -20, 20, 0] }}
//     transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//   />
//   <motion.div className="absolute w-72 h-72 bg-blue-300 rounded-full opacity-20 blur-3xl bottom-[-10%] right-[-10%] z-0"
//     animate={{ x: [0, -30, 30, 0], y: [0, 20, -20, 0] }}
//     transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//   />
//   <motion.div className="absolute w-60 h-60 bg-purple-300 rounded-full opacity-20 blur-3xl top-[20%] right-[10%] z-0"
//     animate={{ x: [0, 25, -25, 0], y: [0, 15, -15, 0] }}
//     transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
//   />
//   <motion.div
//     className="pointer-events-none absolute w-40 h-40 rounded-full bg-white/10 blur-2xl z-0"
//     style={{
//       top: cursorPos.y - 80,
//       left: cursorPos.x - 80,
//     }}
//     animate={{ x: 0, y: 0 }}
//     transition={{ type: "spring", damping: 20, stiffness: 100 }}
//   />

  

//  <motion.div
//   initial={{ opacity: 0, scale: 0 }}
//   animate={{
//     opacity: 1,
//     scale: [0, 1.4, 0.9, 1.1, 1],
//   }}
//   transition={{
//     duration: 1.6,
//     ease: "easeOut",
//     times: [0, 0.4, 0.6, 0.8, 1],
//   }}
//   className="group relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg transition-all duration-500 hover:shadow-[0_0_30px_10px_rgba(255,255,255,0.4)]"
// >
//   <Image
//     src="/profile.jpg"
//     alt="Kislay Rai"
//     layout="fill"
//     objectFit="cover"
//     className="rounded-full transition-transform duration-500 group-hover:scale-105"
//     priority
//   />
// </motion.div>


//   {/* Text Content on Right */}
//   <motion.div
//     initial={{ opacity: 0, x: 50 }}
//     animate={{ opacity: 1, x: 0 }}
//     transition={{ duration: 1, ease: "easeOut" }}
//     className="relative z-10 w-full md:w-1/2 space-y-6"
//   >
//     <h1 className="text-5xl font-extrabold leading-tight">
//       Hello! I'm{" "}
//       <motion.span
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 1 }}
//         className="bg-white text-purple-600 px-2 py-1 rounded shadow-xl inline-block"
//       >
//         Kislay Rai
//       </motion.span>
//       .<br />
//       A Full-Stack Developer & ML Enthusiast.
//     </h1>
//     <motion.p
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 1.2, duration: 1 }}
//       className="text-lg text-white/80"
//     >
//       Crafting immersive web experiences with modern tools & elegant design.
//     </motion.p>
//     <motion.a
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ delay: 1.4, duration: 0.8 }}
//       href="/cv.pdf"
//       download
//       className="inline-block mt-4 bg-white text-pink-600 font-semibold px-6 py-3 rounded-full hover:bg-pink-100 transition hover:scale-105"
//     >
//       Download Resume
//     </motion.a>
//   </motion.div>
// </section>


// <section
//   id="skills"
//   className={`${funnelSans.className} mt-28 text-center bg-gradient-to-br from-green-100 via-blue-200 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-black py-20 px-6 rounded-xl shadow-xl`}
// >
//   <AnimatedHeading text="Skills" />

//   <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12 text-gray-800 dark:text-gray-200">
//     {[
//       "HTML5",
//       "CSS3",
//       "JavaScript",
//       "React.js",
//       "Next.js",
//       "Tailwind CSS",
//       "Node.js",
//       "Express.js",
//       "MongoDB",
//       "Python",
//       "Git & GitHub",
//       "C++"
//     ].map((skill, i) => (
//       <motion.div
//         key={i}
//         className="bg-white/10 dark:bg-white/5 p-4 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{ duration: 0.4, delay: i * 0.05 }}
//       >
//         <p className="font-semibold">{skill}</p>
//       </motion.div>
//     ))}
//   </div>
// </section>


//  <section
//       id="certificates"
//       className={`${funnelSans.className} mt-28 text-center bg-gradient-to-br from-yellow-100 via-orange-200 to-rose-100 dark:from-gray-900 dark:via-gray-800 dark:to-black py-20 px-6 rounded-xl shadow-xl`}
//     >
//       <AnimatedHeading text="Certificates" />
      

//       <div className="grid grid-cols-1 sm:grid-cols-2 mt-15 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {certificates.map((cert, i) => {
//           const imagePreview = `/certificates/previews/${cert.file.replace(".pdf", ".png")}`;

//           return (
//             <div className="relative group" key={i}>
//               {/* Background glowing blur layer */}
//               <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 opacity-20 blur-xl group-hover:opacity-50 transition duration-500 pointer-events-none" />

//               {/* Certificate card */}
//               <motion.a
//                 href={`/certificates/${cert.file}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 variants={getCardVariant(i)}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ duration: 0.6, delay: i * 0.1 }}
//                 className="relative block rounded-2xl p-4 bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.4)] hover:scale-[1.03] hover:ring-2 hover:ring-pink-300/60 transition-all duration-300 text-left"
//               >
//                 <div className="relative h-[220px] bg-purple-100 dark:bg-gray-800 rounded-xl overflow-hidden flex items-center justify-center">
//                   {/* Image preview on hover */}
//                   <Image
//                     src={imagePreview}
//                     alt={`Preview of ${cert.title}`}
//                     width={400}
//                     height={220}
//                     className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                   />

//                   {/* Text fallback */}
//                   <div className="z-10 group-hover:opacity-0 transition-opacity duration-300 text-left p-4">
//                     <h3 className="font-semibold text-black dark:text-white text-xl text-center mb-2">
//                       {cert.title}
//                     </h3>
//                     <p className="text-gray-700 dark:text-gray-300 text-sm text-center">{cert.desc}</p>
//                     {/* <p className="text-sm text-purple-700 dark:text-purple-300 underline text-center mt-2">
//                       View Certificate
//                     </p> */}
//                   </div>
//                 </div>
//               </motion.a>
//             </div>
//           );
//         })}
//       </div>
//     </section>


//       <section
//       id="projects"
//       className={`${funnelSans.className} mt-28 text-center bg-gradient-to-r from-green-100 via-teal-200 to-blue-100 bg-[length:300%_300%] animate-gradient-xy dark:from-gray-800 dark:via-gray-900 dark:to-black py-20 px-6 rounded-xl`}
//     >
//       <AnimatedHeading text="Projects"/>
     

//       <div className="grid grid-cols-1 md:grid-cols-2 mt-15 gap-8 max-w-5xl mx-auto">
//         {projects.map((project, i) => (
//           <motion.div
//   key={i}
//   className="relative group overflow-hidden shadow-3xl rounded-2xl"
//   initial={{ opacity: 0, y: 30 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   viewport={{ once: true, amount: 0.2 }}
//   transition={{ duration: 0.6, delay: i * 0.1 }}
//   whileHover={{ scale: 1.02 }}
// >

//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-60 object-cover"
//             />
//             <div className="p-4 text-left bg-white dark:bg-black/80 backdrop-blur">
//               <h3 className="text-xl font-semibold">{project.title}</h3>
//               <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{project.desc}</p>
//             </div>
//             {/* Hover Icons */}
//             <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white text-5xl hover:text-gray-300"
//                 title="GitHub"
//               >
//                 <FaGithub />
//               </a>
            
              
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
  

// <section
//   id="contact"
//   className={`${funnelSans.className} mt-28 text-center bg-gradient-to-tr from-pink-100 via-purple-100 to-blue-100 bg-[length:250%_250%] animate-gradient-y dark:from-gray-800 dark:via-gray-900 dark:to-black py-20 px-6 rounded-xl`}
// >
//   <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Get in Touch</h2>

  

//   {/* Contact Form */}
//   <form
//     action="https://formspree.io/f/xnnvwwgp" // ← Replace with your Formspree or backend handler
//     method="POST"
//     className="max-w-xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md space-y-6"
//   >
//     <input
//       type="text"
//       name="name"
//       placeholder="Your Name"
//       required
//       className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//     />

//     <input
//       type="email"
//       name="email"
//       placeholder="Your Email"
//       required
//       className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//     />

//     <textarea
//       name="message"
//       rows={5}
//       placeholder="Your Message"
//       required
//       className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//     />

//     <button
//       type="submit"
//       className="w-full bg-[#831347] cursor-pointer hover:scale-103 duration-300  text-white py-3 rounded-md font-medium transition"
//     >
//       Send Message
//     </button>
//   </form>
// </section>




// <motion.div
//   className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50 flex flex-col gap-4"
//   initial={{ x: 100, opacity: 0 }}
//   animate={{ x: 0, opacity: 1 }}
//   transition={{ duration: 0.8, ease: "easeOut" }}
// >
//   {[
//     {
//       href: "mailto:raikislay1@gmail.com",
//       icon: <FaEnvelope className="w-5 h-5" />,
//       label: "Email",
//       color: "text-red-600",
//     },
//     {
//       href: "https://github.com/Krishn2110",
//       icon: <FaGithub className="w-5 h-5" />,
//       label: "GitHub",
//       color: "text-gray-800 dark:text-white",
//     },
//     {
//       href: "https://www.linkedin.com/in/kislay-rai-a84834290",
//       icon: <FaLinkedin className="w-5 h-5" />,
//       label: "LinkedIn",
//       color: "text-blue-700 dark:text-blue-400",
//     },
//   ].map((item, index) => (
//     <a
//       key={index}
//       href={item.href}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="group relative flex items-center"
//       title={item.label}
//       // onMouseEnter={() => hoverAudio.current && hoverAudio.current.play()}
//       onMouseEnter={() => {
//   if (hoverAudio.current) {
//     hoverAudio.current.currentTime = 0; // rewind to start
//     hoverAudio.current.play();
//   }
// }}

//     >
//       {/* Slide-in label */}
//       <span className="absolute right-full mr-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all text-sm font-medium text-white bg-black/80 px-2 py-1 rounded shadow-lg">
//         {item.label}
//       </span>

//       {/* Icon with ripple */}
//       <div className="relative">
//         {/* Ripple circle */}
//         <span className="absolute inset-0 w-full h-full rounded-full animate-ping bg-pink-400 opacity-0 group-hover:opacity-30 pointer-events-none z-0 transition" />
//         <div
//           className={`relative z-10 bg-white dark:bg-gray-800 ${item.color} p-3 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-opacity-90 hover:translate-x-[-4px]`}
//         >
//           {item.icon}
//         </div>
//       </div>
//     </a>
//   ))}
// </motion.div>




// {showTopBtn && (
//   <motion.button
//     onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//     className="fixed bottom-6 right-6 z-50 dark:bg-[#831347] text-white p-3 rounded-full shadow-lg  transition-all"
//     initial={{ opacity: 0, scale: 0 }}
//     animate={{ opacity: 1, scale: 1 }}
//     whileHover={{ scale: 1.1 }}
//     title="Back to Top"
//   >
//     <ArrowUp size={20} />
//   </motion.button>
// )}



//     </main>
//   );
// }


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
      <ProjectsSection funnelSans={funnelSans} />
      <CertificatesSection funnelSans={funnelSans} />
      <ContactForm funnelSans={funnelSans} />
      <SocialIconsSidebar />
      <ScrollToTopButton />
    </main>
  );
}
