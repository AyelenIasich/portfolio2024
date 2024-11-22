import React from "react";
import "./InputGeneric.css";

function InputGeneric(props) {
  const { placeholder, value, onChange, label, name } = props;
  return (
    <>
      <label className="py-3 label-input pt-lg-4 ">{label}</label>
      <input
        type="text"
        className="input-generic"
        placeholder={placeholder}
        aria-label={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </>
  );
}

export default InputGeneric;
