import React from "react";
import LanguageButton from "../components/LanguageButton";
import Navbar from "../components/Navbar";
import Home from "../sections/Home";
import "../i18n/i18n";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <LanguageButton />
    </>
  );
}

export default App;
