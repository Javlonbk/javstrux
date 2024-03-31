import React from "react";
import styled from "styled-components";
import { Box, Container } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import projects from "./projects";
import { HeadingText, ParagraphText } from "../Typography/Texts";
import { useTranslation } from "react-i18next";

const ProjectsContainer = styled.div`
  width: 100%;
`;
const Card = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
  overflow: hidden;
  background: ${(props) => `url(${props.imgSrc})`};
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s ease;
  &:hover {
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      ${(props) => `url(${props.imgSrc})`};
  }
  &:hover .card-content {
    opacity: 1;
    transform: translateY(0);
  }
  @media (max-width:599px){
    height:50vh;
  }
`;

const CardContent = styled.div` 
  width:70%;
  transform: translate(-50%, -50%);
  text-align: center;
  opacity: 0;
  transition: opacity 0.5s ease, transform 0.5s ease;
`;

export const Projects = () => {

  const {t} = useTranslation();

  const cards = projects.map((project) => {
    return (
      <Card key={project.title} imgSrc={project.imgSrc}>
        <CardContent className="card-content">
          <HeadingText style={{marginBottom:'20px'}} white>{project.title}</HeadingText>
          <ParagraphText white>{project.description}</ParagraphText>
        </CardContent>
      </Card>
    );
  });

  return (
    <ProjectsContainer id="projects">
      <Container>
        <Box sx={{ width:{md:"70%", xs:"100%"}, m: "auto", mb: "30px", textAlign: "center" }}>
          <HeadingText>{t("projects.heading")}</HeadingText>
          <ParagraphText style={{ color: "#00b2bf" }}>
            {t("projects.paragraph")}
          </ParagraphText>
        </Box>
      </Container>
      <Box sx={{ padding: "0px 30px", boxSizing: "border-box" }}>
        <AliceCarousel
          mouseTracking
          items={cards}
          infinite={true} // Enable infinite loop
          autoPlay={true}
          centerMode
          disableButtonsControls={true}
        />
      </Box>
    </ProjectsContainer>
  );
};
