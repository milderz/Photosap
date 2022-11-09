import styled from "styled-components";

export const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;

    li {
      margin: 0 2rem;
      position: relative;
      a {
        color: ${({ theme }) => theme.colors.black};
        font-size: 1.2rem;
        letter-spacing: 0.19em;
        font-weight: 600;

        ::after {
          content: "";
          width: 100%;
          height: 0.2rem;
          background: linear-gradient(to right, #5a77ff, #bc7198, #ffc593);
          bottom: 0;
          left: 0;
          position: absolute;
          z-index: 100;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        :hover::after {
          opacity: 1;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 10.2rem;
    left: 50%;
    height: 40rem;
    background-color: #fff;
    width: 80%;
    transform: translateX(-50%);
    z-index: 99;
    padding: 4rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;

    opacity: ${({ clicked }) => (clicked ? "1" : "0")};
    visibility: ${({ clicked }) => (clicked ? "visible" : "hidden")};
    transition: opacity 0.4s ease;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;

    ul {
      height: 100%;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
  }
`;
