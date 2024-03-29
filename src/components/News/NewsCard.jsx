import {  Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import {  SubHeadingText } from "../Texts/Texts";
import Button from "../Button/Button";

const NewsCardContainer = styled.a`
  width: 40%;
  display: block;
  height: auto;
  margin-top: 20px;
  :hover{
    cursor: pointer;
  }
  .newscard-img {
    width: 100%;
    height: 200px;
    margin-bottom: 30px;
    border-radius: 15px;
    background: ${(props) => `url(${props.imgSrc})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

const NewsCard = ({newsItem}) => {

    const {imgSrc, title, date, href} = newsItem;

    console.log(newsItem);
  return (
    <NewsCardContainer imgSrc={imgSrc} href={href}>
      <div className="newscard-img" />
      <SubHeadingText>
        {title}
      </SubHeadingText>
      <Typography component={"p"} sx={{textTransform:"uppercase", fontSize:"14px", my:'20px'}}>{date}</Typography>
      <Button/>
    </NewsCardContainer>
  );
};

export default NewsCard;
