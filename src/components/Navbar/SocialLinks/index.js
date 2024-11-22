import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { socialLinks } from "../../../config/socialLinks";
import "./SocialLinks.css";

function SocialLinks() {
  return (
    <>
      <li className="nav-item ps-md-3 d-none d-lg-block">
        <a
          className="nav-link"
          href={socialLinks.github}
        >
          <IoLogoGithub className="social-icon github" />
        </a>
      </li>
      <li className="nav-item pe-md-3 d-none d-lg-block">
        <a
          className="nav-link"
          href={socialLinks.linkedin}
        >
          <IoLogoLinkedin className="social-icon linkedin" />
        </a>
      </li>
    </>
  );
}

export default SocialLinks;
