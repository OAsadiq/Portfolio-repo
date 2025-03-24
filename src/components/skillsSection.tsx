import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion"; // Hook to track scroll position

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'TailwindCSS',
  'NodeJS',
  'React Native',
  'Animations',
  'SEO',
  'Python (GUI)',
  '...',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const SkillsSection = () => {
  const ref = useRef(null); 
  const isInView = useInView(ref, { amount: 0.2 });
  const animationControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControl.start("visible");
    }
  }, [isInView, animationControl]);

  return (
    <motion.section ref={ref} className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-2xl lg:text-4xl font-bold text-white text-center lg:text-left mb-2 lg:mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : ""}
          transition={{ duration: 0.8 }}
        >
          Skills <span className="text-yellow-500">👩‍💻</span>
        </motion.h2>
        <motion.p
          className="text-[#F5EFE7] text-center lg:text-left mb-12"
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : ""}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          These are some of the skills I've learned over the past years.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={animationControl}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-2 lg:p-4 bg-[#F5EFE7] rounded-md shadow-lg hover:scale-105 transition-transform text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }} 
            >
              <p className="text-lg font-semibold text-[#213555]">{skill}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
