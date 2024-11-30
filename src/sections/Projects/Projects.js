import React from "react";
import { useTranslation } from "react-i18next";
import TitleSection from "../../components/TitleSection/TitleSection";

function Projects() {
  const { t } = useTranslation();

  return (
    <section className="container pt-3" id="projects">
      <div className="row ">
        <div className="col-12 text-center pt-5 pt-xxl-5 mt-xxl-3">
          <TitleSection t={t} title={t("ProjectsTitle")} />
        </div>
      </div>
    </section>
  );
}

export default Projects;
