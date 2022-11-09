import styled from "styled-components";

export const StyledInviteForm = styled.form`
  display: ${({ formActive }) => (!formActive ? "none" : "flex")};
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #fff;
  width: 40rem;
  height: 40rem;
  transform: translate(-50%, -50%);
  z-index: 99;
  border-radius: 0.5rem;
  padding: 5.6rem 4rem 4rem 4rem;

  flex-direction: column;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

  h4 {
    font-size: 2.2rem;
    text-align: center;
  }

  .input-container {
    width: 100%;
  }

  input {
    width: 100%;
    height: 3.9rem;
    font-size: 1.4rem;

    border: none;
    border-radius: 0.5rem;
    margin: 2rem 0;
    padding-left: 1rem;
    display: flex;
    background-color: #d2d2d2;

    ::placeholder {
      font-size: 1.4rem;
      font-weight: 500;
    }

    :focus {
      outline-style: solid;
      outline-color: #5a77ff;
      outline-width: 0.2rem;
    }
  }

  .send-invite {
    width: 100%;
    height: 4rem;
    border: none;
    background-color: #000;
    color: #fff;
    font-size: 1.2rem;
    letter-spacing: 0.19em;
    font-weight: 600;
    border: 0.2rem solid transparent;
    transition: all 0.4s ease;
    cursor: pointer;

    :hover {
      background-color: #fff;
      color: #000;
      border: 0.2rem solid #000;
    }
  }

  .form-sent-message {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: fadeIn 1s ease;

    p {
      text-align: center;
      font-size: 1.6rem;

      span {
        font-weight: 700;
      }
    }

    svg {
      height: 4rem;
      margin: 2rem 0;

      path {
        fill: #5a77ff;
      }
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .close-modal {
    position: absolute;
    top: 2rem;
    right: 2rem;
    background: none;
    border: none;
    cursor: pointer;

    svg {
      height: 2.8rem;
    }
  }
`;
