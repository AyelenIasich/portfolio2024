import React from "react";
import { useTranslation } from "react-i18next";
import TitleSection from "../../components/TitleSection/TitleSection";
import EducationCard from "../../components/EducationCard/EducationCard";
import educationData from "../../Data/educationData";
import "./Education.css";


function Education() {
  const { t } = useTranslation();
  const education = educationData(t);

  return (
    <section className="container pt-3" id="education">
      <div className="row ">
        <div className="col-12 text-center pt-5 pt-xxl-5 mt-xxl-3">
          <TitleSection t={t} title={t("EducationTitle")} />
        </div>
        <div className="col-12 col-md-10 col-lg-9 col-xxl-8  mx-auto">
        {education.map((ed, index)=>(
            <EducationCard  key={index} {...ed}/>
        ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
