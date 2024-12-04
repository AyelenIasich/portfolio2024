import React from "react";
import "./TechCard.css";

function TechCard({ image, tech, techDescription }) {
  return (
   
    <div className="col-12 col-sm-6 col-md-6 col-lg-4   ">
      <div className="tech-card row mx-md-1 mx-sm-1 my-3">
        <div className="tech-img-container col-2">
          <img src={image} alt={`${tech} logo`} className="tech-img" />
        </div>
        <div className="tech-content col-10">
          <h5 className="m-0 tech-title">{tech}</h5>
          <p className="m-0 tech-description pt-1">{techDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default TechCard;
