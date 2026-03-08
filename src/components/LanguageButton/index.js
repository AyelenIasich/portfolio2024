import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { HiTranslate } from "react-icons/hi";
import "./LanguageButton.css";

function LanguageButton() {
  const { i18n } = useTranslation();
  const [showHint, setShowHint] = useState(false);
  const [isGlowing, setIsGlowing] = useState(false);

  useEffect(() => {
    setShowHint(true);
    setIsGlowing(true);

    const glowTimer = setTimeout(() => setIsGlowing(false), 10000);
    const hintTimer = setTimeout(() => {
      setShowHint(false);
    }, 15000);

    return () => {
      clearTimeout(glowTimer);
      clearTimeout(hintTimer);
    };
  }, []);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
    setShowHint(false);
  };

  const hintMessage =
    i18n.language === "es"
      ? "Tip: podés cambiar idioma acá (ES/EN)."
      : "Tip: you can switch language here (EN/ES).";

  return (
    <div className="language-btn-wrapper">
      {showHint && <div className="language-tooltip">{hintMessage}</div>}
      <button
        type="button"
        onClick={toggleLanguage}
        className={`language-btn ${isGlowing ? "language-btn-glow" : ""}`}
        aria-label="Change language"
      >
        <HiTranslate  className="icon-lang"/>
      </button>
    </div>
  );
}

export default LanguageButton;
