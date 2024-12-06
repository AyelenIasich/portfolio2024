import React from "react";
import "./Badges.css"

function Badges({ tech }) {

  return (
    <div className="tech-badge-container ">
      {tech.map((item, index) => (
        <div key={index} className="tech-badge">
          <img src={item.icon} alt={item.name} className="badge-icon-item" />
          <span className="badge-text">{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Badges;
