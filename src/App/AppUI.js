import React from "react";
import LanguageButton from "../components/LanguageButton";
import Navbar from "../components/Navbar";
import "../i18n/i18n";
import "./App.css";
import Home from "../sections/Home";

function AppUI() {
  return (
    <>
      {/* Testing translations */}
      <Navbar />
      <Home />
      <LanguageButton />
    </>
  );
}

export default AppUI;
