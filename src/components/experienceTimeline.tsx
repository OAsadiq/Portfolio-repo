import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ExperienceTimeline = () => {
  const experiences = [
    {
      year: "Nov 2024 - Present",
      title: "Frontend Developer",
      company: "Uncut AI",
      description: [
        "Developed modern, responsive user interfaces using React and TailwindCSS.",
        "Optimized front-end performance for seamless user experience.",
        "Collaborated with backend teams to integrate APIs securely.",
      ],
      skills: ["React", "TailwindCSS", "TypeScript"],
    },
    {
      year: "2023 - 2024",
      title: "Full-stack Intern",
      company: "Femtech",
      description: [
        "Worked on interactive web apps and contributed to backend APIs.",
        "Enhanced UI/UX features and implemented REST APIs.",
      ],
      skills: ["React", "TailwindCSS", "NodeJS", "PHP", "MySQL"],
    },
    {
      year: "2020 - 2022",
      title: "Web Designer Intern",
      company: "Interface ICT",
      description: [
        "Learned the basics of web development and contributed to small projects.",
        "Assisted in designing web pages and optimizing SEO performance.",
      ],
      skills: ["Web Development", "SEO", "Product Management"],
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 }); 

  const containerVariants = {
    hidden: { opacity: 0 }, 
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-2xl lg:text-4xl font-bold text-white text-center lg:text-left mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Professional Experience <span className="text-red-500">📚</span>
        </motion.h2>

        <motion.div
          className="border-l border-gray-700 pl-8"
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-10"
              variants={itemVariants} 
            >
              <div className="absolute -left-6 top-1.5 w-4 h-4 bg-[#213555] border-2 border-[#213555] rounded-full"></div>

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg lg:text-xl font-bold text-[#F5EFE7]">{exp.title}</h3>
                  <div className="text-right">
                    <span className="text-sm text-gray-400">{exp.year}</span>
                  </div>
                </div>

                <h4 className="text-md lg:text-lg font-medium text-gray-400">{exp.company}</h4>

                <ul className="list-disc list-inside text-gray-300 text-sm mt-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <div className="mt-2 flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
