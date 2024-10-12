import React from "react";
import "./Form.css";
import InputGeneric from "../InputGeneric";
import TextArea from "../TextArea";
import FormButton from "../Buttons/FormButton";

function Form({t}) {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form  onSubmit={handleSubmit} className="px-2 py-5">
      <h5 className="text-center title-form">{t("titleForm")}</h5>
      <InputGeneric label={t("labelName")}/>
      <InputGeneric label={t("labelEmail")} />
      <TextArea label={t("labelMessage")}/>
      <FormButton label={t("FormBtn")}/>
    </form>
  );
}

export default Form;
