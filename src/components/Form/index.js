import React from "react";
import InputGeneric from "../InputGeneric";
import TextArea from "../TextArea";
import FormButton from "../Buttons/FormButton";
import { useForm } from "../../hooks/useForm";
import "./Form.css";

function Form({ t }) {

  const { formData, formError, handleChange, handleSubmitEmail, form , isSubmitting} = useForm();

  return (
    <form ref={form} onSubmit={handleSubmitEmail} className="px-2 py-5">
      <h5 className="text-center title-form">{t("titleForm")}</h5>
      <InputGeneric
        label={t("labelName")}
        name="user_name"
        value={formData.user_name}
        onChange={handleChange}
        error={formError.user_name}
      />
      <InputGeneric
        label={t("labelEmail")}
        name="user_email"
        value={formData.user_email}
        onChange={handleChange}
        error={formError.user_email}
      />
      <TextArea
        label={t("labelMessage")}
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={formError.message}
      />
      <FormButton label={isSubmitting ? t("formBtnWait") : t("FormBtn")} />
    </form>
  );
}

export default Form;
