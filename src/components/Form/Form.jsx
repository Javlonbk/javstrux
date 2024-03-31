import React from "react";
import { FormContainer } from "./style";
import { Container } from "@mui/system";
import Snack from "../Snacks/Snack";
import { SubHeadingText } from "../Typography/Texts";
import useForm from "../../hooks/useForm";
import { useTranslation } from "react-i18next";

const Form = () => {
  const {
    form,
    showNameError,
    showPhoneError,
    showTextError,
    snackOpen,
    setSnackOpen,
    handleSubmit,
    handlePhoneChange,
    handleNameChange,
    handleTextChange
  } = useForm();
  
  const {t} = useTranslation();


  return (
    <>
      <Container>
        <FormContainer id="contact">
          <SubHeadingText>{t("contact.form.heading")}</SubHeadingText>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">{t('contact.form.name')}</label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={handleNameChange}
              placeholder={t('contact.form.name')}
            />
            {showNameError && (
              <p className="error-text">{t("contact.form.nameError")}</p>
            )}

            <label htmlFor="phone">{t("contact.form.phone")}</label>
            <input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={handlePhoneChange}
              placeholder={t("contact.form.phone")}
            />
            {showPhoneError && (
              <p className="error-text">{t("contact.form.phoneError")}</p>
            )}

            <label htmlFor="text">{t("contact.form.message")}</label>
            <textarea
              id="text"
              value={form.text}
              onChange={handleTextChange}
              placeholder={t("contact.form.message")}
            />
            {showTextError && (
              <p className="error-text">{t("contact.form.messageError")}</p>
            )}

            <button type="submit" className="btn-send">
              {t("contact.form.send")}
            </button>
          </form>
        </FormContainer>
        {/* // Snack component */}
        <Snack open={snackOpen} setOpen={setSnackOpen} />
      </Container>
    </>
  );
};

export default Form;
