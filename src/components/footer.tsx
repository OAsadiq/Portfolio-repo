import { motion } from "framer-motion";
import { FaLinkedinIn, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const EMAIL = "abubakarolasadiq@gmail.com";

const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/oasadiq/", icon: <FaLinkedinIn /> },
  { name: "GitHub", href: "https://github.com/OAsadiq", icon: <FaGithub /> },
  { name: "X (Twitter)", href: "https://x.com/oasadiq", icon: <FaXTwitter /> },
  { name: "Instagram", href: "https://www.instagram.com/oasadiq/", icon: <FaInstagram /> },
];

const FooterSection = () => {
  return (
    <footer id="contact" className="py-20 bg-black text-[#F5EFE7] text-center">
      <motion.div
        className="px-6 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">Let's work together</h2>
        <p className="text-gray-400 mb-8">
          I'm open to full-time remote frontend roles and taking on freelance
          projects. Tell me what you're building and I'll get back to you
          within 24 hours.
        </p>

        <a
          href={`mailto:${EMAIL}?subject=Hello%20Abubakarsadiq`}
          className="inline-flex items-center gap-3 rounded-full bg-[#D8C4B6] px-6 py-3 font-semibold text-[#213555] hover:bg-[#F5EFE7] transition"
        >
          <FaEnvelope /> {EMAIL}
        </a>

        <div className="flex justify-center gap-4 mt-10 mb-10">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-bold">Abubakarsadiq Olayinka (OAsadiq)</span>
        </p>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
