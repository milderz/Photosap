import styled from "styled-components";

export const StyledStoryCard = styled.div`
  height: 50rem;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)),
    url("${({ image }) => image}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  position: relative;
  transition: all 0.4s ease;

  h4 {
    color: #fff;
    font-size: 1.8rem;
  }

  p {
    color: #fff;
    font-size: 1.4rem;
  }

  .divider {
    height: 0.1rem;
    width: 100%;
    background: #fff;
    margin: 2rem 0;
  }

  a {
    display: flex;
    justify-content: space-between;
    p {
      font-size: 1.4rem;
      letter-spacing: 0.04em;
    }
  }

  ::after {
    content: "";
    width: 0;
    height: 0.7rem;
    background: linear-gradient(to right, #5a77ff, #bc7198, #ffc593);
    top: 0;
    left: 0;
    position: absolute;
    z-index: 100;
    transition: width 0.4s ease;
  }

  :hover::after {
    width: 100%;
  }

  :hover {
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)),
      url("${({ image }) => image}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;
