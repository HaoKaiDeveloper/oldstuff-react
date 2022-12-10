import React, { useEffect } from "react";
import styled from "styled-components";
import { Header, Slider, Funder, CardContainer, Footer } from "../component";

const HomePage = () => {
  useEffect(() => {
    document.title = "OS | Home";
  });

  return (
    <Wrapper>
      <Header />
      <CardContainer />
      <Slider />
      <Funder />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  max-width: 1450px;
  background-color: var(--grey-50);

  display: grid;
  grid-template-rows:
    minmax(50rem, 100vh) min-content minmax(17vw, 30rem) minmax(25vw, 1fr)
    min-content;
  grid-template-columns: repeat(10, 1fr);
  margin: 0 auto;

  .header {
    grid-column: 1/-1;
    grid-row: 1/2;
  }

  .slider {
    grid-column: 1/-1;
  }
  .cards {
    background-color: var(--secondary-400);
    grid-column: 1/-1;
  }

  .funder {
    grid-column: 1/-1;
  }

  .footer {
    grid-column: 1/-1;
    background-color: var(--primary-900);
  }
`;
export default HomePage;
