import React from "react";
import { useTranslation } from "react-i18next";
import { HiTranslate } from "react-icons/hi";
import "./LanguageButton.css";

function LanguageButton() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div onClick={toggleLanguage}  className="language-btn">
      <div type="button" className="btn-lang">
        <HiTranslate  className="icon-lang"/>
      </div>
    </div>
  );
}

export default LanguageButton;
