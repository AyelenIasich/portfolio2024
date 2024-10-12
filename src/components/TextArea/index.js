import React from "react";
import "./TextArea.css";

function TextArea({ onChange, value, placeholder, label }) {
  return (
    <>
      <label className="label-textarea py-3">{label}</label>
      <textarea
        className="textarea-create"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
    </>
  );
}

export default TextArea;
