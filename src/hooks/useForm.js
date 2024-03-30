import React, { useState } from "react";

const useForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "+998 ",
    text: ""
  });
  const [showNameError, setShowNameError] = useState(false);
  const [showPhoneError, setShowPhoneError] = useState(false);
  const [showTextError, setShowTextError] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false); // State for Snackbar

  const tgToken = "your_tg7091081477:AAEgwtR5RXVvLJaxwhT5ogVsmeni0b_Rs1Y_token";
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
      setSnackOpen(true);
    } catch (error) {
      console.error('Error occurred while sending message to Telegram bot:', error);
    }
  };

  const handleSubmit = async (e) => {
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

    if (form.text.trim() === '') {
      setShowTextError(true);
      return;
    } else {
      setShowTextError(false);
    }

    await sendUserInfo();
    resetForm();
  };

  const resetForm = () => {
    setForm({
      name: "",
      phone: "+998 ",
      text: ""
    });
    setShowNameError(false);
    setShowPhoneError(false);
    setShowTextError(false);
  };

  const handlePhoneChange = (e) => {
    let newValue = e.target.value;
    
    if (!newValue.startsWith("+998 ")) {
      newValue = "+998 " + newValue;
    }
  
    if (newValue.length > 4) {
      newValue = newValue.substring(5).replace(/[^\d]+/g, ""); // Keep only numeric characters
      newValue = "+998 " + newValue.substring(0, 9); // Limit phone number to 9 digits
    }
  
    setForm({ ...form, phone: newValue });
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setForm({ ...form, name: newName });
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setForm({ ...form, text: newText });
  };

  return {
    form,
    showNameError,
    showPhoneError,
    showTextError,
    snackOpen,
    setSnackOpen,
    handleSubmit,
    handlePhoneChange,
    handleNameChange,
    handleTextChange,
    resetForm
  };
};

export default useForm;
