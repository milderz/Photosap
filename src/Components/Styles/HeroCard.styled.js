import styled from "styled-components";

export const StyledHeroCard = styled.div`
  background-color: ${({ theme, version }) =>
    version === "primary" ? theme.colors.black : theme.colors.white};

  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 0 11rem;
  @media screen and (max-width: 800px) {
    padding: 0 10%;
  }

  h2 {
    color: ${({ theme, version }) => (version === "primary" ? "#fff" : "#000")};
    font-size: 4.2rem;
    letter-spacing: 0.07em;
    font-weight: 600;
    line-height: 1.4;
    width: 17ch;
    padding: 0 0 3.6rem 0;

    @media screen and (max-width: 800px) {
      font-size: 3.2rem;
      width: auto;
      padding: 0 0 1.6rem 0;
    }
    @media screen and (max-width: 500px) {
      font-size: 2.2rem;
    }
  }

  p {
    color: ${({ theme, version }) =>
      version === "primary" ? theme.colors.white : theme.colors.black};
    font-size: 1.4rem;
    width: 50ch;
    padding: 0 0 5.6rem 0;

    @media screen and (max-width: 800px) {
      width: auto;
      padding: 0 0 3.2rem 0;
    }
  }

  .card-line {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0.7rem;
    height: 30.5rem;
    background: linear-gradient(#5a77ff, #bc7198, #ffc593);

    @media screen and (max-width: 800px) {
      height: 0.7rem;
      width: 100%;
      top: 0;
      background: linear-gradient(to right, #5a77ff, #bc7198, #ffc593);
    }
  }
`;
