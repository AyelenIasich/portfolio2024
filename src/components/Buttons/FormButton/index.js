import React from "react";
import "./FormButton.css";

function FormButton({ onClick, label, extraStyle }) {
  return (
    <div className="pt-3">
      <button
        onClick={onClick}
        className={`form-btn ${extraStyle ? extraStyle : ""}`}
        type="submit"
      >
        {label}
      </button>
    </div>
  );
}

export default FormButton;
