import React from "react";
import BackButton from "../../components/BackButton/BackButton";
import TitleSection from "../../components/TitleSection/TitleSection";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IoLogoGithub } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import Portfolio2022 from "../../assets/proyects/Portfolio2022.jpg";

import "./Fotografia.css";

function Fotografia() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleGoBackArgentinaPrograma = () => {
    navigate("/all-projects");
    // setTimeout(() => {
    //   const section = document.getElementById("projects");
    //   if (section) {
    //     section.scrollIntoView({ behavior: "smooth" });
    //   }
    // }, 100);
  };

  return (
    <section className="container mb-5" id="ArgentinaProgramaProject">
      <div className="row ">
        <div className="col-12 col-md-10 col-lg-9 col-xxl-8  mx-auto pt-5">
          <BackButton handleGoBack={handleGoBackArgentinaPrograma} />
        </div>
        <div className="col-12 text-center pt-4 pt-md-0">
          <TitleSection t={t} title="Yazta Mx & Yazta Pro" />
        </div>
        <div className=" col-12 col-md-5 mx-auto pb-4">
          <img src={Portfolio2022} alt={``} className="logo-proyect" />
        </div>
        <div className="col-12 col-md-10 col-lg-9 col-xxl-8  mx-auto">
          <div className="col-12 mx-auto">
            <p>{t("ArgentinaProgramaDescription0")}</p>
            <p>{t("ArgentinaProgramaDescription1")}</p>
            <p>{t("ArgentinaProgramaDescription2")}</p>
            <ul>
              <li>{t("ArgentinaProgramaDescription3")}</li>
              <li>{t("ArgentinaProgramaDescription4")}</li>
              <li>{t("ArgentinaProgramaDescription5")}</li>
            </ul>
            <p>{t("ArgentinaProgramaDescription6")}</p>
            <div className="proyect-btns align-items-center  mt-5">
              <a
                className="nav-link  me-3  web-btn"
                href="lhttps://github.com/AyelenIasich/PortfolioFrontEndinkRepoFrontend"
              >
                <IoLogoGithub className="web-btn-icon" />{" "}
                <span className="">Github</span>
              </a>
              <a
                className="nav-link  web-btn"
                href="https://ayeleniasichmyportfolio.web.app/"
              >
                <TbWorld className="web-btn-icon" />{" "}
                <span className="">{t("btnTry")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fotografia;
