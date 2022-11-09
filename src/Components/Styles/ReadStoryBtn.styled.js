import styled from "styled-components";

export const StyledReadStoryBtn = styled.a`
  display: flex;
  justify-content: ${({ version }) =>
    version === "primary" ? "space-between" : "flex-start"};
  p {
    color: #fff;
    font-size: 1.2rem;
    letter-spacing: 0.19em;
    padding-right: ${({ version }) => (version === "primary" ? "0" : "2.4rem")};
  }
`;
