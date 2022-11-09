import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { StyledHeader, Logo } from "./Styles/Header.styled";
import NavButton from "./NavButton";
import { useState } from "react";

function Header({ handleInviteBtnClick }) {
  const [navBtnCliked, setNavBtnClicked] = useState(false);

  const handleClick = () => {
    setNavBtnClicked(!navBtnCliked);
    console.log(navBtnCliked);
  };

  return (
    <StyledHeader className="header">
      <div className="header-content">
        <Link to="/">
          <Logo src="./assets/shared/logo.svg" />
        </Link>
        <Navbar
          clicked={navBtnCliked}
          handleInviteBtnClick={handleInviteBtnClick}
        />

        <NavButton handleClick={handleClick} clicked={navBtnCliked} />
      </div>
    </StyledHeader>
  );
}

export default Header;
