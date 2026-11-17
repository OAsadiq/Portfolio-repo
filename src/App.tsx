import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header";
import AboutSection from "./components/aboutSection";
import ServicesSection from "./components/servicesSection";
import ProjectsSection from "./components/projectsSection";
import SkillsSection from "./components/skillsSection";
import CertificationsSection from "./components/certificateSection";
import ExperienceTimeline from "./components/experienceTimeline";
import FooterSection from "./components/footer";
import PorfilrCaseStudy from "./pages/PorfilrCaseStudy";

const Home = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 100);
    return () => clearTimeout(t);
  }, [hash]);

  return (
    <>
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <ExperienceTimeline />
    </>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/porfilr" element={<PorfilrCaseStudy />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <FooterSection />
    </div>
  );
};

export default App;
