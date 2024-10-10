import React from "react";
import { useTranslation } from "react-i18next";
import "../i18n/i18n";
import "./App.css";
import LanguageButton from "../components/LanguageButton";

function AppUI() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      {/* Testing translations */}
      <div className="App">
        <header></header>
        <h1>{t("welcome")}</h1>
        <p>{t("description")}</p>
      </div>
      <LanguageButton />
    </div>
  );
}

export default AppUI;
