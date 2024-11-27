import React from "react";
import "./Marquee.css";

function Marquee({technologies, isLeft}) {
  return (
    <div className="marquee-container my-lg-5">
      <div  className={`marquee ${isLeft ? "scroll-inverse" : "scroll-right"}`}>
        {technologies.map((tech, index) => (
          <img
            key={index}
            src={tech.src}
            alt={tech.alt}
            className="marquee-item"
          />
        ))}
        {technologies.map((tech, index) => (
          <img
            key={`duplicate-${index}`}
            src={tech.src}
            alt={tech.alt}
            className="marquee-item"
          />
        ))}
      </div>
    </div>
  );
}

export default Marquee;
