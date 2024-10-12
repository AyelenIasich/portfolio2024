import React from "react";
import LanguageButton from "../components/LanguageButton";
import Navbar from "../components/Navbar";
import Home from "../sections/Home";
import ContactMe from "../sections/ContactMe";
import "../i18n/i18n";

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <ContactMe/>
      <LanguageButton />
    </>
  );
}

export default App;
