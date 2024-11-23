import React from "react";
import StatCard from "../../components/StatCard/StatCard";
import { useTranslation } from "react-i18next";
import "./StatInformation.css";

function StatInformation() {
  const { t } = useTranslation();

  return (
    <div className="container-fluid stat-container py-5">
      <div className="row">
        <div className="col  stats-row">
          <StatCard number={1.8} label={t("NumberExperience")} />
          <StatCard number={"8 +"} label={t("NumberProjects")} />
          <StatCard number={"8 +"} label={t("NumberHappyClients")} />
        </div>
      </div>
    </div>
  );
}

export default StatInformation;
