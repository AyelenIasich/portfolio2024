import React from "react";
import "./ModalPhoto.css";

function ModalPhoto({ children, title, handleCloseModal, extraStyle }) {
  return (
    <div className="modal modal-photo-content show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-photo modal-dialog-centered " role="document">
        <div className="modal-content modal-content-photo">
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

export default ModalPhoto;
