import Header from "./components/header"
import AboutSection from "./components/aboutSection"
import ServicesSection from "./components/servicesSection";
import ProjectsSection from "./components/projectsSection";
import SkillsSection from "./components/skillsSection";
import ExperienceTimeline from "./components/experienceTimeline";
import FooterSection from "./components/footer";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceTimeline />
        <FooterSection />
      </div>
    </>
  );
};

export default App;