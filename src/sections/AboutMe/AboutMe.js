import React from "react";
import { useTranslation } from "react-i18next";
import TitleSection from "../../components/TitleSection/TitleSection";
import AboutMeSelfie from "../../assets/png/AboutMeSelfie.png";
import "./AboutMe.css";

function AboutMe() {
  const { t, i18n } = useTranslation();

  return (
    <section>
      <div className="container" id="aboutMe">
        <div className="row">
          <div className="col-12 text-center py-5">
            <TitleSection t={t} title={t("AboutMeTitle")} />
            <div className="row container-about-me">
              <div className="col-12 col-lg-4 selfie-container">
                <img
                  src={AboutMeSelfie}
                  alt="Ayelen Iasich selfie"
                  className="selfie-image"
                />
              </div>
              <div className="col about-description text-start pt-5 pt-lg-0 ps-4">
                <h3 className="about-subtitle">{t("AboutMeSubtitle1")}</h3>
                <h5 className="about-subtitle2 pt-3">
                  {t("AboutMeSubtitle2")}
                </h5>
                <hr className="line"></hr>
                <p className="about-text">{t("AboutMeDescription1")}</p>
                <p className="about-text">{t("AboutMeDescription2")}</p>
                <p className="about-text">{t("AboutMeDescription4")}</p>
                <p className="about-text">{t("AboutMeDescription3")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
