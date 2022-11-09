import styled from "styled-components";

export const StyledStoriesHero = styled.section`
  position: relative;
  .container {
    width: 84%;
    margin: auto;
    z-index: 1;
    max-width: 1140px;
  }

  height: 65rem;
  background: url("/assets/stories/pic0-moon-of-appalacia.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;

  .last-month {
    font-size: 1.2rem;
    letter-spacing: 0.19em;
  }

  .title {
    font-size: 4rem;
    width: 15ch;
    line-height: 1.2;
    padding: 2rem 0;

    @media screen and (max-width: 500px) {
      font-size: 3.2rem;
    }
  }

  .published {
    font-size: 1.4rem;
  }

  .main-text {
    font-size: 1.4rem;
    width: 53ch;
    padding: 2rem 0;

    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }

  a:hover {
  }

  .stories-effect {
    opacity: ${({ effect }) => (!effect ? "0" : "1")};
    z-index: 0;
    position: absolute;
    bottom: 0;
    left: -10%;
    width: 720px;
    height: 650px;
    transition: all 1s ease;
    background-image: radial-gradient(
      circle 650px at 0 650px,
      #ffc593,
      rgba(188, 113, 152, 0.5),
      rgba(90, 119, 255, 0)
    );
  }
`;
