const Header = () => {

  return (
    <header className="w-full">
      <div className="flex items-center justify-between w-full py-5 pl-10 pr-6 md:pl-20 md:pr-12 lg:px-36">
        <div className="flex items-center">
          <h2 className="text-lg text-[#D8C4B6] font-bold">Sadiq.</h2>
        </div>

        <div className="items-center flex flex-row space-x-4 md:flex lg:mr-20">
          <a
            href="https://github.com/OAsadiq"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-7 h-7  text-gray-400 transition hover:text-[#D8C4B6]"
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

          <a
            href="./assets/Olayinka's CV.pdf"
            download="Sadiq_Resume.pdf"
            className="flex items-center px-3 py-2 lg:px-4 lg:py-2 text-sm font-medium text-[#213555] hover:text-[#F5EFE7] transition bg-[#D8C4B6] rounded-full shadow-[0_4px_10px_rgba(250,250,250,0.3)] hover:bg-[#3E5879] hover:scale-105"
          >
            Download Resume
            <span className="ml-2 text-lg">→</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
