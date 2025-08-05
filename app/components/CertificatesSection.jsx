// "use client";

// import React from 'react'
// import localFont from "next/font/local";
// import AnimatedHeading from './AnimatedHeading';
// import { motion,  useAnimation } from "framer-motion";
// import Image from "next/image";


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



// function CertificatesSection() {
//   return (
//     <section
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
//   )
// }

// export default CertificatesSection




// "use client";

// import React from "react";
// import localFont from "next/font/local";
// import AnimatedHeading from "./AnimatedHeading";
// import { CardCarousel } from "../../components/ui/card-carousel";

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

// const CertificatesSection = () => {
//   const images = [
//     {
//       src: "/certificates/previews/NASA Space Apps Challenge.png",
//       alt: "NASA Space Apps Challenge",
//     },
//     {
//       src: "/certificates/previews/HTML.png",
//       alt: "HTML Certificate",
//     },
//     {
//       src: "/certificates/previews/CSS.png",
//       alt: "CSS Certificate",
//     },
//     {
//       src: "/certificates/previews/Javascript.png",
//       alt: "JavaScript Certificate",
//     },
//     {
//       src: "/certificates/previews/pycertificate1.png",
//       alt: "Python Certificate",
//     },
//     {
//       src: "/certificates/previews/gfg_dsa.png",
//       alt: "DSA Certificate",
//     },
//   ];

//   return (
//     <section
//       id="certificates"
//       className={`${funnelSans.className} mt-28 text-center bg-gradient-to-br from-yellow-100 via-orange-200 to-rose-100 dark:from-gray-900 dark:via-gray-800 dark:to-black py-20 px-6 rounded-xl shadow-xl`}
//     >
//       {/* Animated heading */}
//       <AnimatedHeading text="Certificates" />

//       {/* Carousel centered inside container */}
//       <div className="mt-12 flex justify-center w-full overflow-hidden">
//         <div className="w-full max-w-7xl">
//           <CardCarousel
//             images={images}
//             autoplayDelay={2000}
//             showPagination={true}
//             showNavigation={true}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CertificatesSection;



"use client";

import React from "react";
import localFont from "next/font/local";
import AnimatedHeading from "./AnimatedHeading";
import { CardCarousel } from "../../components/ui/card-carousel";

const funnelSansFont = localFont({
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

export default function CertificatesSection({ funnelSans }) {
  const images = [
    { src: "/certificates/previews/NASA Space Apps Challenge.png", alt: "NASA Challenge" },
    { src: "/certificates/previews/HTML.png", alt: "HTML Certificate" },
    { src: "/certificates/previews/CSS.png", alt: "CSS Certificate" },
    { src: "/certificates/previews/Javascript.png", alt: "JavaScript Certificate" },
    { src: "/certificates/previews/pycertificate1.png", alt: "Python Certificate" },
  ];

  return (
    <section
      id="certificates"
className={`${funnelSans.className} mt-12 text-center 
  bg-gradient-to-br from-blue-400 via-purple-200 to-pink-400
  dark:from-gray-900 dark:via-gray-800 dark:to-black 
  py-20 px-6 rounded-xl shadow-xl`}
    >
      <AnimatedHeading text="Certificates" />

      <div className="mt-12 flex justify-center w-full overflow-hidden">
        <div className="w-full max-w-7xl">
          <CardCarousel
            images={images}
            autoplayDelay={2000}
            showPagination
            showNavigation
          />
        </div>
      </div>
    </section>
  );
}
