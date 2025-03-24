import { motion } from "framer-motion";

const FooterSection = () => {
  const socialIcons = [
    {
      name: "Twitter",
      icon: "https://img.icons8.com/ios-filled/50/ffffff/twitter.png",
      href: "https://x.com/oasadiq",
    },
    {
      name: "Instagram",
      icon: "https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png",
      href: "https://www.instagram.com/oasadiq/",
    },
    {
      name: "LinkedIn",
      icon: "https://img.icons8.com/ios-filled/50/ffffff/linkedin.png",
      href: "https://www.linkedin.com/in/sadiq-olayinka-402a27246/",
    },
    {
      name: "WhatsApp",
      icon: "https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png",
      href: "https://wa.me/message/KWP452YLNXJLB1",
    },
    {
      name: "Email",
      icon: "https://img.icons8.com/ios-filled/50/ffffff/new-post.png",
      href: "mailto:sadiqolayinka17@gmail.com",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 30 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 }, // Slide up for text
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <footer className="py-16 bg-black text-[#F5EFE7] text-center">
      <div className="px-6 max-w-4xl mx-auto">
        <motion.h3
          className="text-2xl font-bold mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          Start a project <span className="text-pink-500">🚀</span>
        </motion.h3>

        <motion.p
          className="text-gray-400 mb-8 text-sm lg:text-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          Interested in making waves together? Hit me up, I will reply ASAP.
        </motion.p>

        <motion.div
          className="flex justify-center space-x-4 lg:space-x-6 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {socialIcons.map((icon, index) => (
            <motion.a
              key={index}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition"
              variants={iconVariants} 
            >
              <img src={icon.icon} alt={icon.name} className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          className="text-sm text-gray-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          © 2025 <span className="font-bold">Sadiq</span>
        </motion.p>
      </div>
    </footer>
  );
};

export default FooterSection;
