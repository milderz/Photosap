import styled from "styled-components";

export const StyledFeaturesSection = styled.section`
  padding: 12.2rem 0;
  width: 84%;
  max-width: 1140px;
  margin: auto;

  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    grid-gap: 4.2rem;

    @media screen and (max-width: 375px) {
      grid-template-columns: 1fr;
    }
  }
`;
