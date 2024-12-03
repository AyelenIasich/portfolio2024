import React from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as BGContactMe } from "../../assets/svg/contact-austraunt2.svg";
import Form from "../../components/Form";
import "./ContactMe.css";

function ContactMe() {
  const { t } = useTranslation();

  return (
    <section className="section-contact p-0 pt-5" id="contactMe" >
      <div className="cardForm">
        <div className="container-fluid bg-contact-me p-0">
          <div className="row m-0">
            {/* PURPLE BACKGROUND WITH AN ANSTRONAUT*/}
            <div className="col-12 col-lg-6 p-0 bg-austranaut-container">
              <div className="px-3">
                <h5 className="contact-subtitle pt-4 pt-lg-5 mt-lg-3">
                  {t("getInTouch")}
                </h5>
                <h3 className="contact-part2 display-5 py-1">
                  <span className="contact-me ">{t("contactMeTitle1")}</span>{" "}
                  {t("contactMeTitle2")}
                </h3>
                <p className="description-contact">{t("ContactDescription")}</p>
              </div>
              <div className="astrounat-container p-0 m-0">
                <BGContactMe className="img-austronat" />
              </div>
            </div>
            {/* BACKGROUND BLANCO WITH FORM */}
            <div className="col-12 col-lg-6 form-contact px-3">
              <Form t={t} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
