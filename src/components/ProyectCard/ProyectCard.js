import React from "react";
import { useTranslation } from "react-i18next";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import "./ProyectCard.css";
import Badges from "../Badges/Badges";

function ProyectCard({
  image,
  isShowMoreInfo = true,
  description,
  title,
  period,
  category,
  tech,
  description2,
  alertProyect,
  linkRepoFrontend, 
  linkWeb, 
  isShowBtns = false,
}) {
  const { t } = useTranslation();

  return (
    <div className="proyect-card  mb-5 ">
      <div className="row">
        <div className="col-12 col-lg-5">
          <div className="logo-proyect-container w-100 h-100  ps-lg-4 pt-lg-4 pb-lg-4 pe-lg-0 pt-3 px-3 ">
            <img src={image} alt={`${title} logo`} className="logo-proyect" />
          </div>
        </div>
        <div className="col-12 col-lg-7 py-lg-4 px-lg-4 px-5  py-4">
          <div className="card-header pb-2">
            <p className="category-proyect m-0">{category}</p>
            <p className="period-proyect d-none d-lg-block m-0 pe-lg-3">
              {period}
            </p>
          </div>
          <div className="card-content ">
            <h3 className="proyect-title pt-2 m-0 pb-3">{title}</h3>

            <Badges tech={tech} />

            {description && (
              <div className="description-proyect pt-4 pb-2 pt-md-4">
                {description}
              </div>
            )}
            {description2 && (
              <div className="description-proyect pb-2">{description2}</div>
            )}
            {alertProyect && (
              <div className="alertProyect pb-2 pt-0">{alertProyect}</div>
            )}
            <p className="period-proyect d-lg-none pt-2 m-0">{period}</p>

            {isShowMoreInfo && (
              <div className="more-btn pt-2">
                <p className="m-0">
                  {t("ShowMoreInfoProyect")}{" "}
                  <FaArrowRightLong className="icon-arrow-right" />
                </p>
              </div>
            )}
            {isShowBtns && (
              <div className="proyect-btns align-items-center mt-3 ">
                <a className="nav-link bg-mobile-social me-3 " href={linkRepoFrontend}>
                  <IoLogoGithub className="bg-mobile-icon github" />{" "}
                  <span className="">Github</span>
                </a>
                <a className="nav-link bg-mobile-social" href={linkWeb} >
                  <TbWorld className="bg-mobile-icon linkedin" />{" "}
                  <span className="">Pruébalo</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProyectCard;
