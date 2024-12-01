import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowRightLong } from "react-icons/fa6";
import Modal from "../Modal/Modal";
import ExperienceModal from "../ExperienceModal/ExperienceModal";
import "./EducationCard.css";
import ModalPhoto from "../ModalPhoto/ModalPhoto";

function EducationCard({
  logo,
  institute,
  titleEducation,
  period,
  description,
  periodLong,
  technologies,
  toolMethologies,
  isShowCertification = false,
  certificate,
}) {
  const { t } = useTranslation();

  const [showExperienceModal, setShowExperienceModal] = useState(false);

  const openEducationModal = () => {
    setShowExperienceModal(true);
  };

  const closeEducationModal = () => {
    setShowExperienceModal(false);
  };

  return (
    <>
      <div className="purple-card mb-4 py-lg-4 px-lg-4">
        <div className="row">
          <div className="col-3 col-lg-2 logo-img-container  ">
            <img src={logo} alt={`${institute} logo`} className="logo-img" />
          </div>
          <div className="col-9 col-lg-10">
            <div className="card-header pb-2">
              <h3 className="institute m-0">{institute}</h3>
              <span className="period-education d-none d-lg-block">
                {period}
              </span>
            </div>
            <div className="card-content">
              <div className="titleEducation">{titleEducation}</div>
              <div className="period d-lg-none pt-2">{period}</div>
              {description && (
                <div className="description-education pt-2 ">{description}</div>
              )}
              {isShowCertification && (
                <div className="more-btn pt-2" onClick={openEducationModal}>
                  <p className="m-0">
                    {t("SeeCertification")}{" "}
                    <FaArrowRightLong className="icon-arrow-right" />
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {showExperienceModal && (
        <ModalPhoto handleCloseModal={closeEducationModal} title={institute}>
          <div className="container py-4">
            <div className="row">
              <div className="col-12 p-0">
                <img
                  src={certificate}
                  alt="certificate"
                  className="recog-img"
                />
              </div>
            </div>
          </div>
        </ModalPhoto>
      )}
    </>
  );
}

export default EducationCard;
