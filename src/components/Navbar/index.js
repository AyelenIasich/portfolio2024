import React from "react";
import { ReactComponent as MainLogoSVG } from "../../assets/svg/mainLogo.svg";
import NavItem from "./NavItem";
import { useTranslation } from "react-i18next";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import "./Navbar.css";
import SocialLinks from "./SocialLinks";

function Navbar() {
  const { t, i18n } = useTranslation();

  const linkSectionList = [
    { itemName: t("about"), itemLink: "#" },
    { itemName: t("services"), itemLink: "#" },
    { itemName: t("projects"), itemLink: "#" },
    { itemName: t("experience"), itemLink: "#" },
    { itemName: t("skills"), itemLink: "#" },
  ];

  const handleHireMe = () => {
    console.log("click");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
      <div className="container ">
        <a className="navbar-brand" href="#">
          <MainLogoSVG height={40} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            {linkSectionList.map((itemLink) => (
              <NavItem
                itemName={itemLink.itemName}
                itemLink={itemLink.itemLink}
                key={itemLink.itemName}
              />
            ))}
            <SocialLinks />
            <PrimaryBtn label={t("hireText")} onClick={handleHireMe} extraStyle="d-none d-md-block"/>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
