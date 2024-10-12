import React from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as BGContactMe } from "../../assets/svg/contact-austraunt2.svg";

import "./ContactMe.css";
import Form from "../../components/Form";

function ContactMe() {
  const { t, i18n } = useTranslation();
  return (
    <section className="container-fluid section-contact p-0">
      <div className="container bg-contact-me p-0">
        <div className="row m-0">
          {/* BACKGROUND VIOLETA CON ASTROUNATA */}
          <div className="col-12 col-lg-6 p-0 bg-austranaut-container">
            <div className="px-3">
              <h5 className="contact-subtitle pt-4 pt-lg-5 mt-lg-3">
                Get in touch
              </h5>
              <h3 className="contact-part2 display-5 py-1">
                <span className="contact-me ">Contact</span> Me
              </h3>
              <p className="description-contact">{t("ContactDescription")}</p>
            </div>

            <div className="astrounat-container p-0 m-0">
              <BGContactMe className="img-austronat" />
            </div>
          </div>
          {/* BACKGROUND BLANCO CON FORMULARIO */}

          <div className="col-12 col-lg-6 form-contact">
            <Form t={t} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
