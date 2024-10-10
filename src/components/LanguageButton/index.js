import React from "react";
import { useTranslation } from "react-i18next";
import { FaGlobeAmericas } from "react-icons/fa";
import "./LanguageButton.css";

function LanguageButton() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div  onClick={toggleLanguage}  className="language-btn">
      <button type="button" className="btn-lang">
        <FaGlobeAmericas className="icon-lang"/>
      </button>
    </div>
  );
}

export default LanguageButton;
