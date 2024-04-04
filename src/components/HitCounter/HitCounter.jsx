import React, { useState } from "react";
import styled from "styled-components";
import { SubHeadingText } from "../Typography/Texts";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useTranslation } from "react-i18next";

const HitCounterContainer = styled.div`
    width: 50%;
    margin: 50px 0px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    h1 {
      font-size: 62px;
      color: #00b2bf;
    }
    @media (max-width:999px) {
      width: 90%;
      margin: 50px auto;
      text-align: center;
    }
    @media (max-width:599px){
      flex-direction: column;
      .scroll-trigger{
        margin: 15px auto;
      }
      h1{
        font-size: 32px;
      }
    }
`;

function HitCounter() {
  const { t } = useTranslation();

  const [counterOn, setCounterOn] = useState(false);

  const statistics = [
    {
      label: t("about.statistics.label.0"), // Translate label "Xodimlar"
      count: 500
    },
    {
      label: t("about.statistics.label.1"), // Translate label "Loyihalar"
      count: 50
    },
    {
      label: t("about.statistics.label.2"), // Translate label "Tajriba"
      count: 15
    }
  ];

  return (
    <HitCounterContainer >
      {statistics.map(({ label, count }, index) => (
        <ScrollTrigger className="scroll-trigger" key={index} onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
          <h1>{counterOn && <CountUp start={0} end={count} duration={2} delay={0} />}+</h1>
          <SubHeadingText black>{label}</SubHeadingText>
        </ScrollTrigger>
      ))}
    </HitCounterContainer>
  );
}

export default HitCounter;
