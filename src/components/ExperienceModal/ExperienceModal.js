import React from "react";
import { useTranslation } from "react-i18next";

import "./ExperienceModal.css";

function ExperienceModal({
  periodLong,
  role,
  modality,
  description,
  technologies,
  toolMethologies,
}) {
  const { t } = useTranslation();

  return (
    <div className="pt-3">
      <p className="exp-subtitle ">
        {t("periodSubtitle")}: <span className="exp-answer ps-1">{periodLong}</span>
      </p>
      <p className="exp-subtitle ">
        {t("positionSubtitle")}: <span className="exp-answer ps-1">{role}</span>
      </p>
      <p className="exp-subtitle ">
        {t("modalityTitle")} <span className="exp-answer ps-1">{modality}</span>
      </p>
      <p className="exp-subtitle mb-1">{t("responsibilities")}:</p>
      <p className="exp-answer">{description}</p>
      <p className="exp-subtitle mb-1 ">{t("technologies")}:</p>
      <p className="exp-answer ">{technologies}</p>
      <p className="exp-subtitle  mb-1 ">{t("toolMethodologies")}:</p>
      <ul className="tools-list">
        {toolMethologies.map((tool, index) => (
          <li key={index} className="exp-answer pt-2">{tool}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceModal;
