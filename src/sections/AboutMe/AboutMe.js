import React from "react";
import { useTranslation } from "react-i18next";
import "./AboutMe.css";
import TitleSection from "../../components/TitleSection/TitleSection";

function AboutMe() {
  const { t, i18n } = useTranslation();

  return (
    <section>
      <div className="container" id="aboutMe">
        <div className="row">
          <div className="col-12 text-center py-5">
            <TitleSection t={t} title={t("AboutMeTitle")}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
