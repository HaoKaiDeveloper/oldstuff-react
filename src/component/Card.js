import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Card = ({ id, name, price, category, image_small, category_c }) => {
  return (
    <Wrapper className="card">
      <img src={image_small[1]} alt="img" className="card__img" />
      <div className="card_info">
        <NavLink to="/allproducts" className="card_btn">
          {category_c}系列
        </NavLink>
        <p className="card_text">
          as opposed to using 'Content here, content here'
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 20rem;
  min-width: 20rem;
  height: 27rem;

  background-color: var(--secondary-500);
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  box-sizing: content-box;
  box-shadow: -15px -15px 5px rgba(225, 225, 225, 0),
    inset -5px -5px 5px var(--secondary-400), inset 5px 5px 5px rgba(0, 0, 0, 0);
  transition: all 0.2s ease;

  .card__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.2s ease;
  }
  &:hover {
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  }

  &:hover .card__img {
    width: 100%;
    height: 45%;
    filter: blur(0);
  }

  &:hover .card_info {
    top: 50%;
    .card_btn {
      box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.4);
    }
  }

  .card_info {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    top: 110%;
    transition: all 0.3s ease;
  }
  .card_btn {
    align-self: center;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--secondary-800);
    letter-spacing: 0.2rem;
    background-color: #fff;
    padding: 1rem 2rem;
    border-radius: 20px;

    &:active {
      background-color: transparent;
      color: #fff;
      font-weight: 600;
    }
  }

  .card_text {
    width: 100%;
    text-align: center;
    color: #fff;
    padding: 1rem;
  }

  @media only screen and (max-width: 1200px) {
    box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.5);
    .card__img {
      height: 45%;
      filter: blur(0);
    }
    .card_info {
      top: 50%;

      .card_btn {
        box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.4);
      }
    }
  }
  @media only screen and (max-width: 300px) {
    width: 90%;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
  }
`;

export default Card;
