import { Container, Box } from "@mui/material";
import React from "react";
import navItems from "../../data/navbar";
import styled from "styled-components";
import Logo from "../Logo/Logo";
import { Telegram, Instagram, Twitter, Mail } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const FooterContainer = styled.div`
  padding: 50px 0px;
  background-color: #f2f2f2;
`;

const Footer = () => {
  const [activeItem, setActiveItem] = React.useState(null);

  const {t} = useTranslation();

  return (
    <FooterContainer>
      <Container sx={{ display: "flex", alignItems:"center" }}>
        <Box
          sx={{
            display:"flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Logo black />
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => handleMenuItemClick(item.key)}
              style={{
                marginTop: "10px",
                fontSize: "18px",
                textDecoration: "none",
                color: "#6e6e6e",
                lineHeight: "24px",
                borderBottom:
                  activeItem === item.key ? "2px solid #6e6e6e" : "none",
                transition: "border-color 0.3s ease-out",
              }}
            >
              {t(`${item.label}`)}
            </a>
          ))}
        </Box>
        <Box sx={{color:'#6e6e6e', mx:"100px"}}>
          <Telegram fontSize="large" sx={{marginLeft:'20px'}} />
          <Instagram fontSize="large"sx={{marginLeft:'20px'}}  />
          <Twitter fontSize="large" sx={{marginLeft:'20px'}} />
          <Mail fontSize="large" sx={{marginLeft:'20px'}} />
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
