const StackLogos = () => {
    const logos = [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        alt: "HTML Logo",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        alt: "CSS Logo",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        alt: "JavaScript Logo",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        alt: "React Logo",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        alt: "TailwindCSS Logo",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        alt: "NodeJS Logo",
      },
    ];
  
    return (
      <section className="py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-6">
            Skills <span className="text-red-500">👩‍💻</span>
        </h2>
        <p className="text-[#F5EFE7] text-center mb-8">
            These are some of the skills I've learned over the past years.
        </p>
        <div className="max-w-7xl mx-auto px-6 flex justify-center items-center gap-8 flex-wrap">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-32 h-32 flex justify-center items-center border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-lg transition"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default StackLogos;
  