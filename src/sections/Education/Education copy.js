import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import TitleSection from "../../components/TitleSection/TitleSection";
import EducationCard from "../../components/EducationCard/EducationCard";
import educationData from "../../Data/educationData";
import SecondaryBtn from "../../components/Buttons/SecondaryBtn";

import "./Education.css";
import EmptyEducationCard from "../../components/EmptyEducationCard/EmptyEducationCard";

function Education() {
  const { t } = useTranslation();
  const [visibleItems, setiVisibleItems] = useState(4);
  const [isLoading, setIsLoading] = useState(true);
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const educationInfo = educationData(t);
    setEducation(educationInfo);
    setIsLoading(false);
  }, []);

  const handleShowMore = () => {
    setiVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  };

  return (
    <section className="container pt-3 mt-md-5" id="education">
      <div className="row ">
        <div className="col-12 text-center pt-5 pt-xxl-5 mt-xxl-3">
          <TitleSection t={t} title={t("EducationTitle")} />
        </div>
        <div className="education-content">
          <div className="col-12 col-md-10 col-lg-9 col-xxl-8  mx-auto">
            <p className="results-counter">
              {t("ShowingResults", {
                current: Math.min(visibleItems, education.length),
                total: education.length,
              })}
            </p>
          </div>
          <div className="col-12 col-md-10 col-lg-9 col-xxl-8  mx-auto">
            {isLoading
              ? Array.from({ length: 4 }).map((_, index) => (
                  <EmptyEducationCard key={index} />
                ))
              : education
                  .slice(0, visibleItems)
                  .map((ed, index) => <EducationCard key={index} {...ed} />)}

            {visibleItems < education.length && (
              <div className="col-12 text-center">
                <SecondaryBtn
                  label={t("BtnShowMore")}
                  onClick={handleShowMore}
                  isContactBtn={false}
                  extraStyle="btn-show-more"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
