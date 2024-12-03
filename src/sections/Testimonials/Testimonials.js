import React from "react";
import { useTranslation } from "react-i18next";
import testimonialData from "../../Data/testimonialData";
import Carousel from "../../components/Carousel/Carousel";
import "./Testimonial.css"

function Testimonials() {
  const { t } = useTranslation();
  const testimonials = testimonialData(t);

  return (
    <section className="container pt-3 pt-xxl-5  mt-xxl-5 pb-5 mb-xxl-5" id="experience">
      <div className="row ">
        <div className="col-12 text-center pt-5 pt-xxl-5 mt-xxl-3 mb-2 mb-xxl-5">
          <h5 className="testimonial-subtitle">{t("WhatPeopleSay")}</h5>
          <h2 className="testimonial-title">{t("Testimonials")}</h2>
        </div>
        <div className="col-12 col-md-10 col-lg-10 col-xxl-9 mt-4 mt-md-0  mx-auto">
          <Carousel testimonials={testimonials}/>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
