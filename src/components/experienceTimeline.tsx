import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ExperienceTimeline = () => {
  const experiences = [
    {
      year: "Nov 2025 – Present",
      title: "Founder & Full-stack Developer",
      company: "Porfilr",
      description: [
        "Founded and built Porfilr, a SaaS that lets writers, designers and marketers create a professional portfolio in minutes without code — 8 signups and 32 portfolios published so far.",
        "Built the visual portfolio builder, shareable public portfolio pages and the onboarding flow in React and TypeScript.",
        "Implemented authentication and data storage with Supabase, and subscription payments with Stripe.",
        "Built serverless APIs and file uploads on Vercel, plus referral and newsletter features to drive growth.",
      ],
      skills: ["React", "TypeScript", "Supabase", "Stripe", "Vercel"],
    },
    {
      year: "Oct 2023 – Sep 2024",
      title: "Full-stack Intern",
      company: "Femtech IT",
      description: [
        "Built an e-commerce website with product catalog, user authentication, shopping cart and checkout.",
        "Designed the MySQL database schema and PHP backend.",
        "Developed a responsive UI with HTML, CSS and JavaScript, adding product filtering, sliders and form validation.",
      ],
      skills: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    },
    {
      year: "Nov 2023 – Dec 2023",
      title: "Python Developer Intern",
      company: "Newland Polytechnic",
      description: [
        "Designed and built a Python Tkinter inventory management system with an SQLite database for real-time product and sales data.",
        "Added invoicing, discounts and automatic stock updates to the sales workflow.",
        "Trained staff to use the system day to day.",
      ],
      skills: ["Python", "Tkinter", "SQLite"],
    },
    {
      year: "Aug 2022 – Sep 2022",
      title: "Cybersecurity Intern",
      company: "Femtech IT",
      description: [
        "Conducted penetration testing and vulnerability assessments using industry-standard tools.",
        "Analyzed network traffic and documented findings in actionable remediation reports.",
      ],
      skills: ["Penetration Testing", "Vulnerability Assessment", "Linux"],
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
    <section id="experience" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-2xl lg:text-4xl font-bold text-white text-center lg:text-left mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Professional Experience
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
