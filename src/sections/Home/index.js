import React from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as BgHomeSVG } from "../../assets/svg/bg-home-alt7.svg";
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

  const handleContactMe = () =>{
    console.log("redirect to contact me section ") 
  };

  return (
    <section className="home-section">
      <BgHomeSVG className="background-svg d-none d-md-block" />
      <BgHomeMobile className="background-svg  d-md-none" />
      <div className="container">
        <div className="row content-row " >
          <div className="col-12 col-md-6 align-self-center justify-content-center order-2 text-content col-home ps-4">
            <h1 className="lastName display-4">
              <span className="name">Ayelén</span> Iasich
            </h1>
            <h2 className="job-position">FULL STACK DEVELOPER</h2>
            <p className="description pt-4">{t("descriptionHome")}</p>
            <div className="button-group pt-3 pt-lg-3 pt-xxl-5 pb-3  d-flex flex-column align-items-center d-flex d-md-block justify-content-md-start ">
              <SecondaryBtn label={t("LetsTalk")} onClick={handleDownloadCV} isContactBtn={true} extraStyle={"me-md-4 mb-3 mb-md-0"}/>
              <PrimaryBtn label={t("DownloadCV")} onClick={handleContactMe} />
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center order-md-2  mt-5 pt-3 pt-md-0  image-content col-home">
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
