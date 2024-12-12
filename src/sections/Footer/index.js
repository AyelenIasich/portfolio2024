import React from "react";
import { useTranslation } from "react-i18next";
import AyelenIasichIcon from "../../assets/png/AyelenIasichIcon.png";
import { ReactComponent as HeartIcon } from "../../assets/svg/heartIcon.svg";
import { handleDownloadCV } from "../../utils/cvUtils"; 
import PrimaryBtn from "../../components/Buttons/PrimaryBtn";
import FooterSocialLinks from "../../components/FooterSocialLinks/FooterSocialLinks";
import linksSectionsData from "../../Data/linksSectionsData";

import "./Footer.css";

function Footer() {
  const { t, i18n } = useTranslation();
  const FooterNavigationLinks = linksSectionsData(t);
  const handleDownloadFooter = () => {
    handleDownloadCV(i18n.language); 
  };

  return (
    <footer className="container-fluid footer-bg ">
      <div className="container footer-content pt-3 pt-lg-5">
        {/* Navigation links sections */}
        <div className="row navigation-links pb-3">
          <div className="col-12 col-lg-4">
            <h5 className="footer-title pb-3 pt-5 pt-lg-0">{t("navigationTitle")}</h5>
            <ul className="nav-footer">
              {FooterNavigationLinks.map((itemLink) => (
                <li>
                  <a
                    className="nav-footer-link"
                    aria-current="page"
                    href={itemLink.itemLink}
                  >
                    {itemLink.itemName}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ayelen Icon section */}
          <div className="col-12  col-lg-4 footer-icon  d-flex align-items-center justify-content-center pt-5 pt-lg-0 order-2 ">
            <img
              src={AyelenIasichIcon}
              alt="Ayelen Iasich Icon"
              className="footer-image"
            />
          </div>

          {/* Social sections */}
          <div className="col-12 col-lg-4 order-lg-2 ">
            <div className="row footer-social pt-4 pt-lg-0">
              <div className="col-12 ">
                <div className="row footer-social-icons">
                  <div className="col-12 ">
                    <FooterSocialLinks/>
                  </div>
                </div>
                <div className="row footer-social-cv ">
                  <div className="col-12 pt-3 pt-lg-0">
                    <h5 className="footer-title pb-5 pb-lg-4">
                      {t("downloadCvTitle")}
                    </h5>
                    <PrimaryBtn label={t("DownloadCV")} onClick={handleDownloadFooter} extraStyle={"footer-btn "} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Last section */}
        <div className="row pt-5 pt-lg-3">
          <div className="col-12 text-center">
            <p className="fs-6">
              {t("MadeWithLove")}  <HeartIcon className="pb-1 heart" />
              {t("MadeWithLove2")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
