import { motion } from "framer-motion";

const groups = [
  {
    name: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "TailwindCSS", "HTML & CSS", "Framer Motion", "Responsive design", "Accessibility"],
  },
  {
    name: "Backend & data",
    skills: ["Node.js / Express", "PHP", "REST APIs", "Supabase", "MySQL", "SQLite", "Stripe & payments"],
  },
  {
    name: "Security",
    skills: ["Network security", "TCP/IP & networking", "Vulnerability assessment", "Penetration testing", "Traffic analysis", "Linux"],
  },
  {
    name: "Tools & other",
    skills: ["Git & GitHub", "Vercel", "SEO", "Python (Tkinter, PyQt)"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-2xl lg:text-4xl font-bold text-white text-center lg:text-left mb-2 lg:mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>
        <p className="text-[#F5EFE7] text-center lg:text-left mb-12">
          The tools I use to ship products end to end.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map((group, i) => (
            <motion.div
              key={group.name}
              className="bg-[#213555] rounded-md p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-[#D8C4B6] font-semibold uppercase tracking-wide text-sm mb-4">
                {group.name}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="bg-[#F5EFE7] text-[#213555] text-sm font-medium px-3 py-1.5 rounded"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
