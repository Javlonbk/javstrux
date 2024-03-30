import React from "react";
import { FormContainer } from "./style";
import { Container } from "@mui/system";
import Snack from "../Snacks/Snack";
import { SubHeadingText } from "../Typography/Texts";
import useForm from "../../hooks/useForm";

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

  return (
    <>
      <Container>
        <FormContainer id="contact">
          <SubHeadingText>Fikr va mulohazlaringizni qoldiring.</SubHeadingText>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Ismingiz</label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={handleNameChange}
              placeholder="Ismingiz"
            />
            {showNameError && (
              <p className="error-text">Ism 4 ta belgidan kam bo'lamsligi kerak!</p>
            )}

            <label htmlFor="phone">Telefon raqamingiz</label>
            <input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={handlePhoneChange}
              placeholder="Telefon raqamingiz"
            />
            {showPhoneError && (
              <p className="error-text">Telefon raqami noto'g'ri!</p>
            )}

            <label htmlFor="text">Xabaringizni qoldiring...</label>
            <textarea
              id="text"
              value={form.text}
              onChange={handleTextChange}
              placeholder="Xabaringizni qoldiring..."
            />
            {showTextError && (
              <p className="error-text">Xabar bo'sh bo'lishi mumkin emas!</p>
            )}

            <button type="submit" className="btn-send">
              Yuborish
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
