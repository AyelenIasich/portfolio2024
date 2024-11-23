import React from "react";
import "./StatCard.css";

function StatCard({ number, label , extraStyle}) {
  return (
    <div  className={`circle-container ${extraStyle ? extraStyle : ""}`}>
      <p className="circle-number">{number}</p>
      <p className="circle-label">{label}</p>
    </div>
  );
}

export default StatCard;
