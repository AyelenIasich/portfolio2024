import React, { useRef } from "react";
import InputGeneric from "../InputGeneric";
import TextArea from "../TextArea";
import FormButton from "../Buttons/FormButton";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';
import "./Form.css";

function Form({ t }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          notifySuccess();
          e.target.reset();
        },
        (error) => {
          notifyError();
          console.log("FAILED...", error.text);
        }
      );
  };


const notifySuccess = () => {
  Swal.fire({
    icon: "success",
    title: t("successSendEmail"),
    text: t("thankYouMessage"),
    showConfirmButton: false,
    timer: 2000
  });
};

const notifyError = () => {
  Swal.fire({
    icon: "error",
    title: t("errorSendEmail"), 
    text: t("errorMessage"), 
    showConfirmButton: true, 
    confirmButtonText: t("retryButton"), 
  });
};


  return (
    <form ref={form} onSubmit={sendEmail} className="px-2 py-5">
      <h5 className="text-center title-form">{t("titleForm")}</h5>
      <InputGeneric label={t("labelName")} name="user_name" />
      <InputGeneric label={t("labelEmail")} name="user_email" />
      <TextArea label={t("labelMessage")} name="message" />
      <FormButton label={t("FormBtn")} />
    </form>
    
  );
}

export default Form;
