import React, { useState } from "react";
import "./TechCard.css";
import SkeletonImage1 from "../SkeletonImage/SkeletonImage1";

function TechCard({ image, tech, techDescription }) {
  const [isTechLoading, setIsTechLoading] = useState(true);

  const handleImageTechLoad = () => {
    setIsTechLoading(false);
  };
  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-4   ">
      <div className="tech-card row mx-md-1 mx-sm-1 my-3">
        <div className="tech-img-container col-2">
          <SkeletonImage1
            isLoading={isTechLoading}
            image={image}
            handleImageLoad={handleImageTechLoad}
            alt={`${tech} logo`}
            imageStyle={"tech-img"}
            skeletonStyle={"tech-img"}
          />
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
