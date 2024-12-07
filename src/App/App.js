import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LanguageButton from "../components/LanguageButton";
import Navbar from "../components/Navbar";
import Home from "../sections/Home";
import ContactMe from "../sections/ContactMe";
import Footer from "../sections/Footer";
import AboutMe from "../sections/AboutMe/AboutMe";
import StatInformation from "../sections/StatInformation/StatInformation";
import Projects from "../sections/Projects/Projects";
import Experience from "../sections/Experience/Experience";
import SkillBanner from "../sections/SkillBanner/SkillBanner";
import Recognitions from "../sections/Recognitions/Recognitions";
import Certifications from "../sections/Certifications/Certifications";
import AllCertifications from "../sections/AllCertifications/AllCertifications";
import Education from "../sections/Education/Education";
import Testimonials from "../sections/Testimonials/Testimonials";
import Technologies from "../sections/Technologies/Technologies";
import "../i18n/i18n";
import AllProjects from "../sections/AllProjects/AllProjects";
import Fotografia from "../sections/Fotografia/Fotografia";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <AboutMe />
              <StatInformation />
              <Experience />
              <SkillBanner />
              <Projects />
              <Recognitions />
              <Education />
              <Certifications />
              <Testimonials/>
              <Technologies/>
              <ContactMe />
              <Footer />
            </>
          }
        />
        <Route path="/all-certifications" element={<AllCertifications />} />
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="/Fotografia" element={<Fotografia />} />
      </Routes>
      <LanguageButton />
    </Router>
  );
}

export default App;
