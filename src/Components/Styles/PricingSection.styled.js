import styled from "styled-components";

export const StyledPricingSection = styled.section`
  margin-bottom: 12rem;

  .container {
    width: 84%;
    max-width: 1140px;
    margin: auto;

    @media screen and (max-width: 1080px) {
      width: 90%;
    }
  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12rem 0 6rem 0;

    .price-monthly {
      font-weight: 600;
      font-size: 1.8rem;
      color: ${({ checked }) => (checked ? "#737373" : "#000")};
    }
    .price-yearly {
      font-weight: 600;
      font-size: 1.8rem;
      color: ${({ checked }) => (checked ? "#000" : "#737373")};
    }
  }

  .price-card-container {
    display: grid;

    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 48.7rem;
    grid-gap: 2.4rem;
    margin-bottom: 12rem;
    @media screen and (max-width: 1280px) {
      grid-template-columns: 1fr;
      grid-auto-rows: 27rem;
    }
    @media screen and (max-width: 600px) {
      grid-template-columns: 1fr;
      grid-auto-rows: 48.7rem;
    }
  }

  .comparison-chart-container {
    h3 {
      text-align: center;
      font-size: 4rem;
      margin-bottom: 6rem;
    }
  }
`;
