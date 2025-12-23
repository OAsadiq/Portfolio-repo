import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Byond",
      description: "Modern brand website with responsive design for a clothing brand.",
      technologies: ["HTML", "JavaScript", "CSS"],
      previewLink: "https://byond-brand.vercel.app/",
    },
    {
      title: "PSFEI",
      description: "Business website for Palm farmers initiative with payment integration.",
      technologies: ["Typescript", "Node.Js", "TailwindCSS"],
      previewLink: "https://psfei.com/",
    },
    {
      title: "Newland Polytechnic",
      description: "Python-based inventory management system to manage sales.",
      technologies: ["Python", "Tkinter", "SQLite"],
      previewLink: "https://github.com/OAsadiq/store-inventory-system/",
    },
    {
      title: "Uncut AI",
      description: "Frontend for an AI video editing application.",
      technologies: ["ReactJS", "TailwindCSS", "Typescript", "API integration"],
      previewLink: "https://uncutai.io/",
    },
    {
      title: "DripStore Dashboard",
      description: "Admin dashboard for e-commerce operations.",
      technologies: ["HTML", "JavaScript", "VanillaCSS"],
      previewLink: "https://online-store-dashboard.vercel.app/",
    },
    {
      title: "Jakore Portfolio",
      description: "Portfolio Website for a Graphic Designer.",
      technologies: ["ReactJS", "JavaScript", "TailwindCSS"],
      previewLink: "https://jakore.vercel.app/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 0.8 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, rotateY: -90 },
    visible: { opacity: 1, rotateY: 0, transition: { duration: 0.8, ease: "easeOut" } },
    hover: { y: -10, transition: { type: "spring", stiffness: 200, damping: 5 } },
  };

  return (
    <motion.section
      className="py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-2xl lg:text-4xl font-bold text-white text-center lg:text-left mb-2 lg:mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Some of my Works <span className="text-red-500">💻</span>
        </motion.h2>
        <motion.p
          className="text-[#F5EFE7] text-center lg:text-left mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Here are some of the fun and recent projects I've worked on.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="p-8 bg-[#213555] rounded-md flex flex-col justify-between transition-transform"
              variants={cardVariants}
              whileHover="hover"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{project.title}</h3>
              <p className="text-[#F5EFE7] text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-col gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 bg-[#334155] text-[#F5EFE7] text-xs px-3 py-2 rounded"
                  >
                    <span>🚀</span>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
              <a
                href={project.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-white px-4 py-2 rounded hover:bg-[#D8C4B6] transition w-full"
              >
                <p className="text-[#213555] text-sm font-semibold">View Project</p>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 flex justify-end"
                >
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="#213555"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
