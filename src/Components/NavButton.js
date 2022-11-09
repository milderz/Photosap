import { StyledNavButton } from "./Styles/NavButton.styled";

function NavButton({ handleClick, clicked }) {
  return (
    <StyledNavButton onClick={handleClick} clicked={clicked}>
      <div className={`hamburger ${clicked && "is-active"}`} id="hamburger-1">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </StyledNavButton>
  );
}

export default NavButton;
