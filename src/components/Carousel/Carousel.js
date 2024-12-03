import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Carousel.css";

function Carousel({ testimonials }) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      spaceBetween={50}
      slidesPerView={1}
      style={{
        "--swiper-navigation-color": "#521D60",
        "--swiper-pagination-color": "#521D60",
      }}
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="testimonial-card m-2 m-md-5 row">
            <div className="col-12 col-lg-4 col-xxl-3 testimonial-image-wrapper pt-2">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image "
                loading="lazy"
              />
            </div>

            <div className="testimonial-content col-12 col-lg-8 col-xxl-9 pt-md-2" >
              <p className="testimonial-feedback pt-3 m-0 pt-md-0">{testimonial.feedback1}</p>
              {testimonial.feedback2 &&(
              <p className="testimonial-feedback m-0 pt-md-0">{testimonial.feedback2}</p>

              )}
              <hr className="testimonial-line"></hr>
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-role">{testimonial.title}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
