import {  Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import {  SubHeadingText } from "../Typography/Texts";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

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

  @media (max-width:799px){
    margin:0px auto;
    width:70%;
    margin-top:30px;
  }
  @media (max-width:499px){
    width:100%;
  }
`;

const NewsCard = ({newsItem}) => {

  const {t} = useTranslation();

  const {imgSrc, date, href} = newsItem;
  const title = t(`news.title${newsItem.id}`);
  const formattedDate = t(`news.date${newsItem.id}`);
  return (
    <NewsCardContainer target={"_blank"} imgSrc={imgSrc} href={href}>
      <div className="newscard-img" />
      <SubHeadingText>
        {title}
      </SubHeadingText>
      <Typography component={"p"} sx={{textTransform:"uppercase", fontSize:"14px", my:'20px'}}>{formattedDate}</Typography>
      <Button/>
    </NewsCardContainer>
  );
};

export default NewsCard;
