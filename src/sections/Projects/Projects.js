import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import TitleSection from "../../components/TitleSection/TitleSection";
import proyectsData, { previewProjectsData } from "../../Data/proyectsData";
import ProyectCard from "../../components/ProyectCard/ProyectCard";
import ResultCounter from "../../components/ResultCounter/ResultCounter";
import SecondaryBtn from "../../components/Buttons/SecondaryBtn";
import { useNavigate } from "react-router-dom";

function Projects() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const proyectsPreview = previewProjectsData(t);
  const proyectsAll = proyectsData(t);

  const [visibleProjects, setVisibleProjects] = useState(4);

  const handleShowAllProjects = () => {
    navigate("/all-projects");
    setTimeout(() => {
      const section = document.getElementById("allProjects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section className="container pt-3" id="projects">
      <div className="row ">
        <div className="col-12 text-center pt-5 pt-xxl-5 mt-xxl-3">
          <TitleSection t={t} title={t("ProjectsTitle")} />
        </div>

        <div className="col-12 col-md-10 col-lg-10 col-xxl-10  mx-auto">
          {/* PROJECTS CARDS LIST */}
          {proyectsPreview.map((proyect, index) => (
            <ProyectCard key={index} {...proyect} />
          ))}

          {/* Cards displaying */}
          <ResultCounter
            visibleItems={visibleProjects}
            list={proyectsAll}
            total={proyectsAll}
          />

          {/* BTN SHOW MORE RESULTS */}
          <div className="col-12 text-center">
            <SecondaryBtn
              label={t("btnSeeProjects")}
              onClick={handleShowAllProjects}
              isContactBtn={false}
              extraStyle="btn-show-certifications px-5 "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
