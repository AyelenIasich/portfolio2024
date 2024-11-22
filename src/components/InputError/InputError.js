import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import "./InputError.css";

function InputError({ formError }) {
  const [errorVisible, setErrorVisible] = useState(true);

  const handleHideError = () => {
    setErrorVisible(false);
  };

  return (
    <>
      {errorVisible && formError ? (
        <div className="error-wrapper mb-1 mt-2">
          <p className="error-message">{formError}</p>
          <IoMdClose
            className="fa-solid fa-x hide-error"
            onClick={handleHideError}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default InputError;
