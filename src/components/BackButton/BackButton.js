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
    <div className="back-button-container">
      <button onClick={GoBack} className="back-button my-3 mb-md-4 ms-3 ms-md-0">
        <FaArrowLeft className="back-icon" />{" "}
        <span className="ps-2 ">{t("GoBack")}</span>
      </button>
    </div>
  );
}

export default BackButton;
