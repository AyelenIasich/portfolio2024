import React from "react";
import { useTranslation } from "react-i18next";
import TitleSection from "../../components/TitleSection/TitleSection";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import experienceData from "../../Data/experienceData";
import "./Experience.css";

function Experience() {
  const { t } = useTranslation();
  const experiences = experienceData(t);

  return (
    <section className="container pt-3" id="experience">
      <div className="row ">
        <div className="col-12 text-center pt-5 pt-xxl-5 mt-xxl-3">
          <TitleSection t={t} title={t("ExperienceTitle")} />
        </div>
        <div className="col-12 col-md-10 col-lg-10 col-xxl-8  mx-auto">
        {experiences.map((exp, index)=>(
            <ExperienceCard  key={index} {...exp}/>
        ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
