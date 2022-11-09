import styled from "styled-components";

export const StyledHeroSection = styled.section`
  height: ${(prop) => prop.height};
  background-color: #ccc;
  display: flex;

  margin: auto;
  background-color: #000;

  div:nth-child(1) {
    flex: 42%;
  }
  div:nth-child(2) {
    flex: 58%;
  }

  @media screen and (max-width: 800px) {
    height: 79rem;
    flex-direction: column-reverse;
    div:nth-child(1) {
      flex: 40%;
    }
    div:nth-child(2) {
      flex: 60%;
    }
  }
`;
