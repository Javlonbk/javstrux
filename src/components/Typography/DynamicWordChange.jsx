import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function DynamicWordChange() {

  const { t } = useTranslation();

  const [wordIndex, setWordIndex] = useState(0);
  const words = t("home.heading.words", { returnObjects: true }); // Accessing translation keys properly
  const interval = 2000;

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <Typography
      component={"h1"}
      sx={{ fontSize: "64px", lineHeight: "72px", fontWeight: "400px" }}
    >
      {t("home.heading.static1")} <span style={{ borderBottom: '3px solid #fff', fontFamily: "cursive" }}>{words[wordIndex]}</span> {t("home.heading.static2")}
    </Typography>
  );
}

export default DynamicWordChange;
