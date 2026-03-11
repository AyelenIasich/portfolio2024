import React from "react";
import { IoClose } from "react-icons/io5";
import "./ModalPhoto.css";

function ModalPhoto({ children, title, handleCloseModal, extraStyle }) {
  return (
    <div
      className="modal modal-photo-content show d-block"
      tabIndex="-1"
      role="dialog"
    >
      <div
        className="modal-dialog modal-photo modal-dialog-centered "
        role="document"
      >
        <div className="modal-content modal-content-photo px-md-4 py-md-4 px-2 pt-3 pb-2">
          <div className="modal-photo-header">
            <h5 className={`modal-title-photo ${extraStyle || ""} mb-0 ps-1 ps-2`}>
              {title}
            </h5>
            <button
              type="button"
              className="btn-photo-modal"
              onClick={handleCloseModal}
              aria-label="Cerrar modal"
            >
              <IoClose />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default ModalPhoto;
