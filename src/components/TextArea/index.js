import React from "react";
import "./TextArea.css";

function TextArea({ onChange, value, placeholder, label }) {
  return (
    <>
      <label className="label-textarea py-3 pt-lg-4 ">{label}</label>
      <textarea
        className="textarea-create"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={4}
      ></textarea>
    </>
  );
}

export default TextArea;
