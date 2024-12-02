import React from "react";
import "./EmptyEducationCard.css";

function EmptyEducationCard() {
  return (
    <div className="purple-card skeleton mb-4 py-lg-4 px-lg-4">
      <div className="row">
        <div className="col-3 col-lg-2 logo-img-container">
          <div className="skeleton-logo"></div>
        </div>
        <div className="col-9 col-lg-10">
          <div className="card-header pb-2">
            <div className="skeleton-text skeleton-title"></div>
            {/* <div className="skeleton-text skeleton-period"></div> */}
          </div>
          <div className="card-content">
            <div className="skeleton-text skeleton-subtitle"></div>
            <div className="skeleton-text skeleton-description"></div>
            <div className="skeleton-text skeleton-description"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmptyEducationCard;
