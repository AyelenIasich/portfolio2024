import React from "react";
import "./TitleSection.css";

function TitleSection({t, title}) {
  return (
    <div className="title-container">
      <h1 className="title-background">{title}</h1>
      <h2 className="title-foreground">{title}</h2>
    </div>
  );
}

export default TitleSection;
