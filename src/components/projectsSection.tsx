import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  linkLabel: string;
  image?: string;
  caseStudy?: string;
};

const projects: Project[] = [
  {
    title: "Porfilr",
    description:
      "SaaS that lets writers, designers and marketers build a professional portfolio in minutes, with no code. Includes a visual builder, auth, payments and shareable public pages. 41 signups and 20 portfolios published so far.",
    caseStudy: "/work/porfilr",
    technologies: ["React", "TypeScript", "Supabase", "Stripe", "Vercel"],
    link: "https://porfilr.com/",
    linkLabel: "Visit site",
    image: "/assets/projects/porfilr.jpg",
  },
  {
    title: "Cedar Blue Accountants",
    description:
      "Marketing site for a Kent-based UK accounting firm: nine service pages on shared templates, SEO metadata and a working contact form.",
    technologies: ["PHP", "JavaScript", "CSS", "SEO"],
    link: "https://cedarblueaccountants.com/",
    linkLabel: "Visit site",
    image: "/assets/projects/cedarblue.jpg",
  },
  {
    title: "Whitestone Property & Estates",
    description:
      "London property-management site with rentals, short stays and landlord pages, plus a custom admin where staff publish listings and photos without touching code.",
    technologies: ["JavaScript", "PHP", "CSS", "CI/CD"],
    link: "https://whitestonepropertyandestates.com/",
    linkLabel: "Visit site",
    image: "/assets/projects/whitestone.jpg",
  },
  {
    title: "Uncut AI",
    description:
      "Frontend for a pre-launch AI video-editing product for TikTok creators: landing page and waitlist, plus app screens with drag-and-drop media upload, previews and AI editing tools.",
    technologies: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
    link: "https://uncut-ai.vercel.app/",
    linkLabel: "Visit site",
    image: "/assets/projects/uncut.jpg",
  },
  {
    title: "Jakore Portfolio",
    description: "Animated portfolio website for a graphic designer, showcasing their work in a clean, responsive layout.",
    technologies: ["React", "JavaScript", "TailwindCSS"],
    link: "https://jakore.vercel.app/",
    linkLabel: "Visit site",
    image: "/assets/projects/jakore.jpg",
  },
  {
    title: "Store Inventory System",
    description:
      "Desktop inventory and sales system built for Newland Polytechnic, with invoicing, discounts and real-time stock updates.",
    technologies: ["Python", "Tkinter", "SQLite"],
    link: "https://github.com/OAsadiq/store-inventory-system/",
    linkLabel: "View code",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-2xl lg:text-4xl font-bold text-white text-center lg:text-left mb-2 lg:mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Selected Work
        </motion.h2>
        <p className="text-[#F5EFE7] text-center lg:text-left mb-12">
          Live products and client sites I've designed and built.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="bg-[#213555] rounded-md overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#3E5879] to-[#0b1220]"
                aria-label={`${project.linkLabel}: ${project.title}`}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-[#D8C4B6]">
                    {project.title}
                  </div>
                )}
              </a>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-[#F5EFE7] text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="bg-[#334155] text-[#F5EFE7] text-xs px-2.5 py-1 rounded"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                {project.caseStudy && (
                  <Link
                    to={project.caseStudy}
                    className="mb-2 flex items-center justify-center border border-[#D8C4B6] px-4 py-2 rounded text-[#D8C4B6] text-sm font-semibold hover:bg-[#3E5879] transition w-full"
                  >
                    Read case study
                  </Link>
                )}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white px-4 py-2 rounded hover:bg-[#D8C4B6] transition w-full text-[#213555] text-sm font-semibold"
                >
                  {project.linkLabel}
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
                    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#213555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
