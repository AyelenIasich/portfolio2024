import React from "react";
import StatCard from "../../components/StatCard/StatCard";
import { useTranslation } from "react-i18next";
import "./StatInformation.css";

function StatInformation() {
  const { t } = useTranslation();

  
  const getExperienceYears = () => {
    const startDate = new Date(2022, 9, 1);
    const now = new Date();
    const years = (now - startDate) / (1000 * 60 * 60 * 24 * 365.2425);
    return Number(years.toFixed(1));
  };

  
  const experienceYears = getExperienceYears();

  return (
    <div className="container-fluid stat-container py-5">
      <div className="row">
        <div className="col  stats-row">
        <StatCard
            number={experienceYears}
            label={t("NumberExperience")}
            isDecimal={true}
            showPlusSign={false}
          />
          <StatCard number={10} label={t("NumberProjects")} />
          <StatCard number={10} label={t("NumberHappyClients")} />
        </div>
      </div>
    </div>
  );
}

export default StatInformation;
