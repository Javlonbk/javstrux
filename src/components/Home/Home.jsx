import { Box, Container, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import HomeImage from "../../assets/png/home.jpg";
import Navbar from "../Navbar/Navbar";

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
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <Container>
        <Box sx={{textAlign:'center', marginTop:"50px"}}>
          <Typography component={"h1"} sx={{fontSize:'56px', lineHeight:'48px', fontWeight:"400px"}}>
            Biz zamonaviy uylar yaratamiz!
          </Typography>
          <Typography component={"p"} sx={{fontSize:'20px', lineHeight:"24px", margin:"30px auto", width:'70%',}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, impedit ut. Architecto, quidem! Voluptate, animi error. Est laudantium itaque ipsam?
          </Typography>
        </Box>
      </Container>
    </HomeContainer>
  );
};

export default Home;
