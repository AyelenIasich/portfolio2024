import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import TitleSection from "../../components/TitleSection/TitleSection";
import proyectsData, { categoriesProyects } from "../../Data/proyectsData";
import ProyectCard from "../../components/ProyectCard/ProyectCard";
import ResultCounter from "../../components/ResultCounter/ResultCounter";
import SecondaryBtn from "../../components/Buttons/SecondaryBtn";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import BackButton from "../../components/BackButton/BackButton";
import "./AllProjects.css"

function AllProjects() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const proyects = proyectsData(t);
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [selectedProjCategory, setSelectedProjCategory] = useState("all");

  const filteredProjects =
    selectedProjCategory === "all"
      ? proyects
      : proyects.filter((proj) => proj.categoryFilter === selectedProjCategory);

  const handleShowProjects = () => {
    setVisibleProjects((prevVisibleItems) => prevVisibleItems + 3);
  };

  const categoriesProject = categoriesProyects(t).map((category) => ({
    key: Object.keys(category)[0],
    value: Object.values(category)[0],
  }));

  const handleGoBackProject = () => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section className="container mb-5" id="allProjects">
      <div className="row ">
        <div className="col-12 col-md-10 col-lg-10 col-xxl-10  mx-auto pt-5">
          <BackButton handleGoBack={handleGoBackProject} />
        </div>
        <div className="col-12 text-center pt-4 pt-md-0">
          <TitleSection t={t} title={t("ProjectsTitle")} />
        </div>

        <div className="col-12 col-md-10 col-lg-10 col-xxl-10  mx-auto ">
          {/* DROPDOWN WITH CATEGORIES */}
          <CategoryFilter
            categories={categoriesProject}
            selectedCategory={selectedProjCategory}
            onCategoryChange={setSelectedProjCategory}
            setVisibleItem={setVisibleProjects}
          />

          {/* PROJECTS CARDS LIST */}
          {filteredProjects.slice(0, visibleProjects).map((proyect, index) => (
            <ProyectCard key={index} {...proyect} />
          ))}

          {/* Cards displaying */}
          <ResultCounter
            visibleItems={visibleProjects}
            list={filteredProjects}
            total={filteredProjects}
          />

          {/* BTN SHOW MORE RESULTS */}
          <div className="col-12 col-md-10 col-lg-9 col-xxl-8  mx-auto">
            {visibleProjects < filteredProjects.length && (
              <div className="col-12 text-center">
                <SecondaryBtn
                  label={t("BtnShowMore")}
                  onClick={handleShowProjects}
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

export default AllProjects;
