import React from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as BgHomeSVG } from "../../assets/svg/bg-home-alt8.svg";
import { ReactComponent as BgHomeMobile } from "../../assets/svg/bg-home-mobile3.svg";
import ayeIasich from "../../assets/png/ayeIasich.png";
import ScrollDown from "../../components/ScrollDown";
import PrimaryBtn from "../../components/Buttons/PrimaryBtn";
import "./Home.css";
import SecondaryBtn from "../../components/Buttons/SecondaryBtn";

function Home() {
  const { t, i18n } = useTranslation();

  const handleDownloadCV = () => {
    window.open(
      "https://drive.google.com/file/d/1JniB1TdmTa74xu3j-w-lv5zP7sCwWKfb/view?usp=sharing",
      "_blank"
    );
  };

  const handleContactMe = () => {
    console.log("redirect to contact me section ");
  };

  return (
    <section className="home-section">
      <BgHomeSVG className="background-svg d-none d-lg-block" />
      <BgHomeMobile className="background-svg  d-lg-none" />
      <div className="container d-flex  align-items-center justify-content-center ">
        <div className="row content-row ">
          <div className="col-12 col-lg-6 align-self-center justify-content-center order-2 text-content col-home ">
            <h1 className="lastName display-4">
              <span className="name">Ayelén</span> Iasich
            </h1>
            <h2 className="job-position">FULL STACK DEVELOPER</h2>
            <p className="description pt-4">{t("descriptionHome")}</p>
            {/* <div className="button-group pt-3 pt-lg-3 pt-xxl-5 pb-3  d-flex flex-column align-items-center d-sm-block justify-content-sm-start "> */}
            <div className="button-group pb-3 d-flex d-md-block justify-content-center justify-md-content-start">
              <SecondaryBtn
                label={t("LetsTalk")}
                onClick={handleDownloadCV}
                isContactBtn={true}
                extraStyle={"me-2 me-md-4 mb-3 mb-md-0 mt-3 mt-lg-3 mt-xxl-5 "}
              />
              <PrimaryBtn label={t("DownloadCV")} onClick={handleContactMe} extraStyle={"mt-3 mt-lg-3 mt-xxl-5"} />
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center order-lg-2  mt-5 pt-3 pt-md-0  image-content col-home">
            <img
              src={ayeIasich}
              alt="Ayelen Iasich selfie"
              className="profile-image"
            />
          </div>
          <div className="scroll-down-container">
            <ScrollDown t={t} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
