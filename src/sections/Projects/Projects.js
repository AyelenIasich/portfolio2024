import React from "react";
import { useTranslation } from "react-i18next";
import TitleSection from "../../components/TitleSection/TitleSection";

function Projects() {
  const { t } = useTranslation();

  return (
    <section className="container" id="projects">
      <div className="row">
        <div className="col-12  text-center py-5">
          <TitleSection t={t} title={t("ProjectsTitle")} />
        </div>
      </div>
    </section>
  );
}

export default Projects;
