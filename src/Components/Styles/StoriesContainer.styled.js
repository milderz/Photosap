import styled from "styled-components";

export const StyledStoriesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
