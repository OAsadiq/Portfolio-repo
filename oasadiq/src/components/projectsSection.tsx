const ProjectsSection = () => {
    const projects = [
      {
        title: "Byond",
        description:
          "I built a multi-page fully responsive website for a clothing brand.",
        technologies: ["HTML", "JavaScript", "CSS"],
        previewLink: "https://byond-brand.vercel.app/",
        githubLink: "https://github.com/OAsadiq/byond-brand-website",
      },
      {
        title: "Ismhab Store",
        description:
          "I built an online store landing page.",
        technologies: ["HTML", "JavaScript", "CSS"],
        previewLink: "https://online-store-sadiq.vercel.app/",
        githubLink: "https://github.com/OAsadiq/online-store",
      },
      {
        title: "Lasi",
        description:
          "I built an onboarding page for a customer support company.",
        technologies: ["HTML", "JavaScript", "VanillaCSS"],
        previewLink: "https://lasi-authentication-page-sadiq.vercel.app/",
        githubLink: "https://github.com/OAsadiq/Lasi-authentication-page",
      },
      {
        title: "Uncut AI",
        description:
          "I built the frontend for an AI video editing application.",
        technologies: ["ReactJS", "TailwindCSS", "Axios", "Map API", "API integration"],
        previewLink: "https://uncutai.io/",
        githubLink: "#",
      },
      {
        title: "Pocket",
        description:
          "I built a clone of Pocket Landing Page with a more modern feel.",
        technologies: ["HTML", "JavaScript", "VanillaCSS"],
        previewLink: "https://saving-app-beige.vercel.app/",
        githubLink: "https://github.com/OAsadiq/saving-app",
      },
      {
        title: "Virtual AR",
        description:
          "I built an online video-based modern landing page.",
        technologies: ["ReactJS", "JavaScript", "TailwindCSS"],
        previewLink: "#",
        githubLink: "#",
      },
    ];
  
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-white text-center mb-2 lg:mb-6">
            Some of my Works <span className="text-red-500">💻</span>
          </h2>
          <p className="text-[#F5EFE7] text-center mb-12">
            Here are some of the fun and recent projects I've worked on.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-8 bg-[#213555] rounded-md shadow-[5px_5px_8px_rgba(0,250,250,0.3)] hover:scale-105 transition-transform flex flex-col justify-center"
              >
                <h3 className="text-xl font-semibold text-[#D8C4B6] mb-4">
                  {project.title}
                </h3>
                <p className="text-[#F5EFE7] text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-[#334155] text-[#F5EFE7] text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center w-full">
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-white px-4 py-2 rounded hover:bg-[#D8C4B6] transition w-[80%]"
                  >
                    <p className="text-black text-sm font-semibold">Preview</p>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 flex justify-end"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.0001 5.25C9.22586 5.25 6.79699 6.91121 5.12801 8.44832C4.28012 9.22922 3.59626 10.0078 3.12442 10.5906C2.88804 10.8825 2.70368 11.1268 2.57736 11.2997C2.51417 11.3862 2.46542 11.4549 2.43187 11.5029C2.41509 11.5269 2.4021 11.5457 2.393 11.559L2.38227 11.5747L2.37911 11.5794L2.10547 12.0132L2.37809 12.4191L2.37911 12.4206L2.38227 12.4253L2.393 12.441C2.4021 12.4543 2.41509 12.4731 2.43187 12.4971C2.46542 12.5451 2.51417 12.6138 2.57736 12.7003C2.70368 12.8732 2.88804 13.1175 3.12442 13.4094C3.59626 13.9922 4.28012 14.7708 5.12801 15.5517C6.79699 17.0888 9.22586 18.75 12.0001 18.75C14.7743 18.75 17.2031 17.0888 18.8721 15.5517C19.72 14.7708 20.4039 13.9922 20.8757 13.4094C21.1121 13.1175 21.2964 12.8732 21.4228 12.7003C21.4859 12.6138 21.5347 12.5451 21.5682 12.4971C21.585 12.4731 21.598 12.4543 21.6071 12.441L21.6178 12.4253L21.621 12.4206L21.6224 12.4186L21.9035 12L21.622 11.5809L21.621 11.5794L21.6178 11.5747L21.6071 11.559C21.598 11.5457 21.585 11.5269 21.5682 11.5029C21.5347 11.4549 21.4859 11.3862 21.4228 11.2997C21.2964 11.1268 21.1121 10.8825 20.8757 10.5906C20.4039 10.0078 19.72 9.22922 18.8721 8.44832C17.2031 6.91121 14.7743 5.25 12.0001 5.25ZM4.29022 12.4656C4.14684 12.2885 4.02478 12.1311 3.92575 12C4.02478 11.8689 4.14684 11.7115 4.29022 11.5344C4.72924 10.9922 5.36339 10.2708 6.14419 9.55168C7.73256 8.08879 9.80369 6.75 12.0001 6.75C14.1964 6.75 16.2676 8.08879 17.8559 9.55168C18.6367 10.2708 19.2709 10.9922 19.7099 11.5344C19.8533 11.7115 19.9753 11.8689 20.0744 12C19.9753 12.1311 19.8533 12.2885 19.7099 12.4656C19.2709 13.0078 18.6367 13.7292 17.8559 14.4483C16.2676 15.9112 14.1964 17.25 12.0001 17.25C9.80369 17.25 7.73256 15.9112 6.14419 14.4483C5.36339 13.7292 4.72924 13.0078 4.29022 12.4656ZM14.25 12C14.25 13.2426 13.2427 14.25 12 14.25C10.7574 14.25 9.75005 13.2426 9.75005 12C9.75005 10.7574 10.7574 9.75 12 9.75C13.2427 9.75 14.25 10.7574 14.25 12ZM15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92898 15.75 8.25005 14.0711 8.25005 12C8.25005 9.92893 9.92898 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12Z"
                          fill="#000000"
                        ></path>
                      </g>
                    </svg>
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-white px-2 py-2 rounded hover:bg-[#D8C4B6] transition"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-5 h-5  text-black transition"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <rect width="24" height="24" fill="none"></rect>
                        <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"></path>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ProjectsSection;
  