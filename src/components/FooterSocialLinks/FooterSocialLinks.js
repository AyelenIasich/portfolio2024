import React from "react";
import { useTranslation } from "react-i18next";
import { socialLinks } from "../../config/socialLinks";
import { ReactComponent as EmailIcon } from "../../assets/svg/envelope.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/svg/linkedin.svg";
import { ReactComponent as GithubIcon } from "../../assets/svg/github.svg";

import "./FooterSocialLinks.css";

function FooterSocialLinks() {
  const { t } = useTranslation();

  return (
    <div className="footer-social-container pt-3 pt-lg-0">
      <h5 className="footer-title pb-4">{t("socialLinksTitle")}</h5>
      <ul className="footer-social-list pb-5">
        <li className="footer-social-link">
          <a className="" href={socialLinks.github}>
            <GithubIcon className="footer-redes" />
          </a>
        </li>
        <li className="footer-social-link">
        <a className="" href={`mailto:${socialLinks.gmail}`}>
            <EmailIcon className="footer-redes" />
          </a>
        </li>
        <li className="footer-social-link">
          <a className="" href={socialLinks.linkedin}>
            <LinkedinIcon className="footer-redes" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocialLinks;
