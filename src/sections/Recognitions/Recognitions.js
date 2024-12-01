import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import TitleSection from "../../components/TitleSection/TitleSection";
import RecogntionImage from "../../assets/png/ReconocimientoInnovus.jpg";
import ModalPhoto from "../../components/ModalPhoto/ModalPhoto";

import "./Recognitions.css";

function Recognitions() {
  const { t } = useTranslation();
  const [showPhotoModal, setShowPhotoModal] = useState(false);

  const openPhotoModal = () => {
    setShowPhotoModal(true);
  };

  const closePhotoModal = () => {
    setShowPhotoModal(false);
  };

  const handleShowPhoto = () => {
    openPhotoModal();
  };

  return (
    <section className="container pt-5 pt-md-3 pb-xxl-5" id="recognitions">
      <div className="row ">
      <div className="col-12 text-center pt-lg-5 pt-xxl-5 mt-xxl-3">
          <TitleSection t={t} title={t("RecognitionsTitle")} />
        </div>
        <div className="container-recog">
          {/* <div className="col-12 recog-subtitle d-none d-lg-block pb-2 ">
            <p>{t("RecognitionsSubtitle1")}</p>
          </div> */}
          <div className="col-12">
            <div className="row">
              <div
                className="col-12 col-md-4 col-lg-5 recog-content"
                onClick={handleShowPhoto}
              >
                <img
                  src={RecogntionImage}
                  alt="Reconocimiento Innovus"
                  className="recog-img"
                />
              </div>
              <div className="col-12 col-md-8 col-lg-7 pt-5 pt-lg-4">
                <div className="row">
                  <div className="quote col-12">
                  <div class="quote-container">
                      <blockquote>
                        <p>{t("RecognitionQuote")}</p>
                        <footer>— {t("RecognitionQuoteOwner")}</footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showPhotoModal && (
        <ModalPhoto handleCloseModal={closePhotoModal} title={t("RecognitionsTitle")}>
          <div className="container py-4">
            <div className="row">
              <div className="col-12 p-0">
                <img
                  src={RecogntionImage}
                  alt="Reconocimiento Innovus"
                  className="recog-img"
                />
              </div>
            </div>
          </div>
        </ModalPhoto>
      )}
    </section>
  );
}

export default Recognitions;
