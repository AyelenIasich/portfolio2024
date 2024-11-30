import React from "react";
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
import "../i18n/i18n";

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <AboutMe/>
      <StatInformation/>
      <Experience/>
      <SkillBanner/>
      {/* <Projects/> */}
      <Recognitions/>
      <ContactMe/>
      <Footer/>
      <LanguageButton />
    </>
  );
}

export default App;
