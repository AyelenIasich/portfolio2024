import React from "react";
import "./StatCard.css";

function StatCard({number, label}) {
  return (
    <div className="row pt-4">
      <div className="col number  col-lg-3">{number}</div>
      <div className="col description-number col-lg-6 ">
        <p className="force-two-lines m-0">{label}</p>
      </div>
    </div>
  );
}

export default StatCard;
