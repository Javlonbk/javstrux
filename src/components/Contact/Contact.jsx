import React, { useState } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from 'styled-components';
import { Box,  Drawer, IconButton } from '@mui/material';
import Form from '../Form/Form';

const ContactContainer = styled.div`
  .btn-contact {
    width: 50px;
    height: 50px;
    background: #00b2bf;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 100px;
    bottom: 50px;
    color: #fff;
    font-size: 40px;
    border: none;
    :hover {
      cursor: pointer;
    }
  }

  .contact-content {
    width: 300px;
    padding: 16p;
  }
`;

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ContactContainer>
      <button className="btn-contact" onClick={handleToggle}>
         <PhoneIcon />
      </button>

      <Drawer anchor="right" open={isOpen} onClose={handleToggle}>
        <Box className="contact-content">
          <IconButton
            sx={{ position: 'absolute', top: '10px', right: '10px', zIndex: '999' }}
            onClick={handleToggle}
          >
            <CloseIcon />
          </IconButton>
          <Form />
        </Box>
      </Drawer>
    </ContactContainer>
  );
};

export default Contact;
