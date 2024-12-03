import IvanBevaqua from "../assets/png/testimonial/Ivan.jpg";
import LucasRivero from "../assets/png/testimonial/lucas.jpg";


const testimonialData = (t) => [
  {
    name: "Lucas Riveros",
    title: "Full Stack Developer || Odoo Developer",
    feedback1:t("Testimonial-feedback1-1"),
    feedback2: t("Testimonial-feedback1-2"),
    image: LucasRivero,
    linkelind:"https://www.linkedin.com/in/lucas-riveros-861036180/"

  },
  {
    name: "Iván Bevaqua",
    title: t("Testimonial-role2"),
    feedback1: t("Testimonial-feedback2-1"),
    feedback2:  t("Testimonial-feedback2-2"),
    image: IvanBevaqua,
    linkelind:"https://www.linkedin.com/in/bevaquaivan/"
  },
];

export default testimonialData;
