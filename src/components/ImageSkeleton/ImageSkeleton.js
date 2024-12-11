import React from "react";
import "./ImageSkeleton.css";

function ImageSkeleton({ isLoading, certificate, handleImageLoad }) {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12 p-0">
          {isLoading && <div className="skeleton-image"></div>}
          <img
            src={certificate}
            alt="certificate"
            className={`recog-img ${isLoading ? "hidden" : ""}`}
            onLoad={handleImageLoad}
            // loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default ImageSkeleton;
