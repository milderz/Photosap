import styled from "styled-components";

export const StyledSecondaryHeroSection = styled.section`
  height: ${(prop) => prop.height};
  background-color: #ccc;
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};

  div:nth-child(1) {
    flex: 58%;
  }
  div:nth-child(2) {
    flex: 42%;
  }

  @media screen and (max-width: 800px) {
    height: 79rem;
    flex-direction: column;
    div:nth-child(1) {
      flex: 40%;
    }
    div:nth-child(2) {
      flex: 60%;
    }
  }
`;
