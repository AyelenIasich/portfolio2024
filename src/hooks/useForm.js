import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

function useForm() {
  const { t, i18n } = useTranslation();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [formError, setFormError] = useState({ field: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  // Notifications
  const notifySuccess = () => {
    Swal.fire({
      icon: "success",
      title: t("successSendEmail"),
      text: t("thankYouMessage"),
      showConfirmButton: true,
      confirmButtonText: t("closeSuccessNoti"),
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validations
  const validateFields = () => {
    let errors = {};

    if (!formData.user_name || !formData.user_name.trim()) {
      errors.user_name = t("errorName");
    } else if (!formData.user_email || !formData.user_email.trim()) {
      errors.user_email = t("errorEmail");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      errors.user_email = t("errorValidateEmail");
    } else if (!formData.message || !formData.message.trim()) {
      errors.message = t("errorMessageField");
    }
    console.log("formData", formData);
    console.log("errors", errors);
    setFormError(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateFields()) {
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          notifySuccess();
          form.current.reset();
          setFormData({ user_name: "", user_email: "", message: "" });
          setIsSubmitting(false);
        },
        (error) => {
          notifyError();
          setIsSubmitting(false);

          console.error("FAILED...", error.text);
        }
      );
  };

  return {
    formData,
    formError,
    handleChange,
    handleSubmitEmail,
    form,
    isSubmitting,
  };
}

export { useForm };
