import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as BgHomeSVG } from "../../assets/svg/bg-home-alt8.svg";
import { ReactComponent as BgHomeMobile } from "../../assets/svg/bg-home-mobile3.svg";
import ayeIasich from "../../assets/png/ayeIasich.png";
import ScrollDown from "../../components/ScrollDown";
import PrimaryBtn from "../../components/Buttons/PrimaryBtn";
import SecondaryBtn from "../../components/Buttons/SecondaryBtn";
import { handleDownloadCV } from "../../utils/cvUtils";
import SkeletonImage1 from "../../components/SkeletonImage/SkeletonImage1";
import "./Home.css";

function Home() {
  const { t } = useTranslation();

  const handleContactMe = () => {
    const section = document.getElementById("contactMe");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const [isSelfie1Loading, setIsSelfie1Loading] = useState(true);

  const handleImageHomeLoad = () => {
    setIsSelfie1Loading(false);
  };

  return (
    <section className="home-section">
      <BgHomeSVG className="background-svg d-none d-xl-block" />
      <BgHomeMobile className="background-svg  d-xl-none" />
      <div className="container d-flex  align-items-center justify-content-center ">
        <div className="row content-row ">
          <div className="col-12 col-lg-6 align-self-center justify-content-center order-2 text-content col-home ">
            <h1 className="lastName display-4">
              <span className="name">Ayelén</span> Iasich
            </h1>
            <h2 className="job-position">FULL STACK DEVELOPER</h2>
            <p className="description pt-4">{t("descriptionHome3")}</p>
            <div className="button-group pb-3 d-flex d-md-block justify-content-center justify-md-content-start ">
              <SecondaryBtn
                label={t("LetsTalk")}
                onClick={handleContactMe}
                isContactBtn={true}
                extraStyle={"me-2 me-md-4 mb-3 mb-md-0 mt-3 mt-lg-3 mt-xxl-4 "}
              />
              <PrimaryBtn
                label={t("DownloadCV")}
                onClick={handleDownloadCV}
                extraStyle={"mt-3 mt-lg-3 mt-xxl-4"}
              />
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center order-lg-2  mt-5 pt-3 pt-md-0  image-content col-home">
            <SkeletonImage1
              isLoading={isSelfie1Loading}
              image={ayeIasich}
              handleImageLoad={handleImageHomeLoad}
              alt={"Ayelen Iasich selfie"}
              imageStyle={"profile-image"}
              skeletonStyle={"skeleton-circle-img"}
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
