import React from "react";
import "./Modal.css";

function Modal({ children, title, handleCloseModal, extraStyle }) {
  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content p-4 m-1">
          <div className="exp-header">
            <h5 className={`modal-title ${extraStyle}`}>{title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleCloseModal}
            />
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
