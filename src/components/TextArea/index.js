import React from "react";
import InputError from "../InputError/InputError";
import "./TextArea.css";

function TextArea({ onChange, value, placeholder, label, name, error }) {
  return (
    <>
      <label className="label-textarea py-3 pt-lg-4 ">{label}</label>
      <textarea
        className="textarea-create"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={4}
        name={name}
      ></textarea>
      <InputError formError={error} />
    </>
  );
}

export default TextArea;
