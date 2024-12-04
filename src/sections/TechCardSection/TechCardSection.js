import React, { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";
import SecondaryBtn from "../../components/Buttons/SecondaryBtn";
import TechCard from "../../components/TechCard/TechCard";
import "./TechCardSection.css"

function TechCardSection({
  title,
  list,
  visibleItem,
  handleShow,
  isShowBtn = true,
}) {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="col-12 mx-auto mb-5 mb-sm-4">
      <h5 className="ps-lg-4 skills-title mx-1 mx-sm-3 mx-md-0">{title}</h5>
      <div className="row mx-auto mx-1 mb-4">
        {isMobile
          ? //mobile version
            list.slice(0, visibleItem).map((tech, index) => (
              <TechCard key={index} {...tech} />
            ))
          : // desktop version
            list.map((tech, index) => <TechCard key={index} {...tech} />)}

        {isMobile && isShowBtn && visibleItem < list.length && (
          <div className="col-12 text-center pt-3">
            <SecondaryBtn
              label={t("BtnShowMore")}
              onClick={handleShow}
              isContactBtn={false}
              extraStyle="btn-show-more"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default TechCardSection;
