const ExperienceTimeline = () => {
    const experiences = [
      {
        year: "2024 - Present",
        title: "Frontend Developer",
        company: "Uncut AI",
        description:
          "Developed modern, responsive user interfaces using React and TailwindCSS.",
      },
      {
        year: "2020 - 2022",
        title: "Intern",
        company: "Interface ICT",
        description:
          "Worked on interactive web apps and contributed to backend APIs.",
      },
      {
        year: "2022 - 2023",
        title: "Intern",
        company: "Femtech",
        description:
          "Learned the basics of web development and contributed to small projects.",
      },
    ];
  
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl lg:text-4xl font-bold text-white text-center mb-6 lg:mb-6">
            Experience Timeline <span className="text-red-500">📜</span>
          </h2>
          <div className="border-l border-[#F5EFE7] pl-8">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-8 relative">
                <div className="absolute -left-6 top-1.5 w-4 h-4 bg-red-500 rounded-full"></div>
                <h3 className="text-xl font-semibold text-[#D8C4B6]">
                  {exp.year}
                </h3>
                <h4 className="text-lg font-bold text-white">
                  {exp.title} - {exp.company}
                </h4>
                <p className="text-[#F5EFE7] text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ExperienceTimeline;
  