import styled from "styled-components";

export const StyledBanner = styled.section`
  height: 25rem;
  background: url("/assets/features/bg-beta.jpg");
  background-position: center;
  background-size: cover;
  position: relative;

  .container {
    width: 84%;
    max-width: 1140px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    @media screen and (max-width: 570px) {
      flex-direction: column;
      justify-content: space-around;
    }

    h2 {
      color: #fff;
      font-size: 4rem;
      width: 15ch;
      line-height: 1.125;

      @media screen and (max-width: 768px) {
        font-size: 3.2rem;
      }

      @media screen and (max-width: 570px) {
        text-align: center;
        font-size: 2.6rem;
        width: auto;
      }
    }

    .gradient-line {
      position: absolute;
      top: 0;
      left: 0;
      background: linear-gradient(#5a77ff, #bc7198, #ffc593);
      width: 0.6rem;
      height: 100%;

      @media screen and (max-width: 570px) {
        width: 100%;
        height: 0.6rem;
        background: linear-gradient(to right, #5a77ff, #bc7198, #ffc593);
      }
    }
  }
`;
