import styled from "styled-components";

export const StyledFooter = styled.footer`
  height: 25rem;
  background-color: #000;
  padding: 6.4rem 0;

  @media screen and (max-width: 600px) {
    height: 54.6rem;
    padding: 0;
  }

  section {
    width: 77%;
    max-width: 1140px;
    margin: auto;
    height: 100%;
    display: grid;
    grid-template-columns: 25.2% 52.57% 22.04%;
    grid-template-areas:
      "a b c"
      "d b e";
    align-content: space-between;
    justify-content: space-between;

    @media screen and (max-width: 1280px) {
      width: 90%;
    }

    @media screen and (max-width: 785px) {
      grid-template-columns: 2fr 1fr;
      grid-template-areas:
        "a c"
        "b e"
        "d e";
    }

    @media screen and (max-width: 600px) {
      height: 54.6rem;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
    }
  }

  .footer-logo {
    grid-area: a;
  }

  .footer-nav {
    grid-area: b;

    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 31.5rem;

    @media screen and (max-width: 785px) {
      flex-direction: row;
    }

    @media screen and (max-width: 600px) {
      height: auto;
      flex-direction: column;
      align-items: center;
    }

    li {
      position: relative;
      :hover {
        a {
          ::after {
            content: "";
            width: 0;
            height: 0.2rem;
            background: linear-gradient(to right, #5a77ff, #bc7198, #ffc593);
            bottom: 0;
            left: 0;
            position: absolute;
            z-index: 100;
          }

          :hover::after {
            width: 100%;
          }
        }
      }
      @media screen and (max-width: 600px) {
        padding-bottom: 1.4rem;
      }
    }

    a {
      color: #fff;
      font-size: 1.4rem;
    }
  }

  .footer-invite {
    grid-area: c;
  }

  .footer-copy {
    grid-area: e;
    color: #fff;
    display: flex;
    align-items: flex-end;
    /* justify-content: end; */
  }
`;
