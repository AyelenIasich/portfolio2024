import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import "./SocialLinks.css";

function SocialLinks() {
  return (
    <>
      <li className="nav-item ps-md-3 d-none d-lg-block">
        <a
          className="nav-link"
          aria-current="page"
          href="https://github.com/AyelenIasich"
        >
          <IoLogoGithub className="social-icon github" />
        </a>
      </li>
      <li className="nav-item pe-md-3 d-none d-lg-block">
        <a
          className="nav-link"
          aria-current="page"
          href="https://ar.linkedin.com/in/ayeiasich"
        >
          <IoLogoLinkedin className="social-icon linkedin" />
        </a>
      </li>
      <div className="d-flex flex-column align-items-center mt-3 ">
        <li className="nav-item d-lg-none  mb-3 ">
          <a
            className="nav-link bg-mobile-social"
            aria-current="page"
            href="https://github.com/AyelenIasich"
          >
            <IoLogoGithub className="bg-mobile-icon github " /> <span className="">Github</span>
          </a>
        </li>
        <li className="nav-item d-lg-none mb-3">
          <a
            className="nav-link bg-mobile-social"
            aria-current="page"
            href="https://ar.linkedin.com/in/ayeiasich"
          >
            <IoLogoLinkedin className="bg-mobile-icon linkedin" /> <span className="">LinkedIn</span>
          </a>
        </li>
      </div>
    </>
  );
}

export default SocialLinks;
