import React from "react";
import { useTranslation } from "react-i18next";
import { FaArrowLeft } from "react-icons/fa";
import "./BackButton.css";

function BackButton({ handleGoBack }) {
  const { t } = useTranslation();
    
  const GoBack = () => {
    handleGoBack();
  };

  return (
    <button onClick={GoBack} className="back-button mb-4">
      <FaArrowLeft className="back-icon" /> <span className="ps-2 ">{t("GoBack")}</span>
    </button>
  );
}

export default BackButton;
