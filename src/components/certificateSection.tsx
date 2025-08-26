import { motion } from "framer-motion";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Web Development (Fullstack)",
      issuer: "Femtech",
      image: "/assets/Web Development Certificate.jpg", 
    },
    {
      title: "Python (GUI)",
      issuer: "Interface ICT",
      image: "/assets/Python Programming Certificate.jpg",
    },
    {
      title: "Cybersecurity",
      issuer: "Femtech",
      image: "/assets/Cybersecurity Certificate.png",
    },
    {
      title: "Web Designing (Wordpress)",
      issuer: "Interface ICT",
      image: "/assets/Web Development Certificate.jpg", 
    },
  ];

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
    <section id="certifications" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
            className="text-2xl lg:text-4xl font-bold text-white text-center lg:text-left mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            Certifications <span className="text-red-500">📜</span> 
        </motion.h2>

        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible" 
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#F5EFE7] shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
            >
              {/* Certificate Image */}
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-64 object-cover"
              />

              {/* Certificate Info */}
              <div className="p-5 text-[#213555]">
                <h3 className="text-lg font-semibold">{cert.title}</h3>
                <p className="text-gray-600">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
