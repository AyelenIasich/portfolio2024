import React from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as BgHomeSVG } from "../../assets/svg/bgHome.svg";
import "./Home.css";

function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div className="home-container">
      <BgHomeSVG className="bg-home-svg" />
      <div className="content">
        <h1>{t("welcome")}</h1>
        <p>{t("description")}</p>
      </div>
    </div>
  );
}

export default Home;
