import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ExperienceTimeline = () => {
  const experiences = [
    {
      year: "Nov 2024 - Present",
      title: "Frontend Developer",
      company: "Uncut AI",
      description: [
        "Developed and optimized frontend architecture using React.js, TypeScript, and Tailwind CSS.",
        "Implemented media upload and management features with drag-and-drop, previews, and Video.js integration.",
        "Integrated APIs for video processing and AI-powered editing tools.",
        "Built reusable UI components and added animations with Framer Motion.",
        "Conducted cross-browser testing and collaborated in Agile using Git/GitHub.",
      ],
      skills: ["React", "TailwindCSS", "TypeScript"],
    },
    {
      year: "Nov 2023 - Dec 2023",
      title: "Full-stack Intern",
      company: "Femtech IT",
      description: [
        "Built e-commerce website with product catalog, user authentication, shopping cart, and checkout.",
        "Designed MySQL database schema and backend with PHP/SQL.",
        "Developed responsive UI with HTML, CSS, and JavaScript.",
        "Enhanced interactivity with product filtering, sliders, and form validation.",
      ],
      skills: ["React", "TailwindCSS", "NodeJS", "PHP", "MySQL"],
    },
    {
      year: "Dec 2024 - Present",
      title: "Web Developer",
      company: "Elite Ayomide Solutions",
      description: [
        "Designed and developed a dual-function company website serving as both an awareness platform and an educational hub.",
        "Built the corporate site to showcase company investment options and highlight support for scaling small businesses.",
        "Developed an integrated e-learning platform for cryptocurrency education, enabling user account creation, course enrollment, and access to both free and paid classes.",
        "Implemented responsive design using React.js and Tailwind CSS to ensure seamless access across devices.",
        "Optimized user flows for course registration and learning management, improving overall user experience.",
        "Collaborated with stakeholders to align the platform’s functionality with business and educational goals.",
      ],
      skills: ["Web Development", "SEO", "Product Management", "Payment Integration"],
    },
    {
      year: "Aug 2022 – Sep 2022",
      title: "Cybersecurity Intern",
      company: "Femtech IT",
      description: [
        "Conducted penetration testing and ethical hacking to identify vulnerabilities.",
        "Performed vulnerability assessments using industry-standard tools.",
        "Analyzed and secured network traffic through probing and assessments.",
        "Documented findings and created actionable remediation reports.",
      ],
      skills: ["Penetration Testing", "Vulnerability Assessment", "Ethical Hacking", "Linux"],
    },
    {
      year: "Nov 2020 – Dec 2020",
      title: "Python Developer & Data Analyst Intern",
      company: " Interface ICT",
      description: [
        "Designed and built a Python Tkinter-based inventory management system.",
        "Integrated SQLite database for real-time product and sales data.",
        "Enhanced sales workflows with invoicing, discounts, and stock updates.",
        "Trained staff to use the system effectively.",
      ],
      skills: ["Python GUI", "SQlite Database", "Sales Management"],
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
