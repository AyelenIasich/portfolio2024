import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import TitleSection from "../../components/TitleSection/TitleSection";
import EducationCard from "../../components/EducationCard/EducationCard";
import certificationData from "../../Data/certificationData";
import { certificationDataPreview } from "../../Data/certificationData";
import SecondaryBtn from "../../components/Buttons/SecondaryBtn";
import EmptyEducationCard from "../../components/EmptyEducationCard/EmptyEducationCard";
import { useNavigate } from "react-router-dom";
import "./Certifications.css";
import ResultCounter from "../../components/ResultCounter/ResultCounter";

function Certifications() {
  const { t } = useTranslation();
  const [visibleItems, setiVisibleItems] = useState(4);
  const certifications = certificationData(t);
  const certificationsPreview = certificationDataPreview(t);
  const navigate = useNavigate();

  const handleShowCertificate = () => {
    navigate("/all-certifications");
    setTimeout(() => {
      const section = document.getElementById("AllCertifications");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section className="container pt-5 mt-md-5" id="certifications">
      <div className="row ">
        <div className="col-12 text-center pt-5 pt-xxl-5 mt-xxl-3">
          <TitleSection t={t} title={t("CertificationTitle")} />
        </div>

        <div className="col-12 col-md-10 col-lg-10 col-xxl-8  mx-auto">
          {certificationsPreview
            ? certificationsPreview
                .slice(0, visibleItems)
                .map((ed, index) => <EducationCard key={index} {...ed} />)
            : Array.from({ length: 4 }).map((_, index) => (
                <EmptyEducationCard key={index} />
              ))}

          {/* Cards displaying */}
          <ResultCounter
            visibleItems={visibleItems}
            list={certificationsPreview}
            total={certifications}
          />

          {visibleItems < certifications.length && (
            <div className="col-12 text-center">
              <SecondaryBtn
                label={t("BtnShowCerficate")}
                onClick={handleShowCertificate}
                isContactBtn={false}
                extraStyle="btn-show-certifications px-5 "
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
