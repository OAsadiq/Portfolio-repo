const ServicesSection = () => {
  const services = [
    {
      title: "WEB DEVELOPMENT",
      description:
        "I design and build beautiful websites with React, CSS, TailwindCSS, TypeScript, and JavaScript. I also develop backend APIs with Node/ExpressJS.",
    },
    {
      title: "WEB SECURITY",
      description:
        "Providing vulnerability assessment and penetration testing services to identify and mitigate security risks in web applications.",
    },
    {
      title: "GUI APPS",
      description:
        "I design and develop Graphical User Interfaces (GUIs) with Python frameworks like Tkinter and PyQt to deliver intuitive and user-friendly desktop applications.",
    },
    {
      title: "VERSION CONTROL",
      description:
        "Using version control systems like Git/GitHub to collaborate with other developers and manage code changes effectively.",
    },
    {
      title: "CONTINUOUS LEARNING",
      description:
        "Staying updated with the latest frontend technologies, trends, and best practices to deliver modern and innovative solutions.",
    },
    {
      title: "RESPONSIVE DESIGN",
      description:
        "Building websites and applications that work seamlessly on various devices and screen sizes, from desktop to smartphones.",
    },
    {
      title: "API INTEGRATIONS",
      description:
        "Integrating backend services and APIs to the frontend securely to fetch and display data in real-time.",
    },
    {
      title: "CROSS-BROWSER COMPATIBILITY",
      description:
        "Building websites that work on every type of browser: Safari, Chrome, Firefox, Brave, etc.",
    },
    {
      title: "VERSION CONTROL & COLLABORATION",
      description:
        "I work with tools like Git and GitHub for version control and ease of collaborating on projects.",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl lg:text-4xl font-bold text-white text-center mb-2 lg:mb-6">
          Services I Offer <span className="text-red-500">🔥</span>
        </h2>
        <p className="text-[#F5EFE7] text-center mb-12">
          These are some of the services I offer as a software developer.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 lg:p-10 bg-[#213555] rounded-md shadow-[5px_5px_8px_rgba(0,250,250,0.3)] hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold text-[#D8C4B6] mb-4">
                {service.title}
              </h3>
              <p className="text-[#F5EFE7] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
