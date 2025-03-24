import { FaLaptopCode, FaShieldAlt, FaDesktop, FaLightbulb, FaMobileAlt, FaPlug } from "react-icons/fa";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      title: "WEB DEVELOPMENT",
      description:
        "I design and build beautiful websites with React, CSS, TailwindCSS, TypeScript, and JavaScript. I also develop backend APIs with Node/ExpressJS.",
      icon: <FaLaptopCode />,
    },
    {
      title: "WEB SECURITY",
      description:
        "Providing vulnerability assessment and penetration testing services to identify and mitigate security risks in web applications.",
      icon: <FaShieldAlt />,
    },
    {
      title: "GUI APPS",
      description:
        "I design and develop Graphical User Interfaces (GUIs) with Python frameworks like Tkinter and PyQt to deliver intuitive and user-friendly desktop applications.",
      icon: <FaDesktop />,
    },
    {
      title: "CONTINUOUS LEARNING",
      description:
        "Staying updated with the latest frontend technologies, trends, and best practices to deliver modern and innovative solutions.",
      icon: <FaLightbulb />,
    },
    {
      title: "RESPONSIVE DESIGN",
      description:
        "Building websites and applications that work seamlessly on various devices and screen sizes, from desktop to smartphones.",
      icon: <FaMobileAlt />,
    },
    {
      title: "API INTEGRATIONS",
      description:
        "Integrating backend services and APIs to the frontend securely to fetch and display data in real-time.",
      icon: <FaPlug />,
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
          Services I Offer <span className="text-red-500">🔥</span>
        </motion.h2>
        <motion.p
          className="text-[#F5EFE7] text-center lg:text-left mb-12"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          These are some of the services I offer as a software developer.
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
