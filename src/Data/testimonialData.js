import IvanBevaqua from "../assets/png/testimonial/Ivan.jpg";
import LucasRivero from "../assets/png/testimonial/lucas.jpg";


const testimonialData = (t) => [
  {
    name: "Lucas Riveros",
    title: "Full Stack Developer || Odoo Developer",
    feedback1:t("Testimonial-feedback1-1"),
    feedback2: t("Testimonial-feedback1-2"),
    image: LucasRivero,
  },
  {
    name: "Iván Bevaqua",
    title: t("Testimonial-role2"),
    feedback1: t("Testimonial-feedback2-1"),
    feedback2:  t("Testimonial-feedback2-2"),
    image: IvanBevaqua,
  },
];

export default testimonialData;
