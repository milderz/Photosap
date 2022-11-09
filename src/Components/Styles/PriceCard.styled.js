import styled from "styled-components";

export const StyledPriceCard = styled.div`
  background-color: #efebeb;
  padding: 5.6rem 4rem 4rem 4rem;
  display: grid;
  grid-template-areas: "a" "b" "c" "d";
  text-align: center;
  position: relative;
  transition: all 0.8s ease;

  @media screen and (max-width: 1280px) {
    grid-template-columns: 27rem 15rem;
    justify-content: space-between;
    grid-template-areas:
      "a c"
      "b c"
      "d c";
    text-align: left;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-areas: "a" "b" "c" "d";
    text-align: center;
  }

  .plan-title {
    font-size: 2.4rem;
    grid-area: a;
  }

  .plan-description {
    font-size: 1.6rem;
    color: #737373;
    grid-area: b;
    @media screen and (max-width: 1280px) {
      padding-bottom: 2rem;
    }

    @media screen and (max-width: 600px) {
      padding-bottom: 0;
    }
  }

  .price {
    grid-area: c;
    @media screen and (max-width: 1280px) {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    @media screen and (max-width: 600px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .plan-price {
    font-size: 4rem;
    font-weight: 500;
  }

  .plan-type {
    font-size: 1.6rem;
    color: #737373;
  }

  button {
    width: 100%;
    height: 4rem;
    border: none;
    background-color: #000;
    color: #fff;
    grid-area: d;
    cursor: pointer;
    @media screen and (max-width: 1280px) {
      max-width: 27rem;
    }

    @media screen and (max-width: 600px) {
      max-width: none;
    }
  }

  .gradient-line {
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to right, #5a77ff, #bc7198, #ffc593);
    width: 0;
    height: 0.6rem;
    transition: all 0.4s ease;
  }

  :hover {
    background-color: #000;

    .plan-title {
      color: #fff;
    }

    .plan-price {
      color: #fff;
    }

    .plan-type {
      color: #fff;
    }
    .plan-description {
      color: #fff;
    }

    button {
      color: #000;
      background-color: #fff;
    }

    .gradient-line {
      width: 100%;
    }
  }
`;
