import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { allProduct, background, sliderImgs, cards } from "../data";
const CardContainer = () => {
  return (
    <Wrapper className="cards cards_container">
      {cards.map((item) => {
        return <Card {...item} key={item.id} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 3rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  justify-content: center;
  justify-items: center;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  border-radius: 3px;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(17rem, 1fr));
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  }
  @media only screen and (max-width: 300px) {
    width: 100%;
    grid-template-columns: minmax(17rem, 1fr);
    padding: 5rem 0rem;
  }
`;

export default CardContainer;
