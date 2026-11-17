const certifications = [
  { title: "Network Security (in progress, Oct 2026 – Oct 2027)", issuer: "Cyber Institute of Atlanta" },
  { title: "Web Development (Full-stack)", issuer: "Femtech Information Technology Institute" },
  { title: "Cybersecurity", issuer: "Femtech Information Technology Institute" },
  { title: "Python Programming (GUI)", issuer: "Interface ICT Training Institute" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl lg:text-4xl font-bold text-white text-center lg:text-left mb-8">
          Certifications
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <li
              key={cert.title}
              className="border border-[#3E5879] rounded-md px-5 py-4"
            >
              <p className="text-white font-semibold">{cert.title}</p>
              <p className="text-gray-400 text-sm">{cert.issuer}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CertificationsSection;
