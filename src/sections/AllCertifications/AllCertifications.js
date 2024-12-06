import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { categoriesCertificates } from "../../Data/certificationData";
import TitleSection from "../../components/TitleSection/TitleSection";
import EducationCard from "../../components/EducationCard/EducationCard";
import certificationData from "../../Data/certificationData";
import SecondaryBtn from "../../components/Buttons/SecondaryBtn";
import EmptyEducationCard from "../../components/EmptyEducationCard/EmptyEducationCard";
import BackButton from "../../components/BackButton/BackButton";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import ResultCounter from "../../components/ResultCounter/ResultCounter";
import "./AllCertifications.css";

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

  const categories = categoriesCertificates(t).map((category) => ({
    key: Object.keys(category)[0],
    value: Object.values(category)[0],
  }));

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
        <div className="col-12 text-center pt-4 pt-md-0">
          <TitleSection t={t} title={t("CertificationTitle")} />
        </div>
        <div className="col-12 col-md-10 col-lg-9 col-xxl-8 mx-auto">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        <div className="col-12 col-md-10 col-lg-9 col-xxl-8  mx-auto">
          {filteredCertifications
            ? filteredCertifications
                .slice(0, visibleItems)
                .map((ed, index) => <EducationCard key={index} {...ed} />)
            : Array.from({ length: 4 }).map((_, index) => (
                <EmptyEducationCard key={index} />
              ))}
        </div>

        {/* Cards displaying */}
        <ResultCounter visibleItems={visibleItems} list={filteredCertifications} />

        <div className="col-12 col-md-10 col-lg-9 col-xxl-8  mx-auto">
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
