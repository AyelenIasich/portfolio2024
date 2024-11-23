import React from "react";
import LanguageButton from "../components/LanguageButton";
import Navbar from "../components/Navbar";
import Home from "../sections/Home";
import ContactMe from "../sections/ContactMe";
import Footer from "../sections/Footer";
import AboutMe from "../sections/AboutMe/AboutMe";

import "../i18n/i18n";
import StatInformation from "../sections/StatInformation/StatInformation";

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <AboutMe/>
      <StatInformation/>
      <ContactMe/>
      <Footer/>
      <LanguageButton />
    </>
  );
}

export default App;
