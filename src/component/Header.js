import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { background } from "../data";
const Header = () => {
  const { light_me } = background;

  return (
    <Wrapper className="header">
      <img src={light_me} alt="background" className="back_img" />
      <h1 className="header__title-1">你好! 歡迎來到 Old Stuff</h1>
      <h2 className="header__title-2">在舊回憶裡，找到舊時代的美好</h2>
      <p className="header__text">
        有時走到兒時穿越的巷弄，有時看見過往的相片，時光的美好，往往藏在那些看來不起眼、不夠方便的物品上，
        也許髒髒舊舊有些笨重，在你眼哩，那是無價之寶，在乎自己的快樂，那才是真正重要的事....
      </p>
      <NavLink to="/allProducts" className="header__btn">
        開始尋寶!
      </NavLink>
      <div className="turn__on">
        <div className="turn__on-btn"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 1fr repeat(3, min-content) 1fr;
  grid-template-columns: minmax(min-content, max-content);
  grid-row-gap: 2rem;
  background-color: rgba(0, 0, 0);
  align-items: center;
  justify-content: center;
  padding: 3rem;
  position: relative;

  @media only screen and (max-width: 700px) {
    padding-top: 10rem;
  }

  .back_img {
    transform: rotate(180deg);
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0 70%;
    position: absolute;
    opacity: 0;
    animation: light 2.5s 1.5s forwards;

    @media only screen and (max-width: 700px) {
      object-fit: cover;
      object-position: 40% -5rem;
    }
  }

  .turn__on {
    width: 6rem;
    height: 3rem;
    border-radius: 20px;
    border-bottom: 0.5px solid var(--grey-500);
    border-right: 0.5px solid var(--grey-500);
    background-color: var(--grey-700);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-self: center;
    padding: 0.5rem;
    animation: hidden_btn 0.5s 1s forwards;
    &-btn {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      background-color: var(--grey-500);

      animation: turn 0.5s 0.7s forwards;
    }

    @keyframes turn {
      0% {
        transform: translate(0);
      }
      100% {
        transform: translateX(2rem);
        background-color: var(--grey-300);
      }
    }
  }

  @keyframes hidden_btn {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }

  .header {
    &__title-1 {
      color: var(--secondary-300);
      z-index: 2;
      opacity: 0;
      animation: textLight 2.5s 1.2s forwards;
      transform: translateY(3rem);

      @media only screen and (max-width: 650px) {
        transform: translateY(0);
        font-size: 4rem;
      }

      @media only screen and (max-width: 400px) {
        transform: translateY(0);
        font-size: 3rem;
      }
    }

    &__title-2 {
      color: var(--secondary-500);
      z-index: 2;
      opacity: 0;
      animation: textLight 2.5s 1.2s forwards;

      @media only screen and (max-width: 350px) {
        font-size: 1.6rem;
      }
    }

    &__text {
      font-size: 1.5rem;
      max-width: 40rem;
      opacity: 0;
      color: var(--grey-50);
      text-align: left;
      z-index: 2;
      animation: textLight 2.5s 1.2s forwards;

      @media only screen and (max-width: 350px) {
        font-size: 1.3rem;
      }
    }

    &__btn {
      justify-self: center;

      text-decoration: none;
      background-color: var(--primary-900);
      padding: 1rem 2rem;
      color: var(--grey-200);
      font-size: 1.5rem;
      border-radius: 3px;
      letter-spacing: 0.2rem;
      border-right: 1px solid var(--grey-50);
      border-bottom: 1px solid var(--grey-50);
      opacity: 0;
      animation: btndisplay 2s 2s forwards;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      white-space: nowrap;

      &:active,
      &:hover {
        background-color: var(--secondary-500);
        font-weight: 700;
        color: var(--grey-700);
      }

      @media only screen and (max-width: 350px) {
        animation: btndisplayRWd 2s 2s forwards;
      }
    }
  }

  @keyframes btndisplay {
    0% {
      opacity: 0;
      bottom: 5%;
    }
    100% {
      opacity: 1;
      bottom: 10%;
    }
  }
  @keyframes btndisplayRWd {
    0% {
      opacity: 0;
      bottom: 5%;
    }
    100% {
      opacity: 1;
      bottom: 5%;
    }
  }

  @keyframes textLight {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes light {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.8;
    }
    75% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default Header;
