const FooterSection = () => {
    const socialIcons = [
      {
        name: "Twitter",
        icon: "https://img.icons8.com/ios-filled/50/ffffff/twitter.png",
        href: "https://x.com/justsoftech",
      },
      {
        name: "Instagram",
        icon: "https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png",
        href: "https://www.instagram.com/justsoftech/",
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
  
    return (
      <footer className="py-16 bg-[#0A192F] text-[#F5EFE7] text-center">
        <div className="p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            Start a project <span className="text-pink-500">🚀</span>
          </h3>
          <p className="text-gray-400 mb-8">
            Interested in making waves together? Hit me up, I will reply ASAP.
          </p>
          <div className="flex justify-center space-x-4 lg:space-x-6 mb-8">
            {socialIcons.map((icon, index) => (
              <a
                key={index}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition"
              >
                <img
                  src={icon.icon}
                  alt={icon.name}
                  className="w-5 h-5"
                />
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            © 2025 <span className="font-bold">Sadiq</span>
          </p>
        </div>
      </footer>
    );
  };
  
  export default FooterSection;
  