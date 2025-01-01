const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'TailwindCSS',
  'NodeJS',
  'React Native',
  'Git/GitHub',
  'Animations',
  'Creativity',
  'SEO',
  'Communication',
  'Python (GUI)',
  'Collaboration',
  '...',
];

const SkillsSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-2xl lg:text-4xl font-bold text-white text-center mb-2 lg:mb-6">
          Skills <span className="text-yellow-500">👩‍💻</span>
        </h2>
        <p className="text-[#F5EFE7] text-center mb-12">
          These are some of the skills I've learned over the past years.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-2 lg:p-4 bg-[#F5EFE7] rounded-md shadow-lg hover:scale-105 transition-transform text-center"
            >
              <p className="text-lg font-semibold text-[#213555]">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
