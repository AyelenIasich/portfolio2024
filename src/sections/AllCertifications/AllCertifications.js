import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import TitleSection from "../../components/TitleSection/TitleSection";
import EducationCard from "../../components/EducationCard/EducationCard";
import certificationData from "../../Data/certificationData";
import { categoriesCertificates } from "../../Data/certificationData";
import SecondaryBtn from "../../components/Buttons/SecondaryBtn";
import EmptyEducationCard from "../../components/EmptyEducationCard/EmptyEducationCard";
import { useNavigate } from "react-router-dom";
import "./AllCertifications.css";
import BackButton from "../../components/BackButton/BackButton";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";

function AllCertifications() {
  const { t } = useTranslation();
  const [visibleItems, setiVisibleItems] = useState(4);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const certifications = certificationData(t);
  const navigate = useNavigate();

  const handleShowAllCertificate = () => {
    setiVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  };

  const handleGoBackCertificate = () => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("certifications");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const categoriesCertificates = [
    "FrontendDevelopment",
    "Infrastructure&OS",
    "Programming&&Logic",
  ];

  const filteredCertifications =
  selectedCategory === "all"
    ? certifications
    : certifications.filter((cert) => cert.category === selectedCategory);

  return (
    <section className="container mb-5" id="AllCertifications">
      <div className="row ">
        <div className="col-12 col-md-10 col-lg-9 col-xxl-8  mx-auto pt-5">
          <BackButton handleGoBack={handleGoBackCertificate} />
        </div>
        <div className="col-12 text-center ">
          <TitleSection t={t} title={t("CertificationTitle")} />
        </div>
        <div className="col-12 col-md-10 col-lg-9 col-xxl-8 mx-auto">
          {/*Category filter */}
          <CategoryFilter
            categories={categoriesCertificates}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
        <div className="col-12 col-md-10 col-lg-9 col-xxl-8  mx-auto">
          <p className="results-counter">
            {t("ShowingResults", {
              current: Math.min(visibleItems, filteredCertifications.length),
              total: filteredCertifications.length,
            })}
          </p>
        </div>
        <div className="col-12 col-md-10 col-lg-9 col-xxl-8  mx-auto">
          {filteredCertifications
            ? filteredCertifications
                .slice(0, visibleItems)
                .map((ed, index) => <EducationCard key={index} {...ed} />)
            : Array.from({ length: 4 }).map((_, index) => (
                <EmptyEducationCard key={index} />
              ))}

          {visibleItems < filteredCertifications.length && (
            <div className="col-12 text-center">
              <SecondaryBtn
                label={t("BtnShowMore")}
                onClick={handleShowAllCertificate}
                isContactBtn={false}
                extraStyle="btn-show-more"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default AllCertifications;
