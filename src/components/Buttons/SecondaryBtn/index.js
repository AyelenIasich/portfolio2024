import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import "./SecondaryBtn.css";

function SecondaryBtn({ label, onClick, isContactBtn, extraStyle, customIcon }) {
  const shouldShowIcon = Boolean(isContactBtn || customIcon);

  return (
    <button onClick={onClick} className={`secondary-btn ${extraStyle || ""}`}>
      <span className={`${shouldShowIcon ? "pe-3" : ""} `}>{label}</span>
      {customIcon || (isContactBtn && <FaPaperPlane />)}
    </button>
  );
}

export default SecondaryBtn;
