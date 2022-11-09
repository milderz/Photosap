import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 7.2rem;
  background-color: ${({ theme }) => theme.colors.white};

  .header-content {
    width: 77%;
    height: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: 30% 70%;
    align-items: center;
    max-width: 1140px;

    @media screen and (max-width: 1280px) {
      width: 90%;
    }
    @media screen and (max-width: 768px) {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const Logo = styled.img``;
