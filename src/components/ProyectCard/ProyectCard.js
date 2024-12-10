import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import Badges from "../Badges/Badges";
import "./ProyectCard.css";
import ModalPhoto from "../ModalPhoto/ModalPhoto";
import ImageSkeleton from "../ImageSkeleton/ImageSkeleton";
import ModalContent from "../ModalContent/ModalContent";

function ProyectCard({
  image,
  isShowMoreInfo = true,
  description,
  title,
  title2,
  period,
  category,
  tech,
  description2,
  alertProyect,
  linkRepoFrontend,
  linkWeb,
  isShowBtns = false,
  linkMoreInfo,
  isArgentinaPrograma = false,
  isShowModalPhotoProject = false,
  paragraphModal0,
  paragraphModal1,
  listTitle,
  listItem,
  paragraphModal2,
  paragraphModal3,
  paragraphModal4,
  paragraphModal5,
  paragraphModal6,
  isYazta = false,
}) {
  const { t } = useTranslation();
  const [isProjLoading, setIsProjLoading] = useState(true);

  const handleProjectImageLoad = () => {
    setIsProjLoading(false);
  };

  const navigate = useNavigate();

  const handleMoreInfo = () => {
    if (isShowModalPhotoProject) {
      openModal();
    } else if (isYazta === true) {
      navigate(linkMoreInfo);
      // setTimeout(() => {
      //   const section = document.getElementById(linkMoreInfo);
      //   if (section) {
      //     section.scrollIntoView({ behavior: "smooth" });
      //   }
      // }, 100);
    }
  };
  const [showProjectModal, setShowProjectModal] = useState(false);

  const openModal = () => {
    setShowProjectModal(true);
  };

  const closeModal = () => {
    setShowProjectModal(false);
  };

  const [showProjectPhotoModal, setShowProjectPhotoModal] = useState(false);

  const openModalPhotoProjectModal = () => {
    setShowProjectPhotoModal(true);
  };

  const closeModalPhotoProject = () => {
    setShowProjectPhotoModal(false);
  };

  const [isPgLoading, setIsPgLoading] = useState(true);

  const handleImageProjectLoad = () => {
    setIsPgLoading(false);
  };
  return (
    <>
      <div className="proyect-card  mb-4 ">
        <div className="row">
          <div className="col-12 col-lg-5">
            {/* Project image */}
            <div className="logo-proyect-container w-100 h-100  ps-lg-4 pt-lg-4 pb-lg-4 pe-lg-0 pt-3 px-3 ">
              {isProjLoading && <div className="skeleton-project-img1 "></div>}
              <img
                src={image}
                alt={`${title} logo`}
                className="logo-proyect"
                onLoad={handleProjectImageLoad}
                onClick={openModalPhotoProjectModal}
              />
            </div>
          </div>
          <div className="col-12 col-lg-7 py-lg-4 py-4">
            <div className="card-header pb-2 px-3">
              <p className="category-proyect m-0">{category}</p>
              <p className="period-proyect d-none d-lg-block m-0 pe-lg-3">
                {period}
              </p>
            </div>
            <div className="card-content px-3 ">
              <h3 className="proyect-title pt-2 m-0 pb-3">{title}</h3>
              {/* Badges technologies */}
              <Badges tech={tech} />

              <p className="period-proyect d-lg-none pt-3 m-0">{period}</p>

              {description && (
                <div className="description-proyect pt-3 pb-2 pt-md-4">
                  {description}
                </div>
              )}
              {description2 && (
                <div className="description-proyect pb-2">{description2}</div>
              )}
              {alertProyect && (
                <div className="alertProyect pb-2 pt-0">{alertProyect}</div>
              )}

              {isShowBtns && (
                <div className="proyect-btns align-items-center mt-3 ">
                  {linkRepoFrontend && (
                    <a
                      className="nav-link  me-3  web-btn"
                      href={linkRepoFrontend}
                    >
                      <IoLogoGithub className="web-btn-icon" />{" "}
                      <span className="">Github</span>
                    </a>
                  )}
                  <a className="nav-link  web-btn" href={linkWeb}>
                    <TbWorld className="web-btn-icon" />{" "}
                    <span className="">{t("btnTry")}</span>
                  </a>
                </div>
              )}

              {isShowMoreInfo && (
                <div className="more-btn pt-2" onClick={handleMoreInfo}>
                  <p className="m-0">
                    {t("ShowMoreInfoProyect")}{" "}
                    <FaArrowRightLong className="icon-arrow-right" />
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {showProjectModal && (
        <ModalPhoto handleCloseModal={closeModal}>
          <ModalContent
            title={title2}
            paragraphModal0={paragraphModal0}
            paragraphModal1={paragraphModal1}
            listTitle={listTitle}
            listItem={listItem}
            paragraphModal2={paragraphModal2}
            paragraphModal3={paragraphModal3}
            paragraphModal4={paragraphModal4}
            paragraphModal5={paragraphModal5}
            paragraphModal6={paragraphModal6}
            linkRepoFrontend={linkRepoFrontend}
            linkWeb={linkWeb}
          />
        </ModalPhoto>
      )}
      {showProjectPhotoModal && (
        <ModalPhoto handleCloseModal={closeModalPhotoProject}>
          <ImageSkeleton
            isLoading={isPgLoading}
            certificate={image}
            handleImageLoad={handleImageProjectLoad}
          />
        </ModalPhoto>
      )}
    </>
  );
}

export default ProyectCard;
