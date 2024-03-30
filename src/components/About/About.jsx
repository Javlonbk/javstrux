import { Container, Box } from "@mui/material";
import React from "react";
import styled from "styled-components";
import aboutImg from "../../assets/png/about.png";
import HitCounter from "../HitCounter/HitCounter";
import { HeadingText, ParagraphText, SubHeadingText } from "../Typography/Texts";
import { useTranslation } from "react-i18next";

const AboutContainer = styled.div`
  width: 100%;
  height: 120vh;
  margin: 100px auto;
  background: url(${aboutImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const About = () => {

  const {t} = useTranslation();

  return (
    <AboutContainer id="about">
      <Container>
        <Box sx={{ width: "70%"}}>
          <HeadingText>{t("about.heading")}</HeadingText>
          <SubHeadingText>{t("about.subHeading")}</SubHeadingText>
          <ParagraphText style={{marginTop:"30px"}}>
            {t("about.paragraph")}
          </ParagraphText>
        </Box>
        <HitCounter/>
      </Container>
    </AboutContainer>
  );
};

export default About;
