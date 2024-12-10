import React from "react";
import "./SkeletonImage.css";

function SkeletonImage1({ isLoading, image, handleImageLoad, alt, imageStyle, skeletonStyle }) {
  return (
    <>
      {isLoading && <div  className={`skeleton-image-generic ${skeletonStyle || ""} `} ></div>}
      <img
        src={image}
        alt={alt}
        className={`${isLoading ? "hidden" : ""} ${imageStyle || ""}`}
        onLoad={handleImageLoad}
        // loading="lazy"
      />
    </>
  );
}

export default SkeletonImage1;
