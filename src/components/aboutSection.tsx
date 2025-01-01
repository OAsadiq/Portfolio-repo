import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

const AboutSection = () => {
  return (
    <section className="flex flex-col items-center mt-10 h-auto lg:px-20 lg:h-[80vh] lg:flex-row lg:mt-0">
      {/* Text Section */}
      <div className="flex flex-col justify-center max-w-md px-10 space-y-6 lg:max-w-3xl lg:px-16">
        <h2
          className="text-3xl font-bold lg:text-6xl text-[#D8C4B6] animate-text-gradient"
        >
          Creative Software Developer.
        </h2>

        <p
          className="text-sm font-semibold leading-relaxed lg:pt-3 lg:text-sm text-[#F5EFE7]"
        >
          You got here! I'm <span className="text-red-500 underline decoration-purple-700">Sadiq</span>, a Fullstack Developer heavy on Frontend and
          passionate about GUIs and constructing web security. I develop
          industry-standard products that solve everyday problems with an
          emphasis on user experience, accessibility, and performance.
        </p>

        <div className="flex items-center space-x-6 lg:pt-5">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D8C4B6] text-xl hover:text-[#213555] transition rounded-full border border-[#D8C4B6] p-3 hover:bg-[#D8C4B6]"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="items-center flex"
          >
            <FontAwesomeIcon icon={faXTwitter} className="text-[#D8C4B6] text-xl hover:text-[#213555] transition rounded-full border border-[#D8C4B6] p-3 hover:bg-[#D8C4B6]"/>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D8C4B6] text-xl hover:text-[#213555] transition rounded-full border border-[#D8C4B6] p-3 hover:bg-[#D8C4B6]"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <div
        className="relative mt-8 lg:mt-0 w-full max-w-xs mx-auto overflow-hidden shadow-xl lg:w-[800px] group border border-[#F5EFE7] p-3 transition-all 1s lg:hover:animate-zoom-rotate cursor-pointer"
      >
        <img src="./assets/logo.jpeg" className="w-full" />
      </div>
    </section>
  );
};

export default AboutSection;
