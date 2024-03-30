import React from "react";
import styled from "styled-components";
import NewsCard from "./NewsCard";
import { Box, Container } from "@mui/material";
import { HeadingText } from "../Typography/Texts";
import news from "./news";

const NewsContainer = styled.div`
  width: 100%;
  margin: 100px auto;
`;

const News = () => {
  return (
    <NewsContainer id="news">
      <Container>
        <HeadingText style={{ textAlign: "center", marginBottom: "30px" }}>
          Yangiliklar
        </HeadingText>
        <Box sx={{display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}>
          {news.map((newsItem) => (
            <NewsCard key={newsItem.id} newsItem={newsItem} />
          ))}
        </Box>
      </Container>
    </NewsContainer>
  );
};

export default News;
