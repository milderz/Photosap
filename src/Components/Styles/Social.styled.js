import styled from "styled-components";

export const StyledSocial = styled.ul`
  grid-area: d;

  display: flex;
  align-items: flex-end;

  li:nth-child(1) {
    :hover a svg path {
      fill: #3b5998;
    }
  }
  li:nth-child(2) {
    :hover a svg path {
      fill: #ff0000;
    }
  }
  li:nth-child(3) {
    :hover a svg path {
      fill: #00acee;
    }
  }
  li:nth-child(4) {
    :hover a svg path {
      fill: #c8232c;
    }
  }
  li:nth-child(5) {
    :hover a svg path {
      fill: #e1306c;
    }
  }

  svg {
    height: 2.2rem;
    margin: 0 1.4rem 0 0;

    @media screen and (max-width: 600px) {
      margin: 0 1.4rem;
    }
  }
  path {
    fill: #fff;
    transition: all 0.4s ease;
  }
`;
