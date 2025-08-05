// "use client";

// import React from 'react'
// import localFont from "next/font/local";
// import AnimatedHeading from './AnimatedHeading';
// import { motion,  useAnimation } from "framer-motion";
// import Image from "next/image";
//  import { FaGithub, FaExternalLinkAlt,  FaEnvelope, FaLinkedin } from "react-icons/fa";
//  import ChromaGrid from "../design/ChromaGrid";

// // Animation variants for scroll-based animation
// const getCardVariant = (i) => ({
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0 },
// });

// const funnelSans = localFont({
//   src: [
//     // {
//     //   path: "fonts/funnel-sans/FunnelSans-SemiBold.ttf",
//     //   weight: "700",
//     //   style: "normal",
//     // },
//     {
//       path: "../fonts/funnel-sans/FunnelSans-Bold.ttf",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-funnel-sans",
//   display: "swap",
// });

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

// const items = [
//   {
//     image: "/images/excel.png",
//     title: "Sarah Johnson",
//     subtitle: "Frontend Developer",
//     handle: "@sarahjohnson",
//     borderColor: "#3B82F6",
//     gradient: "linear-gradient(145deg, #3B82F6, #000)",
//     url: "https://github.com/sarahjohnson"
//   },
//   {
//     image: "/images/twitter.png",
//     title: "Mike Chen",
//     subtitle: "Backend Engineer",
//     handle: "@mikechen",
//     borderColor: "#10B981",
//     gradient: "linear-gradient(180deg, #10B981, #000)",
//     url: "https://linkedin.com/in/mikechen"
//   },
//   {
//     image: "https://via.placeholder.com/400x200?text=Password+Manager",
//     title: "Mike Chen",
//     subtitle: "Backend Engineer",
//     handle: "@mikechen",
//     borderColor: "#10B981",
//     gradient: "linear-gradient(180deg, #10B981, #000)",
//     url: "https://linkedin.com/in/mikechen"
//   },
//   {
//     image: "/images/twitter.png",
//     title: "Mike Chen",
//     subtitle: "Backend Engineer",
//     handle: "@mikechen",
//     borderColor: "#10B981",
//     gradient: "linear-gradient(180deg, #10B981, #000)",
//     url: "https://linkedin.com/in/mikechen"
//   },
//   {
//     image: "/images/twitter.png",
//     title: "Mike Chen",
//     subtitle: "Backend Engineer",
//     handle: "@mikechen",
//     borderColor: "#10B981",
//     gradient: "linear-gradient(180deg, #10B981, #000)",
//     url: "https://linkedin.com/in/mikechen"
//   },
//   {
//     image: "/images/twitter.png",
//     title: "Mike Chen",
//     subtitle: "Backend Engineer",
//     handle: "@mikechen",
//     borderColor: "#10B981",
//     gradient: "linear-gradient(180deg, #10B981, #000)",
//     url: "https://linkedin.com/in/mikechen"
//   },
// ];


// function ProjectsSection() {
//   return (
//     <section
//       id="projects"
// className={`${funnelSans.className} mt-28 text-center 
//   bg-gradient-to-br from-green-100 via-blue-200 to-purple-100 
//   dark:from-gray-900 dark:via-gray-800 dark:to-black 
//   py-20 px-6 rounded-xl shadow-xl`}
//     >
//       <AnimatedHeading text="Projects"/>
     
//      <div style={{ height: '800px', position: 'relative' }}>
//   <ChromaGrid 
//     items={items}
//     radius={300}
//     damping={0.45}
//     fadeOut={0.6}
//     ease="power3.out"
//   />
// </div>

      
//     </section>
//   )
// }

// export default ProjectsSection



"use client";

import React from "react";
import localFont from "next/font/local";
import AnimatedHeading from "./AnimatedHeading";
import { FaGithub } from "react-icons/fa";
import ChromaGrid from "../design/ChromaGrid";

// Load funnelSans font
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

// Project items for ChromaGrid
const items = [
  {
    image: "/images/excel.png",
    title: "Excel Analytics App",
    subtitle: "Upload and visualize Excel data",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/krushal29/ZidioFrontendInternship",
    tech: ["React", "Chart.js", "ExcelJS"]
  },
  {
    image: "/images/ecom.png",
    title: "E-commerce Website",
    subtitle: "Responsive shopping UI",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/Krishn2110/twitter",
    tech: ["React", "Tailwind CSS", "Firebase"]
  },
  {
    image: "/images/pm.png",
    title: "Password Manager",
    subtitle: "Secure full-stack manager",
    borderColor: "#EC4899",
    gradient: "linear-gradient(145deg, #EC4899, #000)",
    url: "https://github.com/Krishn2110/Password_manager",
    tech: ["MongoDB", "Express", "Node.js", "React"]
  },
  {
    image: "/images/tb.png",
    title: "Travel Booking",
    subtitle: "Book trips with Razorpay",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(145deg, #8B5CF6, #000)",
    url: "https://github.com/Krishn2110/TravelBooking",
    tech: ["Next.js", "Tailwind", "Razorpay"]
  },
  {
    image: "/images/chatify.png",
    title: "Chatify",
    subtitle: "Real-time chat with Stream",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(145deg, #F59E0B, #000)",
    url: "https://github.com/Krishn2110/Chatify",
    tech: ["Next.js", "Clerk", "Stream Chat"]
  },
  {
    image: "/images/bt.png",
    title: "Bitlinks",
    subtitle: "URL shortener & analytics",
    borderColor: "#EF4444",
    gradient: "linear-gradient(145deg, #EF4444, #000)",
    url: "https://github.com/Krishn2110/bitlinks",
    tech: ["Next.js", "MongoDB", "Tailwind"]
  }
];


function ProjectsSection() {

  const [radius, setRadius] = useState(250);

  useEffect(() => {
    // Runs only on the client
    const updateRadius = () => {
      const width = window.innerWidth;
      setRadius(width < 640 ? 120 : 250);
    };

    updateRadius(); // Set on initial render
    window.addEventListener("resize", updateRadius); // Optional: respond to resize

    return () => window.removeEventListener("resize", updateRadius);
  }, []);


  
  return (
    <section
      id="projects"
      className={`${funnelSans.className} mt-12 text-center 
        bg-gradient-to-br from-blue-400 via-purple-200 to-pink-400
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
        py-20 px-4 sm:px-6 rounded-xl shadow-xl`}
    >
      <AnimatedHeading text="Projects" />

      <div className="relative w-full max-w-7xl mx-auto min-h-[400px] sm:min-h-[600px] lg:min-h-[700px]">
        <ChromaGrid
          items={items}
          radius={radius}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div>
    </section>
  );
}

export default ProjectsSection;

