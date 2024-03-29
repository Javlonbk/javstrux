import { Container, Box } from "@mui/material";
import React from "react";
import styled from "styled-components";
import aboutImg from "../../assets/png/about.png";
import HitCounter from "../HitCounter/HitCounter";
import { HeadingText, ParagraphText, SubHeadingText } from "../Texts/Texts";

const AboutContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 100px auto;
  background-image: url(${aboutImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <Container>
        <Box sx={{ width: "70%" }}>
          <HeadingText>Conventional home building is broken.</HeadingText>
          <SubHeadingText>And it hasn’t changed in 100 years</SubHeadingText>
          <ParagraphText style={{marginTop:"30px"}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,
            reiciendis voluptatem? Vel quis excepturi reiciendis quidem fugit
            reprehenderit exercitationem blanditiis.
          </ParagraphText>
        </Box>
        <HitCounter/>
      </Container>
    </AboutContainer>
  );
};

export default About;
