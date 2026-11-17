import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="flex flex-col items-center mt-32 h-auto lg:px-20 lg:h-[100vh] lg:flex-row lg:mt-0">
      <motion.div
        className="flex flex-col justify-center max-w-md px-10 space-y-6 lg:max-w-3xl lg:px-16"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h2
          className="text-3xl font-bold lg:text-6xl text-[#D8C4B6] animate-text-gradient"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Frontend Developer building fast, accessible web apps.
        </motion.h2>

        <motion.p
          className="text-sm leading-relaxed lg:pt-3 lg:text-sm text-[#F5EFE7]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          I'm{" "}
          <span className="text-[#D8C4B6] font-semibold">
            Abubakarsadiq Olayinka
          </span>{" "}
          (OAsadiq), a frontend developer with 3+ years of experience shipping
          React and TypeScript products, from an AI video editor to SaaS and
          business websites used by real customers. I care about clean UI,
          accessibility and performance, and I'm comfortable across the stack
          with Node, PHP and SQL when a project needs it.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Open to full-time remote roles
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Taking freelance projects
          </span>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center gap-4 lg:pt-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.7 }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-[#D8C4B6] px-5 py-3 text-sm font-semibold text-[#213555] hover:bg-[#F5EFE7] transition"
          >
            Get in touch
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/oasadiq"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-[#D8C4B6] text-xl hover:text-[#213555] transition rounded-full border border-[#D8C4B6] p-3 hover:bg-[#D8C4B6]"
          >
            <FaLinkedinIn />
          </motion.a>
          <motion.a
            href="https://x.com/oasadiq"
            aria-label="X (Twitter)"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="items-center flex"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              className="text-[#D8C4B6] text-xl hover:text-[#213555] transition rounded-full border border-[#D8C4B6] p-3 hover:bg-[#D8C4B6]"
            />
          </motion.a>
          <motion.a
            href="https://instagram.com/oasadiq"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-[#D8C4B6] text-xl hover:text-[#213555] transition rounded-full border border-[#D8C4B6] p-3 hover:bg-[#D8C4B6]"
          >
            <FaInstagram />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative mt-8 lg:mt-0 w-full max-w-xs mx-auto overflow-hidden shadow-xl lg:w-[800px] group border border-[#F5EFE7] p-3 transition-all 1s cursor-pointer"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      >
        <motion.img
          src="/assets/logo.jpeg"
          alt="Abubakarsadiq Olayinka at his desk"
          className="w-full"
          whileHover={{ scale: 1.2 }}
        />
      </motion.div>
    </section>
  );
};

export default AboutSection;
