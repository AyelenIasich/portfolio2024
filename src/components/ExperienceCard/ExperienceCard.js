import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowRightLong } from "react-icons/fa6";
import Modal from "../Modal/Modal";
import ExperienceModal from "../ExperienceModal/ExperienceModal";
import SkeletonImage1 from "../../components/SkeletonImage/SkeletonImage1";
import "./ExperienceCard.css";

function ExperienceCard({
  logo,
  company,
  role,
  modality,
  period,
  description,
  periodLong,
  technologies,
  toolMethologies,
}) {
  const { t } = useTranslation();

  const [showExperienceModal, setShowExperienceModal] = useState(false);

  const openExperienceModal = () => {
    setShowExperienceModal(true);
  };

  const closeExperienceModal = () => {
    setShowExperienceModal(false);
  };
  
  const [isExperienceLoading, setIsExperienceLoading] = useState(true);

  const handleImageExperienceLoad = () => {
    setIsExperienceLoading(false);
  };

  return (
    <>
      <div className="purple-card mb-5 py-lg-4 px-lg-4">
        <div className="row">
          <div className="col-3 col-lg-3 logo-img-container  ">
          <SkeletonImage1
              isLoading={isExperienceLoading}
              image={logo}
              handleImageLoad={handleImageExperienceLoad}
              alt={`${company} logo`}
              imageStyle={"logo-img"}
              skeletonStyle={"logo-skeleton"}
            />
          </div>
          <div className="col-9 col-lg-9">
            <div className="card-header pb-2">
              <h3 className="company m-0">{company}</h3>
              <span className="period d-none d-lg-block">{period}</span>
            </div>
            <div className="card-content">
              <div className="role pb-lg-2 pb-2">{role}</div>
              <div className="period d-lg-none pb-2">{period}</div>
              <div className="modality pb-2">
                {t("modalityTitle")} {modality}
              </div>
              <div className="card-description pb-2">{description}</div>
              <div className="more-btn pt-1" onClick={openExperienceModal}>
                <p className="m-0">
                  {t("moreLink")}{" "}
                  <FaArrowRightLong className="icon-arrow-right" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showExperienceModal && (
        <Modal handleCloseModal={closeExperienceModal} title={company}>
          <ExperienceModal
            periodLong={periodLong}
            role={role}
            modality={modality}
            description={description}
            technologies={technologies}
            toolMethologies={toolMethologies}
          />
        </Modal>
      )}
    </>
  );
}

export default ExperienceCard;
