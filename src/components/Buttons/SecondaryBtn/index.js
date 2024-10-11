import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import "./SecondaryBtn.css";

function SecondaryBtn({ label, onClick, isContactBtn ,extraStyle}) {
  return (
    <button onClick={onClick} className={`secondary-btn ${extraStyle} ? ${extraStyle} : ""`}>
      <span className={`${isContactBtn ? "pe-3" : ""} `}>{label}</span>
      {isContactBtn && <FaPaperPlane />}
    </button>
  );
}

export default SecondaryBtn;
