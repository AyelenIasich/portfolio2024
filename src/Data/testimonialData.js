import IvanBevaqua from '../assets/png/testimonial/Ivan.jpg'
import LucasRivero from '../assets/png/testimonial/lucas.jpg'
import GioRangel from '../assets/png/testimonial/gio.jpg'

const testimonialData = (t) => [
  {
    name: 'Giovana Rangel',
    title: 'Sr Software Engineer NodeJs - ReactJS',
    feedback1: t('Testimonial-feedback3-1'),
    image: GioRangel,
    linkelind: 'https://ar.linkedin.com/in/giovana-rangel-4974a51a9',
  },
  {
    name: 'Lucas Riveros',
    title: 'Full Stack Developer || Odoo Developer',
    feedback1: t('Testimonial-feedback1-1'),
    feedback2: t('Testimonial-feedback1-2'),
    image: LucasRivero,
    linkelind: 'https://www.linkedin.com/in/lucas-riveros-861036180/',
  },
  {
    name: 'Iván Bevaqua',
    title: t('Testimonial-role2'),
    feedback1: t('Testimonial-feedback2-1'),
    feedback2: t('Testimonial-feedback2-2'),
    image: IvanBevaqua,
    linkelind: 'https://www.linkedin.com/in/bevaquaivan/',
  },
]

export default testimonialData
