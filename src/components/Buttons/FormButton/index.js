import React from "react";
import "./FormButton.css";

function FormButton({ onClick, label, extraStyle }) {
  return (
    <button
      onClick={onClick}
      className={`form-btn ${extraStyle ? extraStyle : ""}`}
      type="submit"
    >
      {label}
    </button>
  );
}

export default FormButton;
