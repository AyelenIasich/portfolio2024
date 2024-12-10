import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowRightLong } from "react-icons/fa6";
import ModalPhoto from "../ModalPhoto/ModalPhoto";
import ImageSkeleton from "../ImageSkeleton/ImageSkeleton";
import SkeletonImage1 from "../SkeletonImage/SkeletonImage1";
import "./EducationCard.css";

function EducationCard({
  logo,
  institute,
  titleEducation,
  period,
  description,
  isShowCertification = false,
  certificate,
}) {
  const { t } = useTranslation();

  const [showExperienceModal, setShowExperienceModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  const openEducationModal = () => {
    setShowExperienceModal(true);
  };

  const closeEducationModal = () => {
    setShowExperienceModal(false);
  };
  const [isEducationLoading, setIsEducationLoading] = useState(true);

  const handleImageEducationLoad = () => {
    setIsEducationLoading(false);
  };

  return (
    <>
      <div className="purple-card mb-4 py-lg-4 px-lg-4">
        <div className="row">
          <div className="col-3 col-lg-2 logo-img-container  ">
          <SkeletonImage1
              isLoading={isEducationLoading}
              image={logo}
              handleImageLoad={handleImageEducationLoad}
              alt={`${institute} logo`}
              imageStyle={"logo-img"}
              skeletonStyle={"logo-skeleton-education"}
            />
          </div>
          <div className="col-9 col-lg-10">
            <div className="card-header pb-2">
              <h3 className="institute m-0">{institute}</h3>
              <p className="period-education d-none d-lg-block m-0">{period}</p>
            </div>
            <div className="card-content">
              <p className="titleEducation m-0">{titleEducation}</p>
              <p className="period d-lg-none pt-2 m-0">{period}</p>
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
          <ImageSkeleton
            isLoading={isLoading}
            certificate={certificate}
            handleImageLoad={handleImageLoad}
          />
        </ModalPhoto>
      )}
    </>
  );
}

export default EducationCard;
