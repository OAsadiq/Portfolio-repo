import { FaLaptopCode, FaNetworkWired, FaDesktop } from "react-icons/fa";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      title: "WEB DEVELOPMENT",
      description:
        "Responsive, accessible websites and web apps built with React, TypeScript and TailwindCSS — including API integrations, payments, auth and Node/Express or PHP backends when needed.",
      icon: <FaLaptopCode />,
    },
    {
      title: "NETWORK SECURITY",
      description:
        "Securing networks and web apps: vulnerability assessments, network traffic analysis, firewall and access hardening, and clear remediation reports. Currently deepening this through a 12-month network security program.",
      icon: <FaNetworkWired />,
    },
    {
      title: "DESKTOP APPS",
      description:
        "Python desktop tools with Tkinter or PyQt — like inventory and sales systems — that are simple for non-technical staff to use.",
      icon: <FaDesktop />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.05 },
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-2xl lg:text-4xl font-bold text-white text-center lg:text-left mb-2 lg:mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Services I Offer
        </motion.h2>
        <motion.p
          className="text-[#F5EFE7] text-center lg:text-left mb-12"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          What I can build or secure for you.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 lg:p-8 bg-[#213555] hover:bg-[#3E5879] rounded-md transition-transform"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="flex items-center justify-between text-3xl lg:text-4xl text-[#D8C4B6] mb-4">
                {service.icon}
                <motion.div
                  className="border-t-2 w-16 border-t-[#D8C4B6]"
                  whileHover={{ width: "20rem" }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div>
                <h3 className="text-lg lg:text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-[#F5EFE7] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
