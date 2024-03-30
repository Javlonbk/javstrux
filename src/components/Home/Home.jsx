import { Box, Container, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import HomeImage from "../../assets/png/home.jpg";
import Navbar from "../Navbar/Navbar";
import DynamicWordChange from "../Typography/DynamicWordChange";
import { useTranslation } from "react-i18next";

const HomeContainer = styled.div`
  box-sizing: border-box;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${HomeImage});
  color: white;
  background-repeat: no-repeat;
  background-position: right 0px;
  background-size: cover;
  height: 100vh;
`;

const Home = () => {

  const {t} = useTranslation();

  return (
    <HomeContainer>
      <Navbar />
      <Container>
        <Box sx={{textAlign:'center', marginTop:"150px"}}>
          <DynamicWordChange/>
          <Typography component={"p"} sx={{fontSize:'22px', lineHeight:"28px", margin:"50px auto", width:'70%',}}>
          {t("home.title")}
          </Typography>
        </Box>
      </Container>
    </HomeContainer>
  );
};

export default Home;
