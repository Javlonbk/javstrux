import React, { useState } from "react";
import { Button, FormControl } from "@mui/material";
import { Container } from "@mui/system";
import Snack from '../Snacks/Snack'
import { SubHeadingText } from "../Texts/Texts";
import styled from 'styled-components'

const FormContainer = styled.div`
`
FormContainer.Input = styled.input`
`
const Form = () => {

  const [form, setForm] = useState({
    name:'',
    phone:'+998 ',
    text: ''
  });
  const [showNameError, setShowNameError] = useState(false);
  const [showPhoneError, setShowPhoneError] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false); // State for Snackbar



  const tgToken = "7091081477:AAEgwtR5RXVvLJaxwhT5ogVsmeni0b_Rs1Y";
  const chatId = "5511081391";

  const sendUserInfo = async () => {
    try {
      const { name, phone, text } = form;
      const message = `Name: ${name}%0APhone: ${phone}%0AText: ${text}`; // Encode message text
      const url = `https://api.telegram.org/bot${tgToken}/sendMessage?chat_id=${chatId}&text=${message}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Failed to send message to Telegram bot.');
      }

      console.log('Message sent successfully to Telegram bot.');
      resetForm();
      setSnackOpen(true);
    } catch (error) {
      console.error('Error occurred while sending message to Telegram bot:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (form.name.length < 4) {
      setShowNameError(true);
      return; 
    } else {
      setShowNameError(false);
    }

    if (form.phone.length < 13) {
      setShowPhoneError(true);
      return; 
    } else {
      setShowPhoneError(false);
    }
    sendUserInfo();
    
  };

  const resetForm = () => {
    setForm({
      name: '',
      phone: '+998 ',
    });
    setShowNameError(false);
    setShowPhoneError(false);
  };

  const handlePhoneChange = (e) => {
    let newValue = e.target.value;
    
    if (!newValue.startsWith('+998 ')) {
      newValue = '+998 ' + newValue;
    }
  
    if (newValue.length > 4) {
      newValue = newValue.substring(5).replace(/[^\d]+/g, ''); // Keep only numeric characters
      newValue = '+998 ' + newValue.substring(0, 9); // Limit phone number to 9 digits
    }
  
    setForm({ ...form, phone: newValue });
  };

  return (
    <>
      <Container>
        <FormContainer id='contact' >
            <form onSubmit={handleSubmit}>
              <SubHeadingText>Fikr va mulohazlaringizni qoldiring.</SubHeadingText>
              <FormContainer.Input 
                onChange={(e) => setForm({...form, name:e.target.value})}
                value={form.name} 
                placeholder="Ismingiz" 
                type="text"
                style={{ border: showNameError ? '1px solid red' : 'none' }}
              />
              {showNameError && (
                <p style={{ color: 'red', fontSize:'12px',marginTop:'5px' }}>Ism 4 ta belgidan kam bo'lamsligi kerak!</p>
              )}
              <FormContainer.Input 
                onChange={handlePhoneChange}
                value={form.phone} 
                type="tel"
                pattern="[0-9]{9}" // Use pattern to restrict to 9 numeric characters
                placeholder="Telefon raqamingiz" 
                style={{ border: showPhoneError ? '1px solid red' : 'none' }}
              />
              {showPhoneError && (
                <p style={{ color: 'red', fontSize:'12px',marginTop:'5px' }}>Telefon raqami noto'g'ri!</p>
              )}
               <textarea
                onChange={handlePhoneChange}
                value={form.text} 
                type="message"
                placeholder="Xabaringizni qoldiring..." />
              <Button type="submit" variant="contained" className="btn-send">
                Yuborish
              </Button>
              <FormControl />
            </form>
        </FormContainer>
        {/* // Snack component */}
        <Snack open={snackOpen} setOpen={setSnackOpen} />
      </Container>
    </>
  );
};

export default Form;