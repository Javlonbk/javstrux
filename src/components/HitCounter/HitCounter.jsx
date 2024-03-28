import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components'
import { HeadingText } from '../Texts/Texts';

function HitCounter() {
  const [employeeCount, setEmployeeCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [employeeLimitReached, setEmployeeLimitReached] = useState(false);
  const [projectLimitReached, setProjectLimitReached] = useState(false);
  const [yearsLimitReached, setYearsLimitReached] = useState(false);
  const employeeLimit = 350; // Set employee count limit
  const projectLimit = 24; // Set project count limit
  const yearsLimit = 10; // Set years count limit
  const hitCounterRef = useRef(null);

  useEffect(() => {
    const increaseCounts = () => {
      setEmployeeCount(prevCount => {
        const newCount = prevCount + 1;
        if (newCount >= employeeLimit) {
          setEmployeeLimitReached(true);
          return prevCount;
        }
        return newCount;
      });
      setProjectCount(prevCount => {
        const newCount = prevCount + 1;
        if (newCount >= projectLimit) {
          setProjectLimitReached(true);
          return prevCount;
        }
        return newCount;
      });
      setYearsCount(prevCount => {
        const newCount = prevCount + 1;
        if (newCount >= yearsLimit) {
          setYearsLimitReached(true);
          return prevCount;
        }
        return newCount;
      });
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const intervalId = setInterval(increaseCounts, 1);
          observer.disconnect();
          return () => clearInterval(intervalId);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (hitCounterRef.current) {
      observer.observe(hitCounterRef.current);
    }

    return () => observer.disconnect();
  }, [employeeLimit, projectLimit, yearsLimit]);

  const HitCounterContainer = styled.div`
    width: 50%;
    margin:30px 0px;
    display: flex;
    justify-content: space-between;
  `

  return (
    <HitCounterContainer ref={hitCounterRef}>
      <div className="counter">
         <HeadingText>{employeeCount}</HeadingText>
         Ishchilar
      </div>
      <div className="counter">
        <HeadingText>{projectCount}</HeadingText>
        Loyihalar
      </div>
      <div className="counter">
        <HeadingText>{yearsCount}</HeadingText>
        Tajriba
      </div>
    </HitCounterContainer>
  );
}

export default HitCounter;
