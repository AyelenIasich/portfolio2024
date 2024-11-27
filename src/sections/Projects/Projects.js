import React from "react";
import { useTranslation } from "react-i18next";
import TitleSection from "../../components/TitleSection/TitleSection";

function Projects() {
  const { t } = useTranslation();

  return (
    <section className="container py-lg-5 py-xxl-5" id="projects">
      <div className="row">
        <div className="col-12  text-center ">
          <TitleSection t={t} title={t("ProjectsTitle")} />
        </div>
      </div>
    </section>
  );
}

export default Projects;
