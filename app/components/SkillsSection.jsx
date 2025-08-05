// "use client";

// import AnimatedHeading from "./AnimatedHeading";
// import { motion } from "framer-motion";
// import Magnet from "../design/Magnet";

// const skills = [
//   "HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS",
//   "Node.js", "Express.js", "MongoDB", "Python", "Git & GitHub", "C++"
// ];

// export default function SkillsSection({ funnelSans }) {
//   return (
//     <section
//       id="skills"
//       className={`${funnelSans.className} mt-28 text-center 
//         bg-gradient-to-br from-blue-400 via-purple-300 to-pink-400
//         dark:from-gray-900 dark:via-gray-800 dark:to-black
//         py-20 px-6 rounded-xl shadow-xl`}
//     >
//       <AnimatedHeading text="Skills" />

//       <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12">
//         {skills.map((skill, i) => (
//           <Magnet key={i} padding={80} magnetStrength={30}>
//             <motion.div
//               className={`p-4 rounded-lg shadow-xl transition duration-300 
//                 bg-white/60 text-gray-900 
//                 dark:bg-white/5 dark:text-white
//                 hover:bg-white hover:shadow-2xl dark:hover:bg-white/10`}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.4, delay: i * 0.05 }}
//             >
//               <p className="font-semibold">{skill}</p>
//             </motion.div>
//           </Magnet>
//         ))}
//       </div>
//     </section>
//   );
// }




"use client";

import AnimatedHeading from "./AnimatedHeading";
import { motion } from "framer-motion";
import Magnet from "../design/Magnet";

const skills = [
  "HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind",
  "Node.js", "Express.js", "MongoDB", "Python", "Git & GitHub", "C++"
];

export default function SkillsSection({ funnelSans }) {
  return (
    <section
      id="skills"
      className={`${funnelSans.className} mt-12 text-center 
        bg-gradient-to-br from-blue-400 via-purple-200 to-pink-400
        dark:from-gray-900 dark:via-gray-800 dark:to-black
        py-20 px-6 rounded-xl shadow-xl`}
    >
      <AnimatedHeading text="Skills" />

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12">
        {skills.map((skill, i) => (
          <Magnet key={i} padding={80} magnetStrength={30}>
            <motion.div
              className={`
                p-4 rounded-xl transition duration-300
                backdrop-blur-lg shadow-lg
                border border-white/20
                bg-white/30 text-gray-900
                dark:bg-white/5 dark:text-white dark:border-white/10
                hover:shadow-2xl hover:scale-105
              `}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <p className="font-semibold text-center">{skill}</p>
            </motion.div>
          </Magnet>
        ))}
      </div>
    </section>
  );
}
