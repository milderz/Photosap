import styled from "styled-components";

export const StyledInviteLink = styled.a`
  color: ${({ theme, version }) => (version === "primary" ? "#fff" : "#000")};
  font-size: 1.4rem;
  letter-spacing: 0.19em;
  font-weight: 600;
  display: flex;
  align-items: center;
  min-width: 26ch;
  position: relative;

  ::after {
    content: "";
    width: 0;
    height: 0.1rem;
    background: linear-gradient(to right, #5a77ff, #bc7198, #ffc593);
    bottom: 0;
    left: 0;
    position: absolute;
    z-index: 100;
    transition: width 0.4s ease;
  }

  :hover::after {
    width: 13.6rem;
  }

  svg {
    margin: 0 0 0 1.8rem;
  }
`;
