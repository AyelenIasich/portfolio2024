import React from "react";
import { FaArrowDown } from "react-icons/fa";
import "./ScrollDown.css"

function ScrollDown({ t }) {
  return (
    <div className="col-12 d-none d-md-block text-center ">
      <a className="scroll-link">
        {t("ScrollDown")} <FaArrowDown className="icon-arrow-down"/>
      </a>
    </div>
  );
}

export default ScrollDown;
